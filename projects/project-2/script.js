document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('#open-btn');
  const closeBtn = document.querySelector('#close-btn');
  const modalContainer = document.querySelector('.modal-container');

  function toggleModal() {
    modalContainer.style.display = modalContainer.style.display === 'none' || modalContainer.style.display === ''
      ? 'block'
      : 'none';
  }

  openBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);

  modalContainer.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
      toggleModal();
    }
  });
});
