import fs from 'fs'
import path from 'path'

const packageJsonPath = path.resolve(process.cwd(), 'package.json')
const versionTsPath = path.resolve(process.cwd(), 'src/version.ts')

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
const version = packageJson.version

const content = `export const version = '${version}'
`

fs.writeFileSync(versionTsPath, content)

