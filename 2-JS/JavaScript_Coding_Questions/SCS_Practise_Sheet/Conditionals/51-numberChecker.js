//-> 51. Return "positive", "negative", or "zero" for a number.

function numberChecker(num) {
    if(num > 0) {
        return 'positive';
    } else if(num < 0) {
        return 'negative';
    } else {
        return 0;
    }
}
console.log(numberChecker(0))