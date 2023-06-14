function recursiveSearch(arr, target) {
  // type your code here
  // SOLUTION:
  if(arr.length === 0) {
    return false;
  }

  if(arr[0] === target) {
    return true;
  }

  arr.shift()
  return recursiveSearch(arr, target)
  // // return recursiveSearch(arr.slice(1), target)

  // MY ATTEMPT:
  // if(arr[0] === target && arr.length > 0) {
  //   return true;
  // } else if(arr[0] !== target && arr.length > 0) {
  //   arr.shift();
  //   return recursiveSearch(arr, target);
  // } else {
  //   return false;
  // }
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
// And a written explanation of your solution

// Define a base case: if arr[index = 0] === target => return true
// Loop to next array index => arr[index + 1]

// .shift? => Destructively removes first element of array