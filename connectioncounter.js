const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 500; // Maximum delay in milliseconds (adjust as needed)

const startDate = new Date(2024, 6, 1); // July 1st, 2024 (month 0-indexed)
const startingCount = 570345890;
const minDailyCount = 100000; // Removed - not used for infinite counting
const maxDailyCount = 200000; // Removed - not used for infinite counting

let actualCount = startingCount; // Initialize actual count with starting value

const counterElement = document.getElementById("my-counter"); // Get element reference

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const elapsedTime = currentDate - startDate; // Time since start date

  // Generate random delay for simulated breaks and accelerations
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  
  // Simulate counting speed based on elapsed time and random delay
  const dailyElapsedTime = elapsedTime; // Use total elapsed time (no daily reset)
  const dailyCount = Math.floor(dailyElapsedTime / (100 + delay)); // Adjust multiplier as needed

  actualCount += dailyCount;

  // Update displayed message
  counterElement.textContent = `As of ${new Date().toLocaleString()}, you would have counted to approximately ${actualCount} with random delays since ${startDate.toLocaleDateString()}. (Daily range reference: ${minDailyCount} - ${maxDailyCount})`;
  
}, 100); // Update every 100 milliseconds (adjust as needed)
