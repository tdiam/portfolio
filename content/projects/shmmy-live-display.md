---
title: shmmy Live Display
description: Campus info dashboard app
dateStart: Jul 2018
dateEnd: Jun 2021
image: /projects/shmmy-live-display.png
tags:
  - express
  - websocket
  - react
  - node.js
  - graphql
  - css
  - apollo
  - shmmy
  - lib-ece
links:
  - title: Demo
    upon_request: true
  - title: Source code
    upon_request: true
---

Web app displayed at a university monitor with live info about upcoming classes,
bus arrivals, weather data, and announcements.

<!--more-->

I built this project as a developer in shmmy, a student community in the School
of Electrical and Computer Engineering of NTUA, and as a staff member of the
school's library.

The app uses the [ecedata](./ecedata.md) API to fetch course class information,
the API of Athens' public transportation operator, OASA, to get bus arrivals
data, and DarkSky's API to show weather forecasts.

The website is displayed on a Raspberry Pi connected to a monitor in the
university library, and can also show library opening/closing messages or other
announcements.

### Technical overview

#### Backend

* Built on :md-tag{tag="Node.js"} and :md-tag{tag="Express"}, the backend acts
as a simple proxy server for the OASA and DarkSky APIs for token concealment.
* :md-tag{tag="WebSocket"} endpoints allow real-time communication between
server and client to publish the announcements.

#### Frontend
* Custom theming with vanilla :md-tag{tag="CSS"}.
* :md-tag{tag="React"} components are used to build the frontend UI.
* :md-tag{tag="Apollo"} acts as a :md-tag{tag="GraphQL"} client to fetch course schedule data.

Also, the project uses react-scripts for bundling.
