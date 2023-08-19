let x = 5;

const test = (number) => {
    // number = 1
    let x = 2;
    console.log(number)
    console.log(x);
    number = 10;
    const testing = (number) => {
        // number = 10
        console.log(x);
        x = 3;
        console.log(x);
        return number * x;
    }
    console.log(number)
    console.log(testing(number));
    console.log(x)
    return number * x;
}

console.log(x)

console.log(test(1));

console.log(x);