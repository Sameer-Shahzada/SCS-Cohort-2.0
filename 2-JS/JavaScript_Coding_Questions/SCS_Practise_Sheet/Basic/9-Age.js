// -> 9. Store your age and print whether it is greater than 18.

function canVote(age) {
    if(!Number.isInteger(age) || Number.isNaN(age)) {
        return 'Invalid Input';
    }

    if(age > 18) {
        console.log('You are allow to give vote');
    } else {
        console.log('You are not allow to give vote');
    }
}
canVote(11)