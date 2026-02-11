// polyfill: добавим flat, если его нет
if (!Array.prototype.flat) {
  Array.prototype.flat = function () {
    return [].concat(...this);
  };
}

console.log([1, [2, 3]].flat());