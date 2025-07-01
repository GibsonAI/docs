---
title: How to convert Images, PDF, Excel sheets, or JSON to a relational database with AI
subtitle: Learn how to create a database from any source, like images, Excel spreadsheets, or JSON data, using GitHub Copilot and GibsonAI.
enableTableOfContents: true
author: boburmirzo
updatedOn: '2025-06-29T16:06:46.399Z'
---

Creating a database usually means defining a database schema, setting up a database server, and writing SQL commands/queries. But what if you could skip all that?

Recently, I needed to recreate a new database from an old ER diagram in PNG format. Instead of writing everything manually in SQL, I tried something faster — using **GitHub Copilot** inside **VS Code**, along with [**GibsonAI**](https://www.gibsonai.com/) to validate and deploy it. It worked surprisingly well. So, AI is not only hyping topic but it helps in certain tasks. Let me show you how to achieve this.

Here’s a short demo showing the process:

![Convert Everything to a Database](/docs/guides/create-database-from-any-er-diagram-image/GibsonAI_Convert_everything_to_DB.gif)

<Admonition type="info">
This GIF shows how you can go from a simple diagram or screenshot to a working, deployed database using just prompts and AI tools.
</Admonition>

## Why Databases Still Slow Us Down

Many developers want to launch new apps, build MVPs, or add features to an existing product. But they hit friction when it comes to databases.

It doesn’t matter which language or framework you’re using — eventually, you’ll need a working data backend. And that’s where time gets lost:

- Setting up the database and designing a schema
- Adjusting the schema as your app changes
- Manually building APIs and ORMs
- No clean way to spin up test environments with real data
- Worrying about migrations and breaking changes

## A New Workflow Using AI Tools

In 2025, AI Agents can [create and modify databases on their own](https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems). Now let's see how AI tools solve the following developer challenges, and we can build apps faster:

| Challenge | Solution with AI |
| --- | --- |
| "I don’t want to spend hours setting up DB & APIs" | One prompt → working backend & API |
| "My data model keeps changing as I test ideas" | Schema evolution handled automatically and generate mapping data models |
| "I want to connect my app quickly to my data" | Apps can use live APIs with no extra infra.  |
| "I need a testable environment with live data" | Hosted database with built-in seed and test data options |
| "I don’t want to manage migrations or versioning" | AI handles that under the hood |

AI still is NOT replacing us or software developers, but it is removing friction. You still make the decisions about your schema and relationships. You still write the logic. But you don’t waste time repeating boilerplate steps.

Next, I will show you how I converted an existing ER diagram image to a really working database. I believe you can use the same approach with other data formats.

## Convert an ER Diagram Image into a Working Database Using GibsonAI, GitHub Copilot in VS Code

### Step 1: Get an ER Diagram

If you already have an ER diagram as a `.png`, you're good to go.

If not, you can use tools like [drawdb.app](https://drawsql.app/templates) to find templates for common use cases (like eCommerce, HR systems, or SaaS apps). You can quickly edit the schema, then export it as a PNG, JSON, or raw SQL. For example, let's use this [music streaming app database diagram template](https://drawsql.app/templates/koel) in the demo.

That way, you don’t even need to design the schema from scratch — just adapt an existing one.

### Step 2: Enable MCP Server in VS Code

What You Need

- VS Code (with [GitHub Copilot enabled](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot))
- [UV](https://docs.astral.sh/uv/) is installed.
- [GibsonAI](https://www.gibsonai.com/) -Sign up for a free account
    
    > This tool turns your prompt into a complete schema, deploys serverless database and gives you a live REST API for managing data.

### Step 3: Set Up GibsonAI CLI and Log In

Before using the GibsonAI [MCP server](https://github.com/GibsonAI/mcp), install [GibsonAI’s CLI](https://docs.gibsonai.com/reference/cli-quickstart) and log in:

```bash
uvx --from gibson-cli@latest gibson auth login
```

This logs you into your GibsonAI account so you can start using all CLI features.

### Step 4: Enable MCP Server in VS Code

To use the GibsonAI MCP server inside your VS Code project, you’ll need to add a configuration script. Create a file called `mcp.json` inside an empty `.vscode/`folder. This file defines which GibsonAI MCP server to use for this project.

Copy and paste the following content into the `.vscode/mcp.json` file:

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

> You can also use GibsonAI MCP server with such as **Cursor**, **Claude Desktop, Cline, and Windsurf**. See the the [instructions for other tools](https://docs.gibsonai.com/ai/connect-mcp-clients-to-gibsonai).
> 

### Step 5: Describe the diagram in a GitHub Copilot chat prompt

Open your ER diagram (or PNG file) in VS Code in the same VS Code project. Open GitHub Copilot Chat in VS Code, [switch to Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode), and select the LLM model, such as GPT-4.1 or GPT-4o. You should see the available tools from GibsonAI.

![See the available tools from GibsonAI](/docs/guides/create-database-from-any-er-diagram-image/GibsonAI_MCP_Tools_in_GitHub_Copilot.png)

 Write a prompt like:

```json
Create a new GibsonAI database from this ER diagram
```

GitHub Copilot reads the comment and starts calling the relevant GibsonAI MCP server tools.  

![Create a new GibsonAI database from this ER diagram](/docs/guides/create-database-from-any-er-diagram-image/Describe_diagram_in_GitHub_Copilot_chat_prompt.png)

### Step 6: Inspect Your Database Schema in the GibsonAI Dashboard

After the prompt runs successfully, go and inspect your new schema in the GibsonAI [dashboard](http://app.gibsonai.com/). You’ll see everything laid out — tables, columns, relationships — just like in your diagram, with additional improvement, but now fully working and hosted.

![Inspect Your Database Schema in the GibsonAI Dashboard](/docs/guides/create-database-from-any-er-diagram-image/Inspect_Your_Database_Schema_GibsonAI_Dashboard.png)

From there, you can continue evolving your schema:

- Prompt more to customize the schema using natural language. Or switch to writing **real SQL queries** if you prefer — **Studio** let you write and run queries directly in your browser. You’ll also see a live ERD diagram update with every change you make.

## Wrap-up

This workflow showed conversion from image → database schema → live serverless relational MySQL database. It all took **minutes**.