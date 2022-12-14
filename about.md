---
layout: default
title: About Us
---

{% capture subheader %}
Mathesar is a straightforward open source tool that provides a **spreadsheet-like interface** to a PostgreSQL **database**. Our web-based interface helps you and your collaborators work with data more independently and comfortably – **no technical skills needed**.

You can use Mathesar to build **data models**, **enter data**, and even **build reports**. You host your own Mathesar installation, which gives you ownership, privacy, and control of your data.
{% endcapture %}

{% include page-header.html
header='What is Mathesar?'
subheader=subheader
%}

{% capture highlight %}
Mathesar is a non-profit project. Our goal is to make **understanding and working with data easy for everyone**.

Databases have been around for a long time and solve common data problems really well. But, working with databases often requires custom software. Or complex tooling that people struggle to get their heads around.

We want to make existing database functionality more accessible – in a user-friendly way.
{% endcapture %}

{% include highlight.html header='Our mission' content=highlight theme='dark' %}

{% include team-grid.html %}

{% capture highlight1 %}

We’re currently funded through the generous support of **Reid Hoffman** and the **Center for Radical Transformation at the Chiba Institute of Technology**.

We’re currently working towards our first Alpha release. After the launch, we’ll iterate quickly – in collaboration with our early adopters – until we have Version 1.0 ready for wider adoption.

This initial development has been funded philanthropically. At the same time, we’re working towards self-sustainability.

We haven’t yet decided on a business model, but one thing we know for certain: **Mathesar will always be open-source and self-hostable**.
{% endcapture %}

{% include highlight.html header='Our plans for sustainability' content=highlight1 theme='lighter' %}
