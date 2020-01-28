function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (Array.isArray(sandwich.fillings)) return sandwich.fillings;
}


function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") return true
  else return false;
}


function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (typeof people !== 'number') throw new Error("people is required");
  if (typeof people === 'number' && people <= 40) return 1;

  let fullBuses = parseInt(people/40)

  if (people % 40 === 0)  return people / 40  
  else {
    let totalBuses = fullBuses + 1
    return totalBuses
  }
}


function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr is required");
  
  let total = 0;

  for (let i=0; i<arr.length; i++) {
    if (arr[i] === "sheep")  
    total++
  } 
  return total
}


function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (typeof person !== "object")  throw new Error("person is required");

  let firstLetter = person.address.postCode.charAt(0);

  if (firstLetter === 'M' && person.address.city === 'Manchester') return true;
  if (firstLetter === 'M' && person.address.city !== 'Manchester') return false;
  if (firstLetter !== 'M') return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
