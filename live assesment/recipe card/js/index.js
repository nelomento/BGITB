function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
