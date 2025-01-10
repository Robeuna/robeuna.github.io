let draggedElement = null;

function startDrag(event) {
    draggedElement = event.target;
    draggedElement.style.position = 'absolute';
    draggedElement.style.zIndex = '1000';
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

function onDrag(event) {
    if (!draggedElement) return;

    draggedElement.style.left = event.pageX - draggedElement.offsetWidth / 2 + 'px';
    draggedElement.style.top = event.pageY - draggedElement.offsetHeight / 2 + 'px';
}

function stopDrag() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    draggedElement = null;
}

document.addEventListener('DOMContentLoaded', () => {
    const mavuikaImage = document.querySelector('.Mavuika.img');
    if (mavuikaImage) {
        mavuikaImage.addEventListener('mousedown', startDrag);
    }
});
