---
layout: post
title: "Test build Mathesar v0.2.0-testing.1 released"
tags: release announcement
date: 2024-10-15
author: kriti_godey
description: "Test build Mathesar v0.2.0-testing.1 released"
image: /assets/images/020-testing1-announcement.png
---

**Mathesar 0.2.0-testing.1** offers an early preview of improvements we plan to release in our beta version, including dramatically improved UI responsiveness and a new access control system based on Postgres permissions. This is the first step towards launching the Mathesar beta.

![image](/assets/images/020-testing1-announcement.png)

## We need your help!

We need to hear from as many users as possible about how this new version of Mathesar is working for you. Please try out the build and share your feedback. See our installation instructions for **[Docker Compose](https://docs.mathesar.org/0.2.0-testing.1/installation/docker-compose/)** and **[from scratch](https://docs.mathesar.org/0.2.0-testing.1/installation/build-from-source/)**.

Please note that we do not recommend this build for production use. Most features should work, but there are [some known issues](https://github.com/mathesar-foundation/mathesar/milestone/78). You'll also need to perform a fresh install of Mathesar, upgrades from previous Mathesar releases are not currently supported.

We welcome all feedback, especially on:
- UI speed and responsiveness
- Functionality of the new permissions system
- Concerns with using Mathesar in production
- Critical missing features for your use case (details appreciated!)

Share your feedback on **[this GitHub discussion](https://github.com/mathesar-foundation/mathesar/discussions/3956)** or email us at **hello@mathesar.org**.

## What's new

Here's a look at some of the improvements in the build. Please see our [Release Notes](https://docs.mathesar.org/0.2.0-testing.1/releases/0.2.0-testing.1/) for the comprehensive list of all changes and bugfixes.

### Access control based on PostgreSQL roles and privileges

We have a brand new access control system based entirely on PostgreSQL database roles and privileges. This gives Mathesar several new capabilities. 

Database administrators can set up access control directly on the database and use those roles in Mathesar. Mathesar also supports setting up PostgreSQL roles and privileges via the UI, including granular access control at the individual table level.

![image](https://docs.mathesar.org/0.2.0-testing.1/assets/releases/0.2.0-testing.1/db-settings-collaborators.png)

### Performance improvements and RPC API

We've made major improvements to the responsiveness of the Mathesar UI. Loading data and data entry should be much more snappy, and importing data into Mathsar is around 50 times faster. We've also eliminated the need to manually sync database schema changes to Mathesar.

To achieve these performance benefits, we needed to overhaul our backend architecture and API. We have built out a new RPC API and our frontend UI now primarily uses that API. Most of our REST API endpoints are now deprecated and will be removed soon.

### Visual improvements

We made several visual improvements to Mathesar to ensure consistency, better usability, and adherence to design guidelines. A before-and-after comparison of the "Create Link" modal can be seen below.

![image](https://docs.mathesar.org/0.2.0-testing.1/assets/releases/0.2.0-testing.1/create-link-changes.png)

### Live demo changes

We have removed code related to Mathesar's "live demo" mode since we didn't think it made sense to include code for our promotional website in the core product.

---

Here’s the link to our [Release Notes](https://docs.mathesar.org/0.2.0-testing.1/releases/0.2.0-testing.1/) again if you’d like to see the full list of all changes and bugfixes.

We look forward to your feedback!
