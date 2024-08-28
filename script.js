// Outputting data
// alert("Hello world!");
// confirm("Are you sure you want to delete this? ");
// prompt("What is your name?");
// document.write("Hello world");

// console.log("Hello world!");

//  Creation of programs concatenation
// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");
// console.log(firstName + " " + lastName);
// console.log("Your first name is " + firstName + " and your last name is " + lastName);

// Template literals
// console.log(`${firstName} ${lastName}`);
// console.log(`Your first name is ${firstName} and your surname is ${lastName}`);

// let first_number = parseInt(prompt("Enter any number: "));
// let second_number = parseInt(prompt("Enter another number"));
// console.log(`${first_number} + ${second_number} = ${first_number + second_number}`);

// let x = 20;
// --x;
// const y = 23;
// var v = 54


// /* Assignment */ 
// // 1. Write a  program that prompts the user for their name and then prints a greeting message with their name.
// let name_1 = prompt("Input your name: ");
// console.log(`Hello ${name_1}`);

// // 2. Create a program that takes two numbers as input from the user and then prints their sum.
// num_1 = parseFloat(prompt("Enter a number: "));
// num_2 = parseFloat(prompt("Enter another number: "));
// console.log(`${num_1 + num_2}`);

// // 3. Write a  program that asks the user for their first name, last name, and age, then prints a message greeting them by their full name and stating their age.
// let first_name = prompt("What is your first name: ");
// let last_name = prompt("What is your last name: ");
// let age = prompt("What is your age: ");
// console.log(`Hello ${last_name} ${first_name}.\nYou are ${age} years old`);

// // 4. Create a script that prompts the user to enter the name of their favorite color and their favorite animal, then prints a message combining the two preferences.
// fav_color = prompt("Enter your favorite color: ");
// fav_animal = prompt("Enter your favorite animal");
// console.log(`Your favorite color is ${fav_color} and your favorite animal is ${fav_animal}`);

// //  5. Implement a program that takes a user's first name and their birth year as input and prints a message with their name and their age calculated from the current year.
// user_first_name = prompt("Enter your first name: ");
// let current_year = new Date().getFullYear();
// user_birth_year = parseInt(prompt("Enter your birth year: "));
// console.log(`Hello ${user_first_name}.\nYou are ${current_year - user_birth_year} years old`);

// // 6. Write a  script that asks the user for their hometown and favorite food, then prints a message with both pieces of information.
// user_hometown = prompt("What is your hometown.");
// user_fav_food = prompt("What is your favorite food.");
// console.log(`Your hometown is ${user_hometown} and your favorite food is ${user_fav_food}`);

// // 7. Develop a program that prompts the user to enter the title and author of a book they recently read, then prints a message combining both pieces of information.
// book_title = prompt("What is the name of the title of the book you just read? ");
// book_author = prompt("Who is the author of the book you just read? ");
// console.log(`The title of the book is ${book_title} and the author is ${book_author}`);

// // 8. Create a script that asks the user for the name of a city they visited and the year they visited it, then prints a message with both pieces of information.
// city_visited = prompt("What is the name of the best city you have visited? ");
// year_visited = prompt("What year did you visit it? ");
// console.log(`The name of the best city you have visited is ${city_visited} and you visited it in ${year_visited}`);

// // 9. Implement a program that takes the user's favorite movie and the year it was released as input and prints a message combining both pieces of information.
// favorite_movie = prompt("What is the name of the best movie you have ever watched? ");
// fav_movie_year = prompt("What year was it released? ");
// console.log(`The best movie you have ever watched is ${favorite_movie} and it was released in the year ${fav_movie_year}`);

// // 10. Write a script that prompts the user to enter their favorite fruit and the number of times they eat it per week, then prints a message with both pieces of information.
// fav_fruit = prompt("What is your favourite fruit? ");
// num_fruit_eaten = prompt("How many times do you eat it in a week? ");
// console.log(`The name of your favourite fruit is ${fav_fruit} and the number of times you have eaten it in a week is ${num_fruit_eaten}`);

// // 11. Develop a program that asks the user for their favorite subject in school and their grade level, then prints a message combining both pieces of information.
// fav_subject = prompt("What is your favourite subject in school? ");
// grade = prompt("What is your grade in that subject? ");
// console.log(`Your best subject is ${fav_subject} and your grade in ${fav_subject} is ${grade}`);

