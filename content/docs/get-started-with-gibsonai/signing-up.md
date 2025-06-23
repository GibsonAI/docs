---
title: Getting started with GibsonAI
subtitle: Sign up for free and learn the basics of working with GibsonAI
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/console/
updatedOn: '2025-04-29T12:43:26.180Z'
---

<InfoBlock>
<DocsList title="What you will learn:">
<p>How to create a new database project in the GibsonAI App</p>
<p>Design a database schema with a prompt</p>
<p>Deploy your schema</p>
<p>Make a schema change and view auto-generated API Docs</p>
</DocsList>
</InfoBlock>

This tutorial walks you through creating your first database schema, exploring your project visually, deploying it, and accessing your auto-generated APIs.

<Steps>

## Sign Up

1. Visit [https://app.gibsonai.com/](https://app.gibsonai.com/)
2. Click **Sign up**
3. You can use your Google account or email to create an account
4. Once you’re in, you’ll be taken to the GibsonAI app dashboard

---

## Create a New Project with a Prompt

GibsonAI uses prompts to help you define your database schema without writing SQL.

1. Type your schema idea in plain English. For example:

    > “Create a schema with users, destinations, bookings, and reviews. Each user can make bookings and leave reviews. Each destination has a name, description, price, and rating.”
    >
2. Click **Generate Schema**

    GibsonAI will create your schema instantly using the prompt you entered.

---

## Explore the Schema Diagram

Once your schema is generated, click the **Diagram** tab.

- You’ll see all your tables, relationships, and keys laid out visually with Entity-Relationship Diagram (ERD)
- This helps you understand how your schema is structured
- Click on any table to view details and relationships

---

## Deploy Your Schema to a Database

Now it's time to deploy your schema to a real database.

1. Click the **Deploy** button (top right)
2. Choose whether to deploy to **Development** or **Production**
3. If you’re on the Free plan, only Production is available by default
4. Gibson will provision a real serverless database, provides connection details and generates ready to use Data API for CRUD operations.

> Currently, GibsonAI supports MySQL database deployment. You can also connect to your existing MySQL database to import existing schemas.
>

---

## View Your Auto-Generated API Docs

After deployment, click the **API docs** tab.

Here, you’ll see:

- All your endpoints
- Query parameters, response formats, and example payloads
- Ready-to-use endpoints for testing and integrating with your app
- Playground to test API requests

Now test your API directly in the API Docs playground, using cURL commands or connect it to Postman. Also, you can copy code snippets for different programming languages to add into your frontend or backend code, or integrate with low-code solutions like Retool. No need to write REST controllers for typical CRUD operations.

## Make a Schema Change

GibsonAI supports **schema evolution** with **automatic migrations**.

Let’s say you want to add an `address` column to the `user` table.

1. Open the prompt bar
2. Type:

    > “Add an address column to the user table”
    >
3. GibsonAI updates the schema and shows the diff

Gibson will automatically:

- Generate the migration
- Update your schema history
- Keep your API updated

Then redeploy your project to apply the changes in your database and live API.

</Steps>

<NeedHelp/>
