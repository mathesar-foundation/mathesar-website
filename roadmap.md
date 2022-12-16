---
layout: default
title: Roadmap
---

{% include page-header.html
header='Coming soon: Mathesar’s Alpha release and collaboration abilities'
%}

{% capture highlight %}
Mathesar's alpha release (coming early 2023) has a **basic set of features** that demonstrate our approach to letting users enter and analyze data in quicker, more structured and independent ways.

We have many ideas for new features and we plan to publish new releases **regularly** and **rapidly**.

We will prioritize new features **based on user requests**. Here are some ideas we're thinking about. Please participate in the **linked GitHub discussion** if you'd like us to work on a feature!

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
