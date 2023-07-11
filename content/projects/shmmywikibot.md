---
title: shmmywikibot
description: Python script to edit MediaWiki content
dateStart: Jul 2018
dateEnd: present
image: /projects/shmmywikibot.png
tags:
  - python
  - graphql
  - mediawiki
  - cli
  - shmmy
links:
  - title: Source code
    upon_request: true
---

Python script for updating student-run university wiki with courses and exams
information.

<!--more-->

I built this project as a developer in shmmy, a student community in the School
of Electrical and Computer Engineering of NTUA. shmmy hosts a MediaWiki-based
wiki where students collaborate to write guides for courses, tracks, and life in
university in general.

The script updates a table in the wiki that tracks the exam dates and result
announcement dates for each course in the current exam period, with data from
[ecedata](./ecedata.md).

### Technical overview

* :md-tag{tag="Python"} comprises the codebase of this project.
* The [Click](https://click.palletsprojects.com/en/8.1.x/) package is employed
to build the :md-tag{tag="CLI"} of the bot.
* :md-tag{tag="GraphQL"} is used to query the courses and exams data from
ecedata.

Also, [mwclient](https://github.com/mwclient/mwclient) is used to run read and
write operations on the MediaWiki server.
