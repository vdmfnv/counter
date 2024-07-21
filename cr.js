const minDelay = 100; // Minimum delay in milliseconds (adjust as needed)
const maxDelay = 500; // Maximum delay in milliseconds (adjust as needed)

// Starting time (July 1st, 2024) - preserved across page refreshes
const startingTime = new Date(2024, 6, 1); 

let previousIncrement = 1; // Initialize previous increment for smoothing

const counterElement = document.getElementById("my-counter"); // Get element reference

const intervalId = setInterval(() => {
  const currentDate = new Date();
  const elapsedTime = currentDate - startingTime; // Time since starting time

  // Generate random delay for simulated breaks and accelerations
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  
  // Simulate random count increment with smoothing
  const minIncrement = 1;
  const maxIncrement = 10;
  let randomIncrement = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
  randomIncrement += Math.floor(Math.random() * (previousIncrement / 2)); // Add variation based on previous increment
  previousIncrement = randomIncrement; // Update previous increment for smoothing

  // Calculate count based on elapsed time and random increment
  const elapsedTimeInSeconds = elapsedTime / 1000; // Convert to seconds
  const baseCount = elapsedTimeInSeconds * randomIncrement; // Calculate baseline count
  const actualCount = Math.floor(baseCount); // Calculate actual count

  // Update displayed message (only counter value)
  counterElement.textContent = actualCount;
}, 1000); // Update every second (adjust as needed)