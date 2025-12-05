---
title: Bones
---

# Bones

Here is your optimized **IT Business English** translation suitable for documentation on an open-source platform like GitHub:

---

The various *bones* defined by the ViUR Core are represented in the admin interface through corresponding widgets. These widgets are encapsulated by three different wrapper types:

* **Multiple**: Extends the widget with a drag-and-drop handle and a remove button.
* **Language**: Wraps the widget in a tabbed navigation interface, where each language is represented by its own tab.
* **Nested**: `usingSkel` and `recordBone` instances are wrapped in a nested wrapper that provides its own dedicated `viforms` instance.

In addition to these standard wrappers, which apply to all bones, some bones support specialized widgets that can be selected via the `type_suffix` option.

---


| BoneTyp | type_suffix | Description |
| --- | --- | --- |
| boolean | choose | uses radio buttons |
| boolean | select | uses a Dropdown |
| relational | select | uses a Dropdown |
| select | choose | uses radio buttons or checkboxes(multiple) |
