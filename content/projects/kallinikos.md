---
title: Kallinikos
description: Redesign of an algorithms wiki
dateStart: Oct 2017
dateEnd: Oct 2017
image: /projects/kallinikos.png
tags:
  - bootstrap
  - css
  - jekyll
  - jquery
  - js
---

Custom Jekyll responsive theme for Kallinikos, a crowd-sourced algorithms wiki.

<!--more-->

Kallinikos is a volunteer effort from current and alumni participants of the
Greek Informatics Competition for students. The wiki contains explanations,
visualizations and pseudocode for algorithms that are relevant to the
competition.

I was asked to **redesign** the website with a custom Jekyll theme that would be
**responsive** and mobile-friendly for displaying the wiki's tables and charts.

The home page was also **rebuilt** to have more dynamic elements and entice
users to discover the wiki's content.

### Technical overview

#### Backend

* :md-tag{tag="Jekyll"} and its templating language, Liquid, were used to build
the new home page.

#### Frontend

* Custom theming with vanilla :md-tag{tag="CSS"} and use of
:md-tag{tag="Bootstrap"} 4 UI components and utilities.
* :md-tag{tag="jQuery"} was employed to handle tables and charts responsively.

Also, Font Awesome was used to render some icons, and lodash's debounce utility
tohandle resize events gracefully.
