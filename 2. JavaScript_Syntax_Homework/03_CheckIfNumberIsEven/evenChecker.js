function evenNumber(number) {
    var even;
    if (number % 2 == 0) {
        even = true;
    } else {
        even = false;
    }
    return even;
}
console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));