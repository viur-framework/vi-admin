---
title: ActionGroups
---
# Action Groups

A handler can contain multiple actions, which may cause the top bar in the handler to become cluttered.
To improve clarity, **ActionGroups** can be defined - these group multiple actions into a dropdown menu.
A group is marked with a **":" prefix** under **actions** and is positioned in the top bar just like any other action.


```python
adminInfo = {
  "actions": [":usermanage"],
  "actionGroups": {
    "usermanage": {
      "name"   : "Manage",
      "icon"   : "gear",
      "actions": [
          "trigger_kick",
          "trigger_takeover"
      ],
    }
  }
}


```