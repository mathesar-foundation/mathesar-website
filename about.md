---
layout: default
title: About Us - Mathesar
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

{% include highlight.html header='Our mission' content=highlight theme='dark' separator=true %}

{% include team-grid.html %}

{% capture highlight1 %}
Mathesar will always be **100% open-source and self-hostable**.

{% include funder-logos.html %}

As we continue to develop Mathesar, our long-term goal is to offer a paid SaaS (Software as a Service) version of Mathesar in order to sustain the project. We remain committed to open source principles and will not create closed-source features or accept funding that would compromise our values.
{% endcapture %}

{% include highlight.html header='Our plans for financial sustainability' content=highlight1 theme='lighter' separator=true %}
