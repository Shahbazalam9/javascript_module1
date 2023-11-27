"use strict" // It is good to write but nowdays javascript is so advanced

// alert("Hello") it is not works here bcz is node environment not web engine





// Javascript Data Types
// JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

// 1.Primitive data type
// 2.Non-primitive (reference) data type

// JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var here to specify the data type. It can hold any type of values such as numbers, strings etc. For example:

// var a=40; //holding number  
// var b="Rahul"; //holding string  

// JavaScript primitive data types
// There are five types of primitive data types in JavaScript. They are as follows:

// Data Type	Description
// String	represents sequence of characters e.g. "hello"
// Number	represents numeric values e.g. 100
// Boolean	represents boolean value either false or true
// Undefined	represents undefined value
// Null	represents null i.e. no value at all
// bigint represent for large number
// symbol represent unique

// JavaScript non-primitive data types
// The non-primitive data types are as follows:

// Data Type	Description
// Object	represents instance through which we can access members
// Array	represents group of similar values
// RegExp	represents regular expressioncon    


let pNname = "shahbaz";
let age = 21;
let isMarried = false;
let money = BigInt(1233455678901234567890123456789);
let cloths = {
    shoes : 5
}

console.log(typeof(age))
console.log(typeof(pName))
console.log(typeof(isMarried))
console.log(typeof(money))
console.log(typeof(cloths))
console.log(typeof(undefined))
console.log(typeof(null))



/*

Null in JavaScript means an empty value and is also a primitive type in JavaScript. 
The variable which has been assigned as null contains no value. Undefined, on the
 other hand, means the variable has been declared, but its value has not been assigned.

//What is Null?

We have heard the word "null" many times in English. Its literal meaning is having no value.
The same meaning is analogous to the meaning of null in programming.

Null is basically an assignment value given to a variable. The variable which has been assigned as
null contains no value.

When we assign null as a value to any variable, it means that it is empty or blank. It is to show that
the variable has no value. Also, null is an object in JavaScript. When it gets assigned to a variable,
it represents no value. The setting of the value must be done manually by the user as JavaScript never
sets the value as null. An object can be emptied by setting it to null.

*/


/*



//What is Undefined?

There is a subtle difference between null and undefined, but as a programmer, it is important 
that we understand it clearly.

As the name suggests, undefined means "not defined". So we declare a variable but do not assign
 a value to it, the variable becomes undefined.

Unlike null, the value of an undefined variable is set by JavaScript as undefined. The variable
 gets created at the run-time. When we do not pass an argument for a function parameter, the default
  value is taken as undefined. Besides, when a function doesn't return a value, it returns undefined.

*/