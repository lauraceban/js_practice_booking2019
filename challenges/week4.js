function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw new Error("nums is required");
  if (nums === []) return [];

  let smallerThan1 = [];

  for (let i=0; i<nums.length; i++) {
    let notAnInt = nums[i].toFixed(1);

    if (Number.isInteger(nums[i]) && nums[i]<1) 
    smallerThan1.push(nums[i]);   

    
    else if (typeof nums[i] === 'number' && notAnInt.startsWith("0",  0) )
    smallerThan1.push(nums[i]); 
    
  } return smallerThan1;
}


function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  if (!Array.isArray(names)) throw new Error("names is required");
  if (typeof char !== 'string') throw new Error("char must be of type 'string'");
  if (char === []) return [];

  let startsWithChar = [];
  for (let i=0; i<names.length; i++) {
    if (names[i].startsWith(char, 0)) 
    startsWithChar.push(names[i])
  }
  return startsWithChar;
}


function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if (!Array.isArray(words)) throw new Error("words is required");
  if (words === []) return [];

  let arrayOfVerbs = [];
  for (let i=0; i<words.length; i++) {
    if (typeof words[i] !== 'string') throw new Error("All elements in words must be of type 'string'");
    else if (words[i].startsWith('to ', 0)) 
    arrayOfVerbs.push(words[i])
  }
  return arrayOfVerbs;
}


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw new Error("nums is required");
  if (nums === []) return [];

  let arrayOfInt = [];
  for (let i=0; i<nums.length; i++) {
    if (typeof nums[i] !== 'number') throw new Error("All elements in nums must be of type 'number'")
    else if (Number.isInteger(nums[i])) 
    arrayOfInt.push(nums[i])
  }
  return arrayOfInt;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  if (!Array.isArray(users)) throw new Error("users is required");
  if (users === []) return [];

  let arrayOfCities = []
  for (let i=0; i<users.length; i++) {
    if (typeof users[i] !== 'object') throw new Error("each user must be of type 'object'")
    else if (typeof users[i].data.city === 'object') 
    arrayOfCities.push(users[i].data.city.displayName)
  }
  return arrayOfCities
}



function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw new Error("nums is required");
  if (nums === []) return [];

  let squareRoots = [];
  
  for (let i=0; i<nums.length; i++) {
    let root = Math.sqrt(nums[i])
    let decimalRoot = root.toFixed(2)
  
    if (nums[i] % 10 === 0) {
      Number(decimalRoot)
    }
    squareRoots.push(Number(decimalRoot))
  }
  return squareRoots
}



function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  if (!Array.isArray(sentences)) throw new Error("sentences must be of type 'array'");
  if (sentences === []) return [];

  let sentencesContainingString = [];
  let capitalString = str[0].toUpperCase()
  let restOfString = str.slice(1, str.length)

  for (let i=0; i<sentences.length; i++) {  
    if (typeof sentences[i] === 'string' && sentences[i].includes(str) || sentences[i].includes(capitalString+restOfString)) 
    sentencesContainingString.push(sentences[i])  
  }
  return sentencesContainingString
}



function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  if (!Array.isArray(triangles)) throw new Error("triangles must be of type 'array'");
  if (triangles === []) return [];

  let longestSides = [];

  for (let i=0; i<triangles.length; i++) {  
    if (!Array.isArray(triangles[i])) throw new Error("each element of triangles must be of type 'array'");

    let eachTriangle = triangles[i];

    if (eachTriangle[0] >= eachTriangle[1] && eachTriangle[0] >= eachTriangle[2])
    longestSides.push(eachTriangle[0]) 
      
    else if (eachTriangle[1] >= eachTriangle[0] && eachTriangle[1] >= eachTriangle[2])
    longestSides.push(eachTriangle[1]) 

    else if (eachTriangle[2] >= eachTriangle[0] && eachTriangle[2] >= eachTriangle[1])longestSides.push(eachTriangle[2]) 
  }
  
  return longestSides
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
