
try{
const myHeading = document.getElementById('myheding');

myHeading.style.background='red';
}
catch(error){
    console.error(error);
}
finally{
    // where potential clean up code happens
}


// try
// {
//     throw new Error('hello world');
// } 
// catch(error)
// {
//     // do nothing
//     console.error(error);
// }



console.log('after the error');

//try...catch  will try a piece of code and catch any errors that happen in that code

//callback functions adn setTimout allows you to set a timer for your function to run

setTimeout(()=>{console.log('Timout!')},5000)


//PROMISES chain promises to gether with a .then() which are handeld with .catch()

//async/await


async function sumAsync(number){
    let sum=0;
    for (let i=0; i<number; i++){
        sum+=i;
    }
    return sum;

}
//this logs a promise
console.log(sumAsync(1000000000));

//this logs the result of a promise
sumAsync(1000000000)
.then((result)=>{
    console.log(result);
    throw new Error('custom error!');
})
.catch((error)=>{
    console.error(error);
})

async function sumMultipleNumbers(){
    const sumThousand= await sumAsync(1000);
    console.log(sumThousand);
    // .then(result=>console.log(result));
    console.log(await sumAsync(42));
}

sumMultipleNumbers();
