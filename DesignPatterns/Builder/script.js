document.addEventListener("DOMContentLoaded", function () {

  function Person(name, weight, height, gender) {
    this.name = name
    this.weight = weight
    this.height = height
    this.gender = gender
  }

  function PersonBuilder(name, gender) {
    this.name = name
    this.gender = gender

    this.setWeight = function (weight) {
      this.weight = weight
      return this
    }
    this.setHeight = function (height) {
      this.height = height
      return this
    }

    this.build = function () {
      return new Person(this.name, this.weight, this.height, this.gender)
    }
  }
  const person = new PersonBuilder('Jaydon', 'male').setWeight(74.84).setHeight(1.85).build()
  console.log(person);


})
