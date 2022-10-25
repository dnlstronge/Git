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
}
