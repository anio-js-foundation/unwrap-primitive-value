# @anio-js-core-foundation/unwrap-primitive-value

Unwrap value from a primitive object.

```js
import unwrapPrimitiveValue from "@anio-js-core-foundation/unwrap-primitive-value"

// prints "string" (not "object")
console.log(typeof unwrapPrimitiveValue(new String("abc")))
```
