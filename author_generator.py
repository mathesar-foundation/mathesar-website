#!/usr/bin/env python

'''
author_page_generator.py

This script creates author pages for your Jekyll blog hosted by Github page.
No plugins required.
'''

import yaml
import os

# Directories
data_dir = '_data/'
author_data_file = data_dir + 'authors.yml'
author_dir = 'authors/'

# Load authors from the _data/authors.yml file
with open(author_data_file, 'r') as file:
    authors = yaml.safe_load(file)

# Ensure the author directory exists
if not os.path.exists(author_dir):
    os.makedirs(author_dir)

# Create an author page for each author
for key in authors.keys():
    author_filename = author_dir + key.replace(' ', '_') + '.md'
    with open(author_filename, 'w') as file:
        write_str = f"""---
layout: author
author: {key}
title: "Author: {authors[key]['name']}"
permalink: /blog/authors/{key.replace(' ', '_')}/
---

"""
        file.write(write_str)

print(f"Author pages created in {author_dir}/")
