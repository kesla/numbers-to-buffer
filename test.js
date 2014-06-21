var test = require('tap').test
  , numbersToBuffer = require('./numbers-to-buffer')

test('UInt8', function (t) {
  t.deepEqual(
      numbersToBuffer.UInt8([0x3, 0x4, 0x23, 0x42])
    , new Buffer([0x3, 0x4, 0x23, 0x42])
  )
  t.end()
})

test('UInt16', function (t) {
  t.deepEqual(
      numbersToBuffer.UInt16BE([0xdead, 0xbeef])
    , new Buffer([0xde, 0xad, 0xbe, 0xef])
    , 'UInt16BE'
  )
  t.deepEqual(
      numbersToBuffer.UInt16LE([0xdead, 0xbeef])
    , new Buffer([0xad, 0xde, 0xef, 0xbe])
    , 'UInt16LE'
  )
  t.end()
})

test('UInt32', function (t) {
  t.deepEqual(
      numbersToBuffer.UInt32BE([0xdeadbeef])
    , new Buffer([0xde, 0xad, 0xbe, 0xef])
    , 'UInt32BE'
  )
  t.deepEqual(
      numbersToBuffer.UInt32LE([0xdeadbeef])
    , new Buffer([0xef, 0xbe, 0xad, 0xde])
    , 'UInt32LE'
  )
  t.end()
})

test('Int8', function (t) {
  t.deepEqual(
      numbersToBuffer.Int8([0x3, 0x4, 0x23, 0x42])
    , new Buffer([0x3, 0x4, 0x23, 0x42])
  )
  t.end()
})

test('Int16', function (t) {
  t.deepEqual(
      numbersToBuffer.Int16BE([32767, -32768])
    , new Buffer([0x7f, 0xff, 0x80, 0x00])
    , 'Int16BE'
  )
  t.deepEqual(
      numbersToBuffer.Int16LE([32767, -32768])
    , new Buffer([0xff, 0x7f, 0x00, 0x80])
    , 'Int16LE'
  )
  t.end()
})

test('Int32', function (t) {
  t.deepEqual(
      numbersToBuffer.Int32BE([-Math.pow(2, 31), Math.pow(2, 31) - 1])
    , new Buffer([0x80, 0x00, 0x00, 0x00, 0x7f, 0xff, 0xff, 0xff])
    , 'Int32BE'
  )
  t.deepEqual(
      numbersToBuffer.Int32LE([-Math.pow(2, 31), Math.pow(2, 31) - 1])
    , new Buffer([0x00, 0x00, 0x00, 0x80, 0xff, 0xff, 0xff, 0x7f])
    , 'Int32LE'
  )
  t.end()
})