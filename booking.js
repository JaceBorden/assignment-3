let dailyRate = 35;
const selectedDays = new Set();

const dayButtons = document.querySelectorAll(".day"); 
const clearButton = document.getElementById("clear-button");
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");
const costDisplay = document.getElementById("calculated-cost");


dayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked");
      selectedDays.add(button.id);
    } else {
      button.classList.remove("clicked");
      selectedDays.delete(button.id);
    }
    calculateTotal();
  });
});


clearButton.addEventListener("click", () => {
  dayButtons.forEach((button) => button.classList.remove("clicked"));
  selectedDays.clear();
  calculateTotal(); 
});


halfDayButton.addEventListener("click", () => {
  dailyRate = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  calculateTotal(); 
});

fullDayButton.addEventListener("click", () => {
  dailyRate = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  calculateTotal();
});

function calculateTotal() {
  const totalCost = selectedDays.size * dailyRate;
  costDisplay.innerHTML = `${totalCost}`;
}
