"use strict"
function solveEquation(a, b, c) {
 let arr = [];
  const discriminant =  b ** 2 - 4 * a * c;
  if ( discriminant    > 0) {
    const root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    const root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    return [root1, root2];
  } else if (discriminant === 0) {
    const root = -b/(2*a);
    return [root];
  } else {
    // Нет корней!
    return [];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let totalPayment = monthlyPayment * countMonths;
  totalPayment = Math.round(totalPayment * 100) / 100;
  return totalPayment;
}