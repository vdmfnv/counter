// Define variables for each counter
const counters = [
  {
    id: "my-counter", // Element ID
    minJump: 3,
    maxJump: 17,
    currentCount: 0,
  },
  {
    id: "inmails", // Element ID
    minJump: 17,
    maxJump: 37,
    currentCount: 0,
  },
  {
    id: "dms", // Element ID (added)
    minJump: 27,
    maxJump: 63,
    currentCount: 0,
  },
  {
    id: "emails", // Element ID (added)
    minJump: 233,
    maxJump: 799,
    currentCount: 0,
  },
  // Add similar objects for additional counters if needed
];

const updateCounts = () => {
  // Loop through each counter object
  for (const counter of counters) {
    const randomJump = Math.floor(Math.random() * (counter.maxJump - counter.minJump + 1)) + counter.minJump;
    counter.currentCount += randomJump;

    const element = document.getElementById(counter.id);
    if (element) {
      element.textContent = counter.currentCount;
    } else {
      console.error(`Element with ID "${counter.id}" not found!`);
    }
  }

  // Schedule next update (adjust interval as needed)
  setTimeout(updateCounts, 1000); // Update every second (adjust the delay for faster or slower counting)
};

updateCounts(); // Start the count update
