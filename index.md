---
layout: default
title: Mathesar
---

{% capture hero_content %}
Mathesar is an **open source** and web-based interface that works on top of your database.

You can enter and slice and filter and structure your data… in minutes.
  
No technical skills required.
{% endcapture %}

{% capture hero_actions %}
{% include homepage-actions.html %}
{% endcapture %}

{% include hero.html title='Quickly enter and analyze
your data - in one open source interface' section='Open Source Database Interface' content=hero_content image='assets/screenshot.png'
actions=hero_actions %}

{% include ribbon.html %}

{%include bullet_list.html%}

{% capture content %}

### Now you can rapidly enter data.

### *And* analyze that data.

### *And* ensure your data is fully valid.

Using a self-hostable and accessible interface.

{% endcapture %}

{%include screenshot.html theme="light" content=content %}

{%include usecases.html %}

{%include feature_list.html %}

{%capture cta_content %}
Mathesar’s Alpha release is coming very soon.
Please leave your details here to stay updated:
{% endcapture %}
