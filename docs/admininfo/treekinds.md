---
title: Treekinds
---
# Tree kinds

Der Tree handler bietet nodes und leafs. Die Standard definition bietet die möglichkeit beliebige nodes zu schachteln und mit leafs zu bestücken. Zusätzlich können name und icon nach belieben angepasst werden. Sollte im Skeleton ein feld kind definiert worden sein, kann über node.{kind} verwendet werden. Auf diese Weise können manche nodes nur in einander geschahtelt werden wenn es logisch sinnd macht. z.B. Etagen in Gebäude.  

```python
  adminInfo = {
    "kinds": {
      node: { icon: "folder", name: "Folder", allowedChildren: ["leaf", "node"] },
      leaf: {
        icon: "file-earmark",
        name: "File",
        allowedChildren: null,
      }
    }
  }
         
```