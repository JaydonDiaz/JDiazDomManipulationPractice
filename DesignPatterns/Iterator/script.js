document.addEventListener("DOMContentLoaded", function () {

  const items = [1, "Jaydon", false, 1.24]

  function Iterator(items) {
    this.items = items
    this.index = 0
  }

  Iterator.prototype = {
    hasNext: function () {
      return this.index < this.items.length
    },

    next: function () {
      return this.items[this.index++]
    }
  }

  const iter = new Iterator(items)
  while (iter.hasNext())
    console.log(iter.next())
})
