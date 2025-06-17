---
title: Key Concepts and Commands
subtitle: Use the GibsonAI CLI to manage GibsonAI directly from the terminal
enableTableOfContents: true
updatedOn: '2025-01-29T23:50:53.963Z'
---

## Key Terms

- **Dev Mode**  
  Turn dev mode on to have GibsonAI write code for you as you execute commands.

- **Entity / Entities**  
  Synonymous with a table name or data structure.

- **Memory**  
  - `stored`: long-term memory  
  - `last`: memory of the most recent action taken

- **Merge**  
  Merge the entities in the `last` memory into the `stored` memory.

---

## Memory Concepts

GibsonAI CLI maintains two types of memory:

- **Stored (long term)**  
  Contains your stable database schema. When you import a datastore or API project, the schema and all entities go here.

- **Last (short term)**  
  Holds new or modified entities from recent CLI commands. Preferred first when performing coding tasks.

### Example Flow

```bash
gibson modify user I want to add nickname
```

Creates a new `user` table with a `nickname` column in `last` memory.

```bash
gibson code models
```

Writes code based on what’s in `last` memory.

To discard last changes:

```bash
gibson forget last
```

To make changes permanent:

```bash
gibson merge
```

To rebuild the datastore with all stored entities:

```bash
gibson build datastore
```

> `build` will **drop all existing tables** and recreate the database from scratch.

---

## Configuration Files and Caches

All files are located at:

```bash
$HOME/.gibsonai
```

- Update configuration:

  ```bash
  gibson conf
  ```

- Clear caches:

  ```bash
  gibson forget
  ```

---

## API Key Configuration

```bash
gibson conf api::key [API key]
```

---

## Datastore Configuration

Currently supported: **MySQL**

```bash
gibson conf datastore::uri mysql+pymysql://[user]:[password]@[host]/[database name]
```

---

## Turning On Dev Mode

We suggest keeping dev mode enabled to let GibsonAI write code automatically.

```bash
gibson dev on
```

You’ll be prompted to set paths for:

- `base`: base-level code
- `model`: SQLAlchemy models
- `schema`: Pydantic schemas

---

## Importing Your Datastore

```bash
gibson import mysql
```

Also available:

```bash
gibson import pg_dump /path/to/pg_dump.sql
gibson import openapi /path/to/openapi.json
```

---

## Configuring a Custom BaseModel

Example:

```bash
gibson conf code::custom::model::class MyBaseModel
gibson conf code::custom::path project.model.MyBaseModel
```

---

## Code Generation Commands

- Write base code:
  ```bash
  gibson code base
  ```

- Single model:
  ```bash
  gibson code model [entity name]
  ```

- Single schema:
  ```bash
  gibson code schema [entity name]
  ```

- All models:
  ```bash
  gibson code models
  ```

- All schemas:
  ```bash
  gibson code schemas
  ```

---

## Adding a New Module Using AI

```bash
gibson module [module name]
gibson code models
gibson merge
```

> Note: GibsonAI does not yet build the tables into your datastore.

---

## Modifying Software Using AI

```bash
gibson modify [entity name] [natural language request]
```

Example:

```bash
gibson modify my_table I want to add a new column called name and remove all of the columns related to email
```

Then:

```bash
gibson code models
gibson merge
```

> Note: Changes are not built into your datastore automatically.

---

## Forgetting Things from Memory

- Forget stored:
  ```bash
  gibson forget stored
  ```

- Forget last:
  ```bash
  gibson forget last
  ```

- Forget all:
  ```bash
  gibson forget all
  ```

---

## Build Datastore from Stored Memory

```bash
gibson build
```

---

## Show Stored Entity

```bash
gibson show [entity name]
```
