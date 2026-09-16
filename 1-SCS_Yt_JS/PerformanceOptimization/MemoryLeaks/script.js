let count = 0;
const int = setInterval(() => {
    if(count < 10) {
        count++;
        console.log(count);
    } else {
        // console.log("still chal raha hai"); // memory leaks
        clearInterval(int);
        console.log('finished');
    }
},500)