import generateHomeCont from './home'
import generateMenuCont from './menu'
import generateFormCont from './contact'

const menuBtn = document.querySelectorAll('.menu-option')
generateHomeCont()
// const homeCont = document.querySelector('.home-container');
// const menuCont = document.querySelector('.menu-container');
// const contactoCont = document.querySelector('.contacto-container');

const menuAccess = document.querySelector('.visit-menu-btn')


function showContent(option) {
    if (option.classList.contains('hidden')) {
        option.classList.toggle('hidden')
    }
}

function hideContent(option) {
    if (!option.classList.contains('hidden')) {
        option.classList.add('hidden')
    } 
}

function activeContent(option) {
    if (option.classList.contains('active')) return
    option.classList.add('active')
}

function desactiveContent(option) {
    if (option.classList.contains('active')) {
        option.classList.remove('active')
    } 
}

menuBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case 'Home':
                if (document.querySelector('.content').hasChildNodes()) {
                    document.querySelector('.content').removeChild(document.querySelector('.content').firstChild)
                }
                activeContent(btn);
                generateHomeCont();
                desactiveContent(menuBtn[1])
                desactiveContent(menuBtn[2])
                break;
            case 'Menu':
                if (document.querySelector('.content').hasChildNodes()) {
                    document.querySelector('.content').removeChild(document.querySelector('.content').firstChild)
                }
                generateMenuCont();
                activeContent(btn)
                desactiveContent(menuBtn[0])
                desactiveContent(menuBtn[2])
            break;
            case 'Contacto':
                if (document.querySelector('.content').hasChildNodes()) {
                    document.querySelector('.content').removeChild(document.querySelector('.content').firstChild)
                }
                generateFormCont()
                activeContent(btn)
                desactiveContent(menuBtn[0])
                desactiveContent(menuBtn[1])
                break;   
            default:
                break;
        }
        ;
    })
})

menuAccess.addEventListener('click', () => {
    document.querySelector('.content').removeChild(document.querySelector('.content').firstChild)
    activeContent(menuBtn[1])
    generateMenuCont();

    desactiveContent(menuBtn[0])
    desactiveContent(menuBtn[2])
})

