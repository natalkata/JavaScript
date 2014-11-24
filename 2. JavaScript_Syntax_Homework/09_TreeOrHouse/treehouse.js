function treeHouseCompare(arr) {
    var a = arr[0];
    var b = arr[1];
    var houseArea = (a * a) + (a * (a / 3 * 2)) / 2;
    houseArea = houseArea.toFixed(2);
    var treeArea = ((b / 3) * b) + (Math.PI * ((b / 3) * 2) * (b / 3 * 2));
    treeArea = treeArea.toFixed(2);
    if (treeArea > houseArea) {
        console.log("tree/" + treeArea);
    } else {
        console.log("house/" + houseArea);
    }
}
treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);