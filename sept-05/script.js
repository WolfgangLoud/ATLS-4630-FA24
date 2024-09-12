console.log("hellow world")//print to consol
let helloworldvariable= "hello world"
const helloWorldConst = "hello world constant"//will through const assignment error

console.log(helloworldvariable)
console.log(helloWorldConst)

helloworldvariable="hello world variable"
console.log(helloworldvariable)

// helloWorldConst="changed"
// console.log(helloWorldConst)


console.log()

//string literals are JS equivilent of f string, surround quote by backtik ` then use dollar sign curly bracket ${to show java script function}

const num=7
const stringLiteral=`this is a string litteral, here is a variable plus ten :${num+10}`//actually adds
const stringConcatenation = 'this is a string concatenation, num + 10:' + num +10 //doesn't add numbers puts them together instead


//ARRAYS
//also known as lists, never have a set length. more similar to vector in c++

let myArray= [0, 1, 2]
const myAnimals = ['cats','dogs','goats']
console.log(myAnimals)
console.log(myAnimals[2])
console.log(myArray.length)
myAnimals.push('pigs')
console.log(myAnimals)

//OBJECTS

const myObject = {
    building:'ATLAS',
    roomNumber:104,
}

console.log(myObject)
myObject.newProperty='new value'
console.log(myObject)
console.log(myObject.building)

//object-->key-->:-->value-->,

//when dot notation does not work use bracket notation

console.log(myObject["building"])
//everything in java script is an object, even arrays where each item is value accesed by index key and length is value accesed by length key

//Conditionals

const x=5
const y=7

if(x+y<2){
    console.log("this code should never run")
} else if (x+y>=3){
    console.log("this code should run")
}


// while (condition){
//     //do something
// }

let z=0
while (z<10)
{
    console.log(z);
    z++ //always add a line that keeps the condition to be met, for loops are better for this condition, while loops are better for booleans
}

for( let i=0; i<10; i++){//thos style of for loop is good for itterating through arrays
    console.log(`for loop ${i}`)
}

for (let i=0; i<myAnimals.length; i++)
{
    console.log(myAnimals[i])
}

//FOR OF LOOP
const cities=['Denver','Boston','Chicago','Detriot']
for (const city of cities)
{
    console.log(cities[city])
}

//FOR IN LOOPS

//.forEach loop



//functions are variables in Javascript
function doSomething(number){
    return number+10
}
console.log(doSomething(7))

function printToConsole(something){
    somethingNew=something +' are cool'
    console.log(somethingNew)
}

myAnimals.forEach(printToConsole)

//ARROW FUNCTION 
const myArrowFunction = (parameter) =>{
    //do something
    console.log(parameter);
}

//Anonymous Functions
(()=>{console.log("inside anonymous function")})()//function is executed immedietly, good for call back functions like forEach

myAnimals.forEach((animal)=>{
    console.log(animal)
})

//changing somehting in a forEach won't actually change something in the array

//to change everything in array programmatically use map function
const numbers = [1,2,7,13,4,6]

function double (num){
    return num*2
}

const numsDoubled = numbers.map(double)

const numsTrippled=numbers.map((num) => {return num*3})

const numsQuadroupled=numbers.map(num => num*4)

console.log(numbers)
console.log(numsDoubled)
console.log(numsTrippled)
console.log(numsQuadroupled)


function changeLink()
{
    const googleLink=document.querySelector("#google-link")
    googleLink.href='https://colorado.edu'
}

const changeLinkButton=document.querySelector('#change-link-button')
changeLinkButton.addEventListener('click',changeLink)



//EVENTS and EVENT LISTENERS
//element.addEventListener(event, callback)




//don't use var ever, use let instead using let makes your code less buggy

//declare with const if it can never change, more memory efficient

//it is good practice to declare everything as const and go back and change to let 



// single line comment

/*
multiple line comment
*/

//The Document Object Model (DOM)
//The DOM is the model by which JavaScript interacts with HTML and CSS
//HTML elements/nodes can be obtained either through queries or through tree navigation, and stored into 


//Getting objects with DOM queries
console.log(document);//exists at all time
document.getElementById("some-id")//retrieves element with id
document.getElementsByClassName("some-class-name")//retrieves object by class name
document.querySelector("#some-id")//retrieves element with id
document.querySelector(".some-class-name")//retrieves the first element of the document
document.querySelectorAll(".some-class-name")//retrieves all the elements of the document

const firstParagraph=document.getElementById("first-paragraph")
console.log(firstParagraph)

const myParagraph=document.getElementsByClassName("my-paragraph")
console.log(myParagraph)

//null and undefined both exist in JavaScript could be either they are the same essentially

