// MATH OBJECT

let x = 3.99;
let y = 2;
let z = 1;

z = Math.round(x);
z = Math.floor(x); //floor always rounds down
z = Math.ceil(x); //ceil rounds up
z = Math.trunc(x); //eliminates any decimal part
z = Math.pow(x, y); // increases x to the power of y
z = Math.sqrt(x); //finds square root
z = Math.log(x); //returns the natural logarithm (base e) of a number.
z = Math.sin(x); //Returns the sine of a number. синус
z = Math.cos(x); //Returns the cosine of a number. косинус
z = Math.tan(x); //Returns the tangent of a number.
z = Math.abs(x); //Returns the absolute value of a number (the value without regard to whether it is positive or negative).
z = Math.sign(x); //Returns the sign of the x, indicating whether x is positive, negative or zero.

let max = Math.max(x, y, z); //finds max value
let min = Math.min(x, y, z); //finds min value

console.log(min);
