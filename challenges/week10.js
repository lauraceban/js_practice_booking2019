const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof(n) === 'number') {   
   
    let sum = 0;

    while (n > 0) {
      sum = sum + n % 10;
      n = Math.floor(n / 10);
    }

    return sum
  }
};



const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === 0) throw new Error(null);

  let arr = [];
  arr.push(start) 

  if (step === undefined) 
    step = 1;
  
  for (let i=step; i<end-start; i=i+step) {
    let range = start + i
    arr.push(range)
  }
 
  arr.push(end)
  return arr
}



const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  
  let arr = [];

    for (let i=0; i<users.length; i++) {
      let count = 0;
      
      for (let x = 0; x < users[i].screenTime.length; x++) {
        if (users[i].screenTime[x].date === date) {
          for (j in users[i].screenTime[x].usage) {
            count = count + users[i].screenTime[x].usage[j]
          }
        }
      }

      if (count >= 100) 
         arr.push(users[i].username)
    }  
    
    if (arr.length === 0)
      return "unknown"
    else 
      return arr
};




const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  hexStr.toUpperCase()

  c = hexStr.slice(1,3);
  d = hexStr.slice(3,5);
  e = hexStr.slice(5);
  return "rgb("+parseInt(c,16)+","+parseInt(d,16)+","+parseInt(e,16)+")";
};




const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) 
    return board[0][0]
  else if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) 
    return board[0][1]
  else if (board[0][2] === board[1][2] && board[1][2] === board[2][2])
    return board[0][2]
  else if (board[0][0] === board[0][1] && board[0][1] === board[0][2])
    return board[0][0]
  else if (board[1][0] === board[1][1] && board[1][1] === board[1][2])
    return board[1][0]
  else if (board[2][0] === board[2][1] && board[2][1] === board[2][2])
    return board[2][0]
  else if (board[0][0] === board[1][1] && board[1][1] === board[2][2])
    return board[0][0]
  else if (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    return board[0][2]
  
  else
    return null
};




module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
