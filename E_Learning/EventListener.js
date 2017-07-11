var x = 0;
var y = 0;
var xVal = 0;
var yVal = 0;
var sprite = document.getElementById("sprite1");
console.log(sprite);
console.log(document.getElementById("output"));
document.getElementById("output").innerHTML=" X: 0" + " Y:0";
document.addEventListener('keydown', function(event) {
    if (event.keycode == 37) {
        x -= 5;
        xVal = x + "px";
        sprite.style.left = xVal;
    }
    if (event.keycode == 38) {
        y -= 5;
        yVal = y + "px";
        sprite.style.top = xVal;
    }
    if (event.keycode == 39) {
        x += 5;
        xVal = x + "px";
        sprite.style.left = xVal;
    }
    if (event.keycode == 40) {
        y += 5;
        yVal = x + "px";
        sprite.style.top = yVal;
    }

document.getElementById("output").innerHTML = "x: " + xVal + "Y: " + yVal;
});