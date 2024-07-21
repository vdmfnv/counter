const minJump = 27; // Minimum jump value (adjusted to 27)
const maxJump = 63; // Maximum jump value (adjusted to 63)
let currentCount = 0; // Initialize current count

const directMessagesElement = document.getElementById("direct-messages"); // Get element reference for "direct-messages"

const updateCount = () => {
  // Combine random jump generation and count update in one line
  currentCount += Math.floor(Math.random() * (maxJump - minJump + 1)) + minJump;

  // Update direct-messages element content
  directMessagesElement.textContent = currentCount;

  // Schedule next update (adjust interval as needed)
  setTimeout(updateCount, 1000); // Update every second (adjust the delay for faster or slower counting)
};

updateCount(); // Start the count update
