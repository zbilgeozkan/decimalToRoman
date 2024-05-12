const input = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
  const input = document.getElementById("number").value;
  if (input === "") {
    output.innerText = "Please enter a valid number";
  } else if (input < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = decimalToRoman(input);
  }
})

const decimalToRoman = (num) => {
  const romanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  // This will store the Roman numeral representation of the decimal number.
  let roman = '';
  
  // It continues to execute as long as the decimal number num is greater than or equal to the value of the current key
  for (let key in romanObject) {
    while (num >= romanObject[key]) {
      roman += key;
      num -= romanObject[key];
    }
  }
  return roman;
}