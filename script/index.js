let addOutput = document.getElementById('addOutput');
let calButton = document.getElementById('calButton');

// adding function
function addNumbers(add) {
  let sum = 0;
  // looping through each number in the array
  for (let number of add) {

    // validation and checking if it is a number
    if (typeof number !== 'number') {
      return "Enter numbers only";
    }

    // Adding
    sum += number;
  }
  return sum;
}

let numArray = [1, 7, 11, 22, 44, 77, 99, 101, 111];

calButton.addEventListener('click', function () {
  let sum = addNumbers(numArray);
  addOutput.value = (typeof sum === 'number') ? sum : sum; 
});