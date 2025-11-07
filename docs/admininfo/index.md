---
title: Admin Info
---

# Admin Info

The administrative metadata for the Viur Admin user interface is delivered via `/vi/config`.
Within the module payload, each module provides its own admin definition.

An admin definition only requires `name` and `handler` to be valid.

The admin frontend evaluates the following properties:

| Field | Values | Description | Example |
| --- | --- | --- | --- |
| `name` | String | Display name of the module inside the UI. | `"User"` |
| `handler` | `list`, `list.fluidpage.content`, `list.grouped`, `list.*`, `tree.simple.file`, `tree.node`, `tree.node.*`, `tree`, `tree.*`, `singleton`, `singleton.*` | Defines the handler component used to render the module. | `"list"` |
| `icon` | `${iconName}`, `${library}___${iconName}`, `/static/*` | Icon identifier; may reference Shoelace libraries or `/static/` SVG assets. | `"gear"`, <br>`"myicons___star"`, <br>`/static/site/svgs/icons/star.svg` |
| `columns` | `[String]` | Default column selection for list or tree handlers. | `["name","creationdate"]` |
| `filter` | Dict | Permanent filter added to handler requests. | `{"orderby":"sortindex"}` |
| `display` | `hidden`, `visible`, `group` | Controls sidebar visibility. `group` turns the entry into a container without its own view. | `"hidden"` |
| `moduleGroup` | String | Assigns the module to an existing module group. | `"manage"` |
| `sortIndex` | Integer | Lower values move the module higher in the sidebar; use steps of 10 for easier reordering. | `20` |
| `preview` | String, Dict | Preview URL. Strings may contain placeholders; dictionaries expose multiple named links. | <code v-pre>`/{{module}}/view/{{key}}`</code> |
| `disabledActions` | `[String]` | Actions that must be disabled for this module. | `["edit"]` |
| `actions` | `[String]` | Additional built-in actions to expose. | `["filter"]` |
| `views` | `[Dict]` | Optional child views rendered beneath the module, often with dedicated filters. | - |
| `customActions` | Dict | Map of action names to custom action definitions. | [Check the sidebar for details](/admininfo/custom-actions) |
| `editViews` | `[Dict]` | Adds extra tabs to create/edit forms per key/value pair. | [Check the sidebar for details](/admininfo/edit-views) |
| `actionGroups` | Dict | Groups actions into named sections in the UI. | [Check the sidebar for details](/admininfo/action-groups) |
| `kinds` | Dict | Defines icons, name, and nesting behavior for trees. | [Check the sidebar for details](/admininfo/treekinds) |


<style scoped>
table td:nth-child(2),
table th:nth-child(2) {
  width: 100px;
}

table td:nth-child(3),
table th:nth-child(3) {
  width: 400px;
}

table td:nth-child(4),
table th:nth-child(4) {
  max-width: 300px;
  overflow: hidden; 
}
</style>