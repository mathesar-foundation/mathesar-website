---
layout: post
title:  "PGConf India 2024"
tags: conference
date: 2024-04-09
author: pavish_kumar_ramani_gopal
description: "Brief description of the post."
image: /path/to/featured/image.jpg
---

Last November, I came across a post about PGConf India. It wasn't the first time I had heard of PGConf India, just the year before that, one of my friends had asked me if I wanted to attend the conference with them. I wasn't able to attend the conference back then but it did come as a suprise that there was a large enough community in India surrounding PostgreSQL that a multi-day conference was being well received.

Trying to assess if I should attend the 2024 conference, I went through their website and the talks from 2023. I watched some of the videos of the talks posted on their site. The topics were all quite interesting, and I was also excited by the fact that the PostgreSQL Global Development Team had a regular presence at the event, including Bruce Momjian a.k.a the bearded santa of the PostgreSQL Global Development Team as they affectionately referred to him.

Having decided to attend the conference, it occurred to me, why not submit a proposal for a talk since it had Call for Proposals open. We were building Mathesar on top of PostgreSQL and Mathesar aims to solve a huge problem faced by the community, bringing accessibility to PostgreSQL to users of all skill levels. I thought it might help to talk about the things I've learn't during this journey, and so I submitted a proposal titled 'Making PostgreSQL accessible to your non-technical colleagues'. 

I wasn't highly optimistic that the proposal would be accepted since all the talks from the previous years were technical and mostly related to PostgreSQL internals. It came as a pleasant surprise when it was. It was during the event, I would come to know that the talk was one of the few that were accepted out of 150+ proposals. It was encouraging to see that the community valued problems, products, and solutions at every level of the ecosystem instead of purely focusing on the database engine and internals.

The conference was for two days on the 29th Feb and 1st March 2024 and one of my colleagues, Anish, joined me for it. One thing that stood out to me immediately was Microsoft's involvement towards PostgreSQL development and the conference (they were the top sponsor), I did not see this coming at all. It made me happy. There were also some hush-hush rumors around Oracle being interested in sponsoring other Postgres related events with the introduction of Oracle cloud. I'm not going to add a personal comment on this. I guess it has become painfully obvious that it's hard to beat well-maintained open source software.

The talks were quite informative and as interesting as I had hoped, following are some of the talks that stood out to me.

I loved learning about the current features that are in development and recent new features in the PostgreSQL engine world, particularly the talks "Incremental Backup for PG17" by Robert Haas and "Roasted Toasted Json" by Nikita Malakhov.

There were a number of talks focused around vector search in Postgres and the pg_vector extension. These are indicative of PostgreSQL's insane flexibility and adaptability allowing it to work well with new and upcoming technologies, LLMs in this case. It made me appreciate the importance the entire extention based architecture that is at the core of PostgreSQL, even more than I already did.

There were a few talks on GIS and PostGIS as well. While I'm personally interested in GIS, I didn't know the general interest on it was this popular. One of the talks I attended was "Using PostgreSQL and PostGIS for climate resilent agriculture" by Sameer Mannava, which showcased how PostgreSQL and PostGIS are being used to store and analyze hourly rainfall information that helps the Maharashtra Department of Agriculture to take critical decisions. I believe talks like this are important in bringing awareness among government officials on utilizing FOSS technologies to reduce cost and increase value.

I also enjoyed the talk on "Most Common Mistakes and the Cost of Mistakes One Should Be Aware" by Jobin Augustine. The number of companies using the default postgres superuser role and barely exploring roles is a major concern and frankly completely not suprising. The lightning talks on both days were fun, I really enjoyed the one by Deepak Mahto on "Why I love psql command line". 

There was a round table discussion on the Future of Postgres, which was quite interesting to listen to.

I had casual coversations with a number of attendees and speakers during the two days and this networking aspect was a big plus the conference offered the attendees. There were participants from 10 countries and 61 different cities, working across different sectors with various experience levels. It was helpful connecting with them and talking about things they were building as well as being able to talk about Mathesar and hearing their thoughts. All of them had positive reactions towards Mathesar, some even expressed interest in trying to get Mathesar to work with things they were building, including Yugabyte. This was quite encouraging considering that Mathesar is still in alpha, at the time I'm writing this blog post.

My talk was on the second day and it was focused on how databases being around for over six decades and PostgreSQL being around for 35+ years are still inaccessible to non-IT people that work with data almost everyday, and the problems that bring to organizations. I was grateful to find so people at the conference that related to this problem and were interested in what I had to say. I got a lot of curious questions and suggestions towards the end of my talk and it was all super helpful. You can watch my talk here. 

Overall, my experience at PGConf India 2024 was quite pleasant and extremely valuable. The high level of interest towards Postgres and the conference among the Indian tech crowd was encouraging. Needless to say, I will be attending the conference again next year.
