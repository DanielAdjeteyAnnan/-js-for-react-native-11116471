                 //Task 1
         function processArray(arr) {
            return arr.map(num => {
              if (num % 2 === 0) {
                return num * num;
              } else {
                return num * 3;
              }
            });
          }
        
          let inputArray = [5, 6, 7, 8, 9 ,10];
        let resultArray = processArray(inputArray);
        console.log(resultArray)

                 //Task 2
        
  function formatArrayStrings(strings, numbers) {
    return strings.map((string, index) => {
      const processedNumber = numbers[index];
      if (processedNumber % 2 === 0) {
        return string.toUpperCase();  
      } else {
        return string.toLowerCase();  
      }
    });
  }
  

  const strings = ['elantra', 'car', 'year', 'date', 'energy','money'];
  const numbers = [5, 6, 7, 8, 9, 10];
  
  const processedNumbers = processArray(numbers);
  console.log(processedNumbers);
  
  const formattedStrings = formatArrayStrings(strings, processedNumbers);
  console.log(formattedStrings);

        