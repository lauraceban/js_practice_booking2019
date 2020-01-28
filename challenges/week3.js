function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw new Error("nums is required");
  if (Array.isArray(nums) && nums === []) return nums
  else {
    let arrayOfSquares = []

    for (let i=0; i<nums.length; i++) {
      let squared = nums[i] * nums[i]  
      arrayOfSquares.push(squared) 
    } 
    return arrayOfSquares 
  }  
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (!Array.isArray(words)) throw new Error("words is required");

  let result = ""
  for (let i=0; i<words.length; i++) {
      
      if (i===0) 
      result += words[i][0].toLowerCase() + words[i].slice(1);
      else 
      result += words[i][0].toUpperCase() + words[i].slice(1);    
  }
  
  return result;
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (!Array.isArray(people))  throw new Error("people is required");

  let numberOfSubjects = 0
  
  for (let i=0; i<people.length; i++) {
    numberOfSubjects = numberOfSubjects + people[i].subjects.length
  }
  return numberOfSubjects
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (!Array.isArray(menu)) throw new Error("menu must be of type array");
  if (typeof ingredient !== 'string') throw new Error("ingredient must be of type string")

  for (let i=0; i<menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) return true   
  } return false
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  let duplicateArr = [];

  for (let i=0; i<arr1.length; i++) {
    for (j=0; j<arr2.length; j++) {
      if (arr1[i] === arr2[j] && !duplicateArr.includes(arr1[i])) 
      duplicateArr.push(arr1[i]) 
    }
  } 
  return duplicateArr.sort(function(a, b){return a - b}) 
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
