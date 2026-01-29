/**
 * Throttle
 * --------
 * Ensures a function executes at most once within a specified time interval.
 * 
 */

function throttle(fn, delay) {
    let lastExecutionTime = 0;
    return function (...args) {
        let now = Date.now();
        // Allow execution only if delay has passed
        if (now - lastExecutionTime >= delay) {
            lastExecutionTime = now;
            // fn(...args);
            fn.apply(this, args); // preserves event context | Use apply to pass arguments and context
        }
    };
}

const input = document.querySelector("input");
// Throttled input handler (e.g. API rate limiting)
input.addEventListener("input",
    throttle(function (event) {
        // console.log("ran");
        console.log("Searching for:", event.target.value);
    }, 1000)
)

/*
Interview Explanation (Say This Confidently)
    “Throttle allows the input handler to run at most once every second, even if the user types continuously.”

Common Interview Follow-Up Question
Q: Why not use debounce here?
    “Throttle is used when we want regular updates at fixed intervals, whereas debounce waits until the user stops typing.”
*/