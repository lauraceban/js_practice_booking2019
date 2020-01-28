/* This function will receive an array of numbers and should return the sum of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */

const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if (Array.isArray(arr)) {
    let sum = 0;
  
    for (let i=0; i<arr.length; i++) {
      if (arr[i]%15 ===0) 
        sum = sum+arr[i]
    }
    
    return sum
  }
};



/* This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */

const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  let alphabetStr = str.replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g, '');
  let newStr = alphabetStr.toUpperCase();

  if (newStr.includes('B') || newStr.includes('D') || newStr.includes('E') || newStr.includes('F')
    || newStr.includes('H') || newStr.includes('I') || newStr.includes('J') || newStr.includes('K') 
    || newStr.includes('L') || newStr.includes('M') || newStr.includes('N') || newStr.includes('O') 
    || newStr.includes('P') || newStr.includes('Q') || newStr.includes('R') || newStr.includes('S') 
    || newStr.includes('U') || newStr.includes('V') || newStr.includes('W') || newStr.includes('X') 
    || newStr.includes('Y') || newStr.includes('Z')) {
    return false
  } 
  else 
    return true
};




/* This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. 
 * In DNA, T always pairs with A, and C always pairs with G. 
 * So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */

const getComplementaryDNA = str => {
  let charStr = str.replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g, '');
  let capStr = charStr.toUpperCase();
  
  if (capStr.includes('B') || capStr.includes('D') || capStr.includes('E') || capStr.includes('F')
  || capStr.includes('H') || capStr.includes('I') || capStr.includes('J') || capStr.includes('K') 
  || capStr.includes('L') || capStr.includes('M') || capStr.includes('N') || capStr.includes('O') 
  || capStr.includes('P') || capStr.includes('Q') || capStr.includes('R') || capStr.includes('S') 
  || capStr.includes('U') || capStr.includes('V') || capStr.includes('W') || capStr.includes('X') 
  || capStr.includes('Y') || capStr.includes('Z')) throw new Error ("str is not a valid DNA");
  

  let charArr = capStr.split("")
  console.log(charArr)
  let newArr = [];

  for (let i=0; i<capStr.length; i++){
  
    if (charArr[i] === 'A') {
      char1 = capStr[i].replace('A', 'T')
      newArr.push(char1)
    }
    else if (charArr[i] === 'T') {
      char2 = capStr[i].replace('T', 'A')
      newArr.push(char2)
    }
    else if (charArr[i] === 'C') {
      char3 = capStr[i].replace('C', 'G')
      newArr.push(char3)
    }  
    else if (charArr[i] === 'G') {
      char4 = capStr[i].replace('G', 'C')
    }
    
  }
  let complementaryDNA = newArr.toString()
  return complementaryDNA.replace(/,/g,"")
}




/* This function should receive a number and return true/false depending on whether it is a prime number or not. 
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */

const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n === 0 || n === 1) throw new Error(null);

  if (typeof(n) === 'number') {

    for (let i=2; i<n/2; i+1) {
      if (n%i !== 0) 
        return true
    }
  return false
  } 
};




/* This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. 
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * 
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * 
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */


 const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (n === 0) throw new Error(null);

  let fillStr = fill.toString()
  if (typeof(n) === 'number'){
    
    let arr = [];
    let matrix = [];
    
    for (let i=0; i<n; i++){ 
      arr.push(fill)
      matrix.push(arr)
    }
    
    return matrix
  }
};




/* This function takes an array of staff objects in the format:
 * 
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Tuesday", "Wednesday", "Saturday", "Sunday"] },
 *  etc.
 * ]
 *
 * and a day of the week. 
 * For the café to run successfully, at least 3 staff members are required per day. 
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */



const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let noCapsDay = day.toLowerCase()
  let capitalChar = day[0].toUpperCase() 
  let restOfWord = noCapsDay.substring(1)
  let capDay = capitalChar.concat(restOfWord)
  
  if (capDay !== "Monday" && capDay !== "Tuesday" && capDay !== "Wednesday" && capDay !== "Thursday" 
     && capDay !== "Friday" && capDay !== "Saturday" && capDay !== "Sunday") 
     throw new Error("day is not a week day")

  if (typeof(day) === 'string') {
    let count = 0;

    for (let i=0; i<staff.length; i++)

      for (x in staff[i]){
        if (staff[i][x].includes(capDay)) {
          count=count+1
        }
      }  
        
      if (count < 3) 
        return false

    }  
    return true
};


module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
