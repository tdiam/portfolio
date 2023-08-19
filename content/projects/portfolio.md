---
title: Portfolio
description: Software engineer portfolio website
dateStart: Apr 2023
dateEnd: Aug 2023
image: /projects/portfolio.png
tags:
  - vue
  - nuxt
  - tailwind
  - vercel
  - markdown
links:
  - title: Repository
    url: https://github.com/tdiam/portfolio/
  - title: Website
    url: https://portfolio.tdiam.me/
---

The website you are reading now. Built from scratch with Vue and Nuxt, it
features a neat content structure based on Markdown files to showcase portfolio
projects and CV entries.

<!--more-->

Having a solid idea of how I wanted it to work and look, I decided to avoid
the temptation of using ready-made project templates or themes.

A paper and a pen were used for planning the site structure, while the UI design
up to the mockup level was crafted in Figma.

![Figma mockup of website](/img/202308_portfolio-mockup.png){.w-96.mx-auto}

Project pages, CV items, and tag descriptions are controlled by Markdown files
for easy content management, while a custom-built tag system helps link similar
content together.

::gallery

![Editing the Markdown file of this project page](/img/202308_portfolio-markdown.png){.w-96}
![Example page showing projects with tag "python"](/img/202308_portfolio-tags.png){.w-96}

::

### Technical overview

* Built with :md-tag{tag="Vue"}.
* :md-tag{tag="Nuxt"} 3 powers the app as a robust SSR and site generation
framework, using [Nitro](https://nitro.unjs.io) as the server engine.
* :md-tag{tag="Tailwind"} provides styling utilities.
* [Nuxt Content](https://content.nuxtjs.org) offers a powerful data layer based
on Markdown files and YAML front matter blocks.
* :md-tag{tag="Vercel"} orchestrates the deployment of the app.

Also, [vue-tippy](https://vue-tippy.netlify.app) is used for accessible
tooltips, and [Nuxt Image](https://image.nuxtjs.org) for optimizing image
sizes and rendering.
