// Number: Dùng để lưu trữ các giá trị số, có thể là số nguyên hoặc số thập phân.
let age = 25;
// String: Dùng để lưu trữ các chuỗi ký tự, được bao quanh bởi dấu nháy đơn (' ') hoặc dấu nháy kép (" ").
let nameEmployee = 'March';
let greeting = "Hello, World!";
// Boolean: Dùng để lưu trữ giá trị đúng (true) hoặc sai (false).
let isEmployee = true; // or false
// Null: Dùng để biểu thị một giá trị rỗng hoặc không tồn tại.
let emptyValue = null;
// Undefined: Dùng để biểu thị một biến đã được khai báo nhưng chưa được gán giá trị.
let uninitializedVariable; // giá trị mặc định là undefined

// Symbol: Dùng để tạo ra các giá trị duy nhất, thường được sử dụng làm khóa cho các thuộc tính của đối tượng 
// Không hay sử dụng trong các bài tập cơ bản, nhưng rất hữu ích trong các ứng dụng phức tạp để tránh xung đột tên.
let uniqueId = Symbol('id');
console.log(uniqueId);
// BigInt: Dùng để lưu trữ các số nguyên lớn hơn giới hạn của kiểu Number.
let bigNumber = BigInt(123456789012345678901234567890);
console.log(bigNumber);

// Tại sao JS là ngôn ngữ động? Vì JS cho phép bạn thay đổi kiểu dữ liệu của một biến sau khi nó đã được khai báo. Ví dụ:
let dynamicVariable = 42;

// Có giống Python hay không? Cũng giống Python, JavaScript là một ngôn ngữ động, cho phép bạn gán giá trị có kiểu dữ liệu khác nhau cho cùng một biến. Ví dụ:
let dynamicVariable2 = 'Hello, World!';
//dynamicVariable2 = 3.14;

// Cách để xác định loại datatype của một biến trong JS: Bạn có thể sử dụng toán tử typeof để xác định loại dữ liệu của một biến. Ví dụ:
console.log(typeof age); // Output: 'number'
console.log(typeof nameEmployee); // Output: 'string'
console.log(typeof isEmployee); // Output: 'boolean'
console.log(typeof emptyValue); // Output: 'object' (đây là một lỗi trong JavaScript, null được coi là một object)
console.log(typeof uninitializedVariable); // Output: 'undefined'

let test;
console.log(typeof test); // Output ra là gì ???? 

// Cách comment trong JS: Sử dụng // cho comment một dòng và /* */ cho comment nhiều dòng.

// Đây là một comment một dòng

/*
Đây là một comment nhiều dòng
*/


// Câu hỏi: array, object có được tính là data type không ? array và object khác nhau như nào 
// Phân biệt Primitive và Reference data type 