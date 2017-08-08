

// function index(i , j){

//     if (i < 0 || j < 0 || i > col || j > row){
//       return -1;
//     } else {
//     return i + j * col;
//     }

// }





function Cell(i,j){
    this.i = i;
    this.j = j;
    this.wall = [true, true, true, true];
    this.visited = false;

    this.show = function(){
        var x = this.i*w;
        var y = this.j*w;
        

        if(this.visited){
        noStroke();
        fill(0,0,150,100);
        rect(x,y,w,w);
        }

        stroke(255);

        if (this.wall[0]){
        line(x  , y  , x+w, y  );
        }

        if (this.wall[1]){
        line(x+w, y  , x+w, y+w);
        }

        if (this.wall[2]){
        line(x+w, y+w, x  , y+w);
        }

        if (this.wall[3]){
        line(x  , y+w, x  , y  );
        }
    }



    this.checkAround = function() {
        var n = [];
        var top = grid[z( i, j - 1)];
        var right = grid[z( i + 1, j)];
        var bottom = grid[z(i,j + 1)];
        var left = grid[z(i - 1, j)];

        if (top && !top.visited){
            n.push(top);
        }
        if (right && !right.visited){
            n.push(right);
        }
        if (bottom && !bottom.visited){
            n.push(bottom);
        }
        if (left && !left.visited){
            n.push(left);
        }

        if (n.length > 0){
            var r = floor(random(0,n.length));
            return n[r];
    } else {
     return undefined;
    }

}

this.highlight = function(){
    var x = this.i*w;
        var y = this.j*w;
        noStroke();
        fill(0,255,255,100);
        rect(x,y,w,w);
}


}

function removeWalls(a,b){
    var x = a.i - b.i;
    if(x === 1){
        a.wall[3] = false;
        b.wall[1] = false;
    } else if(x === -1){
        a.wall[1] = false;
        b.wall[3] = false;
    }

    var y = a.j - b.j;
    if(y === 1){
        a.wall[0] = false;
        b.wall[2] = false;
    } else if(y === -1){
        a.wall[2] = false;
        b.wall[0] = false;
    }

}