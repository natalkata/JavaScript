﻿function  compareChars(arr1, arr2) {
    var counter = 0;
    if (arr1.length != arr2.length) {
        console.log("Not Equal");
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                counter++;
            }
        }
        if (counter == arr1.length) {
            console.log("Equal");
        } else {
            console.log("Not Equal");
        }
    }

}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'] , ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'] , ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);