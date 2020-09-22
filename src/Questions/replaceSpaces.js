// URL化

/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  return S.substr(0, length).split(" ").join("%20");
};

export default replaceSpaces;
