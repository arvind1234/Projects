var s = [];
for (var i = 0;i < 5; i++) {
  s.push(i);
}
console.log(s);
var t = [];

/*
for (i = 0;i < 5; i++) {
  t.push(s.pop());
}

console.log(t);
console.log(s);
*/
var v;
var count = s.length;

while(count-- > 0) {
  v = s.pop();
  var n = 0;
  while(n++ < count) {
    t.push(s.pop());
  }
  console.log(t);
  s.push(v);
  while(t.length) {
    s.push(t.pop());
  }
}

console.log(s);
