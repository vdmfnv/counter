const minJump = 27; // Minimum jump value (adjusted to 27)
const maxJump = 63; // Maximum jump value (adjusted to 63)
let currentCount = 0; // Initialize current count

const directMessagesElement = document.getElementById("direct-messages"); // Get element reference for "direct-messages"

const updateCount = () => {
  const randomJump = Math.floor(Math.random() * (maxJump - minJump + 1)) + minJump; // Generate random jump value
  currentCount += randomJump; // Update current count

  // Update direct-messages element content
  directMessagesElement.textContent = currentCount;

  // Schedule next update (adjust interval as needed)
  setTimeout(updateCount, 1000); // Update every second (adjust the delay for faster or slower counting)
};

updateCount(); // Start the count update
