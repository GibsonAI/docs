---
title: Connecting GibsonAI to your stack
subtitle: Learn how to integrate GibsonAI into your application
enableTableOfContents: true
updatedOn: '2025-04-17T16:06:46.399Z'
---

Using GibsonAI as the serverless database in your tech stack means configuring connections or using Data API to manage data.

## Connect using Data API

The GibsonAI Data API is a ready-to-use REST API for your hosted serverless database. Once your database schema is created and deployed in GibsonAI, you automatically get a full set of **RESTful APIs** to read, write, and manage your data — with zero backend setup.

Each table in your schema is exposed through standard endpoints like `GET`, `POST`, `PUT`, and `DELETE`, making it easy to integrate with any frontend framework, low-code tool, or AI agent. You can use these endpoints directly in your applications, fetch data for dashboards, or automate workflows using tools like Postman, Retool, or LangChain.

To get started, **open the Data API modal** in your GibsonAI project dashboard and **copy your API key** — this is required for authentication when making requests to your Data API.

![Connect using Data API](/docs/get-started-with-gibsonai/connect-using-connection-string.png)

## Connect using connection string

You can also use a database connection string to connect to the database (MySQL, PostgreSQL, etc.) in your GibsonAI project.

You can obtain the database connection details you require by clicking the **Connect** button on your **Project Dashboard** to open the **Connect** modal. Select an environment your would like to connect: **Development** or **Production**. A connection string is constructed for you.

![Connect using connection string](/docs/get-started-with-gibsonai/connect-using-data-api.png)

    <Admonition type="note">
    Depending on what kind of database you are connecting to, the connection string can be different. Currently, GibsonAI supports only MySQL database.
    </Admonition>

<NeedHelp/>
