import { exec, spawn } from 'child_process'
import { promisify } from 'util'
import { logger, spinner } from './utils.js'

const execAsync = promisify(exec)

export async function getPackageManager(targetDir?: string) {
    const { detect } = await import('@antfu/ni')
    const packageManager = await detect({ programmatic: true, cwd: targetDir })

    if (packageManager === 'yarn@berry') {
        return 'yarn'
    } else if (packageManager === 'pnpm@6' || packageManager === 'pnpm') {
        return 'pnpm'
    } else if (packageManager === 'bun') {
        return 'bun'
    } else if (packageManager === 'deno') {
        return 'deno'
    } else if (packageManager === 'npm' || packageManager === 'yarn') {
        return packageManager
    }

    const userAgent = process.env.npm_config_user_agent || ''

    if (userAgent.startsWith('yarn')) {
        return 'yarn'
    }

    if (userAgent.startsWith('pnpm')) {
        return 'pnpm'
    }

    if (userAgent.startsWith('bun')) {
        return 'bun'
    }

    return 'npm'
}

export async function installPackagesBatch({
    packageNames,
    cwd,
    isDev = false,
}: {
    packageNames: string[]
    cwd: string
    isDev?: boolean
}): Promise<{ success: boolean; error?: string }> {
    // Framer sometimes has links that point to !missing for some reason. bug in Framer
    packageNames = packageNames.filter((x) => x !== '!missing')
    if (packageNames.length === 0) {
        return { success: true }
    }

    try {
        const packageManager = await getPackageManager(cwd)

        const devFlag = isDev
            ? packageManager === 'npm'
                ? '--save-dev'
                : '-D'
            : ''
        const packagesStr = packageNames.join(' ')

        spinner.info(
            `Installing packages with ${packageManager}: ${packagesStr}`,
        )
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
                stdio: ['ignore', 'pipe', 'pipe'],
            })

            let hasOutput = false

            child.stdout?.on('data', (data) => {
                hasOutput = true
                const lines = data
                    .toString()
                    .split('\n')
                    .filter((line) => line.trim())
                lines.forEach((line) => {
                    if (line.trim()) {
                        spinner.update(`Installing: ${line.trim()}`)
                    }
                })
            })

            child.stderr?.on('data', (data) => {
                hasOutput = true
                const lines = data
                    .toString()
                    .split('\n')
                    .filter((line) => line.trim())
                lines.forEach((line) => {
                    if (line.trim()) {
                        spinner.update(`Installing: ${line.trim()}`)
                    }
                })
            })

            child.on('close', (code) => {
                if (code === 0) {
                    spinner.info(`Successfully installed packages`)
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
