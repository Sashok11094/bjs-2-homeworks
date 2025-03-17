function parseCount(value){
  let parsedValue = Number.parseFloat(String(value));
 if (Number.isNaN(parsedValue)){
  throw new Error("Невалидное значение")
 }
 return parsedValue;
}

function validateCount (value){
  try {
    return parseCount(value);
  }
  catch (error) {
    return error;
  }
}

class Triangle {
  constructor (a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
  if (!this.isValueTriangle){
    throw new Error("Треугольник с такими сторонами не существует'");
  }
} 
  isValueTriangle(a, b, c){
    return a + b < c && a + c < b && b + c < a;
  }
   get perimeter(){
    return this.a + this.b + this.c;
   }
   get area (){
    const p = this.perimeter / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
   }
}
 function getTriangle(a, b ,c) {
  try {
    return new Triangle(a, b, c);
  }
  catch(error) {
    return {
    get area(){
      return "Ошибка! Треугольник не существует";
    },
    get perimeter(){
      return "Ошибка! Треугольник не существует";
    }
    };
  };
 }