const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// randomCar refrenced the first value from cars
// otherRandomCar refrenced the second value from cars
// The last car, Honda is not shown because another comma was needed to access that value
console.log(randomCar)
console.log(otherRandomCar)


const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// name no longer exists because it was replaced with otherName
console.log(name);
console.log(otherName);


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
// Password is declared ourside of person
// Password is renamed to hashedPassword within person, however it does not exist
console.log(password);
console.log(hashedPassword);


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
// First console.log will not execute, because 2 != 5, false
// Second console.log will execute, because 2 = 2, which is true
console.log(first == second);
console.log(first == third);


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; //5
// key prints 'value'
// secondkey prints the array [1,5,1,8,3,3]
// secondkey[0] prints 1
// willThisWork prints 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);