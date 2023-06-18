// Global
// var
var a = 10;

function Sample() {
  var x = 100;
  console.log("x", x);
  console.log("a", a);
  {
    var z = 200;
    console.log("z", z);
    console.log("x", x);
  }
}

Sample(); // calling / invoking a function

// console.log("x", x);


{
  var y = 200;
  console.log("y", y);
  console.log("a", a);
}

console.log('y', y);
console.log("a", a);















































