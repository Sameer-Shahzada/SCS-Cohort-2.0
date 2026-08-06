/*
    DOM's code and Logic code should be separate 
*/

//-> Separation of concerns 

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add(n1,n2) {
    return n1 + n2;
}

btn.addEventListener("click", function() {
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);
    let finalAdd = add(num1 + num2);
    let li = document.createElement("li");
    li.textContent = finalAdd;
    ul.appendChild(li);
});




/// Next topic map function or creating your own map function
// Custom utilities(ex - own implementaton of map, deep clone)
// Let me explain what is the benefits of own custom utilities

//-> deep clone (Deep copy shallow copy SCS YT video - 45 min lecture)
const arr = [1,2,3,4,5];

function myMap(arr, callback) {
    let newarr = [];
    for(let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i], i, arr));
    }
    return newarr;
}

// let ans = myMap([1,2,3,4], (num) => num + 2);

let ans = myMap(arr, function(val) {
    return val + 2;
})

//-> Next topic - How JS works in browser (Event Loop, Web Apis, Call Stack)

/*
    Call Stack (Execution Stack)
*/

function a() {
    console.log("a");
}
function b() {
    a();
    console.log("b");
}
function c() {
    b();
    console.log("c");
}
c();


// Web Apis
    // - console, setTimeout, setInterval, alert and prompt is not the part of js (let proof)

    //- these things come from browser from window object thats why its not from javscript it is from browser which is 
    // known as web Apis


// -> Call Stack topic

setTimeout(function () {
    console.log("hey 1");
},1000);

setTimeout(function () {
    console.log("hey 2");
},1200);

setTimeout(function () {
    console.log("hey 3");
},400);

setTimeout(function () {
    console.log("hey 4");
},4000);

// Explain this Execution

// Do chatgpt for remaining question and revise performance optimisation and architecture thinking section 
