//determine the direction Mr. Bug is facing
function direction() {
    let dir = ["North", "East", "South", "West"];
}

//function to turn Mr. Bug rights
function turnRight() {
    if (direction()) {
        if(direction == "North") {
            direction = "East";
        } else if (direction == "East") {
            direction = "South";
        } else if (direction == "South") {
            direction = "West";
        } else if (direction = "West") {
            direction = "North";
        } else {
            console.log("An error occurred");
        }
    }
}

//function to turn Mr. Bug left
function turnLeft() {
    if (direction()) {
        if(direction == "North") {
            direction = "West";
        } else if (direction == "West") {
            direction = "South";
        } else if (direction == "South") {
            direction = "East";
        } else if (direction = "East") {
            direction = "North";
        } else {
            console.log("An error occurred");
        }
    }
}

//function to move Mr. Bug forward
function move() {

}