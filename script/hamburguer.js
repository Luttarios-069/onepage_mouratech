function openMenu() {
    let nav = window.document.querySelector('nav');
    let img = window.document.querySelector('img#logo_site');
    let imgHamburguer = window.document.querySelector('i#burguer')
    let ul = window.document.querySelector('ul#ul_nav');
    let header = window.document.querySelector('header');
    header.style.flexDirection = 'column';
    nav.style.display = 'flex';
    imgHamburguer.style.justifyContent = 'flex-end';
    ul.style.marginRight = '0px'
    img.style.display = 'none';
    ul.style.flexDirection = 'column'
    ul.style.backgroundColor = 'black';
    ul.style.alignItems = 'center'
    

}