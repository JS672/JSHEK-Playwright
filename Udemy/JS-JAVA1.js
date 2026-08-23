var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks =[20,40,35,12,37,100]
subMarks =marks.slice(2,5)
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[20,40,35,14,37,100]
console.log(marks.length) //6
marks.push(65)
console.log(marks) //[20,40,35,14,37,100,65]
marks.pop()//[20,40,35,14,37,100]
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(100))
//120 in the array
console.log(marks.includes(120))
var sum =0
for(let i =0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
console.log(sum)

//reduce filter map
//
marks.reduce((sum,mark)=>sum+mark,0)
let total
