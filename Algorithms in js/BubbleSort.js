function sort(arr) {
    const resultArray = [...arr];
  
    for (let outer = 0; outer < resultArray.length; outer++) {
      let outerEl = resultArray[outer];
      console.log('OUTER LOOP');
      console.log(outerEl);
  
      for (let inner = outer + 1; inner < resultArray.length; inner++) {
        let innerEl = resultArray[inner];
        console.log('INNER LOOP');
        console.log('outerEl: ' + outerEl);
        console.log('innerEl: ' + innerEl);
  
        if (outerEl > innerEl) {
          resultArray[outer] = innerEl;
          resultArray[inner] = outerEl;
  
          outerEl = resultArray[outer];
          innerEl = resultArray[inner];
          console.log('INSIDE IF');
          console.log(resultArray);
        }
        console.log('END OF INNER LOOP');
        console.log(resultArray);
      }
    }
  
    return resultArray;
  }
  
  // const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
  const sortedArray = sort([3, 2, 1]);
  console.log(sortedArray);
  