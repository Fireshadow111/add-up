//Assigning variables
        let addOutput = document.getElementById('addOutput');
        let calButton = document.getElementById('calButton');

      //Creating array
        let addArray = [1, 7, 11, 22, 44, 77];

        function addNumbers(add) {
          let sum = 0;
          for (let number of add) {
            if (typeof number !== 'number') {
              return "Provide only numbers";
            }
            sum += number;
          }
          return sum;
        }
        
        let numArray = [1, 7, 11, 22, 44, 77];
        let sum = addNumbers(numArray);
        console.log(sum);