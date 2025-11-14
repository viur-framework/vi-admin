# Changelog

This file documents any relevant changes.

## [4.13.0] 2025-11-14
- feat: `recordbones` and `relationalbones` can now use a `categoryDefaultname` parameter to override the default category; format strings are supported.
- feat: Format strings for `recordbones` no longer need to start with `dest.`
- feat: The `Translate` bone action now uses the currently selected language instead of the next available one.
- feat: `raw.code.jinja` Bones can now be used to integrate CodeMirror within forms (additional languages are supported).
- feat: Right-clicking on cells in the `ListHandler` now opens a context menu to copy the value.
- feat: Logging out now automatically closes all open tabs.
- fix: Hierarchy tabs could break when switching between them.
- fix: Column resizing in the `ListHandler` now works correctly.



## [4.12.1] 2025-11-06
- fix: Editforms now working again

## [4.12.0] 2025-11-03
- feat: Users with view-only access can now open forms in read-only mode.
- feat: The debug flag now enables display of the bonename as a tooltip and adds further debug information for forms.
- fix: The loading spinner for forms is now shown on the initial load as well.
- feat: Scriptor now supports system messages.


## [4.11.3] 2025-10-28
- fix: relational contexts now can have non string values

## [4.11.2] 2025-10-10

- doc: The changelog is now mandatory for every release
- feat: relationalbone contexts now can handle formatstrings