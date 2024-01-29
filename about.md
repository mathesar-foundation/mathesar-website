---
layout: default
title: About Us - Mathesar
description: Mathesar is a straightforward open source tool that provides a spreadsheet-like interface to a PostgreSQL database. Our web-based interface helps you and your collaborators work with data more independently and comfortably – no technical skills needed.
image: /assets/og-about.png
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

Databases have been around for a long time and solve common data problems really well. But working with databases often requires custom software. Or complex tooling that people struggle to get their heads around.

We want to make existing database functionality more accessible – in a user-friendly way.
{% endcapture %}

{% include highlight.html header='Our mission' content=highlight theme='dark' separator=true %}

{% include team-grid.html %}

{% capture highlight1 %}
Mathesar will always be **100% open source and self-hostable**.

{% include funder-logos.html %}

We plan to release a **cloud hosted** version of Mathesar with paid plans at some point in the near future. This will help us fund the project in the long-term.

We remain committed to [open source principles](https://opensource.org/osd) and will not create closed-source features or accept funding that would compromise our values.
{% endcapture %}

{% include highlight.html header='Our plans for financial sustainability' content=highlight1 theme='lighter' separator=true %}

{% include cta.html %}
