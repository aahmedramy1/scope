let x = 5;

const test = (number) => {
    x = 2;

    return number * x;
}

console.log(x);

console.log(test(x));

console.log(x);