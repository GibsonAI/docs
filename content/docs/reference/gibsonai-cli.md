---
title: GibsonAI CLI
subtitle: Use the GibsonAI CLI to manage GibsonAI directly from the terminal
enableTableOfContents: true
updatedOn: '2025-06-16T22:44:00.701Z'
---

The GibsonAI CLI is a command-line interface that lets you manage GibsonAI directly from the terminal. The CLI enables a complete workflow for designing, deploying, and managing your database, as well as code generation. Code generation currently includes SQLAlchemy models and pydantic validation schemas, as well as FastAPI endpoints if you choose to self-host your CRUD API.

🚀 Get set up in just a few steps with the [CLI Quickstart](/docs/reference/cli-quickstart).

## Install

### Prerequisites

GibsonAI currently works on projects that use Python 3.10 or greater, MySQL, SQLAlchemy, Pydantic, Alembic, FastAPI and pytest. It is capable of building a complete application, from database to API end points, using these frameworks.

<Tabs labels={["macOS", "Windows"]}>

<TabItem>

**Install with [UV](https://docs.astral.sh/uv/) (recommended)**

```bash
uv tool install gibson-cli@latest
```

**Install with [pip](https://pip.pypa.io/en/stable/#)**

```shell
pip install gibson-cli --upgrade
```

<Admonition title="Set PATH location for gibson" type="note">
 You'll want to run this **outside** of a virtual environment (globally on your machine). If you're unable to run gibson after installing with pip, ensure your PATH contains the directory where pip installs executables. This can differ based on your operating system, python installation location, and pip version.
</Admonition>

</TabItem>

<TabItem>

Make sure that you have an environment variable called `HOME` set. GibsonAI will store its configuration files and caches in this directory. We recommend you keep this directory outside of any repository to which you might be committing.

To execute the gibson command, follow the following instructions. Assuming the gibson command is in `c:\Users\[me]\projects\gibson\bin`, execute:

```shell
python c:\Users\[me]\projects\gibson\bin\gibson
```

**Editor Integration**

**Use with [vim](https://www.vim.org/)**

1. Make sure the gibson command is in your path by editing the PATH environment variable.
2. Edit ~/.vimrc.
3. Add the following:

```bash
:command! -nargs=* Gibson r ! gibson
```

4. Open a file and execute commands:

```bash
:Gibson module abc
:Gibson code models
:Gibson code schemas
```

</TabItem>

</Tabs>

## Synopsis

```bash
gibson --help

usage: gibson [command] [subcommand]
╭─────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────────────╮
│ command         │ description                                                                                                       │ subcommands                                                                            │ memory affected                             │
├─────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────────────┤
│ auth            │ authenticate with the gibson cli                                                                                  │ login | logout                                                                         │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ build           │ create the entities in the datastore                                                                              │ datastore                                                                              │ stored                                      │
│                 │                                                                                                                   │                                                                                        │                                             │
│ code            │ pair program with gibson                                                                                          │ api | base | entity | models | schemas | tests                                         │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ conf            │ set a configuration variable                                                                                      │                                                                                        │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ count           │ show the number of entities stored                                                                                │ last | stored                                                                          │ based on user selection                     │
│                 │                                                                                                                   │                                                                                        │                                             │
│ deploy          │ deploy the project database(s) with the current schema                                                            │                                                                                        │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ dev             │ gibson will automatically write code for you                                                                      │ on | off                                                                               │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ forget          │ delete entities from memory                                                                                       │ all | last | stored                                                                    │ based on user selection                     │
│                 │                                                                                                                   │                                                                                        │                                             │
│ help            │ for help                                                                                                          │                                                                                        │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ import          │ import entities from a datasource                                                                                 │ api | mysql | pg_dump | openapi                                                        │ stored                                      │
│                 │                                                                                                                   │                                                                                        │                                             │
│ list            │ see a list of your entities or projects                                                                           │ entities | projects                                                                    │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ mcp             │ allows tools like Cursor to interact with your gibson project                                                     │ run                                                                                    │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ merge           │ merge last memory (recent changes) into stored project memory                                                     │                                                                                        │ last -> stored                              │
│                 │                                                                                                                   │                                                                                        │                                             │
│ modify          │ change an entity using natural language                                                                           │                                                                                        │ last > stored                               │
│                 │                                                                                                                   │                                                                                        │                                             │
│ new             │ create something new                                                                                              │ project | module | entity                                                              │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ remove          │ remove an entity from the project                                                                                 │                                                                                        │ last > stored                               │
│                 │                                                                                                                   │                                                                                        │                                             │
│ rename          │ rename an entity                                                                                                  │ entity                                                                                 │ last > stored                               │
│                 │                                                                                                                   │                                                                                        │                                             │
│ rewrite         │ rewrite all code                                                                                                  │                                                                                        │ stored                                      │
│                 │                                                                                                                   │                                                                                        │                                             │
│ show            │ display an entity                                                                                                 │                                                                                        │ last > stored                               │
│                 │                                                                                                                   │                                                                                        │                                             │
│ studio          │ connect to your database and launch the SQL studio                                                                │                                                                                        │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ tree            │ illustrate the project layout in a tree view                                                                      │                                                                                        │                                             │
│                 │                                                                                                                   │                                                                                        │                                             │
│ q               │ ask gibson a question using natural language                                                                      │
```

## GitHub repository

The GitHub repository for the Gibson CLI is found [here](https://github.com/GibsonAI/cli).
