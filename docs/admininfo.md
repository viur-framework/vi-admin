---
title: Admin Info
---

# Admin Info

Administrative metadata for the Viur admin UI is aggregated via `/vi/config`.  
Within the `modules` payload each module exposes its own admin definition.

An admin definition only requires `name` and `handler` to be valid.

The admin frontend evaluates the following properties:

| Field | Values | Description | Example |
| --- | --- | --- | --- |
| `name` | String | Display name of the module inside the UI. | `"User"` |
| `handler` | `list`, `list.fluidpage.content`, `list.grouped`, `list.*`, `tree.simple.file`, `tree.node`, `tree.node.*`, `tree`, `tree.*`, `singleton`, `singleton.*` | Defines the handler component used to render the module. | `"list"` |
| `icon` | `${iconName}`, `${library}___${iconName}`, `/static/*` | Icon identifier; may reference Shoelace libraries or `/static/` SVG assets. | `"gear"`, `"myicons___star"`, `/static/site/svgs/icons/star.svg` |
| `columns` | `[String]` | Default column selection for list or tree handlers. | `["name","creationdate"]` |
| `filter` | Dict | Permanent filter added to handler requests. | `{"orderby":"sortindex"}` |
| `display` | `hidden`, `visible`, `group` | Controls sidebar visibility. `group` turns the entry into a container without its own view. | `"hidden"` |
| `moduleGroup` | String | Assigns the module to an existing module group. | `"manage"` |
| `sortIndex` | Integer | Lower values move the module higher in the sidebar; use steps of 10 for easier reordering. | `20` |
| `preview` | String, Dict | Preview URL. Strings may contain placeholders; dictionaries expose multiple named links. | `/{{module}}/view/{{key}}` |
| `disabledActions` | `[String]` | Actions that must be disabled for this module. | `["edit"]` |
| `actions` | `[String]` | Additional built-in actions to expose. | `["filter"]` |
| `customActions` | Dict | Map of action names to custom action definitions (see “Custom Actions”). | `{"name":"Test","action":"open","url":"https://www.viur.dev"}` |
| `views` | `[Dict]` | Optional child views rendered beneath the module, often with dedicated filters. | — |
| `editViews` | `[Dict]` | Adds extra tabs to create/edit forms per key/value pair. | — |
| `actionGroups` | Dict | Groups actions into named sections in the UI. | — |