// // 12.  Create a  script that prompts the user to enter their favorite sport and the season in which they play it, then prints a message with both pieces of information.
// fav_sport = prompt("What is your favourite sport? ");
// fav_sport_season = prompt("What is the season in which you play it? ");
// console.log(`Your favourite sport is ${fav_sport} and you play it in the season ${fav_sport_season}`);

// Strings
// let mynew = "Digital Fortress";
// let address = "104, Herbert Macauly Road, Off University Road, Akoba Yaba Lagos State ";
// console.log(address.slice(0, 16));
// console.log(address[7]);
// console.log(address.replace("Lagos", "Ogun"))
// console.log(address.concat(mynew));
// console.log(address.lastIndexOf("e"));
// console.log(address.toUpperCase());
// console.log(address.toLowerCase());
// To get the data type of the variable
// console.log(typeof (address))
// // To change to a string/array format
// console.log(address.split());
// // To reverse the string
// console.log(address.split().reverse());
// // To change back to string by removing the square brackets
// console.log(address.split().reverse().join());
// // Returns true or false value depending on whether the string starts with the character or not
// console.log(address.startsWith(1));
// // Returns true or false value depending on whether the string ends with the character or not
// console.log(address.endsWith("f"));
// let newAddress = address.split();
// console.log(newAddress);
// // To add a new element to the array
// newAddress.push("Green");
// console.log(newAddress);
// // To add a new element to the beginning of the array
// newAddress.unshift("Red");
// console.log(newAddress);

// let myNumber = 10;
// // To change myNumber to 3 d.p
// let x = myNumber.toFixed(3);
// console.log(x);
// //To change myNumber to 4 numberss
// let y = myNumber.toPrecision(4);
// console.log(y);
// // To use a ternary operator
// console.log(myNumber > 10 ? "Yes" : "No");

// // Arrays
// let tunde = Array("Pink", "Red", "Purple", "Blue")
let colors = ["Pink", "Red", "Purple", "Blue", "Yellow"];
console.log(colors[1]);
// // To remove the last element from the array
colors.pop();
console.log(colors);
// //To remove the first element of the array
colors.shift();
console.log(colors);
// // To reverse the order of the elements in the array
colors.reverse();
console.log(colors);
colors[0] = "Green";
console.log(colors);

// // Boolean
// let vote = true;
// console.log(typeof (vote));
// console.log(vote ? "Yes, you can vote" : "No you cannot vote");

// Arithmetic Operator +, -, /, *, +=, -=, %, ++, --
let num = 10
let num_2 = 5
console.log(num + num_2);
console.log(num - num_2);
console.log(num / num_2);
console.log(num * num_2);
console.log(num += num_2);
console.log(num -= num_2);
console.log(--num);
console.log(++num);

// Arithmetic Comparison <, >, <=, >=, ==, ===, !=
 console.log(num > num_2);
console.log(num < num_2);
console.log(num >= num_2);
console.log(num <= num_2);
console.log(num == num_2); 

// Logical Operator &&, ||
// let country = "Nigeria";
// let age = 18;

/* if (country == "Nigeria" || age >= 18){
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
} */

/* if (country == "Nigeria" && age >= 18){
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
} */

// Conditional Statements
// let grade = prompt("What was your grade? ")

// switch (true) {
//     case grade == "A":
//         console.log("Grade A");
//         break;
//     case grade == "B":
//         console.log("Grade B");
//         break;
//     case grade == "C":
//         console.log("Grade C");
//         break;
//     case grade == "D":
//         console.log("Fail");
//         break;
//     default:
//         console.log("Unknown Result");
// }

// Loops
// while, do while, for  
let xavier = 0;
while (xavier <= 20) {
    console.log(xavier);
    xavier++;
}
for (let x = 10; x <= 20; x++) {
    console.log(x);
}
// Do while
let x = 0;
do {
    console.log(x);
    x++;
}
while (x < 10);

