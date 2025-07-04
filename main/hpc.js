document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    const clone = document.createElement('img');
    clone.src = img.src;
    lightbox.appendChild(clone);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
