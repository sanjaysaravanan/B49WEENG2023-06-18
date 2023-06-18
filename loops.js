// For

// normal loop[]
var i;
for (i = 0; i < 9; i++) {
  console.log('hi', i);
}

// never ending loop
// for ( /**initilization */; /**condition for termination */; /**inc/dec */)
for (; ;) {
  console.log('hi');

  // manual termination
  break;
}


// Print all the even number from 1 to 15

// Solution 1:
for (var i = 1; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}


// Solution 2:
for (var i = 2; i <= 14; i = i + 2) {
  console.log(i);
}


// Print all the even number from 1 to 15 in reverse order
// 14 12 10 ....
// Sol 1:
for (var i = 15; i >= 1; i--) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Solution 2:
for (var i = 14; i >= 1; i = i - 2) {
  console.log(i);
}


// while
// termination should be present

// Print all the even number from 1 to 15
// sol 1:
var i = 1;
while (i < 15) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Sol 2:
var i = 2;
while (i <= 14) {
  console.log(i);
  i = i + 2;
}


// Print all the even number from 1 to 15 in reverse order
// 14 12 10 ....
// Sol 1:
var i = 15;
while (i >= 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i--;
}

// Sol 2:
var i = 14;
while (i >= 1) {
  console.log(i);
  i = i - 2;
}


// Looping/iterating an array 
var arr = [1, 2, 3, 4, 5];

// 1 4 9 16 25 // Output should be in single line

var i = 0;
var result = "";

// gather the output values in single line
while (i < arr.length) {
  result = result + (arr[i] * arr[i]) + " ";
  i = i + 1;
}

console.log(result);

// Sol 2
var i = 0;
var arr = [1, 2, 3, 4, 5];
while (i < arr.length) {
  arr[i] = arr[i] * arr[i];
  i = i + 1;
}

console.log(arr); // [1, 4, 9, 16, 25]

console.log(arr.join(' ')); // [1, 4, 9, 16, 25]






