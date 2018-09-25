function fillDb() {
    for (var i = 0; i < myDb.length; i++) {
        nbDb += 1;
        myDb[i] = new Db(30, 400 - (nbDb * 40));
    }
    nbDb = 0
}

function changeColorDb(db, color) {
    var canvas = document.getElementById("DB");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(db.x, db.y, db.width, db.height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    db.color = color;
    db.up = true;
    nbDb += 1;
}

function getEmptyDb() {
    for (x = 0; x < myDb.length; x += 1) {
        if (myDb[x].up == false) {
            return myDb[x];
        }
    }
}
