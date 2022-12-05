---
layout: default
title: Roadmap
---

{% include page-header.html
header='Coming soon: Mathesar’s Alpha release and collaboration abilities'
%}

{% capture highlight %}
We’re working towards Mathesar’s initial alpha release in late 2022. Our goal is to have a basic set of features that demonstrate our value: letting users enter and analyze data in quicker, more structured and independent ways.

We’ll make necessary improvements before we get to Version 1.0.

We aim to frequently release new features – here’s the basic plan:

{%include roadmap_card.html
header='Basic data entry and analysis features'
subheader='Mathesar’s alpha release'
content='This includes: basic data entry, basic data analysis, basic data export, basic data import, basic data visualization'
url='http://mathesar.org'
%}

{%include roadmap_card.html
header='Collaboration abilities'
subheader='Mathesar’s beta release'
content='This includes: user roles and permissions'
url='http://mathesar.org'
%}

{%include roadmap_card.html
header='User-friendly data entry and analysis features'
subheader='Mathesar’s Version 1.0'
content='This includes: data entry, data analysis, data export, data import, data visualization'
url='http://mathesar.org'
%}

{%include roadmap_card.html
header='Data entry and analysis features for advanced users'
subheader='Mathesar’s Version 2.0'
content='This includes: advanced data entry, advanced data analysis, advanced data export, advanced data import, advanced data visualization'
url='http://mathesar.org'
%}

Note: this roadmap is subject to change, based on user needs.

{% endcapture %}

{% include highlight.html header='Mathesar’s roadmap' content=highlight theme='light'%}
{% capture highlight1 %}
Have any feedback or suggestions for features? You can contact us at:
[hello@mathesar.org](mailto:hello@mathesar.org)
{% endcapture %}

{% include highlight.html header='Feedback' content=highlight1 theme='dark'%}
