# `milli`, fork of `ms`

Use this package to easily convert various time formats to milliseconds.

It should be compatible with all modern JS runtimes.

It is a fork of the original `ms` package, which is abandoned with the latest (canary) version release being almost 3 years old.

## Examples

```js
import { ms } from "milli"

ms("2 days")  // 172800000
ms("1d")      // 86400000
ms("10h")     // 36000000
ms("2.5 hrs") // 9000000
ms("2h")      // 7200000
ms("1m")      // 60000
ms("5s")      // 5000
ms("1y")      // 31557600000
ms("100")     // 100
ms("-3 days") // -259200000
ms("-1h")     // -3600000
ms("-200")    // -200
```

### Convert from Milliseconds

```js
import { ms } from "milli"

ms(60000)             // "1m"
ms(2 * 60000)         // "2m"
ms(-3 * 60000)        // "-3m"
ms(ms("10 hours"))    // "10h"
```

### Time Format Written-Out

```js
import { ms } from "milli"

ms(60000, { long: true })             // "1 minute"
ms(2 * 60000, { long: true })         // "2 minutes"
ms(-3 * 60000, { long: true })        // "-3 minutes"
ms(ms("10 hours"), { long: true })    // "10 hours"
```

## Features

- If a number is supplied to `ms`, a string with a unit is returned
- If a string that contains the number is supplied, it returns it as a number (e.g.: it returns `100` for `"100"`)
- If you pass a string with a number and a valid unit, the number of equivalent milliseconds is returned

## TypeScript

If you want to pass a `string` variable into `ms`, you will need a type coercion to `string`:

```ts
import { ms } from "milli"

ms("1h" as never)
```

This is because of the literal types used for DevX, so you get proper completion in your IDE.

You can also use `parse` instead, which is a less strict version of passing a string into `ms`.

## Advanced Usage

```ts
import { parse, format } from "ms"

parse("1h") // 3600000

format(2000) // "2s"
```

If you want strict type checking for the input value, you can use `parseStrict`.

```ts
import { parseStrict } from "ms"

parseStrict("1h") // 3600000

function example(s: string) {
  return parseStrict(str) // tsc error
}
```
