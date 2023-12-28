//create a function that accepts a number and returns if its' a prime.

const isPrime = n => {
    let count = 2;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            count++;
            break;
        }
    }

    return count === 2;
}

console.log(isPrime(20));
console.log(isPrime(21));
console.log(isPrime(22));
console.log(isPrime(23));

//create a function that accepts a number and returns it's factorial

const factorial = number => {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
};

console.log(factorial(5));