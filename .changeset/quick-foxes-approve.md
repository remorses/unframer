---
'unframer': minor
---

Add browser authorization for MCP server API mode. You no longer need to create a Framer API key by hand. Pass a project URL, click **Approve** on framer.com, and the CLI saves an API key for that project:

```sh
npx unframer mcp login --project "https://framer.com/projects/My-Site--abc123"
npx unframer mcp getProjectXml --project "https://framer.com/projects/My-Site--abc123"
```

If you already have a key, pass it with `--api-key`, on `mcp login` or on any `mcp` command:

```sh
npx unframer mcp login --project "https://framer.com/projects/My-Site--abc123" --api-key fr_xxx
npx unframer mcp getProjectXml --project "https://framer.com/projects/My-Site--abc123" --api-key fr_xxx
```

API keys are now saved **per project**, so you can switch between projects with `--project` and no new login. In agents and non-interactive shells, `mcp login` waits for approval in a background process and returns at once. Keys saved with the old single-key config are no longer read, so run `mcp login --project` again.
