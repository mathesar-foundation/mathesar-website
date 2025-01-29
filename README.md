<p align="center">
    <img src="https://user-images.githubusercontent.com/845767/218793207-a84a8c9e-d147-40a8-839b-f2b5d8b1ccba.png" width=450px alt="Mathesar logo"/>
</p>
<p align="center"><b>An intuitive UI for managing data, for users of all technical skill levels. Built on Postgres.</b></p>

<p align="center">
  <a href="https://github.com/mathesar-foundation/mathesar" target="_blank">Mathesar code</a> • <a href="https://mathesar.org?ref=github-website-readme" target="_blank">Website</a> • <a href="https://docs.mathesar.org?ref=github-readme" target="_blank">Docs</a> • <a href="https://wiki.mathesar.org/en/community/matrix" target="_blank">Matrix (chat)</a> • <a href="https://wiki.mathesar.org/" target="_blank">Wiki</a>
</p>

# Mathesar website

This repository is a SvelteKit website that powers https://mathesar.org. It is hosted on GitHub pages.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Local setup](#local-setup)
  - [Installation](#installation)
  - [Running locally](#running-locally)
  - [Building](#building)
- [Content editing](#content-editing)
- [Analytics](#analytics)
- [Forms](#forms)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Local setup

### Installation

Running the Mathesar website locally requires Node.js >18. See this [guide](https://nodejs.org/en/download) for the ideal way to manage Node.js versions on your computer.

### Running locally

> [!TIP]
> The first time you run `npm run dev` the site will be extremely slow. SvelteKit is optimizing
> images, which will be cached in the `node_modules` directory. Running `npm run build ` once _first_ will populate the cache, in the same manner as `npm run dev` but makes it clearer what is happening.

1. Clone the repo:
   ```shell
   # Or `gh repo clone mathesar-foundation/mathesar-website` using the Github CLI
   > git clone git@github.com:mathesar-foundation/mathesar-website-beta.git
   ```
2. Install dependencies with `npm install`.
3. Run the local development server:

   ```shell
   npm run dev

   # or start the server and open the app in a new browser tab
   npm run dev -- --open
   ```

### Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Content editing

Much of the site's contents are stored in `.yml` files in the `_data` directory. This pattern was inherited from our previous Jekyll site to ensure a consistient editing experience. Blog posts live in the `_pages` directory as markdown files.

Currently, all other page content is held in the respective `src/routes/{route-nanme/+page.svelte` file for each page. Take care not to break the structure of pages when making content edits.

## Analytics

Lightweight, privacy-concious event and pageview data is collected using [Simple Analytics](https://www.simpleanalytics.com/).

## Forms

We collect newsletter signups using a [Formspree](https://formspree.io/) form in the site's footer.
