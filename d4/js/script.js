//Put your code here
let dayPut = document.getElementById("day");
let monhPut = document.getElementById("month");
let yearPut = document.getElementById("year");
let result = document.getElementById("result");

let day = "DD";
let month = "MM";
let year = "YYYY";

dayPut.onselectionchange = () => {
  input = document.getElementById("day");
  value = String(input.value);
  // Add a 0 on the front
  if (input.value < 10) {
    value = 0 + value;
  }
  if (input.value == 0 || input.value > 31 || input.value < 0) {
    value = "DD";
  }

  day = value;

  result.textContent = `${year}-${month}-${day}`;
};

monhPut.onselectionchange = () => {
  input = document.getElementById("month");
  value = String(input.value);
  // Add a 0 on the front
  if (input.value < 10) {
    value = 0 + value;
  }
  if (input.value == 0 || input.value > 12 || input.value < 0) {
    value = "MM";
  }

  month = value;

  result.textContent = `${year}-${month}-${day}`;
};

yearPut.onselectionchange = () => {
  input = document.getElementById("year");
  value = String(input.value);
  // Add a 0 on the front
  if (input.value < 10) {
    value = 0 + value;
  }
  if (input.value == 0 || input.value < 0) {
    value = "YYYY";
  }

  year = value;

  result.textContent = `${year}-${month}-${day}`;
};
