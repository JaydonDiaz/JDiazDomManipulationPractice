document.addEventListener("DOMContentLoaded", function () {

  function retryOperation() {
    let currentTry = 0;

    while (true) {
      try {
        externalServiceCall()
        console.log("Succeeded!");
        break;
      } catch (error) {
        currentTry++
        console.log(`Failed attempt ${currentTry}`);

        if (currentTry >= 3) {
          console.log("Retry maximum reached. Exiting.")
          break;
        }
      }
    }
  }

  function externalServiceCall() {
    throw "Failure"
  }

  retryOperation()
})
