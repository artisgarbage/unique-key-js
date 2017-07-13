/**
 *
 * @class
 * @classdesc Factory class that exposes utility method for object comparison within an array of objects.
 * @exports {Class} uniqueKey
 */
class UniqueKey {

  /**
   * Gets detailed comparison information from an array of objects.
   *
   * @static
   * @param {Object} an array of objects to be compared.
   * @returns {Object} Returns a verbose informational object with propertes :
   *   is_unique {Bool}, all_values {Array} and unique_values {Array}
   *   for any key identified in any of the objects within the argument array
   */
  static getInfoAboutKeys(objArr) {
    let key_info = { "unique_keys" : [] }
    for (var i = objArr.length - 1; i >= 0; i--) {
      const prop = objArr[i]
      for (const key in prop) {
        const value = prop[key]
        if (!key_info[key]) {
          key_info[key] = {
            "is_unique" : true,
            "all_values" : [],
            "unique_values" : []
          }
          key_info[key].all_values.push(value)
          key_info[key].unique_values.push(value)
          key_info.unique_keys.push(key)
        } else {
          if (key_info[key].all_values.includes(value)){
            key_info[key].is_unique = false
          } else {
            key_info[key].unique_values.push(value)
          }
          key_info[key].all_values.push(value)
        }
      }
    }
    return key_info
  }

  /**
   * Gets an array of keys where each object has a unique valueue.
   *
   * @static
   * @param {Object} an array of objects to be compared.
   * @returns {Array} Returns an array of keys.
   */
  static getKeysWithUniqueValues(objArr) {
    const unique_keys = this.getInfoAboutKeys(objArr).unique_keys
    return unique_keys
  }
}


module.exports = UniqueKey
