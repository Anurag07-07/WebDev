/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   let freq = new Array(256).fill(0)

   let len1 = str1.length;
   let len2 = str2.length;
   if (len1!==len2) {
    return false
   }

   for (let i = 0; i < str1.length; i++) {
    if ((str1.charCodeAt(i)>=65 && str1.charCodeAt(i)<=90) ||  (str1.charCodeAt(i)>=97 && str1.charCodeAt(i)<=122)) {
      let char = str1[i].toLowerCase()
      //Find the Char Code
      let char_code = char.charCodeAt(0);
      freq[char_code]++
    }else{
      freq[str1.charCodeAt(i)]++
    }
   }

   for (let i = 0; i < str2.length; i++) {
    if ((str2.charCodeAt(i)>=65 && str2.charCodeAt(i)<=90) ||  (str2.charCodeAt(i)>=97 && str2.charCodeAt(i)<=122)) {
      let char = str2[i].toLowerCase()
      //Find the Char Code
      let char_code = char.charCodeAt(0);
      freq[char_code]--
    }else{
      freq[str2.charCodeAt(i)]--
    }
   }

   for (let i = 0; i < freq.length; i++) {
      if (freq[i]!==0) {
        return false;
      }    
   }


   return true
}

module.exports = isAnagram;
