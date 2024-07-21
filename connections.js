const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 1500; // Maximum delay in milliseconds (adjust as needed)

const startDate = new Date(2024, 6, 1); // July 1st, 2024 (month 0-indexed)
const startingCount = 570345890;

let actualCount = startingCount; // Initialize actual count with starting value

const counterElement = document.getElementById("my-counter"); // Get element reference

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const elapsedTime = currentDate - startDate; // Time since start date

  // Generate random delay for simulated breaks and accelerations
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  
  // Simulate slower counting speed (adjust as needed)
  const maxCountPerSecond = 10; // Maximum count updates per second
  const dailyElapsedTime = elapsedTime; // Use total elapsed time
  const dailyCount = Math.min(maxCountPerSecond, Math.floor(dailyElapsedTime / (100 + delay))); // Limit count to max per second

  actualCount += dailyCount;

  // Update displayed message (only counter value)
  counterElement.textContent = actualCount;
  
}, 1000); // Update every second (adjust as needed)
