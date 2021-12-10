

const generateForm = () => {
    const form= document.createElement('div');
    form.classList.add('contacto-form');
    const formTitle = document.createElement('div');
    formTitle.classList.add('contacto-title')
    const formTitleText= document.createElement('h2');
    formTitleText.innerHTML = 'Envianos un mensaje';
    const formHtml= document.createElement('form');
    const email = document.createElement('label')
    email.setAttribute('for', 'email')
    email.innerHTML = 'Email: <br> <input type="email" name="email" id="email">'
    const tel = document.createElement('label')
    tel.setAttribute('for','telefono')
    tel.innerHTML = 'Telefono (opcional): <br> <input type="tel" name="telefono" id="telefono">'
    const mensaje= document.createElement('label')
    mensaje.setAttribute('for','mensaje')
    mensaje.innerHTML = 'Mensaje: <br> <input type="text" name="mensaje" id="mensaje">'
    const submitBtn = document.createElement('input')
    submitBtn.setAttribute('type','submit');
    submitBtn.setAttribute('value','Enviar');
    //Consolidamos el elemento
    formTitle.appendChild(formTitleText);
    form.appendChild(formTitle);
    formHtml.appendChild(email)
    formHtml.appendChild(tel)
    formHtml.appendChild(mensaje)
    formHtml.appendChild(submitBtn)
    form.appendChild(formHtml)
    return form
}

const generateMap = () => {
    const mapCont = document.createElement('div');
    mapCont.classList.add('mapa');
    const mapContTitle = document.createElement('div');
    mapContTitle.classList.add('mapa-title');
    const mapContTitleText = document.createElement('h2');
    mapContTitleText.innerHTML = 'Donde Estamos?';
    mapContTitle.appendChild(mapContTitleText);
    const mapa = document.createElement('iframe');
    mapa.classList.add('mapa-iframe');
    mapa.src = 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Sarand%C3%AD%20781,%20B1722%20Merlo,%20Provincia%20de%20Buenos%20Aires+(Your%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed';
    mapCont.appendChild(mapContTitle);
    mapCont.appendChild(mapa);
    return mapCont
}



const generateFormCont = () => {
    const contCont= document.createElement('div');
    contCont.classList.add('contacto-container');
    contCont.appendChild(generateForm())
    contCont.appendChild(generateMap())
    document.querySelector('.content').appendChild(contCont)
}


