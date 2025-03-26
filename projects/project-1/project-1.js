document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#new-quote')
  let quote = document.querySelector('.quote')
  let person = document.querySelector('.person')

  const quotes = [
    { name: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { name: "Maya Angelou", quote: "Try to be a rainbow in someone else's cloud." },
    { name: "Steve Jobs", quote: "Your time is limited, so don't waste it living someone else's life." },
    { name: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { name: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { name: "Marilyn Monroe", quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring." },
    { name: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { name: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
    { name: "Leonardo da Vinci", quote: "Learning never exhausts the mind." },
    { name: "Mark Twain", quote: "The secret of getting ahead is getting started." }
  ];

  btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].name;
  })

})
