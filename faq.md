---
layout: faq
title: FAQ - Mathesar
---

{% capture faq_section1 %}

### Can I create and share forms using Mathesar?

Not yet, but they're [on our roadmap](roadmap.html).

### What kind of access control does Mathesar support?

Mathesar currently supports *Manager*, *Editor*, and *Viewer* roles on per-schema and per-database. *Managers* can edit the structure of the database, *Editors* can edit data (but not the database structure), and *Viewers* have read-only permissions.

More granular permissions - including row and column level permissions - are [on our roadmap](roadmap.html).

### Do you support using formulas to calculate data automatically?

Not yet, but we've done some early design work on this and it is [on our roadmap](roadmap.html).

{% endcapture %}

{% capture faq_section2 %}

### How is Mathesar different from a spreadsheet?

Spreadsheets are easy to use, but they’re also easy to mis-use because they're so unstructured.

This lack of structure can leave spreadsheet users without answers to these questions:

- How can I prevent entry of duplicate data into my spreadsheet?
- How do I quickly store and visualize the relationships between my data?
- How do I evolve the structure of my data as my needs change?

These problems are solved by databases.

Mathesar combines the benefits of a database and the ease of use of a spreadsheet.

Mathesar’s interface can provide structure – so your team can’t mistakenly enter inaccurate data. This helps ensure that your data is consistent and clean.

And like a spreadsheet, Mathesar has an accessible beginner-friendly interface.

### How is Mathesar different from Airtable?
Mathesar is similar to Airtable in that it provides a spreadsheet-like interface for working with data. However, Mathesar offers several advantages over Airtable and other cloud-based solutions:

- **Open source and self-hosted**: Mathesar is open source, which means you can run it on your own servers and have full control over your data.
- **SQL queries**: Mathesar allows you to connect to your database and run SQL queries, providing more flexibility in how you work with your data.
- **Postgres ecosystem**: Mathesar can be used alongside any tool that connects to Postgres databases, allowing you to leverage the power of the Postgres ecosystem.
- **Data ownership**: Mathesar's data is independent of the web interface, so you can keep your database even if you stop using the UI – no migration needed.
- **Data validation and integrity**: Mathesar allows for stronger data validation and data integrity, ensuring that your data is clean and consistent.
- **Flexible data models**: Mathesar's data models can be changed with just a few clicks, providing more flexibility than Airtable's reconfiguration process.
- **Data Explorer**: Mathesar's Data Explorer allows you to create views from multiple tables easily, a feature not currently offered by Airtable or similar cloud-based solutions.

Airtable is a mature solution that has been around for a while and as such offers more features than Mathesar. However, Mathesar's open-source and self-hosted approach still offers several advantages, such as full control over your data and the ability to connect to your database and run SQL queries.

These points also apply to similar cloud-based solutions – including SeaTable, Google Tables and Microsoft Lists.

### How is Mathesar different from NocoDB?

Mathesar and NocoDB are both open source tools that provide an interface to existing databases, but they have some differences in terms of approach and functionality.

- Mathesar is **specifically designed for PostgreSQL databases** and allows for a deeper level of support for PostgreSQL features. NocoDB, on the other hand, supports connecting to multiple database backends.
- Mathesar's UI reflects the features of the underlying database and **doesn't introduce any abstractions**. NocoDB, however, has column types that only work at the UI level, which could limit the flexibility of working with the data in other tools.
- Mathesar's UI allows you to set up **relationships that are reflected at the database level**. Our interface also surfaces existing relationships, making it easier to understand how your data fits together.
- Mathesar's Data Explorer lets you build **queries across multiple tables**, a feature not currently offered by NocoDB.
- Mathesar offers functionality to help you **update your data models in a couple of clicks**.

It's important to note that NocoDB is a more mature solution than Mathesar and offers features like webhooks, integrations, notifications, etc. that Mathesar does not currently support. We do plan to build these features, see [our roadmap](roadmap.html) for more details.

The open-source community is strengthened by the presence of tools like NocoDB and we're glad to see them tackling similar issues as Mathesar.

### How is Mathesar different from Baserow?

Mathesar and Baserow are both open-source tools that provide spreadsheet-like interface for working with data, but they have some key differences in terms of functionality and approach:

- Mathesar allows you to **connect to your existing Postgres database**, Baserow does not support this feature.
- Mathesar's UI allows you to set up **relationships that are reflected at the database level**. Our interface also surfaces existing relationships, making it easier to understand how your data fits together.
- Mathesar's Data Explorer allows you to **build queries across multiple tables**, which is not currently possible with Baserow.
- Mathesar offers **all its functionality for free**, with no plans to change that, Baserow's open-core model has some features that require payment, even for self-hosted installations.

It's important to note that Baserow is a more mature project than Mathesar and supports features like formulas, plugins, real-time collaboration, etc. that Mathesar does not currently support. We do plan to build these features, see [our roadmap](roadmap.html) for more details.

Having tools like Baserow in the open-source community strengthens the ecosystem and we are glad to see them working on similar problems as Mathesar.
{% endcapture %}


{% include faq_section.html content=faq_section1 section="Features" %}
{% include faq_section.html content=faq_section2 section="Product Comparisons" %}
