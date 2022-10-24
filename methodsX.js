// classes and methods exercise
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// log name of surgeon romero:

console.log(surgeonRomero.name);

//call vacationdays method with an input of 3 on surgeon romero:

surgeonRomero.takeVacationDays(3);

//test should output 17

console.log(surgeonRomero.remainingVacationDays)

//test (clear)
