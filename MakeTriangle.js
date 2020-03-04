/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(height) {
    var triangle = "";
    for (var y = 1; y <= height; y++) {
        triangle += (makeLine(y))
    }
    return triangle;
}


// test your code by uncommenting the following line
//console.log(buildTriangle(10));

/* 
1. make a function to build a triangle
2. call makeLine 'height' number of times
3. return the triangle 

*/