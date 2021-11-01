// ALMACENAR EL CAMBIO PARA QUE AL ACTULIZAR NO VUELVA AL BLANCO 

// APLICAR UNPOCO MAS DE LOGICA

// CREAR UNA REFERENCIA AL STORAGE - DONDE ALMACENAR EL CAMBIO

const storage = window.localStorage;

//REFERENCIA AL CHECK Y AL BODY

const check = document.querySelector('.toggle');
const body = document.querySelector('.body');

//COMO ACCEDEMOS AL STORAGE DONDE SE ALMACENA EL DATO

let dark = Boolean(storage.getItem('dark'));

const darkmode = dark => {
    if (dark) {
        body.classList.add('change-color');
        check.cheked = true;
    } else {
        body.classList.remove('change-color');
        check.cheked = false;
    }
}

darkmode(dark);

check.addEventListener('click', function() {
    if (this.checked) {
        body.classList.add('change-color')
        storage.setItem('dark', true)
    } else {
        body.classList.remove('change-color')
        storage.removeItem('dark')
    }
})