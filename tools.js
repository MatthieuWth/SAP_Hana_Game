function displayArray() {
    console.log(myUsers[0]);
    console.log(myUsers[1]);
    console.log(myUsers[2]);
    console.log(myDb);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // return color

    var found = -1
    var nb = Math.floor((Math.random() * 9));
    var key = Object.keys(COLORS)
    return key[nb];
}