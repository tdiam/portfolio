---
title: Hop
description: Bash utility
dateStart: Mar 2019
dateEnd: Mar 2019
image: /projects/hop.png
tags:
  - bash
  - cli
---

Simple Bash utility for navigating quickly to pre-configured directories.

<!--more-->

I wrote this script at a time I was using terminal intensely for university
projects that involved navigating across multiple directories to run scripts and
daemons. It was also a prime opportunity to learn good Bash scripting practices
and how to implement autocomplete for a Bash CLI.

Eventually, I switched to [Autojump](https://github.com/wting/autojump) 😄️.

### Technical overview

The utility is written in plain :md-tag{tag="Bash"} and uses the programmable
completion feature of bash.

The list of navigable directories is read from a newline-separated text file,
while configuration options are set with environment variables.
