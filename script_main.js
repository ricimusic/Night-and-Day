//  Variables
var dayButton = document.getElementById("day");
var nightButton = document.getElementById("night");
var sky = document.getElementById("sky");
var nightGround = document.getElementById("night-scape");
//var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

// Day to Night
nightButton.onclick = function() {
    if (sky.className != "nightlight") {
    	sky.className = "nightlight";
    	nightGround.className = "change";
    	sun.className = "setSun";
        moon.className = "riseMoon";
    }   
}

//Night to Day
dayButton.onclick = function() {
    if (sky.className != "") {
    	sky.className = "";
    	nightGround.className = "";
        moon.className = "setMoon";
    	sun.className = "riseSun";
    }   
}
