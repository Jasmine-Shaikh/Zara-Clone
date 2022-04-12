var menuModal = document.getElementById('menuModal');

document.querySelector('.close').addEventListener('click', function() {
    menuModal.classList.add('animatedMenuShow');
})

menuModal.addEventListener('animationend', function() {
    if (this.classList.contains('animatedMenuShow')) {
        this.style.display = 'none';
        this.classList.remove('animatedMenuShow')
    }
});