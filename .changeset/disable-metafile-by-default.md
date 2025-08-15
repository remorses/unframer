---
"unframer": minor
---

Disable automatic meta.json generation by default

The meta.json file is now only generated when the `--metafile` flag is passed to the CLI. This reduces unnecessary file generation for users who don't need build metadata.

Usage:
```bash
# Without meta.json (default)
npx unframer <projectId>

# With meta.json 
npx unframer <projectId> --metafile
```