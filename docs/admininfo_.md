---
title: Modulgruppen
---

# Modulgruppen (`vi.modules.groups`)

Die Einträge in `vi.modules.groups` beschreiben Modulgruppen und optionale Unteransichten im Viur-Admin. Beim Start lädt `TheMainScreen.vue` die Konfiguration aus `/vi/config` und legt sie im DB-Store ab (`sources/vi-admin/packages/vi-vue-components/src/screens/TheMainScreen.vue:61`). Anschließend erzeugt `modulesTree()` die Navigationsstruktur und reichert jede Gruppe bzw. jedes Modul mit zusätzlichen Feldern an (`src/stores/db.js:337`).

## Datenfluss

1. **Backend → Store:** Die Konfiguration wird aus einem der Schlüssel `admin.module.groups`, `module.groups`, `module_groups` oder `moduleGroups` übernommen (`src/screens/TheMainScreen.vue:74`).  
2. **Store-Aufbereitung:** `modulesTree()` ergänzt alle Gruppen um Metadaten wie `module`, `nodeType` und `moduleGroups` und sammelt zugehörige Module (`src/stores/db.js:337-349`).  
3. **Rekursive Aufbereitung:** `adminTreeLayer()` setzt Standardwerte, baut Navigations-URLs und Handler-Zuordnungen und sorgt für Zugriffs- und Sichtbarkeitsregeln (`src/stores/db.js:41-241`).  
4. **Verbrauch:** Komponenten wie `MenuTree.vue` rendern die Navigation anhand der angereicherten Einträge (`src/main/menubar/MenuTree.vue:2-19`), während Handler und Bones die Metadaten für weitere Logik nutzen (`src/handler/handlerLogic.js:72-139`, `src/bones/fileBone.vue:95-134`).

## Felder aus der Backend-Konfiguration

| Feld | Typ | Verwendung im Code | Werte / Hinweise |
| --- | --- | --- | --- |
| `name` | `string` (Pflicht) | Menütitel und Fallback für `sortIndex` (`src/stores/db.js:61-65`, `src/main/menubar/MenuTree.vue:9`) | Beliebiger Text; sollte eindeutig sein. |
| `sortIndex` | `string`/`number` | Bestimmt die Sortierreihenfolge; wird aus `name` generiert, wenn leer oder `0` (`src/stores/db.js:61-66`) | Optional. Eigene Werte erlauben explizite Reihenfolgen. |
| `display` | `string` | Steuert Sichtbarkeit und Verhalten: Standard `visible`; `group` erzeugt eine reine Überschrift; `hidden` blendet Eintrag aus (`src/stores/db.js:46-59`, `src/main/menubar/MenuTree.vue:16-19`, `src/main/menubar/TheMenubarItem.vue:185-188`) | Unterstützt `visible`, `group`, `hidden`. |
| `handler` | `string` | Bestimmt Routing & Handler-Komponente (siehe Tabelle unten) (`src/stores/db.js:104-204`) | Präfixe wie `list`, `list.grouped`, `tree`, `tree.node`, `tree.simple.file`, `singleton`, `list.fluidpage.content`. |
| `group` | `string` | Übergabe an Routen vom Typ `list.grouped*` und für Berechtigungsprüfungen (`src/stores/db.js:51-113`) | Optional; Standard `all`, wenn leer. |
| `moduleGroup` | `string` | Ordnet Eintrag einer übergeordneten Gruppe zu; Gruppen werden über Schlüssel miteinander verknüpft (`src/stores/db.js:345-349`) | Schlüssel ohne Präfix; muss zu anderem Group-Key passen. |
| `icon` | `string` | Wird durch `Utils.iconNormalization` normalisiert, um Icon-Bibliothek/-Pfad zu bestimmen (`src/stores/db.js:100-103`, `src/utils.js:124-210`) | Formate: `library___icon`, Viur-Icon-Name, alte Alias-Namen oder `/static/...`-Pfade. |
| `views` | `Array<object>` | Zusätzliche Unteransichten; werden als Kindknoten eingefügt und erben Standardwerte vom Elternknoten (`src/stores/db.js:226-236`) | Jeder View darf dieselben Felder wie das Elternmodul definieren. |
| `context` | `object` | Zusätzliche Kontextparameter; werden mit dem Elternkontext zusammengeführt (`src/stores/db.js:76-84`) und in Handlern ausgewertet (`src/handler/handlerLogic.js:72-138`) | Schlüssel wie `parentrepo` oder `@rootNode` steuern Baum-Handler. |
| `columns` | `Array<string>` | Spaltenliste für Baum-/Dateihandler (`src/stores/db.js:67-123`) | Optional; Standard `["name"]` für `tree.simple.file*`. |
| `kinds` | `object` | Metadaten für Baumknoten/Blätter (`src/stores/db.js:124-199`, `src/handler/TreeHandler.vue:360-428`) | Struktur `{ kindId: { icon, name, allowedChildren?, library? } }`. |

## Handler-Präfixe und erzeugte Ziele

