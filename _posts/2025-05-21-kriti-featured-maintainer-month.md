---
layout: post
title: "The Long Way into Open Source"
tags: open-source personal
date: 2025-05-21
author: Kriti Godey
description: "How I got into open source—from clueless newbie to project lead of Mathesar. Cross-posted from the Open Source Initiative's maintainer stories project."
image: /images/blog/kriti-maintainer-story.png
---

_This piece is adapted from a longer version originally published as part of the Open Source Initiative’s Maintainer Month project. [Learn more](https://opensource.org/maintainers) about how OSI supports open source maintainers, or read the [original story on the OSI website](https://opensource.org/maintainers/kgodey)._

---

I’m Kriti Godey, project lead and one of the maintainers of [Mathesar](https://github.com/mathesar-foundation/mathesar). I’ve been a software engineer for almost fifteen years, and have been working on open source projects full-time since 2018.

Like most people, I stumbled into open source by accident. At 19, I was a CS major looking for hands-on experience, so I applied for a campus web dev job. By some mix of luck and good timing, the job involved an open source codebase—[a CMS built on Django](https://github.com/ithinksw/philo)—and I got a crash course in both how open source works and why it matters.

I didn’t know the term “maintainer,” and I had no business poking around Django internals yet, but even the documentation blew me away. People had written all this detail? Together? Just so others could use it? I didn’t realize I was already on the path to becoming someone who voluntarily writes style guides for issue templates.

## “RTFM?” to “My PR was merged!”

My early career was built on Django, and as I worked with more libraries, I started hitting edge case bugs, and developed a compulsive habit of going straight to the source code when docs fell short. I lurked on mailing lists, learned to navigate bug trackers, and got told to RTFM (correctly) on IRC. At one point, I definitely had the Django REST Framework file structure memorized. I also thought I was clever for finding undocumented functions and using them in production. That went about how you’d expect.

My senior honors project (a recipe recommendation webapp, in theory, anyway) was the first thing I ever open-sourced. It didn’t actually work, the code was _terrible_, and the README was a to-do list. I pushed it to GitHub anyway, because I liked the idea that someone might find it useful or maybe mildly interesting.

The first time I felt like an _actual_ open source contributor was when I fixed a misused word in the docs of a library I was using. It annoyed me until I realized I could just… fix it. So I opened a PR. The maintainer merged it with no comment besides a 🤓 emoji. I was completely thrilled to have actually _collaborated_, and both mildly mortified and weirdly proud to be called a nerd while doing it.

I didn’t think of myself as “in” open source—I was just working, learning, and building things. But it was always there in the background. I met maintainers at PyCon and DjangoCon (even Guido van Rossum, briefly!), watched _Revolution OS_ and got a little starry-eyed, and fixed the occasional bug I ran into. Over time, I started noticing the infrastructure that turned code into a community, and enabled people from wildly different backgrounds to work together and build something useful.

## “Wait, now _I’m_ merging PRs?”

In 2018, I was lucky enough to turn my admiration for open source into something more hands-on. Creative Commons was looking for someone to lead their engineering team, and I applied. It felt like a long shot, but I didn’t want to pass up the chance to work with an organization dedicated to making knowledge more open. The job wasn’t focused on community-building, but when I saw how many internal tools and libraries Creative Commons had, I got a little overenthusiastic in the interview and pitched a bunch of ideas anyway. I got the job—and then I got to actually implement those ideas.

Over the next couple of years, the team and I cleaned up and published dozens of repos, launched new projects, and built a contributor ecosystem from scratch. We participated in programs like Google Summer of Code and Outreachy, wrote documentation, and set up an [open source community portal](https://opensource.creativecommons.org/). I learned firsthand that code was just the tip of the iceberg. It’s the documentation, responsiveness, onboarding, visibility, community architecture—that’s what makes open source projects successful.

I also represented Creative Commons at the Open Source Initiative, where I got to meet maintainers from all over and talk shop. At some point, it hit me: I kept referring to them as “other maintainers.” Which meant I was one too.

## “What do we name the repo?”

When Creative Commons restructured at the end of 2020, I started looking for a new home for some of the work we’d been doing—especially our flagship project, CC Search (now [Openverse](https://openverse.org) at Automattic). That process led to receiving a grant from the [Center of Complex Interventions](https://centerofci.org/) to start what eventually became [Mathesar](https://mathesar.org/), an intuitive UI that makes Postgres databases easier for non-technical users to work with.

The lessons I learned at Creative Commons about community building helped us design Mathesar to be contributor-friendly from day one. We labeled issues that were accessible to beginners. We structured our internal team process around reviewing PRs quickly. We published specs, meeting notes, and design discussions on a public wiki. Even our “internal” team chat runs in a public Matrix room. The goal was to make it easy to show up.

But starting a project from scratch is a different kind of maintenance. There’s no existing culture to steward—you’re creating one. The project didn’t just need code. It needed a shared vocabulary, a contributor workflow, a feedback loop, an ideation process, a technical identity. And that had to be invented in parallel—in public, with contributors across the world. I made a lot of mistakes. By the time we launched [our alpha version in 2023](https://news.ycombinator.com/item?id=34999774), it was clear that this was a much bigger project than I originally thought it was, and that it was time to start thinking about long-term stewardship.

## “Nonprofits need a financial audit _every_ year?!”

We set up Mathesar Foundation (with [generous support from Reid Hoffman](https://mathesar.org/blog/2024/03/28/mathesar-foundation-announcement)) and now I’m both the project lead of Mathesar and CEO of the foundation. Mathesar has a team of full-time maintainers, and I don’t get to write much code anymore. I still review design and implementation specs, weigh in on architectural decisions, and at least glance at every single issue and PR on GitHub. But my day-to-day is now mostly product direction, fundraising, and long-term strategy—a different kind of maintenance.

Open source is often built for developers by developers. Mathesar isn’t. Our goal is to offer infrastructure for _end-users_ that has the full power and interoperability of Postgres, but with the flexibility and intuitive UI of a tool like Airtable. We’re also 100% open source (GPLv3 and no “open-core”), nonprofit, and the project is fully self-hostable. My job now isn’t just to lead the project—it’s to make the project sustainable over the long term _without compromising any of those parts_. If we pull it off, I hope it makes the same path easier for other projects.

Of course, it’s still hard to keep my hands off the repo. When GitHub released issue types a few months ago, I got very excited and impulsively decided to “improve” the repo. I deleted our “bug” and “enhancement” labels and replaced them with issue types. I thought everyone would appreciate the upgrade. Instead, I broke everyone’s GitHub CLI workflows, and we ended up having to undo it all.

## Personal reflections

I love that open source is shared by default. No gatekeeping, no judgment. Just: we made this, here it is, maybe it’ll help you. It gives people a focal point to build something good around. It lets ideas evolve without permission. And it gives people tools that they might never have had the resources to build on their own.

The strange part is that you rarely hear from the people you help. But sometimes you do—and it’s the best thing ever. A user sharing how they’ve been looking for something _exactly_ like Mathesar. A bug report that’s clear, thoughtful, and actually reproducible. A contributor who shows up out of nowhere with a PR that nails a tricky feature. A random Reddit post appreciating a tiny UX detail we spent three days on.

I still can’t believe I get to do this full time.

---

If anything here resonated—or if you just want to talk, I’d love to hear from you.

You can find me on GitHub at [@kgodey](https://github.com/kgodey), [LinkedIn](https://www.linkedin.com/in/kritigodey/), or reach me by email at [kriti@mathesar.org](mailto:kriti@mathesar.org).

_"The Long Way into Open Source" by Kriti Godey is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)._
