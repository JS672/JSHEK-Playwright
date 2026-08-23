/*//Functions - wrap a block of code to execute
//var - global level/functional
//let - global level/block level {}
const greet = "Evening"

if (1==1)
{
    let greet = "Afternoon"
}

function add (a,b)
{
    let greet = "Morning"
    return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet)



//Anyonymus functions: No name functions expressions
let sumOfIntegers = function(c,d)
{
    return c+d
}

// => represents "function" keyword and the { return c+d }
//better one line usage
let sumOfNumbers= (c,d)=> c+d
console.log(sumOfNumbers(2,3))
*/

//Strings and methods
let day = 'Tuesday '
console.log(day.length) //8
let subDay= day.slice(0,4)
console.log(subDay) // Tues
console.log(day[1]) // u
//tue  day
//Splitting and slicing the tuesday to 2 strings
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

//Converting string to integer
let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) 
console.log(diff)

//Converting integer to string
diff.toString()

//concat strings
let newQuote = day+ "is Funday day"
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)

//tuesday is funday - Count the number of times "day" is returned 
let count =0
let val2 = newQuote.indexOf("day")
while (val2!==-1) {
    count++
    val2 =newQuote.indexOf("day",val2+1)
}
console.log(count)