| Handler-Präfix | Generierter Pfad | `handlerComponent` | Zusätzliche Defaults |
| --- | --- | --- | --- |
| *(leer)* | Kein Pfad → reine Gruppe | `null` | Entry fungiert als Container. |
| `list.fluidpage.content` | `/db/<module>/fluidpage` | `fluidpagehandler` | – |
| `list` / `list.*` | `/db/<module>/list` | `listhandler` | – |
| `list.grouped` / `list.grouped.*` | `/db/<module>/list/<group>` (Fallback `all`) | `listhandler` | `group` wird in Route & Berechtigung genutzt. |
| `tree.simple.file*` | `/db/<module>/tree` | `treehandler` | Setzt `columns=["name"]` und Standard-`kinds` für Datei/Ordner. |
| `tree` / `tree.*` | `/db/<module>/tree` | `treehandler` | Ergänzt fehlende `kinds` für Knoten/Blatt. |
| `tree.node` / `tree.node.*` | `/db/<module>/tree.node` | `hierarchyhandler` | Erzwingt `kinds.node` mit Standardwerten. |
| `singleton` / `singleton.*` | `/db/<module>/form` | `formhandler` | – |

Andere Handler-Werte müssen selbst eine `url` und passende Komponentenlogik bereitstellen, da der Store nur die oben genannten Präfixe automatisch abbildet.

## Abgeleitete Felder im Store

| Feld | Herkunft | Beschreibung |
| --- | --- | --- |
| `module` | Wird für Gruppen aus dem Schlüssel `moduleGroup___<name>` gebildet (`src/stores/db.js:341-344`) | Eindeutiger Identifier für Navigation & Routen. |
| `nodeType` | `"group"` oder `"module"` je nach Ursprung (`src/stores/db.js:344`, `src/stores/db.js:363`) | Erlaubt UI-spezifische Behandlung von Gruppen. |
| `moduleGroups` | Errechnet | Sammlung aller Untergruppen und Module, die dieselbe `moduleGroup` teilen (`src/stores/db.js:345-348`). |
| `children` | Errechnet | Enthält rekursiv alle sichtbaren Unterelemente (`src/stores/db.js:210-236`). |
| `parententry` / `parentrepo` | Errechnet | Benötigt von Menü & Handlern, Standard `parentrepo = "root"` (`src/stores/db.js:96-99`, `src/main/menubar/MenuTree.vue:11-13`). |
| `iconType` | Errechnet | Ergebnis der Icon-Normalisierung (`src/stores/db.js:100-103`). |
| `url` | Errechnet | Navigationsziel basierend auf `handler` (`src/stores/db.js:104-204`). |
| `handlerComponent` | Errechnet | Handler-Auswahl für Editor-/Listenkomponenten (`src/stores/db.js:104-204`, `src/bones/fileBone.vue:95-134`). |
| `hasAccess` | Errechnet | Berechtigungsflag anhand Benutzerrechten (`src/stores/db.js:46-55`), steuert Sichtbarkeit im Menü (`src/main/menubar/MenuTree.vue:76-81`). |
| `sortIndex` | Errechnet (Fallback) | Automatische Sortierung über Zeichencodes von `name` (`src/stores/db.js:61-66`). |
| `columns` / `kinds` | Errechnet (Fallback) | Standardwerte für Baumhandler (`src/stores/db.js:121-199`). |
| `view_number` & `view_layer` | Errechnet | Laufende Nummerierung für Views, wird als Query-Parameter angehängt (`src/stores/db.js:89-208`). |

> **Hinweis:** Die Objekte in `vi.modules.groups` werden vom Store mutiert. Wer die Rohdaten separat benötigt, sollte sie vor dem Aufruf von `modulesTree()` kopieren.

## Views (Unteransichten)

- Jedes View-Objekt wird wie ein eigenständiger Knoten behandelt, erbt jedoch Standardwerte und Kontext vom Elternknoten (`src/stores/db.js:71-94`, `src/stores/db.js:226-236`).  
- `view_number` dient als stabiler Identifier für Routen (`src/stores/db.js:206-208`). String-Gruppennamen werden vor dem Auflösen auf Index-Werte gemappt (`src/stores/db.js:392-395`).  
- Views unterstützen dieselben Felder wie Module/Groups, inklusive eigener Icons, Handler und Kontext.

## Zugriff & Sichtbarkeit

- `hasAccess` basiert auf Benutzerrechten im Format `<modulename>-<gruppe>-add|edit|delete` und wird beim Aufbau der Navigation gesetzt (`src/stores/db.js:18-55`).  
- Menüeinträge ohne Route (`display: "group"` oder fehlender `handler`) öffnen nur ihre Kinder (`src/main/menubar/TheMenubarItem.vue:185-188`).  
- Gruppen ohne sicht- oder zugreifbare Kinder werden automatisch auf `display: "hidden"` gesetzt (`src/stores/db.js:57-224`).

Diese Übersicht fasst alle Felder zusammen, die der Client aktuell aus `vi.modules.groups` auswertet, und hilft beim Erstellen oder Prüfen von Backend-Konfigurationen für Modulgruppen.
