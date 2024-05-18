---
"milli": major
---

Removed default export.

To migrate, replace:

```js
// From
import ms from "milli"
// or
import ms from "ms"
```
```js
// To
import { ms } from "milli"
```
