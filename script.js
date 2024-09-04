function showRiddleModal(riddle, correctAnswer, imageUrl) {
    document.getElementById('riddleQuestion').textContent = riddle;
    document.getElementById('riddleInput').dataset.correctAnswer = correctAnswer.toLowerCase(); // Convertir a minúsculas para facilitar la comparación
    document.getElementById('riddleInput').dataset.imageUrl = imageUrl;
    document.getElementById('riddleModal').style.display = 'flex';

      // Añadir el manejador de eventos para la tecla Enter
      document.getElementById('riddleInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar el comportamiento por defecto del Enter
            checkAnswer(); // Llamar a la función para verificar la respuesta
        }
    });
}

function closeModal() {
    document.getElementById('riddleModal').style.display = 'none';
    document.getElementById('riddleInput').value = '';
    document.getElementById('unlockedImageContainer').innerHTML = '';
}

function checkAnswer() {
    const riddleInput = document.getElementById('riddleInput');
    const enteredAnswer = riddleInput.value.toLowerCase(); // Convertir la respuesta ingresada a minúsculas
    const correctAnswer = riddleInput.dataset.correctAnswer;
    const imageUrl = riddleInput.dataset.imageUrl;
    const unlockedImageContainer = document.getElementById('unlockedImageContainer');

    if (enteredAnswer === correctAnswer) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Imagen Desbloqueada';
        unlockedImageContainer.innerHTML = ''; // Limpiar el contenedor de imágenes previas
        unlockedImageContainer.appendChild(img);
    } else {
        unlockedImageContainer.innerHTML = '<p>Respuesta incorrecta. Inténtalo de nuevo.</p>';
    }
}
