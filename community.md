---
layout: default
title: Community
---

{% capture subheader %}
To get in touch with the Mathesar team, please email us at: [hello@mathesar.org](mailto:hello@mathesar.org)

We’re especially interested in hearing your feedback, feature suggestions and opportunities for collaboration. Thanks!
{% endcapture %}

{% include page-header.html
header='Welcome to the Mathesar community'
subheader=subheader
%}

{% capture highlight %}

### Are you interested in helping us build Mathesar?

Here are some helpful links:

- [Mathesar’s Matrix channel](https://matrix.to/#/#mathesar:matrix.org)
- [Mathesar’s GitHub repository](github.com/centerofci/mathesar)
- [Mathesar’s Wiki](github.com/centerofci/mathesar/wiki)

Sign up for our developer-only mailing list below to get updates on Mathesar’s development:

{% include button.html style="primary" label="Sign up for our developer-only mailing list" url="https://groups.google.com/g/mathesar-dev" %}

{% endcapture %}

{% include highlight.html header='Help us build Mathesar' content=highlight theme='light' separator=true%}

{% capture highlight1 %}

### Are you interested in using Mathesar?

You can talk to other Mathesar users through our user-only mailing list. And you’ll stay updated on Mathesar’s upcoming release.

{% include button.html size="sm" style="primary" label="Sign up for our user-only mailing list" url="https://groups.google.com/g/mathesar-users" %}

{% endcapture %}

{% include highlight.html size="sm" header='Stay updated on Mathesar’s release' content=highlight1 theme='dark' separator=true%}
