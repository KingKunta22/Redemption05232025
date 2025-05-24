const menuBar = document.querySelector('.menu');
const sideBar = document.querySelector('aside');
const closeBtn = document.querySelector('.closebtn');

menuBar.addEventListener('click', () => {
        sideBar.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
    sideBar.classList.add('hidden');
})