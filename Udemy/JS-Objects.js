//Object is a collection of properties

let person = {
    firstName:'Tim',
    lastName:'Joe',
        age : 24,
    fullName : function ()
    {
        console.log(this.firstName+this.lastName)
    }

}
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
//updating the values and properties down the line at runtime
person.firstName = 'Tim Dane'
console.log(person.firstName)
//Assign a new property in the "person" object
person.gender = "male"
console.log(person)
//Deleting a property in an object
delete person.gender
console.log(person)
//check if property (gender) exists - boolean response
console.log('gender' in person)

//print all the values of the javascript object
for(let key in person)
{
    console.log(person[key])
}
