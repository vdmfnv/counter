function counter(elementId, startCount, endCount, minDelay, maxDelay) {
  const counterElement = document.getElementById(elementId);

  // Get current date and time
  const now = new Date();

  // Calculate ideal count based on visit time
  const targetStartDate = new Date(2024, 7, 1); // Year, Month (0-indexed), Day
  const elapsedTime = now.getTime() - targetStartDate.getTime();
  const idealCount = Math.floor(startCount + elapsedTime / (minDelay * 1000)); // Convert delay to milliseconds

  // Display the ideal count with a message
  counterElement.textContent = `As of ${now.toLocaleString()}, you would have counted to approximately ${idealCount} with random delays.`;

  // Optional: Simulate counting animation (doesn't involve actual delays)
  let simulatedCount = startCount;
  const intervalId = setInterval(() => {
    simulatedCount++;
    counterElement.textContent = `Simulated count: ${simulatedCount}`;
    if (simulatedCount >= idealCount) {
      clearInterval(intervalId);
      counterElement.textContent += "\nCounting finished (simulation)";
    }
  }, 10); // Adjust interval for faster simulation (doesn't reflect actual delays)
}

// Example usage
counter("my-counter", 570345890, 10**12, 0.05, 0.15);
