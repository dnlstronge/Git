/*excercise to make a system for a fictional school allowing for instances to be
created and demonstrating inheritence */

class School{
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
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
  console.log(this.name + " educates " + this.numberOfStudents + " students at the " + this.level + " school level.")
  }
static pickSubstituteTeacher (substituteTeachers) {
const randoI = Math.floor(substituteTeachers.length * Math.random());
return substituteTeachers[randoI];
}
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super (name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents) 
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  //instances
  const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian or a family member over the age of 13');
  const alSmith = new HighSchool('Al e. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

  //test code
lorraineHansbury.quickFacts();
//test function/method
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
//test new instance
console.log(alSmith.sportsTeams);
//all clear
