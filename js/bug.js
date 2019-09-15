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
        } 
    } else {
            console.log("An error occurred");
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
        } 
    } else {
        console.log("An error occurred");
    }
}

//function to move Mr. Bug forward (assuming Mr. Bug starts on (0,0)i)
function move() {
    if (direction()) {
        if (direction == "North") {
            if (yPos < 2 && yPos > -2) {
                yPos += 1;
            }
        } else if (direction == "South") {
            if (yPos < 2 && yPos > -2) {
                yPos -= 1;
            }
        } else if (direction == "East") {
            if (xPos < 2 && xPos > -2) {
                xPos += 1;
            }
        } else if (direction == "West") {
            if (xPos < 2 && xPos > -2) {
                xPos -= 1;
            }
        } else {
            console.log("You're going to move off the edge! Change direction")
        }
    }
}