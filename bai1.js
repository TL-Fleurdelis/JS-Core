// Biến trong JS 
let code = 123;
let Code = 123;
// Trong JavaScript, tên biến phân biệt chữ hoa và chữ thường, vì vậy 'code' và 'Code' là hai biến khác nhau. 
// Điều này có nghĩa là bạn có thể sử dụng cả hai biến trong cùng một phạm vi mà không gây ra xung đột
let firstName = 'March'; // String
let employee_name = 'long.truong'; // Cách khác để đặt tên biến, sử dụng dấu gạch dưới
console.log(employee_name);
console.log(code);
console.log(firstName);

let myFirstJob = 'teacher';
let myCurrentJob = 'developer';
console.log(myFirstJob);
console.log(myCurrentJob);

let list_my_info = ['March', 25, 'Developer']; // Sử dụng mảng để lưu trữ nhiều giá trị liên quan đến thông tin cá nhân
console.log(list_my_info);


let list_my_info2 = [firstName, employee_name, myFirstJob, myCurrentJob]; // Sử dụng mảng để lưu trữ các biến đã khai báo
console.log(list_my_info2);

// let 3_years = 123; // lỗi, tên biến không được bắt đầu bằng số
// let my name = 'March'; // lỗi, tên biến không được chứa khoảng trắng

// tránh đặt tên biến trùng với từ khóa của JavaScript, ví dụ: let, const, var, function, if, else, for, while, return, class, etc.
// Ví dụ: let let = 123; // lỗi, 'let' là từ khóa của JavaScript
// Ví dụ: function function() { } // lỗi, 'function' là từ khóa của JavaScript

// Trong JavaScript:

// ✅ biến → camelCase

// ✅ class → PascalCase

// ✅ hằng số → UPPER_CASE