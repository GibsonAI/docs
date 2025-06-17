---
title: GibsonAI CLI Usage Examples
subtitle: Use the GibsonAI CLI to manage GibsonAI directly from the terminal
enableTableOfContents: true
updatedOn: '2025-06-16T16:54:40.491Z'
---

## Building a Project End-to-End Using AI

1. Go to [app.gibsonai.com](https://app.gibsonai.com)
2. Chat with GibsonAI and create a new project.
3. Once complete, GibsonAI will email you the API key.
4. Configure the API key:

   ```bash
   gibson conf api::key [API key]
   ```

5. Import your project:

   ```bash
   gibson import api
   ```

✨ Magic, right?

---

## Integrating a Model into Your Code

GibsonAI creates base-level SQLAlchemy models. To integrate them just do this:

```python
from my_project.gibsonai.model.Module import ModuleBase

class MyModule(ModuleBase):
    pass
```

When you need to add custom business logic to the model, just modify your version of the model:

```python
from my_project.gibsonai.model.Module import ModuleBase

class MyModule(ModuleBase):
    def my_custom_business_logic(self):
        return 1 + 1
```

> We strongly suggest you do not refer to the base level SQLAlchemy models directly. By sub-classing you won't have to refactor your code if you decide to add custom code.

---

## Integrating a Schema into Your Code

Currently, refer to the base-level schema directly.

---

## Migrating Your Software from PHP to Python

1. Configure your datastore:

   ```bash
   gibson conf datastore::uri mysql+pymysql://[user]:[password]@[host]/[database name]
   ```

2. Turn on Dev Mode:

   ```bash
   gibson dev on
   ```

3. Import your MySQL schema:

   ```bash
   gibson import mysql
   ```

Well done! 70% of your code is written automatically. Customize the rest!

---

## Asking GibsonAI Questions With Context

Use natural language queries:

```bash
gibson q [natural language request]
```

You can reference:

- Files: `file://[full path]`
- Python modules: `py://[import]`
- SQL entities: `sql://[entity name]`

### Examples

```bash
gibson q format file:///Users/me/file.py for PEP8
```

```bash
gibson q code review py://user.modules.User
```

```bash
gibson q add nickname to sql://user
```

Using `sql://` enables GibsonAI to:
- Create new entities
- Store them in `last` memory
- Let you generate models/schemas instantly

```bash
gibson code model user
```


<NeedHelp/>
