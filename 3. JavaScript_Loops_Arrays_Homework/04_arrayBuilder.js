function createArray() {
    var myArray = new Array(20);
    for (var index = 0; index < myArray.length; index++) {
        myArray[index] = index * 5;
    }
    console.log(myArray.join(' '));
}
createArray();