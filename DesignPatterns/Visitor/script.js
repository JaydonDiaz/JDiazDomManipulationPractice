document.addEventListener("DOMContentLoaded", function () {

  function Employee(name, salary) {
    this.name = name
    this.salary = salary
  }

  Employee.prototype = {
    getSalary: function () {
      return this.salary
    },
    setSalary: function (sal) {
      this.salary = sal
    },
    accept: function (visitorFunction) {
      visitorFunction(this)
    }
  }

  const dev = new Employee("Bob", 10000)
  console.log(dev.getSalary());

  function ExtraSalary(emp) {
    emp.setSalary(emp.getSalary() * 2)
  }

  dev.accept(ExtraSalary)
  console.log(dev.getSalary());

})
