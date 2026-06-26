
const video = document.getElementById('wildlifeVideo');
const toggleBtn = document.getElementById('toggleBtn');


toggleBtn.addEventListener('click', function() {
    
    if (!video.paused) {
        video.style.display = 'none';
    } else {
        
        video.style.display = 'block';
        video.play();
    }
});
