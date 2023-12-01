 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	       const pi = Math.PI;
           const areaOfCircle = (radius, pi) => {
           return pi * radius * radius;
};
         alert("The area of the circle : " + areaOfCircle(radius, pi).toFixed(2));
// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
  
// }
// var c = new circle(3);
// alert('The area of the circle', c.area().toFixed(2));
}
calculateArea();
