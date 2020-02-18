// console.log("Hello from app.js")

// function showSum(num1=10, num2=20) {
//     return `Sum of ${num1} and ${num2} is ${num1+num2}`    
// }

// console.log(showSum(20,30))

// const Student = require('./student');
// const student1 = new Student('Tamdin','python')
// student1.greet()

const obj = require('./student.js');

const student1 = new obj.ByteStudent('vivek', 'python')
const student2 = new obj.ByteStudent('tenzin', 'js')

console.log(student1.greet());
console.log(student2.greet());




const os = require('os')
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.uptime()/60)






