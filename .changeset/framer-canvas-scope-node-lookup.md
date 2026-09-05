---
'unframer': patch
---

Fix `unframer mcp updateXmlForNode` rejecting every edit on a page that is not open on the Framer canvas.

Framer only fully loads the **canvas root**, the page or component currently open. For every other page `framer.getNode(id)` returns `null` even though the node exists, so the MCP handler could not find the target node and answered:

```
No changes were made! Make sure you are not using made up attributes, follow the outlined attributes only.
```

Node lookup now falls back to a project wide `getNodesWithType` index, so attribute and text edits work on any page.

Structural writes (`setParent`, creating a node under a given parent) are also silently ignored by Framer outside the loaded scope. They are now verified after the fact and reported as real failures instead of a fake success:

```
Failed to process node xBDPav8IN: Framer did not move node xBDPav8IN into parent HAL0sllkT.
Framer can only restructure the page or component that is currently open on the canvas.
```

The "no changes" message is also accurate now. When every attribute already holds the requested value the tool says so, instead of blaming made up attribute names.
