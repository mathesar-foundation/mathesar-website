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
- [Publishing to the Blog](#publishing-to-the-blog)
  - [Creating a new blog post](#creating-a-new-blog-post)
  - [Creating Author Pages](#creating-author-pages)
  - [Creating Tag Pages](#creating-tag-pages)
  - [Updating Author Pages](#updating-author-pages)

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

## Publishing to the Blog

To publish a new post on the Mathesar blog, follow these steps.

### Creating a new blog post

1. **Create a new Markdown file in the `_posts` directory.** The file name should follow this format: `YYYY-MM-DD-title-of-the-post.md`.

2. **Fill out the front matter for your post.** At the beginning of your Markdown file, include the following:

    ```yaml
    ---
    layout: post
    title:  "Title of Your Post"
    tags: tag1 tag2 tag3
    date: YYYY-MM-DD
    author: author_id
    description: "Brief description of the post."
    image: /path/to/featured/image.jpg
    ---
    ```

3. **Write your blog post.** After the front matter, use regular Markdown syntax to write your post.

### Creating Author Pages

If author_id does not exist in `_data/authors.yml`:

1. **Add author details to `_data/authors.yml`.** If your author ID does not exist, create a new entry with your details.

    ```yaml
    your_author_id:
      name: Author Name
      role: Author Role
      bio: >
        "A brief bio about the author. This can be a few sentences long."
      image: /path/to/your/image.jpg
    ```

### Creating Tag Pages

If you've added new tags:

1. **Run the tag generator script.** From the root directory, execute:

    ```
    python scripts/tag_generator.py
    ```

This will generate pages for the new tags.

### Updating Author Pages

If you've added yourself as a new author:

1. **Run the author generator script.** From the root directory, execute:

    ```
    python scripts/author_generator.py
    ```

This will generate a page for your author profile.

Remember to run the above scripts if you're introducing new tags or authors to ensure the website accurately reflects these changes.
