document.addEventListener("DOMContentLoaded", function() {
  const targetDate = new Date(new Date().getFullYear(), 5, 19); // 19 de junho (mês 0-based)
  const currentDate = new Date();
  const storedDate = localStorage.getItem("storedDate");

  if(localStorage.getItem("increment") === null) {
    localStorage.setItem("increment", 22);
  }

  if (currentDate > targetDate) {
      if (!storedDate || storedDate !== currentDate.toDateString()) {
          let increment = parseInt(localStorage.getItem("increment") || 0);
          increment++;
          localStorage.setItem("increment", increment);
          localStorage.setItem("storedDate", currentDate.toDateString());
      }
  } else {
      // Reset the stored value if before 19th June
      localStorage.removeItem("storedDate");
      localStorage.removeItem("increment");
  }

  const incrementValue = localStorage.getItem("increment") || 0;
  document.getElementById("incrementDisplay").textContent = incrementValue;
});