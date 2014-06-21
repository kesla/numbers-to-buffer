var numbersToBuffer = require('./numbers-to-buffer')

console.log(numbersToBuffer.UInt16BE([0xdead, 0xbeef]))
console.log(numbersToBuffer.UInt16LE([0xdead, 0xbeef]))
