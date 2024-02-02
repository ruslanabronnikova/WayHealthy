document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.button'); // Выбираем кнопку "Отправить"
    const modalSignin = document.getElementById('modalSignin');

    sendButton.addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное действие кнопки "Отправить"

      // Открываем модальное окно
      var myModal = new bootstrap.Modal(modalSignin);
      myModal.show();
      
      // Добавляем класс d-block для отображения модального окна
      modalSignin.classList.add('d-block');
    });
});
