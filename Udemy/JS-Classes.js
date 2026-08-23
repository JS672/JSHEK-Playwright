//Classes 
module.exports = class Person 
{
    age = 25
    // location = "Canada"
    get location ()
    {
        return "Canada"
    }
    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    //Methods
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }



}

/* let person =new Person("Tim","Joseph")
let person1 =new Person("Chris","Jones")
console.log(person.age)
console.log(person.location)
console.log(person.fullname())
console.log(person1.fullname())
console.log(person) */