const number = arrayFromRange(-10, -4);
console.log(number);
function arrayFromRange(min, max){
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

const numbers = [1, 2, 3, 4];
console.log(numbers.includes(1)); // return true includes() kiểm tra phần tử có trong mảng hay không
function includes(array, searchElement){
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

const numbers2 = [1,1,1,2,2,3,4,5]
function except(array, excluded){
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}
console.log(except(numbers2, [1,2]));

const numbers3 = [1,2,3,4];
