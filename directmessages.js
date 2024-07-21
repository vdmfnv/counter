const minJump = 13; // Minimum jump value
const maxJump = 37; // Maximum jump value
let currentCount = 0; // Initialize current count

const inmailsElement = document.getElementById("direct-messages"); // Get element reference

const updateCount = () => {
  const randomJump = Math.floor(Math.random() * (maxJump - minJump + 1)) + minJump; // Generate random jump value
  currentCount += randomJump; // Update current count

  // Update inmails element content
  inmailsElement.textContent = currentCount;

  // Schedule next update (adjust interval as needed)
  setTimeout(updateCount, 1000); // Update every second (adjust the delay for faster or slower counting)
};

updateCount(); // Start the count update
