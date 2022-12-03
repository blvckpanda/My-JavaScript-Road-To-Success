const a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

const d = 3, e = 'hello';

// not equal operator
console.log(d != 2); // true
console.log(e != 'Hello'); // true

const f = 2;

// strict equal operator
console.log(f === 2); // true
console.log(f === '2'); // false

const g = 2, h = 'hello';

// strict not equal operator
console.log(g !== 2); // false
console.log(g !== '2'); // true
console.log(h !== 'Hello'); // true

const i = true, j = false;
const k = 4;

// logical AND
console.log(i && i); // true
console.log(j && j);  // false

console.log((k > 2) && (k < 2)); // false

const m = true, n = false, o = 4;


// logical OR
console.log(m || n); // true
console.log(o || n); // false
console.log((o>2) || (o<2)); // true

const q = true, r = false;

// logical NOT
console.log(!q); // false
console.log(!r); // true