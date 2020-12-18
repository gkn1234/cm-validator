// Validator类的静态方法，主要为判断类别，验证函数
const validate = {
  // 获取对象类型
  getType (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
  },
  
  // 是否为数字类型，不排除NaN，Infinity
  isNumber (obj) {
    return validate.getType(obj) === 'Number'
  },
  // 是否为具体的数字，不包括NaN和Infinity
  isValidNum (obj) {
    return validate.isNumber(obj) && !Number.isNaN(obj) && obj !== Infinity && obj !== -Infinity
  },
  
  // 是否为字符串
  isString (obj) {
    return validate.getType(obj) === 'String'
  },
  // 检查字符串是不是数字字符串，不包括NaN和Infinity
  isNumString (obj) {
    return validate.isString(obj) && validate.isValidNum(Number(obj))
  },
  
  // 是否为数组
  isArray (obj) {
    return validate.getType(obj) === 'Array'
  },
  
  // 是否为对象
  isObject (obj) {
    return validate.getType(obj) === 'Object'
  },
  
  // 是否为函数
  isFunction (obj) {
    return validate.getType(obj) === 'Function'
  },
  
  // 是否为布尔
  isBool (obj) {
    return validate.getType(obj) === 'Boolean'
  }
}

module.exports = validate