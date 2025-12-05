---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Viur Administration"
  text: ""
  tagline: The administration interface for Viur 3 systems
  image:
    src: /logo.svg
    alt: ViUR Administration
  actions:
    - theme: brand
      text: Admininfo
      link: /admininfo/
    - theme: alt
      text: Bone Parameters
      link: /bones/parameters

features:
  - title: Custom Actions
    details: ViUR defines Custom Actions as various ways to integrate interactive buttons into a handler.
    link: /admininfo/custom-actions
  - title: Edit Views
    details: To display entries that reference the currently opened document, so-called **EditViews** can be defined within a form.
    link: /admininfo/edit-views
  - title: Action Groups
    details: A handler can contain multiple actions, which may cause the top bar in the handler to become cluttered.
    link: /admininfo/action-groups
---

