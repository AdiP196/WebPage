const ToggleButton = document.getElementsById('toggleButton');
const naviList = document.getElementsById('nav_list');

ToggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
    
})