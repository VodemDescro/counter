 const counterDisplay = document.getElementById("counter");
 const incrementButton = document.getElementById("increment");
 const decrementButton = document.getElementById("decrement");
 const resetButton = document.getElementById("reset");

 let count = 0;

 document.getElementById("increment").addEventListener("click", () => {
    count++;
    updateCounter();
 });

 decrementButton.addEventListener("click", ()=> {
    count--;
    updateCounter();
 });

 resetButton.addEventListener("click", ()=> {
    count = 0;
    updateCounter();
 });

 function updateCounter() {
    counterDisplay.textContent = count;
 } 