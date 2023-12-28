
class EmployeeService {
    
    constructor(emps){
        this.emps = emps; //here emps is an array of employees
    }

    // define a function add that takes an emp as param and adds it to the array
    add = emp => this.emps = [...this.emps,emp];

    // define a function update that takes an emp as param and updates it to the array
    update = emp => this.emps = this.emps.map( e => e.empId==this.emps.empId?emp:e );

    // define a function getById that takes an empId as param and returns the emp from the array
    getById = id => this.emps.find(e => e.empId==id)

    // define a function getAll that takes no param and returns a copy of the array
    getAll = () => [...this.emps];

    // define a function deleteById that takes an empId as param and delets it from the array
    deleteById = id => this.emps = this.emps.filter( e => e.empId!=id )
}