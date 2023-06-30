import chokidar from 'chokidar'
import fs from 'fs'

const watcher = chokidar.watch('/Users/morse/.npm/_cacache/tmp/**', {})

watcher.on('all', (event, path) => {
    try {
        const content = fs.readFileSync(path, 'utf-8')
        console.log(event, path, '-', content.slice(0, 100))
    } catch {
        console.log(event, path)
    }
})
console.log('watching')
