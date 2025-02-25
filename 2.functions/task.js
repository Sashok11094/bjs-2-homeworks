function getArrayParams(...arr) {
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    const currentValue = arr[i];
  if (currentValue < min) {
    min = currentValue;
  } else if (currentValue > max){
    max = currentValue;
  }
   sum += currentValue;
   avg = Number((sum / arr.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    const currentValue = arr[i];
    sum += currentValue;

}
return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;}
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++){
    const currentValue = arr[i];
  if (currentValue < min) {
    min = currentValue;
  } else if (currentValue > max){
    max = currentValue;
  }
  }
return max - min;
}


function differenceEvenOddWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;}
let sumEvenElement = arr[0];
let sumOddElement = arr[0];
for (let i = 0; i < arr.length; ++i){
  const currentValue = arr[i];
if (currentValue % 2 == 0){
  sumEvenElement += currentValue;
} else {
  sumOddElement += currentValue
}
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;}
let sumEvenElement = 0;
let countEvenElement = 0;
for (let i = 0; i < arr.length; ++i){
  
  element = arr[i];
  if (element % 2 == 0) {
    sumEvenElement += element;
    countEvenElement ++;
  }
}
  if (countEvenElement === 0) {
    return null;
}

return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
 let maxWorkerResult = 0;
 for (let i = 0; i < arrOfArr.length; i++){
  const currentValue = arrOfArr[i];
  const allArr = func (... currentValue);
  if (allArr > maxWorkerResult) {
    maxWorkerResult = allArr;
  }

 }
 return maxWorkerResult;
}
