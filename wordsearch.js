const wordSearch = (letters, word) => {
  if (letters.length === 0){
    return false;
  } 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  if (searchVertically(letters,word)) {
    return true;
  }
  return false;
};
const searchVertically = function(letters, word) {
  for (let i = 0; i < letters[0].length; i++) {
    let result  = '';
        
    for (let j = 0; j < letters.length; j++) {
      result += letters[j][i];
    }
    if (result.includes(word)) { 
      return true;
    }
  }
  return false;

};
module.exports = wordSearch;

