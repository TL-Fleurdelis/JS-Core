function sum(...args) {
    console.log(args);
    args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]1