# numbers-to-buffer[![build status](https://secure.travis-ci.org/kesla/numbers-to-buffer.png)](http://travis-ci.org/kesla/numbers-to-buffer)

Convert numbers to a buffer

[![NPM](https://nodei.co/npm/numbers-to-buffer.png?downloads&stars)](https://nodei.co/npm/numbers-to-buffer/)

[![NPM](https://nodei.co/npm-dl/numbers-to-buffer.png)](https://nodei.co/npm/numbers-to-buffer/)

## Installation

```
npm install numbers-to-buffer
```

## Example

### Input

```javascript
var numbersToBuffer = require('./numbers-to-buffer')

console.log(numbersToBuffer.UInt16BE([0xdead, 0xbeef]))
console.log(numbersToBuffer.UInt16LE([0xdead, 0xbeef]))
```

### Output

```
<Buffer de ad be ef>
<Buffer ad de ef be>
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
