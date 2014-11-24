function displayProperties() {
    var props = [];
    for (var prop in document) {
        props.push(prop);
    }
    props.sort();
    document.getElementById("output").innerHTML = props.join('<br>');
}

displayProperties()