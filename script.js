function isSameType(value1, value2) {
  //your js code here
 let n1 = Number(value1);
  let n2 = Number(value2);

  // both NaN
  if (isNaN(n1) && isNaN(n2)) {
    return true;
  }

  // both numbers
  if (!isNaN(n1) && !isNaN(n2)) {
    return true;
  }

  // both strings (non-numeric)
  if (isNaN(n1) && isNaN(n2)) {
    return true;
  }

  return false;
		 
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
