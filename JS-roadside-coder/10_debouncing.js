let btnClk = document.querySelector(".inc");
let countCount = document.querySelector("#count");
let triggerCount = document.querySelector("#trigger");

let count = 0;
let trigger = 0;

// Debouncing function
let debounce = (func, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay);
  };
};

let debouncingFunc = () => {
  triggerCount.innerHTML = ++trigger;
};

// Debounced version of debouncingFunc
let debouncedTrigger = debounce(debouncingFunc, 2000);

btnClk.addEventListener("click", () => {
  countCount.innerHTML = ++count;
  debouncedTrigger();
});
