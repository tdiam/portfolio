---
title: Blitz Arena Manager
description: Chess tournament manager app
dateStart: Jul 2018
dateEnd: Feb 2020
image: /projects/blitz-arena-manager.png
tags:
  - node.js
  - express
  - vue
  - pinia
  - postgres
  - typescript
  - postgresql
  - sequelize
  - vite
  - vuex
  - webpack
links:
  - title: Demo
    upon_request: true
  - title: Source code
    upon_request: true
---

A full-stack web application designed for conducting over-the-board blitz chess
tournaments, featuring interfaces for tournament administrators, players, and
digital signage.

<!--more-->

The project was developed for the [&ldquo;Le Roi&rdquo; Chess Team](https://skakintua.gr)
of the National Technical University of Athens. It was used to run **2 open
university tournaments** as well as **3 commercial tournaments** for the
[Athens Chess Club](https://athens-chess-club.business.site/), hosting over 20
players at a time and hundreds of games in total.

#### Smart pairing

Blitz arena tournaments were popularized in online chess platforms as fast paced
competitions with nonstop pairings instead of predesignated rounds.

Our team developed a novel format that brings arenas into the world of
over-the-board tournaments and employs a smart **live pairing system** which
takes into account the players' global Elo rating, their tournament points, and
the time elapsed since their last pairing among other factors, to produce
interesting and competitive games.

### Technical overview

#### Backend

* Built with :md-tag{tag="Node.js"} and :md-tag{tag="TypeScript"}, the project also uses the :md-tag{tag="Express"} 
framework for the REST API.
* :md-tag{tag="PostgreSQL"} is used for the database, along with SQL triggers to
calculate the player points and stats, and ensure data consistency.
* :md-tag{tag="Sequelize"} v6 and Sequelize TypeScript provide the ORM
(Object-Relational Mapping) layer and abstractions to define models.

Also, memory-cache is used for page caching, Luxon (the successor of moment.js)
for datetime manipulation, and winston for logging.

#### Frontend

* :md-tag{tag="Vue"} is the frontend framework of the app (initially written in Vue 2 and
later migrated to Vue 3) with a TypeScript codebase and employment of class
components and decorators.
* :md-tag{tag="Pinia"} is used for state management (migrated from :md-tag{tag="Vuex"}).
* Bootstrap Vue offers UI components built with Bootstrap.
* :md-tag{tag="Vite"} serves as the build tool (migrated from :md-tag{tag="Webpack"}).

Also, mande is used for API requests, Mozilla's Fluent library for
internationalization (Greek and English interfaces), and Luxon for datetime
manipulation.
