---
title: Shopify to Galaxy Integration
description: Ιntegration between e-commerce and ERP
dateStart: Mar 2021
dateEnd: Jun 2021
image: /projects/shopify-galaxy-integration.png
tags:
  - node.js
  - js
  - graphql
  - mssql
  - sql
  - erp
  - clustercis
links:
  - title: Demo
    upon_request: true
---

Application integration system for Shopify stores that synchronizes their product
catalogs and stock data with the Greek-market-oriented Galaxy ERP.

<!--more-->

My involvement in this [Cluster CIS](https://cluster.gr) project as a sole
developer included development, testing, deployment, and direct communication with
the clients throughout all the stages.

The system features highly frequent synchronization of the Shopify store with
the ERP products, attributes, categories, images, and stock quantities. This is
achieved through efficient GraphQL queries and data processing, and fine-tuned
batching and queueing.

### Technical overview

* Built with [Node-RED](https://nodered.org), a low-code development tool that
can be employed for crafting app integration and ETL pipelines.
* :md-tag{tag="Node.js"} functions are used to handle advanced data
transformation.
* Shopify data is fetched and updated with REST API calls and
:md-tag{tag="GraphQL"} queries.
* :md-tag{tag="MSSQL"} queries fetch the ERP data.
