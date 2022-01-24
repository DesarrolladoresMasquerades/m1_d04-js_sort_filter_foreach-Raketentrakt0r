// Class code examples

const students = [
    { firstName: 'John', lastName: 'Carr', age: 34 },
    { firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21 },
    { firstName: 'Sarah', lastName: "O'Connor", age: 45 }
]

students.forEach(console.log)   

//  Es lo mismo que esto = for (let student of sudents)
//                       { console.log(student)}

const greetings = []

const printOlderThan25 = (person) =>{
    if(person.age >= 25) 
    //console.log(`Hello ${person.firstName}`)
    greetings.push(`Hello ${person.firstName}`)
    //console.log(greetings)
}

students.forEach(printOlderThan25)



const numberArray = [1,2,3,4,5,6,7,8,9]

const printOddindexElements = (ele, index) =>{
    if (index % 2 === 0) console.log(`Element ${ele} is an even index`)
    //else console.log(`Element ${ele} is in a oddeven index`)
}
numberArray.forEach(printOddindexElements)