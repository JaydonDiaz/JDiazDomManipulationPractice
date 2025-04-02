document.addEventListener("DOMContentLoaded", function () {

  function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  Employee.prototype = {
    getSalary: function () {
      return this.salary;
    },
    setSalary: function (sal) {
      this.salary = sal;
    },
    accept: function (visitor) {
      visitor.visit(this);
    }
  };

  // Define Visitor Object
  function ExtraSalaryVisitor() {
    this.visit = function (employee) {
      employee.setSalary(employee.getSalary() * 2);
      console.log(`${employee.name}'s salary doubled to: ${employee.getSalary()}`);
    };
  }

  const dev = new Employee("Bob", 10000);
  console.log(`${dev.name}'s original salary: ${dev.getSalary()}`);

  const salaryVisitor = new ExtraSalaryVisitor();
  dev.accept(salaryVisitor);

});
