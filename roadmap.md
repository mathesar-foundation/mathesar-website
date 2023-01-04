---
layout: default
title: Roadmap
---

{% capture subheader %}
Mathesar's alpha release (coming early 2023) has a **basic set of features** that demonstrate our approach to letting users enter and analyze data in quicker, more structured and independent ways.

We have many ideas for new features and we plan to publish new releases **regularly and rapidly**, prioritizing those **based on user requests**.
{% endcapture %}

{% include page-header.html
header="Mathesar's Roadmap"
subheader=subheader
%}

{% capture highlight %}

{% for category in site.data.roadmap %}
{{category.category}}
{% for feature in category.features %}
{%include roadmap_card.html
    header=feature.title
    subheader=feature.subheader
    content=feature.content
    url=feature.discussion_url
%}
{% endfor %}
{% endfor %}

{%include roadmap_card.html
header='Support for storing files'
subheader=''
content=''
url='https://github.com/centerofci/mathesar/discussions/2188'
%}

{%include roadmap_card.html
header='Support for list data types'
subheader=''
content=''
url='https://github.com/centerofci/mathesar/discussions/2190'
%}

Note: this roadmap is subject to change, based on user needs.

{% endcapture %}

{% include highlight.html header="Upcoming Features by Category" subheader="Here are some ideas we’re thinking about. Please participate in the linked GitHub discussion if you’d like us to work on a feature!" content=highlight theme='light'%}

{% capture highlight1 %}
Have any feedback or suggestions for features? You can contact us at:
**[hello@mathesar.org](mailto:hello@mathesar.org)**
{% endcapture %}

{% include highlight.html content=highlight1 theme='dark'%}
