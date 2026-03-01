// Hàm khai báo (Function Declaration):
// Được "hoisting" (có thể gọi ở bất kỳ đâu trong file, kể cả trước khi khai báo).
// Cú pháp: dùng từ khóa function và tên hàm.
walk(); // Gọi hàm trước khi khai báo vẫn được vì hàm được hoisting.
function walk(){
    console.log('Walking...');
}

// Hàm biểu thức (Function Expression):
// Không được hoisting (chỉ gọi được sau khi khai báo).
// Hàm được gán cho một biến.
// Có thể là hàm ẩn danh (không tên).
let run = function(){
    console.log('Running...');
};

let move = run;
let x = 1;
run();