// ATM Assignment
// let money = 100000;
// let money_left = 0;
// let card_number = 1234567890
// let isTrue = true;
// while (isTrue){
//     console.log("Welcome to the ATM");
//     let name_own = prompt("What is your name: ").toLowerCase;
//     let withdraw = prompt("Do you want to withdraw: ").toLowerCase();
//     let atm_pin = prompt("WHat is your pin: ");
//     if (name_own = "Mark Olamide"){
//         console.log(`Hello ${name_own}`)
//     }
//     else{
//         console.log(`Hello unknown customer`)
//     }
//     if (withdraw == "yes" && atm_pin == "1234") {

//         let m_withdraw = parseInt(prompt("How much do you want to withdraw"));
//         if (m_withdraw <= money) {
//             money_left = money - m_withdraw;
//             console.log(`You have withdrawn ${m_withdraw}\n`);
//             console.log(`You have ₦${money_left} left`);
//         }
//     }
//     ask = prompt("Do you want to make another transaction? ").toLowerCase()
//     if (ask == "no")
//         isTrue = false;
// }


// let score = parseInt(prompt("Hello, What is your score? "))
// switch(true){
//     case score >= 90 && score <= 100:
//         console.log("Excellent");
//         break;
//     case score >= 80 && score <= 89:
//         console.log("Second Class");
//         break;
//     case score >= 70 && score <= 79:
//         console.log("Third Class");
//         break;
//     case score >= 60 && score <= 69:
//         console.log("Lower Class");
//         break;
//     case score >= 50 && score <= 59:
//         console.log("Last Class");
//         break;
//     case score >= 40 && score <= 49:
//         console.log("Fail");
//         break;
//     case score >= 0 && score <= 39:
//         console.log("Unknown Result");
//         break;
//     default:
//         console.log("Score does not exist");
// }

// let num_1 = parseFloat(prompt("Enter a number: "))
// let num_2 = parseFloat(prompt("Enter another number: "))
// operator = prompt("Enter an operator: ")
// if (operator == "+")
//     console.log(`${num_1 + num_2}`);
// else if (operator == "-")
//     console.log(`${num_2 - num_1}`); 
// else if (operator == "*")          
//     console.log(`${num_1 * num_2}`);
// else if (operator == "/")
//     console.log(`${num_1 / num_2}`);
// else if (operator == "%")
//     console.log(`${num_1 % num_2}`);
// else if (operator == "++")
//     console.log(`${++num_1}`);
// else if (operator == "--")
//     console.log(`${--num_2}`);

// let num_1 = parseFloat(prompt("Enter a number: "))
// let num_2 = parseFloat(prompt("Enter another number: "))
// let num_3 = parseFloat(prompt("Enter another number: "))
// switch(true){
//     case (num_1 >= num_2) && (num_1 >= num_3):
//         console.log(`${num_1} is greater than ${num_2} and ${num_3}`);
//         break;
//     case (num_2 >= num_1) && (num_1 >= num_3):
//         console.log(`${num_2} is greater than ${num_1} and ${num_3}`);
//         break;  
//     case (num_3 >= num_1) && (num_3 >= num_2):
//         console.log(`${num_2} is greater than ${num_1} and ${num_3}`);
//         break;         
//     case (num_2 == num_1) && (num_2 == num_3):
//         console.log(`They are all the same`);
//         break; 
// }

// number = parseInt(prompt("Enter a number to determine if it odd or even: "))
// if (number % 2 == 0){
//     console.log(`${number} is an even number`)
// }
// else{
//     console.log(`${number} is an odd number`)
// }

// let name_1 = prompt("Tell me your name")
// console.log(`The first 3 letters of your name is ${name_1.slice(0, 3)}`)

// Guessing game
// let myNum = Math.floor(Math.random() * 3);
// let guess = parseInt(prompt("Guess a number: "))

// if (guess == myNum){
//     console.log("You guessed correctly")
// }
// else if (guess > myNum){
//     console.log("Your guess is high")
// }
// else if (guess < myNum){
//     console.log("Your guess is low")
// }
// else{
//     console.log("Your guess is invalid")
// }

// let x = 0;
// while(x <= 10){
//     x++;
//     console.log(x)
// }

// for(i=0; i<=10; i++){
//     console.log(i)
// }

