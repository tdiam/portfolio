---
title: shmmy Freshers' Guide
description: Website for university students
dateStart: Jul 2018
dateEnd: present
image: /projects/shmmy-freshers-guide.png
tags:
  - php
  - docker
  - twig
  - mediawiki
  - docker compose
  - css
  - js
  - pjax
  - parcel
  - composer
  - bash
---

Web app that renders the wiki page of a student-written freshers' guide in a
modern and easily navigable UI.

<!--more-->

I built this project as a developer in shmmy, a student community in the School
of Electrical and Computer Engineering of NTUA.

shmmy hosts a MediaWiki-based wiki where students collaborate to write guides
for courses, tracks, and life in university in general, a part of which is the
Freshers' Guide for first-year students.

**Some key features** of the app are:
* The long text of the guide is split into "slides" for easy reading.
* Handy sidebar navigation.
* Intuitive keyboard navigation.
* Button to quickly edit the content.
* Instant content updates via a custom webhook installed on the wiki.

### Technical overview

#### Backend

* Mostly written in vanilla :md-tag{tag="PHP"}.
* :md-tag{tag="Twig"} provides the templating engine.
* [FastRoute](https://packagist.org/packages/nikic/fast-route) is used as a
minimal request router library.
* [simplehtmldom](https://packagist.org/packages/simplehtmldom/simplehtmldom)
is an HTML DOM manipulation library that is employed to parse the wiki content.
* :md-tag{tag="Composer"} manages the package dependencies.

#### Frontend

* Custom theming with vanilla :md-tag{tag="CSS"}.
* Vanilla :md-tag{tag="JS"} is used to implement the interactive components.
* :md-tag{tag="Pjax"} offers a snappy browsing experience by loading pages via
AJAX.
* :md-tag{tag="Parcel"} serves as the build tool.

Also, swipe-listener is used to detect swipe gestures, and a11y-dialog for
creating accessible dialog windows.

#### Tooling

* :md-tag{tag="Docker"} deployment is supported with a custom multi-stage
Dockerfile that builds an Apache-based container.
* A :md-tag{tag="Bash"} script is used to initialize the Docker container.
