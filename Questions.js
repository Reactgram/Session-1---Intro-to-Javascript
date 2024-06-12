
// Q1: 

// assume some values of p(Principal), r(Rate of Interest) and t(Time) are given. 

// Si = (p*r*t)/100

// CI  two steps 
// amt = p(1+r/100)^t
// ci = amt-p

// let p = 100000
// let r = 10 
// let t = 5 

// let si = p*r*t/100

// let amt = p*(1+r/100) ** t

// let ci = amt - p

// console.log(`Simple Interest is ${si}`) 
// console.log(`Compound Interest is ${ci}`)







// Q2: 
// take a number and find its last digit

// let n = 12368

// let lastDigit = n%10  

// console.log(lastDigit)


// q3: 

// Take two number, find the quotient : 

// let a = 10 
// let b =  6

// // a = b*q + r
// // q = (a-r)/b
// // let r = a%b 
// // let q = (a-r)/b 
// // console.log(q)

// // let ans = Math.floor(a/b) // 1.666
// let ans = parseInt(a/b) // 1.666 => 1

// console.log(ans)



// let a = 10 
// let b = 4
// // find the decimal part n the division of a and b

// let ans = a/b  // 2.5
// let intPart = parseInt(ans) // 2.5 => 2
// let decimalPart = ans - intPart
// console.log(decimalPart) // 0.5



// let a = 100

// a = 50

// a = "ramesh"

// console.log(a)


// let a = 5 

// a = a+5

// console.log(a) // 10


// Lets take 2 numbers and interchange their values:

// let a = 10 
// let b = 20 
// //a  = 10, b = 20
// let t = a
// a = b  // a = 20, b = 20
// b = t // a = 20, b = 10

// console.log(a,b)


// without uing third variable 


let a = 10 
let b = 20

 a = a+b // a = 30, b = 20

 b = a - b  // 30 - 20 => 10

 a = a - b  // 30 -10 => 20

 console.log(a,b) // 20,10