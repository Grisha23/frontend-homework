function plainify(obj) {
  let result = {};
  Object.keys(obj).forEach((key) => {
    if (Object.prototype.toString.call(obj[key]) == '[object Object]' ) {
      let plained = plainify(obj[key])
      Object.keys(plained).forEach((nestedKey) => {
        result[key + '.' + nestedKey] = plained[nestedKey];
      })
    } else {
      result[key] = obj[key];
    };
  })
  return result;
}
