---
title: Chess Broadcaster
description: Web app
dateStart: Jan 2018
dateEnd: Dec 2019
image: /projects/chess-broadcaster.png
tags:
  - php
  - vue
  - jquery
  - bootstrap
---

Facilitates over-the-board games by broadcasting the moves live to the
tournament platform, chess24, and to a dedicated client device that presents the
game to on-site spectators.

<!--more-->

The project was developed and used internally by the
[&ldquo;Le Roi&rdquo; Chess Team](https://skakintua.gr) of the National
Technical University of Athens. It was employed to broadcast **3 university
tournament finals** in 2018 and 2019.

Also featured is a mobile web app that acts as a remote controller for the
display device.


### Technical overview

#### Backend

* Written in vanilla :md-tag{tag="PHP"}, the backend is responsible for fetching
PGN files that contain the game moves from the chess platform Lichess, where a
user is manually recording the game, and broadcasting it to the client app via
AJAX and to chess24 via an FTP integration.
* :md-tag{tag="AJAX"} also relays requests from the remote control to the
server, which are received by the display device via polling.
* :md-tag{tag="JSON"} is used as a minimal storage solution for the app state
and for configuration.

#### Frontend

* :md-tag{tag="Vue"} renders the client applications for the display device and
the remote controller device.
* :md-tag{tag="jQuery"} is used for some DOM manipulations, animations, and AJAX
calls.
* :md-tag{tag="Bootstrap"} provides UI components.
