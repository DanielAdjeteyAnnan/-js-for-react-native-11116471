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
        