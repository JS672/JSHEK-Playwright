//Classes 
class Person 
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




}

let person =new Person("Tim","Joseph")
console.log(person.age)
console.log(person.location)