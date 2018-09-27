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

var canvasScore = document.getElementById("SCOREUSER");


function changeScore(nb) {
    var ctx = canvasScore.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, 150, 50);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: "+ nb,0,20);
    ctx.closePath();

}

canvasScore.addEventListener('click', (e) => {
    var found = 0;
    console.log(e.clientX + " "+ e.clientY);
    const pos = {
        x: e.clientX - WIDTH_WINDOW,
        y: e.clientY - TOP_USERS
    };
});

function getScore() {
    var now = new Date().getTime();
    var distance = now - beginDate;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    score = seconds;
    changeScore(seconds);
}