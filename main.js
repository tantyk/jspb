// Zadanie 1

let years = [1974, 1900, 1985, 2000]
let year;
for (let i = 0; i < years.length; i++) {
  year = years[i];
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    console.log(year);
  }
}

// Zadanie 2

let i=1;
let result =1;
while(i<=7){
    result = result * i;
    i++;
}
console.log(result);

// Zadanie 3


let numbers = [1,6,23,8,4,98,3,7,3,98,4,98]
let sumOdd = 0
for (let i=0;i<numbers.length;i++) {
  oddNumber = numbers[i]
  if (oddNumber % 2 !== 0 )
  sumOdd = sumOdd + oddNumber
}

console.log(sumOdd)

// Zadanie 4

let numbers1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let min = numbers1[0], max = numbers1[0]

  for (let i = 1; i < numbers1.length; i++) {
    let value = numbers1[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
  }

  console.log(min)
  console.log(max)

  let minimum = Math.min(...numbers1)
  console.log(minimum)

  // Zadanie 5

let names = ["Karol", "Adam","Rogowski","Politechnika","Super","Weekend"]

let lgth = 0;

for (let i = 0; i < names.length; i++) {
  if (names[i].length > lgth) {
    lgth = names[i].length;
    longest = names[i];
  }
}

console.log(longest);

// Zadanie 6

