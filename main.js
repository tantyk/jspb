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

let numbers2 = [1,6,23,8,4,98,3,7,3,98,4,98]
let maximumNumber = Math.max(...numbers2)

let indexesOfMaxNumbers = []
for(let i=0; i<numbers2.length; i++){ 
 if(numbers2[i] === maximumNumber){
  indexesOfMaxNumbers.push(i)
  }
}
console.log(indexesOfMaxNumbers)

// Zadanie 7

let numbers3 = [1,6,23,8,4,98,3,7,3,98,4,98]
let sumOfEven = 0
let count = 0
for (let i=0;i<numbers3.length;i++) {
  evenNumber = numbers3[i]
  if (evenNumber % 2 === 0 )
count++
  if (evenNumber % 2 === 0 )
sumOfEven = sumOfEven + evenNumber

}

let averageOfEven = (sumOfEven/count)

console.log(sumOfEven)
console.log(count)
console.log(averageOfEven)

// Zadanie 8

let numbers4 = [1,6,23,8,4,98,3,7,3,98,4,98]
let sumOfNumbers = 0
let count1 = 0

for (let i=1;i<numbers4.length;i++) {
  numberOfEvenIndex = numbers4[i]
  if (i % 2 === 0 )
  count1++
  if (i % 2 === 0 )
sumOfNumbers = sumOfNumbers + numberOfEvenIndex

}

let averageOfNumbers = (sumOfNumbers/count1)

console.log(sumOfNumbers)
console.log(count1)
console.log(averageOfNumbers)

// Zadanie 9

let numbers5 = [1,6,23,8,4,98,3,7,3,98,4,98]
let result1 = 0
let sumOdd1 = 0 
let sumOfEven1 = 0
for (let i=0;i<numbers5.length;i++) {
  oddNumber1 = numbers5[i]
  if (oddNumber1 % 2 !== 0 )
  sumOdd1 = sumOdd1 + oddNumber1

  evenNumber1 = numbers5[i]
  if (evenNumber1 % 2 === 0 )
sumOfEven1 = sumOfEven1 + evenNumber1

}

let finalResult = result1 + sumOfEven1 - sumOdd1

console.log(sumOdd1)
console.log(sumOfEven1)
console.log(finalResult)