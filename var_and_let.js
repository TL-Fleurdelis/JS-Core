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
        // var x = 2;
        // x = 2; 
        // Nhìn 2 đoạn command trên xem đoạn nào đúng, đoạn nào sai ?
        let y = 2;
        // let y = 3
        // y = 3;
        // Nhìn 2 đoạn command trên xem đoạn nào đúng, đoạn nào sai ?

    }
    console.log(x); // Được (var có function scope)
    console.log(y); // Lỗi (let có block scope)
}
// Kết luận: Nên sử dụng let thay vì var để tránh các vấn đề liên quan đến phạm vi và hoisting, giúp mã dễ đọc và bảo trì hơn.

