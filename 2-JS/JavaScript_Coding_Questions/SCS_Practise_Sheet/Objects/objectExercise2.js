//-> 66. Create an array of book objects

const books = [
    {
        title: "sampleTitle1",
        author: "sampleAuthor1",
        readingStatus: false
    },
    {
        title: "sampleTitle2",
        author: "sampleAuthor2",
        readingStatus: true
    },
    {
        title: "sampleTitle3",
        author: "sampleAuthor3",
        readingStatus: false
    }
]


// print the author of the second book 

console.log(books[1].author)

// to check a key is exist or not
function isKeyExist(obj, key) {
    return key in obj;
}

console.log(isKeyExist(books[0], "author")); // true
console.log(isKeyExist(books[0], "price"));  // false


// Return the Total Number of Keys in an Object

function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log(countKeys(books[0])); 

// Merge Objects Using Object.assign()
const bookInfo = {
    publisher: "ABC Publications",
    year: 2023
};

// Merge with book object:

const mergedBook = Object.assign({}, books[0], bookInfo);

console.log(mergedBook);