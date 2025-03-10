function Student(name, gender, age) {
this.name = name;
this.gender = gender;
this.age = age;
this.marks = [];
}

const student1 = new Student ("Иван", "Мужской", 20);
const student2 = new Student ("Ольга", "женский", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
student1.setSubject("Физика");
student1.setSubject("История");

Student.prototype.addMarks = function (...marks) {
  if (!this.hasOwnProperty('marks')) {
    console.error(`${this.name} Студент отчислен! Нет оценок!`);
    return;
  }
  this.marks.push(...marks);
}
student1.addMarks(3, 4, 3, 5);
student2.addMarks(4, 4, 5, 4);

Student.prototype.getAverage = function () {
   if (!this.marks || this.marks.length === 0){
    return 0;
   }
   let avg = this.marks.reduce(function(accumulate, currentValue){
    return accumulate + currentValue;
   }, 0)
   return avg / this.marks.length;
  }



Student.prototype.exclude = function (reason) {
this.excluded = reason;
delete this.marks;
delete this.subject;
}
student1.exclude('Отчислен');

