const img = document.getElementById('Mavuika');

    let isDragging = false;

    // Store the initial position of the mouse and image
    let offsetX, offsetY;

    // Mouse down event
    img.addEventListener('mousedown', (event) => {
      isDragging = true;
      img.style.cursor = 'grabbing';

      // Calculate offset between mouse and image position
      offsetX = event.clientX - img.offsetLeft;
      offsetY = event.clientY - img.offsetTop;
    });

    // Mouse move event
    window.addEventListener('mousemove', (event) => {
      if (isDragging) {
        // Move the image to the new position
        img.style.left = `${event.clientX - offsetX}px`;
        img.style.top = `${event.clientY - offsetY}px`;
      }

    // Mouse up event
    window.addEventListener('mouseup', () => {
      isDragging = false;
      img.style.cursor = 'grab';
    });
