//enum 

enum direction {
    up = 1 ,
    down = 2,
    left = 3 ,
    right = 4,
}
console.log(direction.down);   // output : 2 
console.log(direction.left);
console.log(direction.right);
console.log(direction.up);


enum colur
   { Red = "red",
    Blue = "Blue",
    Black = "black"
}

console.log(colur.Black);
console.log(colur.Blue);
console.log(colur.Red);


//Usage in Code


function move(directio : direction){
      switch(directio){
        case direction.up:
            console.log("moving up");
        break;
        case direction.down:
            console.log("moving down");
        break;
        case direction.left:
            console.log("moving left");
        break;
        case direction.right:
            console.log("moving right");
        break;
    }
}

move(direction.down);

