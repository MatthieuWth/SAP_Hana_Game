class User {
    constructor(left, topSquare) {
        this.x = left;
        this.y = topSquare;
        var canvas = document.getElementById("USERS");
        var ctx = canvas.getContext("2d");
        this.ctx = ctx;
        ctx.beginPath();
        ctx.rect(left, topSquare, 50, 50);
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.closePath();
        this.id = nbUsers;
        this.up = false;
        this.db = null;
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function animationKillUser(ctx, user) {
    var cpt = 1
    var sizer = 45

    while (sizer > 0) {
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.fillStyle = user.color;
        ctx.rect(user.x + 1 * cpt, user.y + 1 * cpt, sizer, sizer);
        ctx.fill();
        sizer -= 1;
        cpt += 1;
    }
    ctx.fillStyle = "#eee";
}

function deleteUser(user) {
    var canvas = document.getElementById("USERS");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(user.x, user.y, 50, 50);
    ctx.fillStyle = "#eee";
    animationKillUser(ctx, user)
    ctx.fill();
    ctx.closePath();
    user.up = false;
    user.db.nbUser -= 1;
    user.db = null;
}

var canvas = document.getElementById("USERS");


function isIntersect(point, user) {
    if ((point.x - user.x) > 0 && (point.x - user.x) < 50) {
        if ((point.y - user.y) > 0 && (point.y - user.y) < 50) {
            deleteUser(user);
            COLORS[user.color] -= 1;
            console.log("true color :" + user.color);
            return true
        }
    }
    return false;
}

canvas.addEventListener('click', (e) => {
    var found = 0;
    const pos = {
        x: e.clientX - WIDTH_WINDOW,
        y: e.clientY - TOP_USERS
    };
    for (var i = 0; i < myUsers.length; i++) {
        for (var y = 0; y < 9; y++) {
            if (found = isIntersect(pos, myUsers[i][y])) { break; }
        }
        if (found) { break; }
    }
});