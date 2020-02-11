/*
 * Programming Quiz: JuliaJames (4-1)
 */
var x = 3;

while (x <= 20 //stop condition) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("JuliaJames");
    } 
    else if (x % 5 === 0) {
        console.log("James");
        } 
        
    else if (x % 3 === 0) {
        console.log("Julia");
        } 
    
    else {
        console.log(x);
        }
    
   x = x + 1; //increment x
}
