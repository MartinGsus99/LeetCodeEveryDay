/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
//错误：没检查null且没转换为obj
var checkIfInstanceOf = function (obj, classFunction) {
  return obj instanceof (classFunction) ? true : false
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || !(classFunction instanceof Function))
    return false
  return Object(obj) instanceof classFunction
};

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (classFunction == null) return false;
  while (obj != null) {
    if (obj.__proto__ === classFunction.prototype) return true;
    obj = obj.__proto__;
  }
  return false;
};

