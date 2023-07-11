---
title: ecedata
description: ETL pipelines for university data
dateStart: May 2019
dateEnd: present
image: /projects/ecedata.png
tags:
  - python
  - django
  - graphql
  - postgres
  - scraping
  - cli
  - graphene-python
  - lxml
  - selenium
  - camelot
  - shmmy
---

Python project that scrapes data from the website and documents of my university,
like course schedules, exams, and staff, and exposes them as a GraphQL API.

<!--more-->

I built this project as a developer in shmmy, a student community in the School
of Electrical and Computer Engineering of NTUA. The exposed data API serves as
foundation for other shmmy projects, like [studyplanner](./studyplanner.md) and
[Live Display](./shmmy-live-display.md), as well as third-party apps.

Features of ecedata include:
* ETL (extract, transform and load) pipelines that scrape the department website
to derive course information, lists of teaching and lab staff, and
staff-to-course assignments.
* Parsing the department's course schedule PDFs and loading the extracted data
into a database.
* Parsing and storing data from the exam schedule PDFs.
* Scraping the grades platform to track result dates and extract grade
statistics.
* A fuzzy matching algorithm for Named Entity Recognition of courses in
unstructured text, which is exposed as a query endpoint on the GraphQL API.
* A Django-based administration interface to review the data.
* A GraphQL explorer interface to try the API and build queries.
* CLI tools to trigger pipelines.

### Technical overview

#### Backend

* The :md-tag{tag="Django"} 3 framework provides an ORM (Object-Relational Mapping)
layer, user authentication, as well as a robust :md-tag{tag="CLI"} building
framework.
* :md-tag{tag="Graphene-Python"} is employed to build the :md-tag{tag="GraphQL"}
API.
* :md-tag{tag="PostgreSQL"} is used for the database.
* :md-tag{tag="lxml"} is a toolkit for high-performance parsing of web pages.
* :md-tag{tag="Selenium"} is a versatile scraping tool that automates web
browser interaction.
* :md-tag{tag="Camelot"} is a powerful Python library that allows us to extract
tables from the schedule PDFs.

Also, requests is used to send HTTP requests, and some string libraries like
editdistance to build the fuzzy matching algorithm.

#### Frontend

* The built-in content administration interface of Django is used to manage the
data, with some tweaks and additions.
