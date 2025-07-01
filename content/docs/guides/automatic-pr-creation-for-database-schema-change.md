---
title: Automatic PR creation on GitHub for database schema change
subtitle: Learn how to update database schemas using prompts with GitHub Copilot and create GitHub pull requests with matching Python model classes.
enableTableOfContents: true
author: boburmirzo
updatedOn: '2025-07-01T16:06:46.399Z'
---

Updating a database schema as part of your development process often feels more complicated than it should be. If you’ve ever worked with tools like [SQLAlchemy](https://www.sqlalchemy.org/), [Alembic](https://pypi.org/project/alembic/), or [EF Core](https://learn.microsoft.com/en-us/ef/core/), you probably know the drill: you first update your model classes in code, then generate a migration file, and finally apply those changes to your database. It's not a terrible process—but it's slow, easy to mess up with the correct migration order, and repetitive. You constantly have to switch contexts: from writing model code, to terminal commands, to reviewing raw SQL.

Wouldn’t it be easier if you could just describe what you want in English and let your tools handle the rest?

Let’s say we’re working on a simple [travel agency database model](https://github.com/Boburmirzo/travel-agency-database-models). We already have a `user` table, and now we want to add an `address` column to store where each user lives. Instead of manually changing the SQL or model file, imagine simply typing:

> “Add an address field to the user table as a string”

And immediately, the model gets updated (e.g., `User` class in Python, Java, C#, or JavaScript, depending on the language you use), the SQL schema is regenerated, and a pull request is opened in your GitHub repo—complete with changes and documentation.

This is exactly what we’ll walk through using GitHub Copilot chat and GibsonAI, which automates schema changes, model generation, and PR creation.

You can try to see the generated sample PR on [this public repo](https://github.com/Boburmirzo/travel-agency-database-models/pull/1):

Here’s a short demo that shows the workflow in VS Code:

![GibsonAI and GitHub PRs.mp4](/docs/guides/automatic-pr-creation-for-database-schema-change/GibsonAI_and_GitHub_PR.gif)

## How the Database Schema to PR Agent Works

The solution uses [GibsonAI MCP Server](https://docs.gibsonai.com/ai/mcp-server) for database operations and GitHub CLI for repository management in GitHub Copilot chat.

Here’s what happens step by step:

1. **Describe your schema change**

    *Example: "Add an `address` column to the `user` table as a string"*

2. **GibsonAI applies the schema change**

    It updates the database schema using the correct SQL syntax.

3. **GitHub Copilot generates the Python model**

    Copilot clones the repository, opens a new branch and commits changed files behind the scenes. This includes Pydantic or SQLAlchemy files based on your stack, and respond from GibsonAI schema update to keep your code in sync with database changes.

4. **GitHub Copilot opens a GitHub Pull Request**

    You get a PR with the updated model, schema changes, and docs.

Let's see an example of how you can make database schema changes and automatically generate corresponding Python model classes with a GitHub PR.

## Step 1: Set Up Your Environment

You’ll need the following tools installed before you begin:

- Visual Studio Code with [GitHub Copilot enabled](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot#getting-access-to-copilot)
- [UV](https://docs.astral.sh/uv/) package manager installed
- [GitHub CLI](https://cli.github.com/) is installed to connect and manage your GitHub repositories from GitHub Copilot
- A GibsonAI account (free) to use the database MCP server

## Step 2: Install and Log In via CLI

Open your terminal and run:

```bash
uvx --from gibson-cli@latest gibson auth login
```

This logs you into the [GibsonAI CLI](https://docs.gibsonai.com/reference/cli-quickstart) so you can access all the features directly from your terminal and integrate it into your workflow.

## Step 3: Enable the MCP Server in VS Code

To use the schema assistant inside VS Code, create a `.vscode/` folder in your project and inside it, a file named `mcp.json`. This file tells VS Code which MCP server to run.

Paste the following configuration:

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

This setup launches the server locally and connects it with Copilot Chat. If you're using other tools like Cursor or Claude Desktop, you can configure them similarly.

## Step 4: Describe the Schema Change

Now, inside Copilot Chat, just say:

> “Add an address column to the user table as a string”
>

![Database schema change prompt using GitHub copilot in VS Code](/docs/guides/automatic-pr-creation-for-database-schema-change/database_schema_change_prompt.png)

Behind the scenes, this does four things:

1. Applies the schema change to a real (serverless) database using GibsonAI
2. Generates the updated Python model using Pydantic/SQLAlchemy
3. Prepares documentation for the changes
4. Opens a GitHub Pull Request in your connected repo

You can see an example of this in action:

🔗 [Pull Request Preview](https://github.com/Boburmirzo/travel-agency-database-models/pull/1)

![Sample pull request created using prompts](/docs/guides/automatic-pr-creation-for-database-schema-change/sample_pr_created_with_prompts.png)

## What Makes This Unique?

Compared to other AI coding assistants, this workflow goes much further:

- **Smart Migration Ordering**: It understands all dependencies and applies changes in the correct order (e.g., creating tables before adding constraints).
- **Schema Validation** *(coming soon)*: Ability to test the changes on a development database before finalizing them.
- **PR Comments with Schema Diff & ERD Diagrams** *(coming soon)*: Highlight changes visually, showing what’s being added/removed at the schema level.

## Final Thoughts

This approach doesn’t just speed up development — it reduces errors, saves time switching between tools, and brings schema evolution closer to how we already think and communicate as developers. Next time you want to update your database, try typing a prompt and feel free to leave your comments on [Discord](https://www.gibsonai.com/discord) if you find this AI-assistant workflow useful.

Let us know if you would be interested in having this feature in the GibsonAI App.
