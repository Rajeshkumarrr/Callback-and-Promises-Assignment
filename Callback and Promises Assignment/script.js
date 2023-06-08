//1. Double using callback.

function doubleArray(arr, callback) { 
    const doubledArr = arr.map((num)=> {
        return callback(num);
    });

return doubledeArr;
}

const originalarray = [1, 2, 3, 4];

function callback(num) {
     return num * 2;
}

const doubledtArray = doubleArray(originalArray, callback);

console.log(doubledArray); 


//2. String Manipulation.

function manipulateString(inputString, callback) {

const manipulatedstring = InputString.toUpperCase();

callback(manipulatedstring);
}

function logstring(manipulatedString) {

comole.log('The manipulated string is: $(manipolatedstring}' );
}

// Expected output:

manipulatestring("hello, world!", logstring); 

//3. Age in Days.
const Person    = {
    firstName:"Mitun",
    lastName:"S",
    age: 20,
};
    
    function ageInDays (personobject, callback) {
    
    const fullName= '$(personObject.firstName) $(personObject.lastName)';
     const ageInDays = personobject.age * 365;
    
    callback(fullName, ageInDays);
    };
    
    function logResult(fullName, ageInDays) {
    
    console.log(
    
    "The person's full name is $(fullname) and their age ir 3/7 $(ageInDays),"
    
    );
    }

//4. Arrange in alphabetical order.
    
    const books =[
    
    {    
    title: "The Great Gatsby",
    
    author: "F. Scott Fitzgerald", 
    year: 1925,
    
    },
    {
    
    title: "To Kill a Mockingbird",
     author: "Harper Lee",
      year: 1960,
    },
    {
    
    title: "Who are You?",
    author: "George Orwell",
    year: 1949,
    
    },
    {
    
    title: "Pride and Prejudice",
    
    author: "Jane Austen",
     year: 1813,
    },
    
    function logTitles (titles) {
    
    titles.sort();
     console.log(titles.join(", "));
    }
    
    ]

//5. Greeting Promise.

function greet (name) {

return new Promise((resolve) => {

const greeting = "Hello, ${name}!";

}); }

resolve(greeting);

greet("Mithun").then((message) => console.log(message)); 


//6. Fetch results asynchronously. Write a function that asynchronously fetches data from an API


async function fetchData() {

const response = await

fetch("https://jsonplaceholder.typicode.com/todos/1");

const data= await response.json();

console.log(data);

}

fetchData();


//7. Multiple requests.


async function getCombinedData() { 
    const [datal, data2] = await Promise.all([
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)

=>
response.json()

),

fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)

=>

response.json()

).
    ])}

const combinedData = { 
    todo: datal,
    post: data2,

};

return combinedData;




getcombinedData().then((data)=> console.log(data));







