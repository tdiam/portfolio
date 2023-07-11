---
title: Starfish Library Reports
description: Web reporting tool
dateStart: Jan 2023
dateEnd: Apr 2023
image: /projects/starfish-library-reports.png
tags:
  - vue
  - pinia
  - typescript
  - tailwindcss
  - daisyui
  - github-actions
  - indexeddb
---

Client-side web app for generating spreadsheet reports for a library system.

<!--more-->

The project was made as part of my volunteering in Starfish Foundation, an NGO
working in Lesvos, Greece for refugee integration. After an operational audit of
the NGO projects, the reporting process of the Library project was identified as
the **optimal candidate to automate**.

The library is hosted on [LibraryThing](https://www.librarything.com/) and
[TinyCat](https://www.librarycat.org/), where data of book catalogs and
transactions are available for export as JSON and CSV.

The app was designed to run fully client-side with use of browser storage in
order to **minimize operational and maintenance costs**.

### Technical overview

* Built with :md-tag{tag="Vue"} and :md-tag{tag="TypeScript"}.
* :md-tag{tag="Pinia"} is used for state management.
* :md-tag{tag="Tailwind"} and :md-tag{tag="DaisyUI"} provide styling utilities
and UI components.
* :md-tag{tag="Vite"} serves as the build tool.
* :md-tag{tag="Github Actions"} orchestrate the deployment of the app to
GitHub pages.

Also, [JsStore](https://jsstore.net/) is used for IndexedDB operations, and
[Papaparse](https://www.papaparse.com/) for CSV parsing.
