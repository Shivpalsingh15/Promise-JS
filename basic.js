//events are signal that something is occured.

// <div>
//   <button onclick="console.log('button was clicked')">Click me</button>
// </div>;
// Inline event

//let btn= document.querySelector("button");
// console.dir('btn:', btn)

// btn.onclick = function(){
//     console.log("button was clicked");

/*Promises:--------------------------------------
A promise in JavaScript is like a special kind of to-do list. When you ask JavaScript to do something that might take some time (like loading an image or fetching data from the internet), instead of waiting around, it gives you a promise. This promise is like a note saying, "I'll let you know when I'm done."

Now, you can do other things on your to-do list while you're waiting for that promise to be fulfilled. Once the task is complete, the promise will either keep its word (resolved) and tell you, "Here's the result!" or admit it couldn't do it (rejected) and say, "Sorry, something went wrong."

So, in a nutshell, a promise is a way for JavaScript to handle tasks that take time, letting you know when they're done or if there was a hiccup along the way. It helps you keep your code running smoothly even when dealing with things that might not happen right away.


Synchronous in JavaScript:-------------------------
Imagine JavaScript as a Chef:

JavaScript starts executing code from top to bottom, like following a recipe step by step.
If there's a task that takes time (like fetching data or waiting for a user click), JavaScript pauses and waits for that task to finish before moving on to the next.

Asynchronous in JavaScript:
Now, imagine JavaScript as a Robot Chef:

JavaScript can handle multiple tasks simultaneously without waiting.
If there's a time-consuming task, like fetching data from a server, JavaScript doesn't stop everything. It continues with other tasks and comes back to that one when it's done.



#call stack
Now, Think of Functions in JavaScript:

In JavaScript, when you run a function, it's like picking up a tray and adding it to the stack.
The function does its job, and when it's finished, it's taken off the top of the stack.




*/

//async function.

// async function greet(){
//     console.log("hello!")
//     return 15
// }
// console.log(greet());

function hello() {
  console.log("hello fnc");
}

function demo() {
  console.log("demo fnc");
  hello();
}
console.log("Start all");

demo();
console.log("done all");

/*output:
 
 Start all
event.js:67 demo fnc
event.js:61 hello fnc
event.js:74 done all*/

// function two() {
//   return one() + one()
// }

// Function that takes a callback
function doSomething(callback) {
  console.log("Doing something...");
  // Calling the callback function
  callback();
}

// Callback function
function afterDoingSomething() {
  console.log("After doing something!");
}

// Using the doSomething function with a callback
doSomething(afterDoingSomething);

/*Doing something...
    After doing something! */

function one(callback) {
  console.log("heloo");
  callback();
}
function thereee() {
  console.log("'ans:'");
}

one(thereee);

function sum(callback) {
  let num = 2 + 5;
  console.log("num:", num);
  callback();
}

function total() {
  console.log("total:");
}

sum(total);

// h1 = document.querySelector("h1");
// function change(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }
// change("red", 2000);

// h1.style.color = "red";

let numb = Math.random();
console.log("numb:", numb);
