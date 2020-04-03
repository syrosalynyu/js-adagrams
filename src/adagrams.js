const Adagrams = {
  lettersDistribution: {
    A: 9, 
    B: 2, 
    C: 2, 
    D: 4, 
    E: 12, 
    F: 2, 
    G: 3, 
    H: 2, 
    I: 9, 
    J: 1, 
    K: 1, 
    L: 4, 
    M: 2, 
    N: 6, 
    O: 8, 
    P: 2, 
    Q: 1, 
    R: 6, 
    S: 4, 
    T: 6, 
    U: 4, 
    V: 2, 
    W: 2, 
    X: 1, 
    Y: 2, 
    Z: 1
  },

  wordScores: {
    A: 1, 
    B: 3, 
    C: 3, 
    D: 2, 
    E: 1, 
    F: 4, 
    G: 2, 
    H: 4, 
    I: 1, 
    J: 8, 
    K: 5, 
    L: 1, 
    M: 3, 
    N: 1, 
    O: 1, 
    P: 3, 
    Q: 10, 
    R: 1, 
    S: 1, 
    T: 1, 
    U: 1, 
    V: 4, 
    W: 4, 
    X: 8, 
    Y: 4, 
    Z: 10
  },

  // member function to draw 10 letters
  drawLetters() {
    let tenLetters = [];
    let letter;
    for (let i = 0; i < 10 ; i++) {
      letter = this.drawRandomLetter();
      tenLetters.push(letter);
    }
    return tenLetters;
  },

  drawRandomLetter() {
    let letter;
    // pick random keys from a object: solution from stackoverflow https://stackoverflow.com/posts/37401010/revisions
    letter = Object.keys(this.lettersDistribution)[Math.floor(Math.random() * Object.keys(this.lettersDistribution).length)];

    while (this.lettersDistribution[letter] === 0) {
      letter = Object.keys(this.lettersDistribution)[Math.floor(Math.random() * Object.keys(this.lettersDistribution).length)];
    } 

    this.lettersDistribution[letter] -= 1;
    return letter;
  },

  usesAvailableLetters(input, lettersInHand) {
    const lettersArray = input.toUpperCase().split('');
    let clone = [...lettersInHand];
    let result = true;
  
    lettersArray.forEach( (letter) => {
      if (!clone.includes(letter)) {
        result = false;
      } 
      this.removeElement(letter, clone);
    });
    return result;
  },
  
  removeElement(element, array) {
    // remove a specific element from the array: solution from stackoverflow https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    const index = array.indexOf(element);
    if (index > -1) {
      // only remove that particular element (dupicates will stay)
      array.splice(index, 1);
    };
    return array;
  },

  scoreWord(word) {
    let totalScore = 0;
    const lettersArray = word.toUpperCase().split('');
  
    if (word.length === 0) {
      return totalScore;
    } else {
      lettersArray.forEach( (letter) => {
        totalScore += this.wordScores[letter];
      })
    } 
    
    if (word.length >= 7 && word.length <= 10) {
      totalScore += 8
    }
    
    return totalScore;
  },

};

// Do not remove this line or your tests will break!
export default Adagrams;
