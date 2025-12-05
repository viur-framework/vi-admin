---
title: Bone Parameters
---

# Bone Parameters
Bone parameters are used to pass instructions to the corresponding widgets and *viforms* instances.
Not all parameters are supported by every widget.

| Parameter | Value | Description |
| --- | --- | --- |
| **tooltip**             | `"Test Tooltip"`                  | Displays additional contextual information on the label, such as input guidance or helper text.                                   |
| **category**            | `"Contact"`                       | Groups bones under the specified category name.                                                                                   |
| **actions**             | `["describe_image", "translate"]` | Enables AI-powered actions, such as generating descriptions for *ImageBones* or translating multilingual *String* or *TextBones*. |
| **categoryDefaultName** | `"$(rel.name)"`                   | Sets the default category name for *Relational* and *RecordBones*. Format strings are supported.                                  |
| **collapsedCategories** | `["Contact"]`                     | Defines a list of categories that should be collapsed when the form is opened. `"*"` collapses all categories.                    |
| **evaluate**            | *Logics*                          | A Logics rule used to compute a value based on user input.                                                                        |
| **visibleIf**           | *Logics*                          | A Logics rule that hides the widget when the rule evaluates to `false`.                                                           |
| **requiredIf**          | *Logics*                          | A Logics rule that overrides the bone’s `required` flag.                                                                          |
| **readonlyIf**          | *Logics*                          | A Logics rule that overrides the bone’s `readonly` flag.                                                                          |

