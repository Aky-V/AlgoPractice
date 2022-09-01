// Without Repetitions

function getPermutations(options) {
    const permutations = [];
    console.log('FN START');
    console.log(options);
  
    if (options.length === 1) {
      return [options];
    }
  
    const partialPermutations = getPermutations(options.slice(1));
    // [['order food']]
  
    console.log('AFTER RECURSIVE STEP');
    console.log(partialPermutations);
  
    const firstOption = options[0];
  
    console.log('FIRST OPTION');
    console.log(firstOption);
  
    for (let i = 0; i < partialPermutations.length; i++) {
      const partialPermutation = partialPermutations[i];
      console.log('OUTER LOOP');
      console.log(partialPermutation);
  
      for (let j = 0; j <= partialPermutation.length; j++) {
        const permutationInFront = partialPermutation.slice(0, j);
        const permutationAfter = partialPermutation.slice(j);
        permutations.push(
          permutationInFront.concat([firstOption], permutationAfter)
        );
      }
    }
  
    return permutations;
  }
  
  const todoListItems = [
    'walk the dog',
    'clean the toilet',
    'buy groceries',
    'order food',
    'do homework'
  ];
  
  console.log(getPermutations(todoListItems));
  
  // Time Complexity: O(n!) => 4 * 3 * 2 * 1 = 24; 5 * 4 * 3 * 2 * 1 = 120