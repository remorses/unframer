import { exec, spawn } from 'child_process'
import { promisify } from 'util'
import { logger, spinner } from './utils.js'

const execAsync = promisify(exec)

export async function getPackageManager(
  targetDir: string,
  { withFallback }: { withFallback?: boolean } = {
    withFallback: false,
  }
): Promise<"yarn" | "pnpm" | "bun" | "npm" | "deno"> {
  const { detect } = await import("@antfu/ni")
  const packageManager = await detect({ programmatic: true, cwd: targetDir })

  if (packageManager === "yarn@berry") return "yarn"
  if (packageManager === "pnpm@6") return "pnpm"
  if (packageManager === "bun") return "bun"
  if (packageManager === "deno") return "deno"
  if (!withFallback) {
    return packageManager ?? "npm"
  }

  // Fallback to user agent if not detected.
  const userAgent = process.env.npm_config_user_agent || ""

  if (userAgent.startsWith("yarn")) {
    return "yarn"
  }

  if (userAgent.startsWith("pnpm")) {
    return "pnpm"
  }

  if (userAgent.startsWith("bun")) {
    return "bun"
  }

  return "npm"
}

export async function getPackageRunner(cwd: string) {
  const packageManager = await getPackageManager(cwd)

  if (packageManager === "pnpm") return "pnpm dlx"
  if (packageManager === "bun") return "bunx"
  return "npx"
}

export async function installPackage({
  packageName,
  cwd,
  isDev = false
}: {
  packageName: string
  cwd: string
  isDev?: boolean
}): Promise<{ success: boolean; error?: string }> {
  try {
    const packageManager = await getPackageManager(cwd, { withFallback: true })
    
    let installCommand: string
    const devFlag = isDev ? (packageManager === 'npm' ? '--save-dev' : '-D') : ''
    
    switch (packageManager) {
      case 'npm':
        installCommand = `npm install ${packageName} ${devFlag}`.trim()
        break
      case 'yarn':
        installCommand = `yarn add ${packageName} ${devFlag}`.trim()
        break
      case 'pnpm':
        installCommand = `pnpm add ${packageName} ${devFlag}`.trim()
        break
      case 'bun':
        installCommand = `bun add ${packageName} ${devFlag}`.trim()
        break
      case 'deno':
        // Deno doesn't have a traditional install command
        return { success: false, error: 'Deno package management not supported for auto-install' }
      default:
        installCommand = `npm install ${packageName} ${devFlag}`.trim()
    }

    logger.log(`Installing ${packageName} using: ${installCommand}`)
    spinner.start(`Installing ${packageName}...`)
    
    const { stdout, stderr } = await execAsync(installCommand, { cwd })
    
    spinner.info(`Successfully installed ${packageName}`)
    logger.log(`Install output: ${stdout}`)
    
    return { success: true }
  } catch (error: any) {
    const errorMessage = error.stderr || error.message || 'Unknown error'
    spinner.error(`Failed to install ${packageName}: ${errorMessage}`)
    logger.error(`Install error: ${errorMessage}`)
    
    return { success: false, error: errorMessage }
  }
}

export async function installPackagesBatch({
  packageNames,
  cwd,
  isDev = false
}: {
  packageNames: string[]
  cwd: string
  isDev?: boolean
}): Promise<{ success: boolean; error?: string }> {
  if (packageNames.length === 0) {
    return { success: true }
  }

  try {
    const packageManager = await getPackageManager(cwd, { withFallback: true })
    
    let installCommand: string
    const devFlag = isDev ? (packageManager === 'npm' ? '--save-dev' : '-D') : ''
    const packagesStr = packageNames.join(' ')
    
    switch (packageManager) {
      case 'npm':
        installCommand = `npm install ${packagesStr} ${devFlag}`.trim()
        break
      case 'yarn':
        installCommand = `yarn add ${packagesStr} ${devFlag}`.trim()
        break
      case 'pnpm':
        installCommand = `pnpm add ${packagesStr} ${devFlag}`.trim()
        break
      case 'bun':
        installCommand = `bun add ${packagesStr} ${devFlag}`.trim()
        break
      case 'deno':
        return { success: false, error: 'Deno package management not supported for auto-install' }
      default:
        installCommand = `npm install ${packagesStr} ${devFlag}`.trim()
    }

    logger.log(`Installing packages using: ${installCommand}`)
    spinner.start(`Installing packages: ${packagesStr}`)
    
    return new Promise((resolve) => {
      let command: string
      let args: string[]
      
      switch (packageManager) {
        case 'npm':
          command = 'npm'
          args = ['install', ...packageNames]
          if (devFlag) args.push(devFlag)
          break
        case 'yarn':
          command = 'yarn'
          args = ['add', ...packageNames]
          if (devFlag) args.push(devFlag)
          break
        case 'pnpm':
          command = 'pnpm'
          args = ['add', ...packageNames]
          if (devFlag) args.push(devFlag)
          break
        case 'bun':
          command = 'bun'
          args = ['add', ...packageNames]
          if (devFlag) args.push(devFlag)
          break
        default:
          command = 'npm'
          args = ['install', ...packageNames]
          if (devFlag) args.push(devFlag)
      }

      const child = spawn(command, args, { 
        cwd, 
        stdio: ['ignore', 'pipe', 'pipe']
      })

      let hasOutput = false

      child.stdout?.on('data', (data) => {
        hasOutput = true
        const lines = data.toString().split('\n').filter(line => line.trim())
        lines.forEach(line => {
          if (line.trim()) {
            spinner.update(`Installing: ${line.trim()}`)
          }
        })
      })

      child.stderr?.on('data', (data) => {
        hasOutput = true
        const lines = data.toString().split('\n').filter(line => line.trim())
        lines.forEach(line => {
          if (line.trim()) {
            spinner.update(`Installing: ${line.trim()}`)
          }
        })
      })

      child.on('close', (code) => {
        if (code === 0) {
          spinner.info(`Successfully installed packages: ${packagesStr}`)
          resolve({ success: true })
        } else {
          const errorMessage = `Installation failed with exit code ${code}`
          spinner.error(`Failed to install packages: ${errorMessage}`)
          resolve({ success: false, error: errorMessage })
        }
      })

      child.on('error', (error) => {
        const errorMessage = error.message || 'Unknown error'
        spinner.error(`Failed to install packages: ${errorMessage}`)
        resolve({ success: false, error: errorMessage })
      })
    })
  } catch (error: any) {
    const errorMessage = error.message || 'Unknown error'
    spinner.error(`Failed to install packages: ${errorMessage}`)
    return { success: false, error: errorMessage }
  }
}