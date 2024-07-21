const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 500; // Maximum delay in milliseconds (adjust as needed)

// Starting time (July 1st, 2024) - preserved across page refreshes
const startingTime = new Date(2024, 6, 1); 

let previousIncrement = 1; // Initialize previous increment for smoothing

let accumulatedCount = 0; // Initialize accumulated count

const counterElement = document.getElementById("inmails"); // Get element reference

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const elapsedTime = currentDate - startingTime; // Time since starting time

  // Generate random delay for simulated breaks and accelerations
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  
  // Simulate random count increment with smoothing
  const minIncrement = 13;
  const maxIncrement = 37;
  let randomIncrement = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
  randomIncrement += Math.floor(Math.random() * (previousIncrement / 2)); // Add variation based on previous increment
  previousIncrement = randomIncrement; // Update previous increment for smoothing

  // Calculate count based on elapsed time and random increment (always positive)
  const elapsedTimeInSeconds = elapsedTime / 1000; // Convert to seconds

  // Accumulate count with random increment
  accumulatedCount += randomIncrement;

  // Update displayed message (only counter value)
  counterElement.textContent = accumulatedCount;
}, 1000); // Update every second (adjust as needed)