// let score = [10, 20, 30, 5, 50, 23, 32];
// let num = [];
// let n = 0;
// while (n < 100){
//     n++;
//     num.push(n);
// }
// for(i of num){
//     if (i % 15 == 0){
//         console.log("FizzBuzz")
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz")
//     }
//     else if (i % 3 == 0){
//         console.log("Fizz")
//     }
//     else{
//         console.log(i)
//     }
// }
// let number = 5;
// let x = 0;
// while (x <= 10){
//     console.log(`${number} * ${x} = ${number * x}`)
//     x++;
// }

// Component Functions/ES6 (ecma scripts 6)/Arrow functions
// const tunde = () => {
//     console.log("Good morning")
// }
// tunde()
// const tundes = (name) => {
//     console.log(`Good morning ${name}`)
// }
// tundes("salawu")

// Normal javascript functions
// function greetings(){
//     console.log("Good day")
// }
// greetings()
// function myName(island, mainland){
//     return island + mainland
// }
// console.log(myName(5, 6))

/// For merging git add .
// let x = (v) => {
//     v * v;
// }
// console.log(x(2))

let score = [20, 10, 50, 30, 25, 17, 19, 88, 60, 180];
// // Higher order function
// Returns back an array depending on the function passed to it
console.log(score.map((x) => x > 30));
// It filters an array based on the condition given to the function
console.log(score.filter((x) => x % 30 == 0));
// Performs an operation to an array based on the operator given in the function
console.log(score.reduce((y, w) => y + w));
// Returns the first value or randomly (I am not sure)  based on the condition given
console.log(score.find((x) => x > 10));

// DOM
//Document Object Model
// To get the elements with their class name. NB: use indexes with the classname so has to get the exact element class.
// const wow = document.getElementsByName("button")
// const myTunde = document.getElementsByClassName("tunde")[0];
// myTunde.innerHTML = "Welcome Home";
// const myTunde2 = document.getElementsByClassName("tunde")[1];
// myTunde2.textContent = "Welcome Back Home";
// // To get the elements with their id name. 
// const myJava = document.getElementById("java");
// myJava.innerHTML = "God is here";
// Gets any class or id.
// const myJava2 = document.querySelector(".javascript");
// myJava2.textContent = "We are in class";

// let myNew1 = document.createElement("h1");
// myNew1.innerHTML = "Welcome to DOM Javascripts class";
// document.body.appendChild(myNew1);

// Event listner
// let mybutton = document.createElement("button");
// mybutton.innerHTML = "Click Me";
// document.body.appendChild(mybutton);
// mybutton.addEventListener("click", () => console.log("You clicked me"));
// function tunde(){
//     console.log("You clicked!")
// }

// Javascript DOM with buttons and counting
// let theplus = document.querySelector(".myplus");
// let mydisplay = document.querySelector(".display");
// let theminus = document.querySelector(".myminus");

// let count = 0;

// theplus.addEventListener("click", () => {
//     console.log("You clicked the plus sign")
//     mydisplay.innerHTML = ++count;
//  })
//  theminus.addEventListener("click", () => {
//     console.log("You clicked the minus sign")
//     mydisplay.innerHTML = --count;
//  })

// On and off bulb
// let theon = document.querySelector(".myon")
// let theoff = document.querySelector(".myoff")
// let bulbon = document.querySelector(".img-1")
// bulbon.style.display = "none"
// let bulboff = document.querySelector(".img-2")

// theon.addEventListener("click", () =>{
//     // theon.innerHTML = "<img src='pic_bulbon.gif' alt=''>"
//     bulbon.style.display = "inline";
//     bulboff.style.display = "none"
// })

// theoff.addEventListener("click", () =>{
//     bulboff.style.display = "inline";
//     bulbon.style.display = "none"
// })

// LOCAL STORAGE
// let myName = "tunde";
// let mysave = localStorage.setItem("localname", myName)


let employees = [
    {
        name: "tunde",
        age: 30,
        position: "developer",
        salary: 30000
    },
    {
        name: "John",
        age: 33,
        position: "developer",
        salary: 32400
    },
    {
        name: "Blake",
        age: 23,
        position: "designer",
        salary: 50000
    },
    {
        name: "Ini",
        age: 20,
        position: "developer",
        salary: 70000
    },
];
console.log(employees)
console.log(employees[0].age)

// stringify is turn it into key value pair inside your local storage
let people = localStorage.setItem("myPeople", JSON.stringify(employees));
//  The parse is used to turn the format into key value pair.
let myget = JSON.parse(localStorage.getItem("myPeople"));
// let getter = JSON.parse(localStorage.getItem("object"));
// console.log(getter)
console.log(myget)

