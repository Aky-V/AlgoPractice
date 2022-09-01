function sort(arr) {
    const copiedArray = [...arr];
    console.log('FUNCTION STARTING');
    console.log(arr);
  
    if (copiedArray.length <= 1) {
      console.log('ONLY ONE ITEM - RETURNING');
      console.log(copiedArray);
      return copiedArray;
    }
  
    const smallerElementsArray = [];
    const biggerElementsArray = [];
    const pivotElement = copiedArray.shift();
    const centerElementsArray = [pivotElement];
  
    while (copiedArray.length) {
      const currentElement = copiedArray.shift();
      if (currentElement === pivotElement) {
        centerElementsArray.push(currentElement);
      } else if (currentElement < pivotElement) {
        smallerElementsArray.push(currentElement);
      } else {
        biggerElementsArray.push(currentElement);
      }
    }
  
    console.log('AFTER WHILE');
    console.log(smallerElementsArray);
    console.log(centerElementsArray);
    console.log(biggerElementsArray);
  
    const smallerElementsSortedArray = sort(smallerElementsArray);
    const biggerElementsSortedArray = sort(biggerElementsArray);
    return smallerElementsSortedArray.concat(
      centerElementsArray,
      biggerElementsSortedArray
    );
  }
  
  // Recursive Step Runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
  // Runtime outside of the recursion: O(n)
  // Algorithm runtime: O(n^logb(a) * log n) => O(n * log n)
  
  // const sortedArray = sort([-3, 10, -3, -10, 1, 100, -3, -10, 22, 15]);
  const sortedArray = sort([-3, 10, 100, -3, -15]);
  console.log(sortedArray);
  