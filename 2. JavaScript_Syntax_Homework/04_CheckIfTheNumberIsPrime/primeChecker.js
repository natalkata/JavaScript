function isPrime(number) {
    var prime;
    if (number % 2 == 1) {
        prime = true;
    } else {
        prime = false;
    }
    return prime;
}
console.log(evenNumber(7));
console.log(evenNumber(254));
console.log(evenNumber(587));