const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 500; // Maximum delay in milliseconds (adjust as needed)
const endCount = 100; // Target count (adjust as needed)

let actualCount = 0; // Initialize actual count

const counterElement = document.getElementById("my-counter"); // Get element reference

const intervalId = setInterval(() => {
  actualCount++; // Increment actual count
  const delay = Math.random() * (maxDelay - minDelay) + minDelay; // Generate random delay
  setTimeout(() => {
    counterElement.textContent = `As of ${new Date().toLocaleString()}, you have counted to ${actualCount} with random delays.`;
  }, delay * 1000); // Convert delay to milliseconds
}, 1000); // Update every second (adjust as needed)

if (actualCount >= endCount) {
  clearInterval(intervalId);
  counterElement.textContent += "\nCounting finished";
}
