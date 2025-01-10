const image = document.querySelector('.Mavuika');
let isDragging = false;
let offsetX, offsetY;

image.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX; // Capture initial mouse position
  offsetY = e.offsetY;
  image.style.cursor = 'grabbing'; // Visual cue for dragging
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    
    // Restrict movement to within the container
    const x = Math.min(rect.width - image.offsetWidth, Math.max(0, e.clientX - rect.left - offsetX));
    const y = Math.min(rect.height - image.offsetHeight, Math.max(0, e.clientY - rect.top - offsetY));

    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  image.style.cursor = 'grab'; // Reset cursor
});
