console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
      continue;
    } else {
      console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  console.log(i)
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 == 0) {
      console.log("FIZZ");
  } else if (i % 5 == 0) {
      console.log("BUZZ");
  }
}

// Exercise 3 Section

let i = 1;

while (i <= 100) {
  let output = "";

  if (i % 3 == 0) {
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    output += "BUZZ";
  }

  console.log(`${i} ${output}`);

  i++;
  
}

// Exercise 4 Section

let numberToFind = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

let foundValue = false;

for (let i = 1; i <= n; i++) {
  if (i == numberToFind) {
    console.log(`Found ${numberToFind}`);
    break;
  }
  if (i == n) {
    console.log(`DId not find ${numberToFind} within 1-${n}..`)
  }
}

// Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++) {
  let output = "";

  if (i % fizzDivisor == 0) {
    output += "FIZZ"
  }

  if (i % buzzDivisor == 0) {
    output += "FIZZ"
  }

  console.log(`${i} ${output}`)
  
}