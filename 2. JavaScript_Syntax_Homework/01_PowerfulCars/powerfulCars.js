function convertKWtoHP(carKw) {
    var kwIntoHp = carKw / 0.745699872;
    return kwIntoHp.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));