document.addEventListener('DOMContentLoaded', () => {
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close-btn');
    let trastion_duration  = 300;
    
    const keyPoints = document.querySelectorAll('.base .key_point .point');

   
    function showModal(imageSrc, captionText) {
        modalImage.src = imageSrc;
        modalCaption.textContent = captionText;
       setTimeout(()=>{
        modal.classList.add("show")
       } , trastion_duration)
    }

  
    keyPoints.forEach(point => {
        point.addEventListener('click', () => {
            
            const imageSrc = point.getAttribute('data-image-src');
            const captionText = point.getAttribute('data-caption');
            
          
            if (imageSrc && captionText) {
                showModal(imageSrc, captionText);
            }
        });
    });

    
    function hideModal() {
        setTimeout(()=>{
        modal.classList.remove("show")
       } , trastion_duration)
    }

   
    closeBtn.addEventListener('click', hideModal);

   
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

   
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            hideModal();
        }
    });
});