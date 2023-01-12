---
layout: default
title: How it works (technical) - Mathesar
parent: How it works
---

{% capture hero_content %}
Use Mathesar’s open source and web-based interface to give your team direct access to Postgres. No technical skills required.

Now you can spend less time creating custom reports and manually updating data.
{% endcapture %}

{% capture actions %}
{% include button.html style="primary" label="Star us on GitHub" external=true url="https://github.com/centerofci/mathesar" %}
{% include button.html style="secondary" label="Request a Free Installation" url="free-install.html" %}
{% endcapture %}

{% include hero.html
title='Allow quick access to your database – without disrupting your workflow'
section='Open Source Database Interface' content=hero_content
image='assets/screenshot.png' actions=actions %}

{% include ribbon.html %}

{% capture highlight1 %}

You can ensure data integrity. Perform quick
schema changes. And let teammates create reports – without depending on you.

Mathesar doesn’t have its own set of abstractions so it won’t make unexpected changes to your database. You can allow your collaborators to quickly enter data and create reports – without depending on you.

{% endcapture %}

{% include highlight.html
    header='Speed up your data workflows – using Mathesar’s open source interface'
    content=highlight1
    theme='dark'
    separator=false
%}

{% capture capture_1 %}
Mathesar uses and manipulates Postgres **schemas, primary keys, foreign keys, constraints and data types**.

So any configuration you do in the UI will **reflect directly in your Postgres databases**.
Nothing will prevent you from working with the same data in other tools outside of Mathesar.

All the same **data integrity safeguards** you set up via the Mathesar UI will still apply.
{% endcapture %}

{% include feature.html
    header='BUILT ON POSTGRES'
    title='Use Postgres directly'
    content=capture_1
    image='assets/use-postgres-directly.png'
%}

{% capture capture_2 %}

**Proprietary products** can keep you locked in their ecosystem. This can make it **difficult to integrate or migrate your disparate data sources**.

If you decide to move away, you could lose data.

Mathesar is **self-hosted** – giving you **full control over your system and your data**. You can integrate with other Postgres-friendly tools.

{% endcapture %}

{% include feature.html
    header='SELF-HOSTED'
    title='Your data is yours'
    content=capture_2
    image='assets/self-hosted.png'
%}

{% capture capture_3 %}
**Non-technical people** often struggle to work with normalized data. Even **database-spreadsheet hybrid applications complicate the normalization process**.

Mathesar creates and reflects relationships at the database level.  There are no **“relationship column types”** and there are no **abstractions**.

Mathesar uses **actual foreign key constraints** and provides a UI to understand links easily – no technical skills required.
{% endcapture %}

{% include feature.html
    header='NORMALIZED DATA'
    title='Your collaborators can easily work with normalized data'
    content=capture_3
    image='assets/foreign-key.png'
%}

{% capture capture_4 %}
Your colleagues can use Mathesar’s interface to answer their **ad-hoc questions** quickly.

This can **reduce the need for you** to create custom reports and update data manually.
{% endcapture %}

{% include feature.html
    header='EASY UX'
    title='Reduce dependencies on you – empower collaborators to use your database'
    content=capture_4
    image='assets/collaborators.png'
%}

{% capture capture_5 %}
Mathesar is **free, licensed under GPLv3**. There are **no paid plans**.

Although we’re new, we already have **dozens of contributors**. If you’re interested, **you can also contribute**.

**We work in public** – you can check out what our team is doing on [GitHub](https://github.com/centerofci/mathesar) and [Matrix](https://wiki.mathesar.org/en/community/matrix). And via our [mailing lists](https://wiki.mathesar.org/en/community/mailing-lists).
{% endcapture %}

{% include feature.html
    header='OPEN SOURCE'
    title='Developed in collaboration with our community'
    content=capture_5
    image='assets/open-source.png'
%}

{% capture capture_6 %}
Manually changing your schema can require **hours of rote work** or custom code.
This can lead to disruptions – like **downtime**, **stale data** and difficulties in meeting your SLA.

Mathesar makes schema and data migrations a one-click solution.
There are **no disruptions** – which can help **ease your data integration workflow**.
{% endcapture %}

{% include feature.html
    header='SCHEMA MIGRATIONS'
    title='Perform schema changes – in minutes'
    content=capture_6
    image='assets/migrations.png'
%}

{% capture capture_7 %}
Database joins can be confusing for non-technical users to fully understand.

With Mathesar’s Data Explorer, your **collaborators don’t need to understand joins**. They can see and use relationships between data – with the joins happening behind the scenes.

**Anyone can build a query through the UI** that displays data from across **multiple tables**.

This can remove the dependency layer on you and allow for more exploration into your database.
{% endcapture %}

{% include feature.html
    header='DATA EXPLORER'
    title='Build views across multiple tables'
    content=capture_7
    image='assets/explorer.png'
%}

{% capture screenshot_text %}

### You and your collaborators can quickly enter data. View it. Slice it.

#### Move data around. Transform and filter it.

While still retaining structure and consistency.

{% endcapture %}

{% include screenshot.html theme="dark" content=screenshot_text %}

{% capture quote %}
"At my previous job, business experts relied on me to **create reports** for them, every single day.

But shouldn’t developers be focusing more on **supporting technical infrastructure**? Isn’t that our main function?"
{% endcapture %}

{%
include quote.html
excerpt='I experienced collaboration issues every day.'
author='Pavish - Mathesar’s Frontend Developer'
quote=quote
image='pavish.jpg'
%}

{%include usecases.html%}

{% capture highlight3 %}

- Use Mathesar to set up a **backend** for your custom application.
- Mathesar can work as **frontend** to existing databases, without altering your data.

{% endcapture %}

{% include highlight.html header='Use Mathesar as a flexible tool throughout your project lifecycle' content=highlight3 theme='light' separator=true %}
