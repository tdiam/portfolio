---
title: Studyplanner
description: Web app for university students
dateStart: Jul 2018
dateEnd: Jun 2021
image: /projects/studyplanner.png
tags:
  - react
  - preact
  - tailwind
  - graphql
  - parcel
  - apollo
  - shmmy
links:
  - title: Website
    url: https://shmmy.ntua.gr/studyplanner
  - title: Repository
    url: https://lib.ece.ntua.gr/git/shmmy/studyplanner/
---

Tool for university students to view class schedules, select courses to attend,
and export them as calendar events.

<!--more-->

I built this project as a developer in shmmy, a student community in the School
of Electrical and Computer Engineering of NTUA.

The app draws data from [ecedata](./ecedata.md) for course information and class
schedules and allows users to build their personal schedule, share it with a
link, and export it in iCalendar format.

### Technical overview

* Built with :md-tag{tag="Preact"}, a fast alternative to :md-tag{tag="React"}
with the same API.
* :md-tag{tag="Tailwind"} provides styling utilities.
* :md-tag{tag="GraphQL"} requests via the :md-tag{tag="Apollo"} library are used 
to fetch data from the ecedata API.
* [storeon](https://github.com/storeon/storeon) is employed as a tiny state
management library.
* :md-tag{tag="Parcel"} serves as the build tool.

Also, [React Autosuggest](https://github.com/moroshko/react-autosuggest#installation)
is used as an accessible autosuggest component, and
[ics](https://www.npmjs.com/package/ics) to generate iCalendar files.
