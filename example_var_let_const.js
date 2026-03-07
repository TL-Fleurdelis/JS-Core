let age = 30;
age = 31;


//Khi nào sử dụng const, let, var ?
// Sử dụng const khi bạn biết rằng giá trị của biến sẽ không thay đổi sau khi được gán lần đầu tiên. 
// Điều này giúp đảm bảo tính bất biến và tránh các lỗi do vô tình thay đổi giá trị của biến.
// Sử dụng let khi bạn cần một biến có thể thay đổi giá trị trong quá trình thực thi, nhưng bạn muốn giới hạn phạm vi của biến đó trong một khối (block) cụ thể, như trong một vòng lặp hoặc một khối if.
// Tránh sử dụng var vì nó có phạm vi function và có thể gây ra các vấn đề liên quan đến hoisting và phạm vi không rõ ràng, làm cho mã khó đọc
const birthdayYear = 1990;
// Ví dụ thực tế sử dụng const: Dùng const để lưu trữ các giá trị như ngày sinh, tên công ty
// hoặc bất kỳ thông tin nào mà bạn biết sẽ không thay đổi trong suốt chương trình của mình. Ví dụ:
const companyName = "Sotatek JSC";
const pi = 3.14159;
// Ví dụ thực tế sử dụng let: Dùng let để lưu trữ các giá trị có thể thay đổi, như tuổi của một người, số lượng sản phẩm trong kho, hoặc trạng thái của một ứng dụng. Ví dụ:
let userAge = 25;
let productStock = 100;
let isLoggedIn = false;

// Ví dụ về việc sử dụng var (không khuyến khích):
var oldVariable = "This is an old variable";
// var oldVariable = "This will not cause an error, but it's not recommended";
// oldVariable = "This will work, but it can lead to confusion and bugs";

// birthdayYear = 1991; // Đoạn code này chạy đúng hay không ? 
// const job; // Đoạn code này chạy đúng hay không ?
// Trả lời câu hỏi trên: Đoạn code thứ nhất sẽ gây lỗi vì bạn không thể gán lại giá trị cho một biến được khai báo bằng const. Đoạn code thứ hai cũng sẽ gây lỗi vì khi khai báo một biến bằng const, bạn phải gán giá trị ngay lập tức. Nếu không gán giá trị, biến sẽ không được khai báo đúng và sẽ gây lỗi khi chạy.

nameEmployee = "Bob"; 
console.log(nameEmployee); // Output: "Bob"
// Trả lời câu hỏi trên: Đoạn code này sẽ chạy đúng vì JavaScript cho phép bạn gán giá trị cho một biến mà chưa được khai báo trước đó. Tuy nhiên, điều này không được khuyến khích vì nó có thể dẫn đến các lỗi khó phát hiện và làm cho mã của bạn khó đọc và bảo trì. Nên luôn khai báo biến bằng var, let hoặc const trước khi sử dụng để đảm bảo tính rõ ràng và tránh các vấn đề liên quan đến phạm vi và hoisting.