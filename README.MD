# akf-ascii
A text-to-ascii conventer.

```js
const ascii = require("akf-ascii");

// basic usage:
console.log(ascii("akif"))
//   *   *   * *** *****
//  * *  *  *   *  *
// *   * ***    *  *****
// ***** *  *   *  *
// *   * *   * *** *


// advanced usage:
console.log(ascii.join([
    ascii("akif").split("\n"),
    ascii.chars["q"]
]).join("\n"))

//   *   *   * *** ***** *****
//  * *  *  *   *  *     *   *
// *   * ***    *  ***** * * *
// ***** *  *   *  *     *  *
// *   * *   * *** *     *** *

```