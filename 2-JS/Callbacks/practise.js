// callback practise mode 
function getDataFromInsta(username, cb) {
    // cb({name:'Jhon Doe ', age:30, followers:420})
    // if print just after 3 second
    console.log('data fetching...');
    setTimeout(() => {
        cb({name:'Jhon Doe ', age:30, followers:420});
    },3000)
}

getDataFromInsta('jd', function(data) {
    console.log('data - ', data)
})

// Exercise 1 (Very Easy - warming up)
/* create a function named afterDelay 
- requirements:
    This function take two things 
    1- time (milliseconds)
    2- callback function 
Just after a specified time it should call the callback function and print 'callback executed' inside callback function.
Hint:- Think about scenario 
    we need to do a particular task just after 2 second
    Goal:- understand how it will execute just after callback delay 
    It is the connection of setTimeout + callback 
*/

function afterDelay (time, cb) {
    setTimeout(() => {
        cb('callback executed...')
    },time)
}

afterDelay(4000, function(details) {
    console.log("details:- ", details)
})


// Exercise 2 (Intermediate - data flow)
/*
    Lets create function named getUser 
    Requirements:
    1- username
    2- object just after 1 sec {id, username}
    Then call another function getUserPosts inside callback function
    which takes userId and after 1 sec it takes an array for posts in callback
*/

function getUser (username, cb) {
    console.log('getting user details...')
    setTimeout(() => {
        cb({id:1, username:'brad'});
    },1000);
}

function getUserPosts(id, cb) {
    setTimeout(() => {
        cb(["hello", "good day", "doremon"])
    },2000)
}

getUser("brad", function(data) {
    getUserPosts(data.id, function (allposts) {
        console.log(data.username, allposts);
    })
});

// Exercise 3 

function loginUser(username, cb) {
    console.log("logging in user");
    setTimeout(() => {
        cb({id:1212, username:'Mehvish'});
    },1000);
}

function fetchPermissions(id, cb) {
    console.log("fetching permissions...");
    setTimeout(() => {
        cb(["read", "write","delete"]);
    },2000);
}

function loadDashboard(persmissions, cb) {
    console.log("loading dashboard...");
    setTimeout(() => {
        cb()
    },2000)
}

loginUser("Mehvish", function(userdata) {
    fetchPermissions(userdata.id, function(permissions) {
        loadDashboard(permissions, function () {
            console.log('dashboard loaded');
        })
    })
})
