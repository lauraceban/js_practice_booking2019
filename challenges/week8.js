const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (typeof(n) !== 'number') throw new Error("must be of type 'number'");
  
  for (let i=0; i<nums.length-1; i++) {
      if (n === nums[i]) 
        return nums[i+1] 
  }
  return null
};


const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  let count0s = 0;
  let count1s = 0;

  for (let i=0; i<str.length; i++) {

    if (Number(str[i])===0) { 
      count0s++
    }
    if (Number(str[i])===1) { 
      count1s++
    }

  } 
  let newStr = {1: count1s, 0: count0s};
  return newStr
};


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  if (typeof(n) === 'number') {
    str = n.toString();
    return Number(str.split("").reverse().join(""));
  }

};



const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  if (Array.isArray(arrs)) {
    for (let i = 0; i < arrs.length; i++){						
      for(let j = 0; j < arrs[i].length; j++){				
        sum += arrs[i][j]			
      }
    }
  }
  return sum
}



const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error ("arr must be of type array");
  if (arr.length < 2) return arr

  if (arr.length > 2) {
    let temp = 0
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr
  }

  else if (arr.length = 2) {
    let newArr = [arr[1], arr[0]] 
    return newArr
  }
};



const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  if (typeof(searchTerm) === 'string') {
    for (x in haystack){

        if (typeof(haystack[x]) === 'string') {
          searchTerm = searchTerm.toLowerCase()
          haystack[x] = haystack[x].toLowerCase()

          if (haystack[x].includes(searchTerm)) 
          return true
        }

    }  
    return false   
  }  
};


const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  
  let object = {};

  if (typeof(str) === 'string') {
  str = str.replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g, '');
  noCaps = str.toLowerCase()

  let eachWord = noCaps.split(" ")

    for (x in eachWord) {
      if (object[eachWord[x]] === undefined) {
        object[eachWord[x]] = 1;
      } 
      
      else {
        object[eachWord[x]]++ ;
      }
    }
  }

  return object
};



module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
