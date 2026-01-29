/**
 * Throttle
 * --------
 * Ensures a function is executed at most once within a specified time interval.
 * 
 */

function throttle(fn, delay) {
    let lastExecutionTime  = 0;

    return function (...args) {
        const now = Date.now();
        if(now - lastExecutionTime  < delay) {
            return;
        }
        lastExecutionTime  = now;
        // return fn(...args)
        return fn.apply(this, args); // preserves event context | Use apply to pass arguments and context
    };
}

function sendChatMessage(message) {
    console.log(`Sending Message`, message)
}

// Simulate chat slow-mode (1 message every 2 seconds)
const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMessageWithSlowMode("Hi")
sendChatMessageWithSlowMode("Hello")
sendChatMessageWithSlowMode("Hello Ji")
sendChatMessageWithSlowMode("When will next cohort coming")
sendChatMessageWithSlowMode("What will be the discount for upcoming cohort");

/*
Interview One-Liner (Very Important)
    “Throttle ensures a function runs at most once in a given time window, regardless of how many times it’s triggered.”

If Interviewer Asks: “Throttle vs Debounce?”
    “Debounce waits until events stop, throttle allows execution at fixed intervals.”

*/