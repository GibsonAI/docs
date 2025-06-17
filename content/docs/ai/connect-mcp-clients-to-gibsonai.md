---
title: Connect MCP Clients to GibsonAI
subtitle: Learn how to connect MCP clients such as Cursor, Claude Desktop, Cline,
  and Windsurf to GibsonAI MCP Server.
enableTableOfContents: true
updatedOn: '2025-06-16T08:19:38.922Z'
---

The **GibsonAI MCP Server** allows you to connect various [**Model Context Protocol (MCP)**](https://modelcontextprotocol.org) compatible AI tools to GibsonAI.

This guide covers the setup for the following MCP Clients:

- [Cursor](#cursor-setup)
- [Windsurf](#windsurf-setup)
- [Claude Desktop](#claude-desktop-setup)
- [VS Code + GitHub Copilot Setup](#vs-code-github-copilot-setup)
- [Cline (VS Code Extension)](#cline-vs-code-extension-setup)

## Prerequisites

- A [GibsonAI account](https://app.gibsonai.com/signup).
- [UV](https://docs.astral.sh/uv/) installed.

## Authentication

You'll need to ensure you're logged in to the Gibson CLI before the MCP server will work.

```bash
uvx --from gibson-cli@latest gibson auth login
```

## Cursor Setup

1. Go to `Cursor` → `Settings` → `Cursor Settings` → `MCP Tools`. 
2. Click `New MCP Server`. 
3. Update the configuration to include the following:

```json
{
  "mcpServers": {
    "gibson": {
      "command": "uvx",
      "args": ["--from", "gibson-cli@latest", "gibson", "mcp", "run"]
    }
  }
}
```

## Windsurf Setup

1. Go to `Windsurf` → `Settings` → `Windsurf Settings` → `Cascade`. 
2. Click `Add server` in the `Model Context Protocol (MCP) Servers` section.
3. In the modal, click `Add custom server`.
4. Update the configuration to include the following:

```json
{
  "mcpServers": {
    "gibson": {
      "command": "uvx",
      "args": ["--from", "gibson-cli@latest", "gibson", "mcp", "run"]
    }
  }
}
```

5. Open the `Cascade` chat and, if necessary, refresh the MCP servers.

## Claude Desktop Setup

1. Go to `Claude` → `Settings` → `Developer`.
2. Click `Edit Config`.
3. Open the `claude_desktop_config.json` file. 
4. Update the configuration to include the following:

```json
{
  "mcpServers": {
    "gibson": {
      "command": "uvx",
      "args": ["--from", "gibson-cli@latest", "gibson", "mcp", "run"]
    }
  }
}
```

## Claude Code Setup

```sh
claude mcp add gibson -- uvx --from gibson-cli@latest gibson mcp run
```

```sh
claude mcp get gibson
```

```txt
gibson:
  Scope: Local (private to you in this project)
  Type: stdio
  Command: uvx
  Args: --from gibson-cli@latest gibson mcp run
  Environment:

To remove this server, run: claude mcp remove "gibson" -s local
```

## VS Code + GitHub Copilot Setup

1. Create or open the `.vscode/mcp.json` file.
2. Update the configuration to include the following:

```json
{
  "inputs": [],
  "servers": {
    "gibson": {
      "type": "stdio",
      "command": "uvx",
      "args": ["--from", "gibson-cli@latest", "gibson", "mcp", "run"]
    }
  }
}
```

See the official [GitHub Copilot MCP docs](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp#configuring-mcp-servers-in-visual-studio-code) for more information.

## Cline (VS Code Extension) Setup

1. Open **Cline** in VS Code:  
   Go to **Sidebar → Cline icon**.

2. To configure MCP Servers in Cline, you need to modify the `cline_mcp_settings.json` file. Click the **MCP Servers** icon → go to **Installed** → click **Configure MCP Servers** to open the configuration file.

3. Add the following `gibson` server entry inside the `mcpServers` object:

```json
{
  "mcpServers": {
    "gibson": {
      "command": "uvx",
      "args": ["--from", "gibson-cli@latest", "gibson", "mcp", "run"]
    }
  }
}
```
See the [Claude Desktop MCP docs](https://modelcontextprotocol.io/quickstart/user) for more information.

<NeedHelp/>
