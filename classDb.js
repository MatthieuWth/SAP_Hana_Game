class Db {
    constructor(left, topSquare) {
        this.x = left;
        this.y = topSquare;
        this.height = 40;
        this.width = 420;
        var canvas = document.getElementById("DB");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "#eee";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.id = nbDb;
        this.up = false;
    }
}


function deleteDb(db) {
     if (COLORS[db.color] > 0) {
        return ;
    }
    var canvas = document.getElementById("DB");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(db.x, db.y, db.width, db.height);
    ctx.fillStyle = "#eee";
    ctx.fill();
    ctx.closePath();
    db.up = false;
    nbDb -= 1;
}

var canvas = document.getElementById("DB");

function isIntersectDb(point, db) {
    if ((point.x - db.x) > 30 && (point.x - db.x) < 430) {
        if ((point.y - db.y) > 0 && (point.y - db.y) < 40) {
            deleteDb(db);
            console.log("true =>" + COLORS[db.color]);
            return true
        }
    }
    return false;
}


canvas.addEventListener('click', (e) => {
    var found = 0;
    const pos = {
        x: e.clientX,
        y: e.clientY - TOP_DB
    };
    for (var i = 0; i < 9; i++) {
        if (found = isIntersectDb(pos, myDb[i])) { break; }
    }
});