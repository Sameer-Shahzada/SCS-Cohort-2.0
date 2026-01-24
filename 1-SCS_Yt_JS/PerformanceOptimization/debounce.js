/*------------------------------------------
 * Debouncing (Node.js Console version only)
 * -----------------------------------------

Debouncing is a technique used to delay the execution of a function until a certain amount of time has 
passed since the last time it was invoked.

This helps to prevent a function from running unnecessary repeated executions, such as
firing API calls on every keystroke while typing, scrolling or resizing.

*/
function debounce(fn, delay) {
  // Stores the active timeout ID between calls
  let timeoutId;
  /**
   * Returned function forms a closure over `timeoutId`
   * and is executed on every invocation.
   */
  return function (...args) {
    clearTimeout(timeoutId); // Cancel the previously scheduled execution (if any)
    // Schedule a new timeout to execute the function after the delay
    timeoutId = setTimeout(() => {
      // fn(...args);
      fn.apply(this, args); // Use apply to pass arguments and context
      /**
       * `apply` ensures that:
       * - Arguments are passed correctly
       * - Original `this` context is preserved
       */
    }, delay);
  };
}

/**
 * Simulated search function
 * In real applications, this would trigger an API call
 */
const search = (query) => {
  console.log(`Searching for`, query);
};

// Create a debounced version of the search function with a 1 second delay
const searchWithDebounce = debounce(search, 1000);

// Simulate fast user typing
searchWithDebounce("H");
searchWithDebounce("HE");
searchWithDebounce("HEL");
searchWithDebounce("HELL");
searchWithDebounce("HELLO");

// Only the last call will execute after 1 second

/* 
Some Important talking points for Interview:

1- Interview-Ready Explanation (Verbal)
    “Each time the debounced function is called, the previous timer is cleared and a new one is set. 
    Only when the calls stop for the given delay does the function finally execute.”

2- If Interviewer Asks: “Why Use Closure Here?”
    “The closure allows the debounced function to remember the timeout ID between invocations, 
    which is essential to cancel previous executions.”

3- If Interviewer Asks: “Is This Browser-Only?”
    “No, debounce is a JavaScript concept. It works in Node.js as well because 
    setTimeout is part of the event loop, not the browser”
*/
