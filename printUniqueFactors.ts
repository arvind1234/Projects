function getFactors(n, map) {
  if (map[n]) {
    console.log("returning n from map:", n, map[n]);
    return map[n];
  }
  
  var factors = [];
  for (var i = 1, l = Math.sqrt(n); i <= l; i++) {
    if (n % i === 0) {
      if (i === 1) {
        factors.push(i);
        if (n !== 1) {
          factors.push(n);
        }
      } else {
        var f1 = getFactors(i, map);
        var f2 = getFactors(n / i, map);
        factors = factors.concat(f1).concat(f2);
        factors = factors.filter(function (el, i, ar) {
          return ar.indexOf(el) === i;
        });
        factors.sort(function (a, b) { return a - b; });
      }
    }
  }
  map[n] = factors;
  return factors;
}

console.log(getFactors(1, {}));
console.log(getFactors(3, {}));
console.log(getFactors(8, {}));
console.log(getFactors(36, {}));