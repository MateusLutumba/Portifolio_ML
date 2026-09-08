const menuBtn = document.getElementById('menuBotao');
const menuBtnX = document.getElementById('menuBotaoX');
let esconderMenu = document.querySelector('main');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    document.getElementById('menuBotaoX').style.display = 'block';
    document.querySelector('.menuContainer').style.display = 'block';
});
menuBtnX.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    document.getElementById('menuBotaoX').style.display = 'none';
    document.querySelector('.menuContainer').style.display = 'none';

});
esconderMenu.addEventListener('click', () => {
    document.querySelector('.menuContainer').style.display = 'none'
})