// Using what we've learned about the Math library in JavaScript, 
// complete the following function that should return a value between 1 through 6 at random.

function d6(sides) {
    var roll = Math.floor(Math.random() * sides) + 1;
    return roll;
}

var playerRoll = d6(6);
console.log("The player rolled: " + playerRoll);


function d6(sides) {
    for (var i = 0; i <= 10; i++) {
        var roll = Math.floor(Math.random() * sides) + 1;
        console.log("The player rolled: " + roll);
    }
}

d6(1);