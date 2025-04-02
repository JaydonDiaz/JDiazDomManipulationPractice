document.addEventListener("DOMContentLoaded", function () {
  function Member(name) {
    this.name = name
    this.chatroom = null
  }

  Member.prototype = {
    send: function (message, toMember = null) {
      this.chatroom.send(message, this, toMember)
    },
    receive: function (message, fromMember, toAll = false) {
      if (toAll) {
        console.log(`${fromMember.name} to all: ${message}`)
      } else {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
      }
    }
  }

  function Chatroom() {
    this.members = {}
  }

  Chatroom.prototype = {
    addMember: function (member) {
      this.members[member.name] = member
      member.chatroom = this
    },
    send: function (message, fromMember, toMember = null) {
      if (toMember) {
        toMember.receive(message, fromMember)
      } else {
        for (const key in this.members) {
          if (this.members[key] !== fromMember) {
            this.members[key].receive(message, fromMember, true)
          }
        }
      }
    }
  }

  const chat = new Chatroom()

  const bob = new Member('Bob')
  const john = new Member('John')
  const tim = new Member('Tim')

  chat.addMember(bob)
  chat.addMember(john)
  chat.addMember(tim)

  bob.send("Hey, John", john)
  john.send("What's up, Bob", bob)
  tim.send("Howdy y'all")
})
