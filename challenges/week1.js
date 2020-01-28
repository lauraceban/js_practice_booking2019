function capitalize(word){  
  if (word === undefined) throw new Error("word is required")
  else if (typeof(word) === 'string') return word[0].toUpperCase() + word.slice(1)
  else if (typeof(word) !== 'string') throw new Error ("word is required")    
  }


function generateInitials(firstName, lastName) {
  if (firstName === undefined || lastName === undefined) throw new Error("Full Name is required"); 
  if (typeof firstName === 'string' && typeof lastName === 'string') return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase()
  else if (typeof firstName !== 'string' || typeof lastName !== 'string') throw new Error("Full Name is required"); 
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vatPrice = originalPrice + originalPrice * vatRate / 100;
  if (Number.isInteger(vatPrice)) return vatPrice
  else {
    let roundedPrice = vatPrice.toFixed(2) 
    return Number(roundedPrice)
  }
}  



function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (typeof originalPrice !== 'number' || typeof reduction !== 'number') throw new Error("can only accept numbers") 
  
  
  if (typeof originalPrice === 'number' && typeof reduction === 'number' && reduction === 0) return originalPrice; 
  else if (Number.isInteger(originalPrice) && Number.isInteger(reduction)) {
     let reducedPrice = originalPrice - originalPrice * reduction / 100
     return reducedPrice
  }
 
  else if ((originalPrice.toString() === originalPrice.toFixed(1)) || reduction.toString() === reduction.toFixed(1) && typeof reduction === 'number' && typeof originalPrice === 'number'){
     let reducedPrice = originalPrice - originalPrice * reduction / 100
     let reducedPriceTwoDecimals = reducedPrice.toFixed(1)
     return Number(reducedPriceTwoDecimals)  
  }
  
  else if (Number.isInteger(originalPrice) || Number.isInteger(reduction) && typeof reduction === 'number' && typeof originalPrice === 'number'){
     let reducedPrice = originalPrice - originalPrice * reduction / 100
     let reducedPriceTwoDecimals = reducedPrice.toFixed(2)
     return Number(reducedPriceTwoDecimals)  
  } 
} 



function getMiddleCharacter(str) {
  if (typeof str === undefined) throw new Error("str is required");
	if (typeof str !== "string") throw new Error("can only accept string");
	if (typeof str === "string" && str.length === 1) return str;
	if (typeof str === "string" && str.length === 2) return str;

  if (str.length > 2 && str.length % 2 === 0) 
    return str.slice(str.length/2 - 1, str.length/2 + 1)
	else 
    return str.slice((str.length-1)/2, (str.length-1)/2+1)  
}


function reverseWord(word) {
  if (word === undefined || typeof word !== "string") throw new Error("word is required");
  if (typeof word === "string") return word.split("").reverse().join("")
}



function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (typeof words !== undefined){
    let arrayOfReversedWords = []
      
    for (let i=0; i < words.length; i++) {
    let reversedWord = words[i].split("").reverse().join("")
    arrayOfReversedWords.push(reversedWord)
    } 
  return arrayOfReversedWords
  } 
}



function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  if (!Array.isArray(users)) throw new Error("users is required");
  
  let totalUsers=0;
    for (let i=0; i<users.length; i++){
      if (users[i].type==="Linux") totalUsers++
    }  
    return totalUsers; 
} 




function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  if (!Array.isArray(scores)) throw new Error("scores is required");
  
  let sumOfScores = 0

  for (let i=0; i<scores.length; i++) {
    sumOfScores = sumOfScores + scores[i];
  }

  let meanScore = sumOfScores/scores.length;
  let stringScore = meanScore.toFixed(2) 

  if (stringScore.endsWith('.00')) return Number(meanScore.toFixed(0))
    
  return Number(meanScore.toFixed(2)) 
}



function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== 'number') throw new Error("n is required");
  
  let divByThree = "fizz"
  let divByFive = "buzz"
  let divByThreeAndFive = "fizzbuzz"

  if (n % 3 === 0 && n % 5 ===0 ) return divByThreeAndFive;
  else if (n % 3 === 0)return divByThree;
  else if (n % 5 === 0)return divByFive;
  else return n
}



module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
