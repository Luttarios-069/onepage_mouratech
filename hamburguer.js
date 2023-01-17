let fechar = window.document.querySelector('i#close');
let imgHamburguer = window.document.querySelector('i#burguer')
let nav = window.document.querySelector('nav');
let img = window.document.querySelector('img#logo_site');
let header = window.document.querySelector('header');

function openMenu() {
    let ul = window.document.querySelector('ul#ul_nav');
    header.style.flexDirection = 'column';
    nav.style.display = 'flex';
    imgHamburguer.style.display = 'none';
    ul.style.marginRight = '0px'
    img.style.display = 'none';
    ul.style.flexDirection = 'column'
    ul.style.backgroundColor = 'black';
    ul.style.alignItems = 'center';
    fechar.style.display = 'flex'
    fechar.style.justifyContent = 'flex-end'
}

function closeMenu() {
    imgHamburguer.style.display = 'flex';
    imgHamburguer.style.justifyContent = 'flex-end';
    fechar.style.display = 'none';
    nav.style.display = 'none';
    img.style.display = 'flex';
    header.style.display = 'flex';
    header.style.flexDirection = 'row';
}