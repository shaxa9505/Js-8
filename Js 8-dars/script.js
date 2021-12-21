
var book = {
    title: "Shaytanat1",
    author: "Tohir Malik",
    price: 100,
    id: 1,
    read: function () {
        console.log(this.title);
    }
}

book.read()

var book2 = {
    title: "Shaytanat2",
    author: "Tohir Malik",
    price: 100,
    id: 1,
}



var book3 = {
    title: "Shaytanat3",
    author: "Tohir Malik",
    price: 100,
    id: 1,
}

for(var key in book){
    console.log(`Property ${key}: value ${book[key]}`);
}

console.log(book);
console.log(book.title);

// const cars = {
//     color: "black",
//     isBuy: false
// }

// const bmw = {
//     color: "white"
// }

// bmw.__proto__ = cars
// console.log(bmw.isBuy);
// Object.setPrototypeOf(bmw, cars)
// console.log(bmw.isBuy);

// const spark = Object.create(cars);
// console.log(spark.color);

