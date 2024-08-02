//primitve datatypes (call up by value)

// 7 types: String, Number, Boolean, null, undefined,Symbol, bigInt

const score = 100
const scoreValue = 125.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 1546298731548945369711569834n



//Non-primitive (call up by reference)

// Array, Object, Functions

const heros = ["shaktiman" , "krish"];
let myObj = {
    name:"krrish",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*******************************MEMORY************************/

// 2 types: Stack (Primitives)(copy of the variable), Heap(Non-Primitives)( provides refernce of the oringinal value) 

let myYoutubename = "feeltherythem"

let anothername = myYoutubename
anothername = "codewithme"

console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email: "user@yahoo.com",
    upi: "user@apl"
}

let userTwo = userOne

userTwo.email = "user@kk.com"

console.log(userOne.email);
console.log(userTwo.email);

