const menu1 = document.getElementById('menu-1')
const menu2 = document.getElementById('menu-2')
const menu3 = document.getElementById('menu-3')
const menu4 = document.getElementById('menu-4')

const menu1Button = document.getElementById('menu-1-button')
const menu2Button = document.getElementById('menu-2-button')
const menu3Button = document.getElementById('menu-3-button')
const menu4Button = document.getElementById('menu-4-button')

function menuOneExpand(){
    hideAllMenus()
    menu1.classList.add('show');
}

function menuTwoExpand(){
    hideAllMenus()
    menu2.classList.add('show');
}

function menuThreeExpand(){
    hideAllMenus()
    menu3.classList.add('show');
}

function menuFourExpand(){
    hideAllMenus()
    menu4.classList.add('show');
}

menu1Button.addEventListener('mouseover', menuOneExpand);
menu2Button.addEventListener('mouseover', menuTwoExpand);
menu3Button.addEventListener('mouseover', menuThreeExpand);
menu4Button.addEventListener('mouseover', menuFourExpand);

function hideAllMenus(){
    menu1.classList.remove('show');
    menu2.classList.remove('show');
    menu3.classList.remove('show');
    menu4.classList.remove('show');
 }

 menu1.addEventListener('mouseleave', hideAllMenus);
 menu2.addEventListener('mouseleave', hideAllMenus);
 menu3.addEventListener('mouseleave', hideAllMenus);
 menu4.addEventListener('mouseleave', hideAllMenus);

function sideMenuExpand() {
    document.getElementById('side-menu').classList.add('show-menu');
}

function sideMenuHide(){
    document.getElementById('side-menu').classList.remove('show-menu')
}

document.getElementById('menu-trigger').addEventListener('click',sideMenuExpand);
document.getElementById('menu-close').addEventListener('click',sideMenuHide);






  

 
