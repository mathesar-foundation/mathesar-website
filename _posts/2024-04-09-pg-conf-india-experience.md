---
layout: post
title:  "PGConf India 2024"
tags: conference
date: 2024-04-09
author: pavish_kumar_ramani_gopal
description: "Pavish shares his experience attending and presenting a talk at PGConf India 2024"
image: /path/to/featured/image.jpg
---

Last November, I came across a post about PGConf India. The year before that, one of my friends had asked me if I wanted to attend the conference with them. I wasn't able to attend it back then, but I was happy to see a large community in India around PostgreSQL and the fact that a multi-day conference was being well received.

Trying to assess if I should attend the 2024 conference, I went through their website and the videos of talks from 2023. The topics were quite interesting and I was excited by the fact that the PostgreSQL Global Development Team had a regular presence at the event, including Bruce Momjian a.k.a the bearded santa of the PostgreSQL Global Development Team as they affectionately referred to him.

Having decided to attend the conference, I wondered why not submit a proposal for a talk as they still had CFPs open. We're building Mathesar aiming to solve a huge problem faced by the PostgreSQL community in bringing accessibility to users of all skill levels, and we've had a learn a number of things about database usage and user accessibility during this journey. I thought people might find it useful if I talked about it and I submitted a proposal titled 'Making PostgreSQL accessible to your non-technical colleagues'. 

Most talks from the previous years were technical and related to PostgreSQL internals, so I wasn't optimistic that the proposal would be accepted, and it came as a pleasant surprise when it was. It was during the event, I would come to know that my talk was one of the few that were picked out of 150+ proposals. It was encouraging to see that the organizers valued problems, products, and solutions at every level of the ecosystem and audiences.

The conference was for two days, 29th Feb and 1st March 2024. One of my colleagues, Anish, joined me for it. It was also the first time Anish and I were meeting in person, and I was excited about the mini-Mathesar meetup. The venue was easy to locate and the conference began with great introductions.

One thing that stood out to me was Microsoft's involvement in PostgreSQL development and that they were the top sponsor of the conference. I did not see this coming at all and it made me happy. There were also some hush-hush rumors around Oracle Cloud looking to sponsor other Postgres related events. I guess it has become painfully obvious that it's hard to beat well-maintained open source software and you get better returns supporting it.

The talks were informative and as absorbing as I had hoped. There were three tracks with concurrent talks and I had to make some hard choices.

I loved learning about the current features that are in development and recent new features in the PostgreSQL engine world, particularly the talks, "Incremental Backup for PG17" by Robert Haas, and "Roasted Toasted Json" by Nikita Malakhov.

There were a number of talks focused around vector search in Postgres and the pg_vector extension. These indicated PostgreSQL's insane flexibility and adaptability allowing it to work well with new and upcoming technologies, LLMs in this case. It made me appreciate the importance the extention based architecture that is at the core of PostgreSQL, even more than I already did.

There were a few talks on GIS and PostGIS. While I'm personally interested in GIS, I didn't know the general interest on it was this high. One of the talks I attended was "Using PostgreSQL and PostGIS for climate resilent agriculture" by Sameer Mannava, which showcased how PostgreSQL and PostGIS are being used to store and analyze hourly rainfall information that helps the Maharashtra Department of Agriculture to take critical decisions. I believe talks like this are important in bringing awareness among government officials on utilizing FOSS technologies to reduce cost and increase value.

The talk on "Most Common Mistakes and the Cost of Mistakes One Should Be Aware" by Jobin Augustine shed light on a lot of real-life mistakes of people working with PostgreSQL. The number of companies using the default postgres superuser role and barely exploring roles is a major concern and frankly not at all suprising. The lightning talks on both days were fun, I really enjoyed the one by Deepak Mahto on "Why I love psql command line". There was a round table discussion on the Future of Postgres, which was quite interesting to listen to.

I had casual coversations with a number of attendees and speakers during the two days and this networking aspect was a big plus the conference offered the attendees. There were participants from 10 countries and 61 different cities, working across different sectors with various experience levels. It was great connecting with them, talking about things they were building, and being able to talk about Mathesar and hearing their thoughts. All of them had positive reactions towards Mathesar, some even expressed interest in trying to get Mathesar to work with things they were building, including Yugabyte. This was encouraging considering that Mathesar is still in alpha, at the time I'm writing this blog post.

My talk was on the second day and it was focused on how databases have been around for over six decades and PostgreSQL for 35+ years and are yet still inaccessible to non-IT people that work with data almost everyday. I also emphasized on the organizational problems created by this inaccessibility. I was grateful to find people at the conference that related to this problem. A number of curious questions and suggestions came my way at the end of the talk and they were all super helpful. You can [watch my talk here](https://pgconf.in/conferences/pgconfin2024/program/proposals/613). 

Overall, my experience at PGConf India 2024 was wholly pleasant and valuable. The high level of engagement towards Postgres and PGConf India among the Indian tech crowd was astounding. Needless to say, I will be attending the conference again next year.
