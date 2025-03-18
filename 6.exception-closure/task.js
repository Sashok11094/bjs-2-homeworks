function parseCount(value){
  let parsedValue = Number.parseFloat(value);
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
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (!Triangle.isValidTriangle(a, b, c)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  static isValidTriangle(a, b, c) {
    if(a <= 0 || b <= 0 || c <= 0){
      return false;
    }
    return (a + b > c) && (b + c > a) && (a + c > b);
  }
  get perimeter (){
    return this.a + this.b + this.c;
  }
  get area (){
    const p = this.perimeter / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}


function getTriangle(a, b, c) {
    try{
      return new Triangle(a, b, c);
    }
    catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      };
   }
  }