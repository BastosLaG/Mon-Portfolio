document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section strong'); 
    sections.forEach(section => {
        section.addEventListener('click', () => {
            const contentDiv = section.nextElementSibling;
            if (contentDiv && contentDiv.classList.contains('content')) {
                contentDiv.classList.toggle('active');
            }
        });
    });
});
function openFullscreen(img) {
    var fullscreenContainer = document.getElementById('fullscreen-container');
    var fullscreenImage = document.getElementById('fullscreen-image');
    
    fullscreenImage.src = img.src;  
    fullscreenContainer.style.display = 'flex';
}
function closeFullscreen() {
    var fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
}
document.getElementById('fullscreen-container').addEventListener('click', function(event) {
    if (event.target === this) {
        closeFullscreen();
    }
});
