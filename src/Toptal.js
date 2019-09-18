function findWord(letters) {
  let word = "";
  // Get letter sequence
  letters.map(letterSeq => {
    let letterSeqSplit = letterSeq.split(">");
    let firstLetter = letterSeqSplit[0];
    let secondLetter = letterSeqSplit[1];
    if (word === "") {
      word += firstLetter + secondLetter;
    } else {
      if (word[word.length - 1] === firstLetter) {
        word += secondLetter;
      } else {
        word = firstLetter + word;
      }
    }
    
  })
  return word;
}

/*
findWord(["P>E","E>R","R>U"]) // PERU
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN
*/

function getChange(M, P) {
  let denom = [0, 0, 0, 0, 0, 0];
  let change = M - P;

  while(change > 0) {
    if (change >= 1) {
      denom[5] += 1;
      change = change - 1.0;
    } else if (change >= .5) {
      denom[4] += 1;
      change = change - .5;
    } else if (change >= .25) {
      denom[3] += 1;
      change = change - .25;
    } else if (change >= .1) {
      denom[2] += 1;
      change = change - .1;
    } else if (change >= .05) {
      denom[1] += 1;
      change = change - .05;
    } else if (change >= .01) {
      denom[0] += 1;
      change = change - .01;
    }
    change = Math.round(change * 100) / 100;
  }

  console.log(change);
  return denom;
}

export default {
  findWord,
  getChange
};