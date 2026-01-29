/**
 * Debounce
 * --------
 * Delays execution of a function until
 * the user stops triggering the event.
 */

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
     // Clear any existing timeout
    clearTimeout(timeoutId);

    // Set a new timeout to execute the function after the delay
    timeoutId = setTimeout(function () {
      func(...args);
      // func.apply(this, args); // preserves event context | Use apply to pass arguments and context
    }, delay);
  };
}

const input = document.querySelector("input");

input.addEventListener(
  "input",
  debounce(function (event) {
    // console.log("Input event fired:", "hey");
    console.log("Input value:", event.target.value); // more realistic usage 
  }, 1000),
);

/*
- What to Say If Interviewer Asks “Why Not Arrow Function?”
    “Arrow functions don’t have their own this, so for DOM event handlers I prefer regular functions 
    to preserve the element context.”


*/
