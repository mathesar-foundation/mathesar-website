---
layout: default
title: About Us
---

{% capture subheader %}
Mathesar is a straightforward open source and self-hostable tool.
The web-based interface helps you and your team work with data more independently. And comfortably.

You can use Mathesar to build data models, enter data, use that data and even understand the impact of your data.
{% endcapture %}

{% include page-header.html
header='What is Mathesar?'
subheader=subheader
%}

{% capture highlight %}
We’re not trying to create new abstractions. Or make a complex tool that people struggle to get their heads around. We’re aiming to stay true to database ideals.

We want to make existing Postgres functionality more accessible – in a user-friendly way.

Mathesar is a tool that our entire team wants to use. We're our own users.
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
