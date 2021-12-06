


const menuBtn = document.querySelectorAll('.menu-option')

const homeCont = document.querySelector('.home-container');
const menuCont = document.querySelector('.menu-container');
const contactoCont = document.querySelector('.contacto-container');

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
    option.classList.toggle('active')
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
                activeContent(btn)
                showContent(homeCont);
                hideContent(menuCont)
                hideContent(contactoCont)
                desactiveContent(menuBtn[1])
                desactiveContent(menuBtn[2])
                break;
                case 'Menu':
                activeContent(btn)
                showContent(menuCont);
                hideContent(homeCont)
                hideContent(contactoCont)
                desactiveContent(menuBtn[0])
                desactiveContent(menuBtn[2])
                break;
            case 'Contacto':
                activeContent(btn)
                showContent(contactoCont);
                hideContent(menuCont)
                hideContent(homeCont)
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
    activeContent(menuBtn[1])
    showContent(menuCont);
    hideContent(homeCont)
    hideContent(contactoCont)
    desactiveContent(menuBtn[0])
    desactiveContent(menuBtn[2])
})


