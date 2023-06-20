function removeFromArray(arrayOfNumbers,removeArr) {
  if(arrayOfNumbers.length === 0 || removeArr.length === 0){
    return arrayOfNumbers;
  }
  
  return arrayOfNumbers.filter(number =>  !removeArr.includes(number));
}

module.exports = removeFromArray;
