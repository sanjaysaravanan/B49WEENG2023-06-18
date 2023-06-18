// Global
// let
let a = 10;

a = 100; // re-initialization

function Sample() {

  let a = 1000;
  let x = 100;
  console.log("x", x);
  console.log("a", a);
  {
    let z = 200;
    console.log("z", z);
    console.log("x", x);
  }
}

Sample();

{
  let b = 100;
  console.log("b", b);
}

console.log('b', b);
console.log("a", a);

// 1. error
// 2. 100
// 3. 10
