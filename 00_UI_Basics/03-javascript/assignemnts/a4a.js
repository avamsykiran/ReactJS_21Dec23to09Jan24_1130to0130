
class EmployeeService {
    
    constructor(emps){
        this.emps = emps; //here emps is an array of employees
    }

    // define a function add that takes an emp as param and adds it to the array
    add = emp => this.emps.push(emp);

    // define a function update that takes an emp as param and updates it to the array
    update = emp => {
        let index = this.emps.findIndex(e => e.empId==emp.empId);
        if(index>-1){
            this.emps[index]=emp;
        }
    };

    // define a function getById that takes an empId as param and returns the emp from the array
    getById = id => this.emps.find(e => e.empId==id)

    // define a function getAll that takes no param and returns a copy of the array
    getAll = () => [...this.emps];

    // define a function deleteById that takes an empId as param and delets it from the array
    deleteById = id => {
        let index = this.emps.findIndex(e => e.empId==id);
        if(index>-1){
            this.emps.splice(index,1);
        }
    };
}