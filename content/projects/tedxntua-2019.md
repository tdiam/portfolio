---
title: TEDxNTUA 2019
description: Event website
dateStart: Oct 2018
dateEnd: Mar 2019
image: /projects/tedxntua-2019.png
tags:
  - python
  - django
  - bootstrap
  - three.js
  - jquery
  - mysql
  - sql
  - css
  - scss
  - js
  - pylint
  - webpack
  - apache
  - passenger
links:
  - title: Website
    url: https://2019.tedxntua.com
  - title: Repository
    url: https://github.com/TEDxNTUA/tedxntua2019
---

Event website built on Django, with information about the conference speakers,
schedule, sponsors, and more, enhanced with content management utilities.

<!--more-->

My involvement as a member of the IT Team of TEDxNTUA included:
* Mainly backend development; building the :md-tag{tag="Django"} codebase
(models, templates and views), and extending the default admin interface to suit
the project's needs.
* Undertaking sysadmin and deployment responsibilities.
* Some frontend work, like designing and building the UI for the conference
schedule, and turning the event's logo into a :md-tag{tag="Three.js"} animation.

### Technical overview

#### Backend
* Built on :md-tag{tag="Python"} and :md-tag{tag="Django"}, which comes with
user authentication, Object-Relational Mapping (ORM), templating, admin
interface features, and more, out of the box.
* :md-tag{tag="MySQL"} is used as the database.
* :md-tag{tag="Pylint"} helps with code linting.

Also, [Django Parler](https://github.com/django-parler/django-parler) is used
for internationalization and
[django-versatileimagefield](https://github.com/respondcreate/django-versatileimagefield)
for auto-generation of image-size variants.

#### Frontend
* Custom theming with vanilla :md-tag{tag="CSS"} (with :md-tag{tag="SCSS"} syntax).
* Usage of :md-tag{tag="Bootstrap"} utilities for the grid system.
* :md-tag{tag="jQuery"} was employed as a DOM manipulation library.
* :md-tag{tag="Three.js"} was used for visual animations.
* :md-tag{tag="Webpack"} served as the build tool.

#### Infrastructure
* :md-tag{tag="Apache"} + :md-tag{tag="Passenger"} function as the web server.
* A basic Continuous Deployment (CD) setup with Git and cron jobs runs on the
server.
