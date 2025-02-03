import { execSync } from 'child_process';

let filename = process.argv[2];

filename = './src/framer.js'

if (!filename) {
    console.error("Error: invalid number of arguments.");
    console.error("Usage: ts-node size-history.tsx path/to/file");
    process.exit(1);
}

try {
    // Get all commit hashes for the file
    const commitHashes = execSync(`git log --format=%H ${filename}`)
        .toString()
        .trim()
        .split('\n');

    for (const commit of commitHashes) {
        // Get file size in bytes
        const fileSizeRaw = execSync(`git cat-file -s ${commit}:${filename}`)
            .toString()
            .trim();
        
        // Convert to megabytes
        const fileSizeMb = execSync(`echo "scale=2; ${fileSizeRaw}/1048576" | bc`)
            .toString()
            .trim() + 'M';
        
        // Get commit message and date
        const commitMsg = execSync(`git log -1 --format=%s ${commit}`)
            .toString()
            .trim();
        const commitDate = execSync(`git log -1 --format=%ai ${commit}`)
            .toString()
            .trim();
        
        // Print date, size, sha and message
        console.log(`${commitDate} ${fileSizeMb} ${commit.substring(0,7)} ${commitMsg}`);
    }
} catch (error) {
    console.error('Error:', error);
    process.exit(1);
}
