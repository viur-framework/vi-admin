---
title: Custom Actions
---
# Custom Actions
ViUR defines Custom Actions as various ways to integrate interactive buttons into a handler.
Since admin v4.9.0, the field **clientActions** can be used instead of **customActions** for defining actions.

The CustomAction definition is a dictionary that is mapped to an internal name, allowing it to be positioned under actions.

```python

def adminInfo(self):
  return {
      "name": "User",
      "actions"      : ["mycustomaction"],
      "customActions": {
          "mycustomaction": {"name":"Test","action":"open","url":"https://www.viur.dev"}
      }
  }
```

## Options

| Field | Description | Example |
| --- | --- | --- |
| name | Display name  | `My Action` | 
| access | A list of access fields  | `['root']` |
| icon | Icon definition | [See adminInfo](/admininfo/) |
| variant | Shoelace Button definition | [See Shoelace](https://serene-allen-537100.netlify.app/components/button/#variants) | 
| outline | Shoelace Button definition | [See Shoelace](https://serene-allen-537100.netlify.app/components/button/#outline-buttons) | 
| show_label | Allows displaying only the icon | `true` oder `false` |
| action | Must be one of the following values: `fetch`,`view`,`open`,`route`,`component`,`action` | [See below](#supported-actions) |
| url | External or internal URL, or a route within the Admin interface. | `/user/view/self` | 
| params | **Params** are used with the `view` action to pass additional parameters to the handler. | <code v-pre>`{'rootNode':"{{key}}"}`</code> | 
| target | Displays the action form in a popup instead of a tab. | `popup` | 
| fetch_method | Send action from as POST instead of GET | `POST` |
| enabled | Defines when the button is active. | `True` or Logics expression for selections |
| additionalEvalData | Additional data provided to the logics expressions to determine whether a button is enabled or disabled. | --- |
| then | Performs a module reload or vi reload after the action is executed. | `reload-module` or `reload-vi` |
| confirm | Enabled if defined a Confirm Popup with the defined text | `Are you sure?` | 
| success | Success Message | `Action was Successful` | 

## Supported Actions
Depending on the requirements, one of the following actions can be defined.

### fetch
Calls a URL specified under `url` within the project. The `fetch_method` is taken into account.
If an skey is required, it can be passed as a query parameter using a placeholder — for example:
<code v-pre>`/myendpoint?skey={{skey}}`</code>.

After a successful request, the `then` action is executed (if defined), and the `success` message is displayed (if defined).

### view
The `view` action refers to admin URLs, all located under `/db/`.
The current selection is passed along as context and also includes any parameters defined in the corresponding **CustomAction**.

### open
The `open` action can be used to open a URL in a new browser window.

### route
The `route` action is used to open a tab in the Admin interface at a specific path, for example: `/db/user/list`. Custom routes created through modifications to the Admin interface can also be accessed in this way.
The `name` and `icon` can be overridden by the values defined in the corresponding **customAction**.

### component
A component previously defined in an Admin modification can be used as a complete replacement for the button.
The component must include a prop named info, which receives the full customAction definition as its value.

### action
Allows a form action to be displayed either as a popup or within a tab.
`@viur_selected_keys` is included in the context when the action is executed.
