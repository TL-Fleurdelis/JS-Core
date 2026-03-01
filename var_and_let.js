// Phân biệt var và let trong JavaScript
// var:

// Có phạm vi function (function scope) hoặc toàn cục (global scope).
// Không có phạm vi khối (block scope).
// Có thể bị hoisting (được đưa lên đầu phạm vi, giá trị là undefined trước khi gán).
// Có thể khai báo lại trong cùng phạm vi.
// let:

// Có phạm vi khối (block scope, ví dụ: trong {} của if, for, while).
// Không bị hoisting như var (không dùng được trước khi khai báo).
// Không thể khai báo lại trong cùng phạm vi.

function test() {
    if (true) {
        var x = 1;
        let y = 2;
    }
    console.log(x); // Được (var có function scope)
    console.log(y); // Lỗi (let có block scope)
}