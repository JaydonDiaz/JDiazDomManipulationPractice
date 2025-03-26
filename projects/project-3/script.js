document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question')

  questions.forEach(question => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling

      if (answer.style.height === '0px' || !answer.style.height) {
        answer.style.height = answer.scrollHeight + 'px';
        this.classList.add('active');
        this.style.fontWeight = 'bold';
        this.style.color = '#007bff';
        this.style.transition = 'color 0.3s ease';
        this.style.borderBottom = '2px solid #007bff';
        this.style.paddingBottom = '20px';
        this.style.marginBottom = '10px';
      } else {
        answer.style.height = '0px';
        this.classList.remove('active');
        this.style.fontWeight = 'normal';
        this.style.color = 'black';
        this.style.borderBottom = '1px solid black';
        this.style.paddingBottom = '18px';
        this.style.marginBottom = '0';
      }
    })
  })
})
