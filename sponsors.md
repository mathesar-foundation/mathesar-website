---
layout: default
title: Sponsors - Mathesar
description: Sponsors of Mathesar
---

{% capture header %}
Sponsors
{% endcapture %}

{% capture subheader %}
We are grateful to our sponsors for their support in keeping Mathesar free and open source.
{% endcapture %}

{% include page-header.html header=header subheader=subheader %}

{% include sponsors.html %}

{% capture content %}
We rely on the support of individuals and organizations to continue improving Mathesar and making it more accessible. If you're interested in becoming a sponsor, please visit our [Open Collective page](https://opencollective.com/mathesar){:target="_blank" rel="noopener"} to learn more. You can also find our project on [GitHub](https://github.com/centerofci/mathesar){:target="_blank" rel="noopener"}.
{% endcapture %}

{% include highlight.html
  theme="light"
  header="Become a Sponsor"
  content=content
%}
