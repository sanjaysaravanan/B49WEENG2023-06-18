// Global
// const
const a = 10;


function Sample() {
  const x = 100;
  console.log("x", x);
  console.log("a", a);
  {
    const z = 200;
    console.log("z", z);
    console.log("x", x);
  }
}

Sample();

{
  const b = 100;
  console.log("b", b);
}

console.log('b', b);
console.log("a", a);

// 1. error
// 2. 100
// 3. 10
