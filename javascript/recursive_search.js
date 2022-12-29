function recursiveSearch(arr, target) {
  // recursive way
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
    return true
  }
 
 return recursiveSearch(arr.slice(1), target);
 
  
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// start with a if statement that equals to 0 and return false if array isn't found
// second if statement equals to the target number from the array and returns true if array is found.
// And a written explanation of your solution


 // for (const value of arr){
  //   if (value === target){
  //     return true;
  //   }
  // }
  // return false