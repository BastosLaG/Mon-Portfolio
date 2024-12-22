// Fonction pour gérer l'affichage des sections déroulantes
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section strong'); // Tous les titres des sections

    sections.forEach(section => {
        section.addEventListener('click', () => {
            // Récupérer le div qui suit le titre
            const contentDiv = section.nextElementSibling;

            // Si la div a la classe 'content', on la bascule entre visible et cachée
            if (contentDiv && contentDiv.classList.contains('content')) {
                contentDiv.classList.toggle('active');
            }
        });
    });
});
// Fonction pour ouvrir l'image en plein écran
function openFullscreen(img) {
    var fullscreenContainer = document.getElementById('fullscreen-container');
    var fullscreenImage = document.getElementById('fullscreen-image');
    
    fullscreenImage.src = img.src;  // L'image source est mise dans l'image en plein écran
    fullscreenContainer.style.display = 'flex';  // Afficher le conteneur
}

// Fonction pour fermer l'image en plein écran
function closeFullscreen() {
    var fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';  // Masquer le conteneur
}
