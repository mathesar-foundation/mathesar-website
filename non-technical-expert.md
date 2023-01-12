---
layout: default
title: How it works (non-technical) - Mathesar
parent: How it works
---
{% capture hero_content %}
Mathesar’s web-based interface gives you direct access to Postgres – one of the most popular databases in the world.

So you can enter and slice and filter and structure your data… in just minutes.
No technical skills required.
{% endcapture %}

{% capture actions %}
{% include button.html style="primary" label="Stay Updated on Our Release" external=true url="https://wiki.mathesar.org/en/community/mailing-lists" %}
{% include button.html style="secondary" label="Request a Free Installation" url="free-install.html" %}
{% endcapture %}

{% include hero.html
title='Enter quick data and find answers to your questions – independently'
section='Open Source Database Interface' content=hero_content
image='assets/screenshot.png' actions=actions %}

{% include ribbon.html %}

{% capture highlight_1 %}

You’re often left without clear answers to these important questions:

- How can you be certain that your database doesn’t contain faulty, duplicated data?
- When your workflow changes, how can you quickly update your data structures?
- How can you see one view of all your different data sources?

{% endcapture %}

{% include highlight.html header='Too many data tools make simple tasks complicated' content=highlight_1 theme='dark'%}

{% capture screenshot_text %}

### Gain flexibility and speed working with your data

#### Protect your team from making data errors. And find quick insights – without waiting

If you can work a spreadsheet, you can get the hang of Mathesar.

It’s an intuitive interface, at a beginner-friendly level.

But unlike a spreadsheet – you can now work more easily with structured, clean data.

{% endcapture %}

{% include screenshot.html theme="light" content=screenshot_text %}

{% capture capture_1 %}
Having your **data sources scattered in different places** can make analysis difficult.

Mathesar connects to your existing database. The interface can become a **central source of truth** to analyze your data.

You can have different workflows using the same data – all at the same time.
{% endcapture %}

{% include feature.html
    header='INTEGRATES WITH YOUR DATA'
    title='Use Mathesar in tandem with your other tools'
    content=capture_1
    image='assets/one-source.png'
%}

{% capture capture_2 %}
**Duplicates and redundancies** are all too common in data entry. This **inconsistency can lead to corrupted data** – resulting in misguided decisions.

Mathesar allows you to retain strict data structures.

You can easily **set up data rules** that prevent users from making data errors.
That’s how you ensure clean, consistent and accurate data records.
{% endcapture %}

{% include feature.html
    header='DATA VALIDATION & CONSISTENCY'
    title='Work with clean, error-free data'
    content=capture_2
    image='assets/validation.png'
%}

{% capture capture_3 %}

When you want to **explore a freeform question about your data** – you could face technical obstacles:

**“What’s the right way to phrase this question?”**
**“Which is the right tool for the job?”**

You could even **lack easy access to your data**.

Mathesar lets you create views across multiple tables – in just a few clicks. So you can answer your freeform questions quickly. And gain new insights.

{% endcapture %}

{% include feature.html
    header='DATA EXPLORER'
    title='Discover new insights with unique views'
    content=capture_3
    image='assets/explorer.png'
%}

{% capture capture_4 %}
You often track the same data – like names, dates, statuses – across many **spreadsheets that are not connected**.

Someone has to **manually update this information**, over-and-over. This can become a bad use of a person’s work time.

With Mathesar, your data records can “speak” and connect to each other. When you make a change to one table – all your other **connected tables will automatically update** too.

So you can adjust and adapt your data records without dedicating too much time.

{% endcapture %}

{% include feature.html
    header='DATA RELATIONSHIPS'
    title='Watch your data sync up and build relationships'
    content=capture_4
    image='assets/sync.png'
%}

{% capture capture_5 %}
Sometimes you have **one-off questions about your data**, but you don’t have a relevant report already available.

Instead of waiting for your technical collaborator – or ticking hundreds of checkboxes in your custom software – simply search through Mathesar.

You can quickly **filter words using conditional logic**.
{% endcapture %}

{% include feature.html
    header='QUICK FILTERS'
    title='User-friendly filters to answer quick questions'
    content=capture_5
    image='assets/find.png'
%}

{% capture capture_6 %}
When your workflow changes, this change should be reflected in your data models.
But **manual changes often take hours, even days**.

This runs a significant risk of disruption. When your data is **paused and not synced-up**, you could end up with stale data.

Mathesar saves you time and lets you **update data models – in a click**.

So as your workflow evolves, you’re able to **adjust your data** too accurately. In minutes.
{% endcapture %}

{% include feature.html
    header='RESHAPE YOUR DATA STRUCTURE'
    title='Update your data models – in just minutes'
    content=capture_6
    image='assets/director.png'
%}

{% capture capture_7 %}
Proprietary software companies often look like appealing choices – **until you’re locked in their ecosystem**.
If you decide to move away, you could lose valuable data. Your data could even be sold off in private deals.
Mathesar **allows you to self-host on your servers**. You’ll have full control over your data and can choose who has access.
Easily migrate from Mathesar – or simply go back and forth – anytime you like.
{% endcapture %}

{% include feature.html
    header='OPEN SOURCE & SELF-HOSTED'
    title='Own your data'
    content=capture_7
    image='assets/self-hosted.png'
%}

{% capture quote %}
“When developers would give me access to software, my immediate instinct was “don’t break anything!”

Causing an error would be so embarassing. You don’t intentionally want to delete something but stuff happens, right?

I felt like I was in a piece of software that wasn’t meant for me.

We created Mathesar to be more welcoming. Mathesar sets up data rules that protect people from data errors.

It can open up a playground to explore new ideas."
{% endcapture %}

{%
include quote.html
excerpt='I felt like a guest in the developers’ space.'
author='Ghislaine (Mathesar’s Product Designer)'
quote=quote
image='ghislaine.jpg'
%}
