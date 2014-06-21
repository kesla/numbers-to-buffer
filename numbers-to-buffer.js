var factory = function (method, size) {
      return function (array) {
        var buffer = new Buffer(array.length * size)
          , i = 0

        for(; i < array.length; i++)
          buffer[method](array[i], i * size)

        return buffer
      }
    }

module.exports = {
    UInt8: factory('writeUInt8', 1)
  , UInt16LE: factory('writeUInt16LE', 2)
  , UInt16BE: factory('writeUInt16BE', 2)
  , UInt32LE: factory('writeUInt32LE', 4)
  , UInt32BE: factory('writeUInt32BE', 4)
  , Int8: factory('writeInt8', 1)
  , Int16LE: factory('writeInt16LE', 2)
  , Int16BE: factory('writeInt16BE', 2)
  , Int32LE: factory('writeInt32LE', 4)
  , Int32BE: factory('writeInt32BE', 4)
}