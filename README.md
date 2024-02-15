<p align="center">
    <img src="https://user-images.githubusercontent.com/845767/218793207-a84a8c9e-d147-40a8-839b-f2b5d8b1ccba.png" width=450px alt="Mathesar logo"/>
</p>
<p align="center"><b>An intuitive UI for managing data, for users of all technical skill levels. Built on Postgres.</b></p>

<p align="center">
  <a href="https://github.com/centerofci/mathesar" target="_blank">Mathesar code</a> • <a href="https://mathesar.org?ref=github-website-readme" target="_blank">Website</a> • <a href="https://docs.mathesar.org?ref=github-readme" target="_blank">Docs</a> • <a href="https://wiki.mathesar.org/en/community/matrix" target="_blank">Matrix (chat)</a> • <a href="https://wiki.mathesar.org/" target="_blank">Wiki</a>
</p>

# Mathesar website

This repository is a Jekyll website that powers https://mathesar.org. It is hosted on GitHub Pages.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Local setup](#local-setup)
  - [Installation](#installation)
  - [Running locally](#running-locally)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Local setup

### Installation

1. [Install Jekyll](https://jekyllrb.com/docs/installation/) (ensure you also install `bundler`)
2. From repo root directory, run `bundle install`
3. From repo root directory, run `npm install`

### Running locally

1. Run: 

    ```
    bundle exec jekyll serve --port 4000 --livereload
    ```

1. Browse to http://localhost:4000/
