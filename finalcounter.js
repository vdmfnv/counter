const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 500; // Maximum delay in milliseconds (adjust as needed)
const startTime = Date.now(); // Capture start time

let actualCount = 0; // Initialize actual count

const counterElement = document.getElementById("my-counter"); // Get element reference

const intervalId = setInterval(() => {
  const elapsedTime = Date.now() - startTime; // Calculate elapsed time
  
  // Generate random delay for simulated breaks and accelerations
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  
  // Simulate counting speed based on elapsed time and random delay
  actualCount += Math.floor(elapsedTime / (100 + delay)); // Adjust multiplier as needed

  counterElement.textContent = `As of ${new Date().toLocaleString()}, you have counted to ${actualCount}.`;
  
  // Optional: Stop the counter after a specific time
  const endTime = startTime + (5 * 60 * 1000); // 5 minutes in milliseconds
  if (Date.now() >= endTime) {
    clearInterval(intervalId);
    counterElement.textContent += "\nCounting finished";
  }
}, 100); // Update every 100 milliseconds (adjust as needed)
