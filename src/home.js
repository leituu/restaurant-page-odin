const home = {
    'levelOne': [{'id': '1', 'type':'div','class':['home-container'],'content':''}],
    'levelTwo': [{'id':'2', 'parent':'1', 'type':'div', 'class':['hero'], 'content':''},
                    {'id':'3', 'parent':'1', 'type':'div', 'class':['visit'], 'content':''}],
    'levelThree': [{'id':'4', 'parent':'2', 'type':'div', 'class':['hero-layer'], 'content':''},
                    {'id':'5', 'parent':'2', 'type':'div', 'class':['hero-title'], 'content':''},
                    {'id':'6', 'parent':'2', 'type':'div', 'class':['hero-subtitle'], 'content':''},
                    {'id':'7', 'parent':'2', 'type':'div', 'class':['arrow-left'], 'content':''},
                    {'id':'8', 'parent':'2', 'type':'div', 'class':['arrow-right'], 'content':''},
                    {'id':'9', 'parent':'3', 'type':'div', 'class':['visit-title'], 'content':''},
                    {'id':'10', 'parent':'3', 'type':'div', 'class':['visit-options'], 'content':''},
                    {'id':'11', 'parent':'3', 'type':'div', 'class':['visit-menu-btn'], 'content':'Accede al menu'}
                ],
    'levelFour':[{'id':'12', 'parent':'5', 'type':'h1', 'class':[], 'content':'Bienvenidos a El Viaje'},
                    {'id':'13', 'parent':'6', 'type':'h2', 'class':[], 'content':'Una invitacion a recorrer <br>el mundo gastronomico'},
                    {'id':'14', 'parent':'7', 'type':'img', 'class':['svg-color'], 'content':''},
                    {'id':'15', 'parent':'8', 'type':'img', 'class':['svg-color'], 'content':''},
                    {'id':'16', 'parent':'9', 'type':'h2', 'class':[], 'content':'Elegi a donde te gustaria viajar hoy'},
                    {'id':'17', 'parent':'10', 'type':'div', 'class':['visit-options-img','img-1'], 'content':''},
                    {'id':'18', 'parent':'10', 'type':'div', 'class':['visit-options-img','img-2'], 'content':''},
                    {'id':'19', 'parent':'10', 'type':'div', 'class':['visit-options-img','img-3'], 'content':''},
                    {'id':'20', 'parent':'10', 'type':'div', 'class':['visit-options-img','img-4'], 'content':''},
                    {'id':'21', 'parent':'10', 'type':'div', 'class':['visit-options-img','img-5'], 'content':''},
                ]
}

const elemGenerator = (jsonObj, level) => {
    let elemList = jsonObj[level].reduce((ac,elem) => {
        const e = document.createElement(elem['type']);
        e.setAttribute('id',elem['id'])
        elem['class'].forEach(cl => {e.classList.add(cl)})
        if (elem['content'] != '') {
            e.innerHTML = elem['content']
        }
        ac.push({id:elem['id'],elem:e, parent:elem['parent']});
        return ac
    },[])
    return elemList
}

let a = elemGenerator(home, 'levelOne')
let b = elemGenerator(home, 'levelTwo')
let c = elemGenerator(home, 'levelThree')
let d = elemGenerator(home, 'levelFour')

let content;
const homeCont = a.forEach((aElem)=> {
                    b.forEach((bElem)=> {
                        if (bElem['parent'] == aElem['id']) {
                            aElem['elem'].appendChild(bElem['elem'])
                        }
                        c.forEach((cElem) => {
                            if (cElem['parent'] == bElem['id']) {
                                bElem['elem'].appendChild(cElem['elem'])
                            }
                            d.forEach((dElem) => {
                                if (dElem['parent'] == cElem['id']) {
                                    cElem['elem'].appendChild(dElem['elem'])
                                } ;
                            })
                        })          
                    })
                    content = aElem['elem']
})

export const generateHomeCont = () => {
    document.querySelector('.content').appendChild(content)
}

export default generateHomeCont;