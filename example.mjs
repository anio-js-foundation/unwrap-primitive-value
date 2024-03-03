import unwrapPrimitiveValue from "./src/index.mjs"

// prints "string" (not "object")
console.log(typeof unwrapPrimitiveValue(new String("abc")))
