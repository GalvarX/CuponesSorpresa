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

    if (enteredAnswer === correctAnswer) {
        // Encontrar la imagen en la galería que corresponde a la respuesta correcta
        const imgElement = Array.from(document.querySelectorAll('.gallery img')).find(img => img.dataset.answer.toLowerCase() === correctAnswer.toLowerCase());

        if (imgElement) {
            imgElement.src = imageUrl; // Reemplazar el src de la imagen
            imgElement.alt = 'Imagen Desbloqueada'; // Actualizar el alt de la imagen
        } else {
            console.error('No se encontró la imagen correspondiente para reemplazar.');
        }

        closeModal(); // Cerrar el modal al responder correctamente
    } else {
        const unlockedImageContainer = document.getElementById('unlockedImageContainer');
        unlockedImageContainer.innerHTML = '<p>Respuesta incorrecta. Inténtalo de nuevo.</p>';
    }
}

