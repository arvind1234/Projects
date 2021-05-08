 function foo(curr: string, o: string[], n: number, left: number, right: number) {
   if (left >= n && right >= n) {
     o.push(curr);
    console.log(curr);
    return;
  }
  
  if(left < n) {
    foo(curr + "(", o, n, left + 1, right);
  }
  if (left > right) {
    foo(curr + ")", o, n, left, right + 1);
  }
 }

function foo1(curr: string, o: string[], n: number, left: number, right: number) {
  if (left >= n && right >= n) {
    o.push(curr);
   console.log(curr);
   return;
 }
 
 if(left < n) {
   foo(curr + "(", o, n, left + 1, right);
 }
 if (right < left) {
   foo(curr + ")", o, n, left, right + 1);
 }
}

(function () {
  const n = parseInt(process.argv[2]);
  const o1: string[] = [];
  const o2: string[] = [];
  foo("", o1, isNaN(n) ? 3 : n, 0, 0);
  foo1("", o2, isNaN(n) ? 3 : n, 0, 0);

  console.log(`${o1.length} === ${o2.length}: ${o1.length === o2.length}`);
})();