// GETTING API'S
const url = "https://jsonplaceholder.typicode.com/posts";

const getApi = async () =>  {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}
getApi()

// let unorder = document.getElementsByTagName("ul")[0];
// unorder.style.padding = "20px";
// unorder.style.background = "red";
// unorder.style.display = "flex";
// unorder.style.justifyContent = "space-between";
// let first = document.getElementById("one");
// first.innerHTML = "Home"
// first.style.textDecoration = "none";
// let second = document.getElementById("two");
// second.innerHTML = "About"
// second.style.textDecoration = "none";
// let third = document.getElementById("three");
// third.innerHTML = "Contact"
// third.style.textDecoration = "none";
// let fourth = document.getElementById("four")
// fourth.textContent = "More"
// fourth.style.textDecoration = "none";
// let fifth = document.getElementById("five")
// fifth.textContent = "Features"
// fifth.style.textDecoration = "none";

// let list = document.getElementsByTagName("li");
// // For "of": it gives the element and the style [i.e it returns the element] while "in just gives the index [It returns the index position]"
// for (let the_list of list) {
//     // console.log(the_list)
//     the_list.style.display = "inline";
// }

// let image = document.createElement("img");
// image.src = "pic_bulboff.gif";
// document.body.appendChild(image)

// let body_b = document.getElementsByTagName("body")[0];

// let colors = ["red", "green", "blue"];
// let btn = document.getElementsByClassName("change-btn")[0];
// let x = -1;
// btn.addEventListener("click", () => {
//     if (x >= 2) {
//         x = -1
//     }
//     document.body.style.backgroundColor = colors[++x];
//     btn.innerHTML = `${colors[x]}`;
//     // body_b.style.backgroundColor = "gray";
// }
// );

// Calculator assignment
const btn_1 = document.querySelectorAll("button");
const my_display = document.getElementById("display")
btn_1.forEach((button) => {
    button.addEventListener("click", () => {
        const prosper = button.value
        console.log(prosper)
        if (prosper === "c"){
            my_display.innerHTML = '';
        }
        else if (prosper === "="){
            my_display.innerHTML = eval(my_display.innerHTML)
        }
        else{
            my_display.innerHTML += prosper
        }
    }
    )
})

// Form assignment
// const formato = document.getElementsByClassName("text")[0];
// const sub = document.getElementsByClassName("but")[0];
// const outputDiv = document.getElementById("output");
// sub.addEventListener("click", (event) => {
//     event.preventDefault();
//     const wow = formato.value;
//     outputDiv.textContent = wow;
// })
// let the_click = document.getElementsByClassName("clicker")[0];
// let div_t = document.getElementsByClassName("tunde-cli")[0];
// the_click.addEventListener("click", () => {
//     div_t.innerHTML = "WELCOME TO DOM JAVASCRIPT"
// })

// Create button and say Javascript is simple
// let button_1 = document.createElement("button");
// button_1.innerHTML = "Click Me";
// document.body.appendChild(button_1);
// button_1.addEventListener("click", () => {
//     let diver = document.createElement("p");
//     diver.innerHTML = "Javascript is simple"
//     document.body.appendChild(diver)
// })

// Add and substract button
// let btn_1 = document.createElement("button");
// btn_1.innerHTML = "+";
// document.body.appendChild(btn_1);
// let numbers_1 = document.createElement("span");
// numbers_1.innerHTML = "0";
// document.body.appendChild(numbers_1);
// let btn_2 = document.createElement("button");
// btn_2.innerHTML = "-";
// document.body.appendChild(btn_2);
// btn_1.addEventListener("click", () => {
//     numbers_1.innerHTML = parseInt(numbers_1.innerHTML) + 1;
// })
// btn_2.addEventListener("click", () => {
//     numbers_1.innerHTML = parseInt(numbers_1.innerHTML) - 1;
// })

