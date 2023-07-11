---
title: Slack Deleter
description: Python CLI
dateStart: Sep 2020
dateEnd: Sep 2020
image: /projects/slack-deleter.png
tags:
  - python
  - cli
  - poetry
---

CLI tool to bulk delete messages from a Slack workspace.

<!--more-->

Born from a need to cleanup channels before team handovers, and a curiosity to
experiment with Slack's API and Slack app development, I wrote this Python CLI.

The tool allows two modes:
* Delete messages by list of IDs.
* Delete messages between specified timestamps.

### Technical overview

* :md-tag{tag="Python"} is used as the programming language, and the standard
library `argparse` to build the CLI.
* The [slackclient](https://pypi.org/project/slackclient) package (succeeded by
[Slack SDK](https://pypi.org/project/slack-sdk/)) provides Python bindings for
the Slack API.

Also, :md-tag{tag="poetry"} is used for dependency management.
