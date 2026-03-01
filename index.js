console.log('Hello, World!');

let points = 100;
let type = points > 100 ? 'gold' : 'silver';
console.log(`You have ${points} points, which is a ${type} type.`);

console.log(false || true);
console.log(false || 'abc');
console.log(false || 1);
console.log(false || 1 || 2); //giải thích: nếu false thì lấy 1, nếu 1 thì lấy 1, nếu 2 thì lấy 2
console.log(false || 0 || 1); //giải thích: nếu false thì lấy 0, nếu 0 thì lấy 1, nếu 1 thì lấy 1

let a = 'red', b = 'blue';

let c = a;
a = b;
b = c;
console.log(a, b); //giải thích: a = 'blue', b = 'red'

// if else if and else
hour = 10;
if (hour < 10) {
    console.log('Good morning');
}
else if (hour >= 10 && hour <= 12) {
    console.log('Good noon');
}
else if (hour >= 13 && hour <= 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}

let role = null;
switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'admin':
        console.log('Admin user');
        break;
    default:
        console.log('Unknown user');
        break;
}

// Phân biệt for...in và for...of trong JavaScript
// 1. for...in:

// Dùng để lặp qua các thuộc tính (key) của một đối tượng hoặc chỉ số của mảng.
// Thường dùng với object.
// 2. for...of:

// Dùng để lặp qua giá trị của một iterable (mảng, chuỗi, Set, Map).
// Thường dùng với array hoặc các đối tượng có thể lặp.

const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key); // a, b, c
}

const arr = [10, 20, 30];
for (let value of arr) {
    console.log(value); // 10, 20, 30
}

function maximum(a, b) {
    return a > b ? a : b;
}

let numb = maximum(1, 2); // 2
console.log(numb);

// Object.keys(obj)
// Trả về một mảng chứa các key (tên thuộc tính) của đối tượng obj.

const o1 = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Object.entries(obj)
// Trả về một mảng các cặp [key, value] của đối tượng obj.
const o2 = {a: 1, b: 2, c: 3};
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

let priceRange = [
    {label: '$', tooltip:'Inexpensive', min: 0, max: 10},
    {label: '$$', tooltip:'Moderate', min: 11, max: 20},
    {label: '$$$', tooltip:'Inexpensive', min: 21, max: 50}
]
let restaurant = [
    {averagePerPerson: 5},
]
const temp = [1,3];
temp.push(2);
temp.unshift(1,2);
temp.splice(1, 0, 'a', 'b'); // Thêm 2 và 3 vào vị trí thứ 1
console.log(temp)

const courses = [
    {id: 1, name: 'JavaScript', price: 100},
    {id: 2, name: 'Python', price: 200},
    {id: 3, name: 'Java', price: 300}
]
const course_found = courses.find(course => course.name === 'Python');
console.log(course_found); // {id: 2, name: 'Python', price: 200}

const courseJava = courses.find(function(course) {
    return course.name === 'Java';
});

console.log(courseJava); // {id: 3, name: 'Java', price: 300}

const a1 = [1, 2, 3];
for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]); // 1, 2, 3
}
a1.forEach(number => console.log(number)); // 1, 2, 3
// a1.forEach(function(number) {
//     console.log(number); // 1, 2, 3
// });



move();