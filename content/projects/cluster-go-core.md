---
title: Cluster GO:Core
description: WooCommerce plugin
dateStart: Aug 2020
dateEnd: present
image: /projects/cluster-go-core.png
tags:
  - php
  - wordpress
  - woocommerce
  - erp
  - jquery
  - bootstrap
  - css
  - drupal
  - gitlab
  - docker
  - bash
  - cluster
---

Enterprise plugin for WooCommerce stores that synchronizes their product
catalogs and sales data with a suite of supported Greek-market-oriented ERP
software.

<!--more-->

Cluster GO:Core is a product of [Cluster CIS](https://cluster.gr) used by **70+
businesses**, with flavors that support **3 ERP software solutions** that are
prominent in the Greek market.

My involvement as a **lead engineer** for the project includes code development,
oversight of contributions to the core and of the development of extensions,
and direct communication with clients.

Standout features include the efficient use of the WordPress/WooCommerce APIs
and the database &mdash;as opposed to other solutions that rely on costly
intermediary servers and storage&mdash; as well as an **extension system** for
addons and on-demand features.

### Technical overview

#### Backend

* :md-tag{tag="PHP"} with use of :md-tag{tag="WordPress"} APIs comprises the
most part of the backend.
* The GO:Core extension APIs build upon the WordPress hook system.
* The :md-tag{tag="WooCommerce"} REST API is used for CRUD operations on
WooCommerce entities.
* [Action Scheduler](https://actionscheduler.org/) provides a library for
scalable background processing.
* Synchronization with the ERP applications involves calling their HTTP JSON API
services.
* A subscription management system built on :md-tag{tag="Drupal"} accompanies
the product.

#### Frontend

* Custom theming with vanilla :md-tag{tag="CSS"} and minimal usage of
:md-tag{tag="Bootstrap"} utilities for the grid system.
* :md-tag{tag="jQuery"} and :md-tag{tag="AJAX"} are employed to build
interactive UI components.

Also, Select2 is used for powerful dropdown UIs, and wp.template for
Underscore.js style template rendering.

#### Tooling

* :md-tag{tag="Bash"} scripts are relied upon for building, making translations,
and deploying to local environments.
* :md-tag{tag="GitLab"} CI/CD pipelines orchestrate the build and release
processes with use of custom :md-tag{tag="Docker"} images.
* [PHP Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer) is used for linting.
* Documentation is built with [PHP Documentor](https://phpdoc.org/).
