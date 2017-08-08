var col,row;
var w = 20;
var grid = [];

var stack = [];

var current;

function setup() {
    createCanvas(400,400);

    col = floor(width/w);
    row = floor(height/w);
    for (var j = 0; j<row;j++){
        for(var i = 0;i<col;i++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    current = grid[0];

}

function draw() {
   background(0);
   for(var i = 0;i < grid.length;i++){
       grid[i].show();
   }
   
   current.visited = true;
   current.highlight();

   var next = current.checkAround();
   console.log(next);
   if (next){
      next.visited = true;
       
      stack.push(current);

      removeWalls(current,next);

      current = next;

   } else if (stack.length > 0) {
       current = stack.pop();
   }
}


function z(i , j){

    if (i < 0 || j < 0 || i > col - 1 || j > row - 1){
      return -1;
    } else {
    return i + j * col;
}
}