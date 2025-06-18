---
title: GibsonAI CLI Quickstart
subtitle: Get started with the GibsonAI CLI in just a few steps
enableTableOfContents: true
updatedOn: '2025-06-16T16:54:40.492Z'
---

The GibsonAI CLI is a command-line interface that lets you manage GibsonAI directly from the terminal. This guide will help you quickly set up and start using the GibsonAI CLI.

<Steps>

## Install the CLI

Install the GibsonAI CLI:

<Tabs labels={["macOS"]}>

<TabItem>

**Install with [UV](https://docs.astral.sh/uv/) (recommended)**

```bash
uv tool install gibson-cli@latest
```

**Install with [pip](https://pip.pypa.io/en/stable/#)**

```shell
pip install gibson-cli --upgrade
```


</TabItem>

</Tabs>

Verify the installation by checking the CLI version:

```bash
gibson --version
```

For the latest version, refer to the [Gibson CLI GitHub repository](https://github.com/GibsonAI/cli)

## Run Gibson

Just execute `gibson`. This will set things up for you and open a browser window where you can authorize the CLI to access your GibsonAI account.

```bash
gibson
```

<Admonition type="note">
On some browsers like Safari, you may need to find a blocked popup and allow it after logging in.
</Admonition>

**Authentication**

Alternatively, you can authenticate with GibsonAI by running:

```bash
gibson auth login
```

## Configure Your API Key

After creating your project at [app.gibsonai.com](https://app.gibsonai.com), you'll receive an API key via email. Configure it:

```bash
gibson conf api::key [API key]
```

## Import Your Datastore or API Project

Depending on your source:

```bash
gibson import mysql
```

or

```bash
gibson import api
```

This will populate GibsonAI's stored memory with your schema and generate base code.

---

## Enable Dev Mode

Enable Dev Mode so GibsonAI can write code while you execute commands:

```bash
gibson dev on
```

---

## Build and Customize

Start modifying or building models using natural language:

```bash
gibson modify user I want to add a nickname column
gibson code models
gibson merge
```

You're now ready to build, test, and evolve your application with AI assistance!
</Steps>
