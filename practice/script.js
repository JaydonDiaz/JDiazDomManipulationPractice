document.addEventListener('DOMContentLoaded', function () {

  const sports = document.querySelector('#sports');

  sports.addEventListener('click', (e) => {
    if (e.target.matches('.sport')) {
      console.log(`${e.target.textContent} was clicked`);
      e.target.classList.toggle('selected');
    }
  });

  const newSport = document.createElement('li');
  newSport.innerText = 'swimming';
  newSport.setAttribute('id', 'swimming');
  newSport.classList.add('sport');

  sports.appendChild(newSport);

  const username = 'John Doe'
  const welcomeMsg = document.getElementById("welcome-msg")

  welcomeMsg.textContent += username === '' ? 'Guest' : username
});
