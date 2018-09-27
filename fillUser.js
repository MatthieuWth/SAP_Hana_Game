function fillUser() {
    for (var i = 0; i < myUsers.length; i++) {
        myUsers[i] = new Array(9);
    }

    for (var i = 0; i < myUsers.length; i++) {
        for (var y = 0; y < 9; y++) {
            myUsers[i][y] = new User((y * SIZE), Math.floor(nbUsers / 9) * 50);
            nbUsers += 1;
        }
    }
    nbUsers = 0
}

function getEmptySpace() {
    for (var i = 0; i < myUsers.length; i++) {
        for (var y = 0; y < 9; y++) {
            if (myUsers[i][y].up == false)
                return myUsers[i][y]
        }
    }
    return false
}

function createOrNotCreate() {
    var x = Math.floor((Math.random() * 100) + 1);
    if (x < 21 && nbDb < myDb.length) {
        return true;
    }
    return false;
}

function getRandomDb() {
    if (nbDb == 0) {
        changeColorDb(myDb[0], getRandomColor())
        return 0
    }
    var x = Math.floor((Math.random() * 9));
    while (myDb[x].up == false) {
        var x = Math.floor((Math.random() * myDb.length));
    }
    return x
}

function test() {
    var x = 1

    if (score > 10) { x = 2; }
    if (score > 50) { x = 3; }
    for (i = 0; i < x; i +=1) {
        happenUser()
    }
    if (nbUsers == 27 || nbDb == 9) {
        alert("Game ended !! Your final score is: " + score)
    }
}


function happenUser() {
    var user = getEmptySpace()
    if (user == false) { return; }
    var ret = createOrNotCreate();
    if (ret == true) {
        var color = getRandomColor();
        var db = getEmptyDb();
        changeColor(user, color, db);
        COLORS[color] += 1;
        changeColorDb(db, color);
    }
    else {
        var db = getRandomDb();
        changeColor(user, myDb[db].color, myDb[db]);
        COLORS[myDb[db].color] += 1;
    }
}


function changeColor(user, color, db) {
    var canvas = document.getElementById("USERS");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(user.x, user.y, 50, 50);
    ctx.fillStyle = color;
    ctx.fill();
    var img = document.getElementById("user3");
    ctx.drawImage(img, user.x + 5, user.y + 5, 40, 40);
    ctx.closePath();
    user.color = color;
    user.up = true;
    user.db = db;
    nbUsers += 1;
}
