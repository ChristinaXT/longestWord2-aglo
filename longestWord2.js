// Find Longest word in a string
// return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord (str) {
   return str.split(" ").sort(function(a,b) {return b.length - a.length})[0];

  // let words = str.split(" ");
  // let longest = "";
  //
  // for (let word of words){
  //   // console.log(word);
  //   if (word.length > longest.length) longest = word;
  // }
  // return longest.length;
}

console.log(findLongestWord("Every good boy does fine"));
