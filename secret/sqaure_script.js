// JavaScript code to spawn and move the red ball
window.addEventListener("DOMContentLoaded", function() {
    // Create a new div element for the ball
    var ball = document.createElement("div");
    ball.id = "ball";
    ball.style.backgroundColor = "red";
    ball.style.width = "50px";
    ball.style.height = "50px";
    ball.style.position = "absolute";
    
    // Append the ball to the main section of the webpage
    var main = document.querySelector("main");
    main.appendChild(ball);
    
    // Set initial position and direction
    var position = 0; // Starting position
    var direction = 1; // Movement direction (1 = right, -1 = left)
    var speed = 5; // Movement speed
    
    // Function to move the ball back and forth
    function moveBall() {
      // Update the position
      position += speed * direction;
      
      // Reverse direction if the ball reaches the edges
      if (position >= (main.offsetWidth - ball.offsetWidth) || position <= 0) {
        direction *= -1;
      }
      
      // Apply the updated position to the ball
      ball.style.left = position + "px";
      
      // Call the function again to create a continuous animation loop
      requestAnimationFrame(moveBall);
    }
    
    // Start the animation loop
    moveBall();
  });
  