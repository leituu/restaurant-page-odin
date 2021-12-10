const menu = {
    'italia': {'id': 'italia'
                ,'type':'div'
                ,'class':['exp']
                ,'content':'Italia'
                ,'productos': [{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ]},
    'españa': {'id': 'españa'
                ,'type':'div'
                ,'class':['exp']
                ,'content':'España'
                ,'productos': [{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ]},
    'eeuu': {'id': 'eeuu'
                ,'type':'div'
                ,'class':['exp']
                ,'content':'Estados Unidos'
                ,'productos': [{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ]},
    'desayuno': {'id': 'desayuno'
                ,'type':'div'
                ,'class':['exp']
                ,'content':'Desayuno'
                ,'productos': [{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ]},
    'almuerzo': {'id': 'almuerzo'
                ,'type':'div'
                ,'class':['exp']
                ,'content':'Almuerzo'
                ,'productos': [{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ]},
    'exprimido': {'id': 'exprimido'
                ,'type':'div'
                ,'class':['exp']
                ,'content':'Exprimidos'
                ,'productos': [{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ,{'prod':'lorem ipsum','precio':'$200,00'}
                                ]},
}

const createMenuItem = (title, price) => {
    let item = document.createElement('div');
    let itemTitle = document.createElement('div');
    let itemSpacer = document.createElement('div');
    let itemPrice = document.createElement('div');
    itemTitle.innerHTML = title;
    itemPrice.innerHTML = price;
    item.classList.add('exp-item')
    itemTitle.classList.add('exp-item-titulo');
    itemSpacer.classList.add('exp-item-spacer');
    itemPrice.classList.add('exp-item-precio')
    item.appendChild(itemTitle);
    item.appendChild(itemSpacer);
    item.appendChild(itemPrice);
    return item
}

const generateMenu = (menu) => {
    let menuExp = Object.keys(menu);
    let menuCompleto = document.createElement('div');
    let menuTitulo = document.createElement('h2')
    menuTitulo.innerHTML = 'Menu';
    menuCompleto.appendChild(menuTitulo);
    menuCompleto.classList.add('menu-container');
    menuExp.forEach(exp => {
        let menuObj = menu[exp]
        let experiencia = document.createElement('div');
        let experienciaTitulo = document.createElement('div');
        let expImg = document.createElement('i');
        let expTit = document.createElement('h3');
        experiencia.classList.add('exp');
        experienciaTitulo.classList.add('exp-titulo');
        expImg.classList.add('exp-img');
        expImg.setAttribute('experiencia',menuObj['id']);
        expTit.innerHTML = menuObj['content'];
        experienciaTitulo.appendChild(expImg);
        experienciaTitulo.appendChild(expTit);
        experiencia.appendChild(experienciaTitulo)
        menuObj['productos'].forEach((prod) => {
            let producto = createMenuItem(prod['prod'],prod['precio'])
            experiencia.appendChild(producto)
        })
        menuCompleto.appendChild(experiencia);
    })
    return menuCompleto;
}

const generateMenuCont = () => {
    document.querySelector('.content').appendChild(generateMenu(menu))
}