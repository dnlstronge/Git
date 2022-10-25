//excercise to make a fictional school catalogue

class school{
  constructor(name, level, numberOfStudents) {
    _name = name;
    _level = level;
    _numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(value) {
    if (value.isNaN()) {console.log("Invalid input: numberOfStudents must be set to a Number.")
    } else {
      this.numberOfStudents = value;
    }
}
quickFacts() {
  console.log(this.name + "educates " + this.numberOfStudents + "students at the " + this.level + "school level.")
 }
static pickSubstituteTeacher (substituteTeachers) {
  const randoI = Math.floor(substituteTeachers.length * Math.Random());
return substituteTeachers[randoI];
}


}
