---
layout: default
title: Sponsor Mathesar - Mathesar
description: Sponsor Mathesar
---

{% capture header %}
Sponsor Mathesar
{% endcapture %}

{% capture subheader %}
Mathesar is a non-profit project maintained by a small team. Your financial support helps us sustain the project.

You can sponsor Mathesar through [Open Collective](https://opencollective.com/mathesar){:target="_blank" rel="noopener"} or [GitHub Sponsors](https://github.com/sponsors/mathesar-foundation){:target="_blank" rel="noopener"}.

{% endcapture %}

{% include page-header.html header=header subheader=subheader %}

{% capture content %}

{% include sponsors.html %}

{% endcapture %}

{% include highlight.html
  theme="light"
  header="Our Top Sponsors"
  content=content
%}
