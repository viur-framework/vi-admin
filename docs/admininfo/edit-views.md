---
title: EditViews
---
# Edit Views

ViUR can model complex, interconnected data structures through **relations**.
To display entries that reference the currently opened document, so-called **EditViews** can be defined within a form.
For example, when editing a user, an EditView can display all **ToDos** associated with that specific user.


```python
adminInfo ={
  editViews:{
    "name": "User Todos",
    "module": "todo",
    "context": "user.dest.key",
    "disabledActions": [],
    "columns": ["name","status"]
  }
}

```