// script.js
let draggedElement = null;

// Function to start dragging
function startDrag(event) {
    draggedElement = event.target;
    draggedElement.style.position = 'absolute';
    draggedElement.style.zIndex = '1000';
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

// Function to handle dragging
function onDrag(event) {
    if (!draggedElement) return;

    // Adjust position based on mouse movement
    draggedElement.style.left = event.pageX - draggedElement.offsetWidth / 2 + 'px';
    draggedElement.style.top = event.pageY - draggedElement.offsetHeight / 2 + 'px';
}

// Function to stop dragging
function stopDrag() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    draggedElement = null;
}

// Attach event listener to the image
document.addEventListener('DOMContentLoaded', () => {
    const mavuikaImage = document.querySelector('.Mavuika.img');
    if (mavuikaImage) {
        mavuikaImage.addEventListener('mousedown', startDrag);
    }
});
