let p = 'javacsript';
let q = p;
p = 'react';
console.log(q)


const isTure = 'false';
if (isTure) {
    console.log('hello')
}
else {
    console.log('world')
}

function sum(p, q) {
    console.log(p + q);

}
const result = sum(2, 3)
function work(x, y = 4) {
    return x + y;
}
console.log(work(32))