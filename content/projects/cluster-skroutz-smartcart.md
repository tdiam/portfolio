---
title: Cluster Skroutz Integration
description: WooCommerce plugin
dateStart: Apr 2021
dateEnd: present
image: /projects/cluster-skroutz-integration.png
tags:
  - php
  - wordpress
  - woocommerce
  - webhooks
  - jquery
  - ajax
  - css
  - gitlab
  - docker
  - bash
---

WooCommerce plugin that syncs sales data from Skroutz.gr, a Greek marketplace,
and enables full management of such orders through WooCommerce, thus simplifying
and speeding up operations.

<!--more-->

Orders are synced in nearly real-time with the use of Skroutz.gr's webhook API,
and users are able to read the order's information, accept or reject it or
specific items thereof, print shipment tracking codes, and more.

WooCommerce Skroutz Smart Cart is a product of [Cluster CIS](https://cluster.gr)
and my role as a **lead engineer** for the project includes code development and
code review.

### Technical overview

#### Backend

* The plugin is built on :md-tag{tag="PHP"} and the :md-tag{tag="WordPress"}
APIs.
* The :md-tag{tag="WordPress"} REST API is used to build endpoints that process
the webhook requests.
* The :md-tag{tag="WooCommerce"} REST API helps us create and update orders.

#### Frontend

* Custom theming with vanilla :md-tag{tag="CSS"}.
* :md-tag{tag="jQuery"} and :md-tag{tag="AJAX"} are employed to build
interactive UI components.

Also wp.template provides Underscore.js style template rendering.

#### Tooling

* :md-tag{tag="Bash"} scripts are relied upon for building, making translations,
and deploying to local environments.
* :md-tag{tag="GitLab"} CI/CD pipelines orchestrate the build and release
processes with use of custom :md-tag{tag="Docker"} images.
