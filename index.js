function reversedString(word) {
  // Write your algorithm here
  //I need to make an array of words using split
  const wordArray = word.split("")
  //I need to reverse the words
  const reversedWord = wordArray.reverse()
  //I need to recreate the array with the reversed words
  const newWordArray = reversedWord.join("")
  // I need to return the new array
  return newWordArray
}

function isPalindrome(word) {
  //reverse the input string
  const reversedWord = reversedString(word) 
  //ensure the reversed word is same as input
  if(word === reversedWord){
  return true
} else {
  return false
  }
}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
