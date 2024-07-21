const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 500; // Maximum delay in milliseconds (adjust as needed)

const startDate = new Date(2024, 6, 1); // July 1st, 2024 (month 0-indexed)
const startingCount = 570345890;

let actualCount = startingCount; // Initialize actual count with starting value
let previousIncrement = 1; // Initialize previous increment for smoothing

const counterElement = document.getElementById("my-counter"); // Get element reference

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const elapsedTime = currentDate - startDate; // Time since start date

  // Generate random delay for simulated breaks and accelerations
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  
  // Simulate random count increment with smoothing
  const minIncrement = 1;
  const maxIncrement = 10;
  let randomIncrement = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
  randomIncrement += Math.floor(Math.random() * (previousIncrement / 2)); // Add variation based on previous increment
  previousIncrement = randomIncrement; // Update previous increment for smoothing

  actualCount += randomIncrement;

  // Update displayed message (only counter value)
  counterElement.textContent = actualCount;
  
}, 1000); // Update every second (adjust as needed)
