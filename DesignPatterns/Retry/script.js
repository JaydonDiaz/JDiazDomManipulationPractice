document.addEventListener("DOMContentLoaded", function () {

  async function retryOperation(retries = 3, delay = 1000) {
    let currentTry = 0;

    while (currentTry < retries) {
      try {
        await externalServiceCall();
        console.log("Succeeded!");
        return;
      } catch (error) {
        currentTry++;
        console.log(`Failed attempt ${currentTry}`);

        if (currentTry >= retries) {
          console.log("Retry maximum reached. Exiting.");
          return;
        }

        await new Promise(res => setTimeout(res, delay)); // Wait before retrying
      }
    }
  }

  async function externalServiceCall() {
    return new Promise((resolve, reject) => {
      // Simulate a failure 70% of the time
      Math.random() < 0.7 ? reject(new Error("Service Failure")) : resolve("Success");
    });
  }

  retryOperation();

});
