# Changelog

This file documents any relevant changes.

## [4.15.0] 2026-09-04
- feat: Support for the envelope-v2 response format — v2 bodies are normalized to the classic shape, so both v1 and v2 backends are served.
- feat: Forms now support multi-step actions, with slots for steps, actions and list rendering.
- feat: The scriptor can run up to three scripts in parallel and reuses warm python environments.
- refactor: Structures are now fetched from `/{module}/structure`; the deprecated `getStructure` endpoint is no longer used.
- fix: Custom action fetch errors are now handled gracefully.

## [4.14.8] 2026-07-29
- feat: `OrderEditor` now supports order notes and discounts.
- feat: The export component now offers filter functionality.
- fix: Empty or null fields in a format string no longer fall back to the placeholder text.
- fix: Search now resets on context switch and on unmount, and results are sorted by their rendered values.
- fix: Added a null check for `ensureKeys`.
- perf: The default `textBone` (CKEditor) is now lazy-loaded.

## [4.14.7] 2026-06-29
- fix: missing format-number import

## [4.14.6] 2026-06-08
- feat: Initial shop order management component — `OrderEditor`.
- feat: `spatialBone` now supports `visibleIf` and reactively syncs its value with the form state — emits `null` when hidden so the value is cleared on submit.


## [4.14.5] 2026-05-22
- fix: trees and context now work as expected
- feat: details wrapper vor multiple bones


## [4.14.4] 2026-03-13
- feat: Add export functionality with multiple formats (via `@viur/vue-components` update).
- refactor: Improve null safety and dedup selection logic for Fluidpages (via `@viur/vue-components` update).

## [4.14.3] 2026-02-13
- fix: Nested `moduleGroups` are now correctly hidden when empty.
- feat: The Fluidpage view can now display data from the underlying page.
- fix: Root node requests in TreeHandlers within edit views now correctly receive the context.
- fix: The copy button in list context menus (right-click) now works as expected.


## [4.14.2] 2026-01-26
- fix: Administation `user-view` access is not nessesary anymore - now realy.
- chore: Update flag for English to UK

## [4.14.1] 2026-01-23
- fix: When custom actions are enabled via configuration, additionalEvalData is now merged over the skel selection.
- chore: update logicsjs to 0.4.1
- fix: Moduleinfo headlines now use the correct font size.
- fix: Administation `user-view` access is not nessesary anymore.
- fix: Password reset form is now correctly displayed.

## [4.14.0] 2026-01-16
- feat: added multilanguage support.
- fix: Detaisdrawer styling


## [4.13.2] 2026-01-09
- fix: Relational bars for Tree Handlers now behave as expected.
- fix: Time-only DateBones now behave as expected.
- fix: Improved error handling for Forms.
- fix: Save and Reset actions for field selection.
- fix: Added a cooldown to search to prevent rapid repeated requests.
- fix: “Edit” in `DisabledActions` now opens list entries in view mode.


## [4.13.1] 2025-12-05
- fix: Column scaling now works correctly.
- fix: Emailbone focus in Recordbones now behaves as expected.
- fix: Edits now display an error when an entry cannot be loaded.
- fix: `categoryDefault` override handling is now more stable.
- fix: Users with insufficient access rights are now handled more gracefully.
- feat: Recordbones without a `categoryDefaultname` parameter now fall back to the format string as the default category name.


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