// Globe bulb
// let button_1 = document.createElement("button");
// button_1.innerHTML = "On";
// document.body.appendChild(button_1);
// button_1.addEventListener("click", () => {
//     globe_on.style.display = "inline";
//     globe_off.style.display = "none";
// })
// let globe_on = document.createElement("img");
// globe_on.src = "pic_bulbon.gif";
// globe_on.style.display = "none";
// document.body.appendChild(globe_on);
// let globe_off = document.createElement("img");
// globe_off.src = "pic_bulboff.gif";
// document.body.appendChild(globe_off);
// globe_off.style.display = "none";
// let button_2 = document.createElement("button");
// button_2.textContent = "Off"
// document.body.appendChild(button_2);
// button_2.addEventListener("click", () => {
//     globe_off.style.display = "inline";
//     globe_on.style.display = "none";
// })

let data = [
    {
        id: 1,
        name: "tunde",
        email: "tunde@gmail.com"
    },
    {
        id: 2,
        name: "olamide",
        email: "olamide@gmail.com"
    },
    {
        id: 3,
        name: "prosper",
        email: "prosper@gmail.com"
    },
];

readAll = () => {
    localStorage.setItem("object", JSON.stringify(data));
    let prosper = document.querySelector(".data_table");
    let myObject = localStorage.getItem("object");
    let myData = JSON.parse(myObject);
    // console.log(myData)
    let element = "";
    myData.map(x => (
        element += `
            <tr>
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.email}</td>
            <td><button onclick="myEdit(${x.id})">Edit</button></td>
            <td><button onclick="myDelete(${x.id})">Delete</button></td>
            </tr>
        `
    )
    )
    prosper.innerHTML = element;

}

function myCreate(){
    document.querySelector(".create-form").style.display="block";
    document.querySelector(".add_div").style.display="none";
    
}

function myAdd(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    let myclass = Math.floor(Math.random() * 1000)
    var myObject = {id:myclass, name:name, email:email}
    data.push(myObject)
    document.querySelector(".create-form").style.display="none";
    document.querySelector(".add_div").style.display="block";
    readAll()
}

function myEdit(id){
    document.querySelector(".update_form").style.display="block";
    let myGet = data.find(x => x.id == id);
    document.querySelector(".uid").value = myGet.id;
    document.querySelector(".uname").value = myGet.name;
    document.querySelector(".uemail").value = myGet.email;
}
 
function myUpdate(){
    let id = document.querySelector(".uid").value;
    let name = document.querySelector(".uname").value;
    let email = document.querySelector(".uemail").value;
    let myIndex = data.findIndex(x => x.id == id);
    data[myIndex] = {id:id, name:name, email:email}
    readAll()
    document.querySelector(".uname").value = "";
    document.querySelector(".uemail").value = "";
}

function myDelete(id){
    let myIndex = data.findIndex(x => x.id == id);
    data.splice(myIndex, 1);
    readAll()
}


// Spreading (Spread Operator)
let myDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let number = [29, 30, 50, 70];
let myWeek = [...myDays, "Saturday", "Sunday", ...number];
console.log(myWeek)
console.log(myDays)


// Destructuring
let myCar = {
    name: "Toyota",
    model: "Camry",
    year: 2021
}
console.log(myCar["model"])
let {name, model, year} = myCar;
console.log(model, year)

// Build a clock
let myClock = document.querySelector(".clock");
let myTime = () => {
    let myDate = new Date();
    let myHours = myDate.getHours();
    let myMinutes = myDate.getMinutes();
    let mySeconds = myDate.getSeconds();
    myClock.innerHTML = `${myHours}:${myMinutes}:${mySeconds}`;
}
setInterval(myTime, 1000)



class Product{
    constructor(name, brand, color, version){
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.version = version;
    }

    getProduct(){
        console.log(`The currnet product has the features of ${this.name} ${this.brand} ${this.color}  ${this.version}`)
    }
}

let myProduct = new Product("Iphone", "Apple", "Black", "12 Pro Max");
console.log(myProduct.getProduct());

class NewProduct extends Product{
    constructor(name, brand, color, version, model, price){
        super(name, brand, color, version)
        this.model = model;
        this.price = price;
    }

    myNewProduct(){
        console.log(`The current product has the features of ${this.name} ${this.brand} ${this.color}  ${this.version} ${this.model} ${this.price}`)
    }
}

let myProduct2 = new NewProduct("Iphone", "Apple", "Black", "12 Pro Max", "2021", "₦500,000");

// Analog clock
function updateClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');
  
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock(); // Initial call to set the correct time immediately


