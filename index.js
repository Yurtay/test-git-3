isPalindrome("racecar"); // true
isPalindrome("programmer"); // false

function isPalindrome(word) {
  const wordReverse = (word.split('').reverse().join(''))
  return console.log(word === wordReverse)
}