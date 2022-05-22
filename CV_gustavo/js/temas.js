const main = () => {
    const btnCambiarEstilo = document.querySelector('#btnCambiarEstilo');
    const body = document.querySelector('#body', '#h1');
    const estilo = document.querySelector('#estilo');
    
    btnCambiarEstilo.addEventListener("click",(event) =>{

        const opc = estilo.value;
        console.log(opc);

        switch (Number(opc)) {
            case 1:
                body.classList.remove('estilo2-body');
                body.classList.remove('estilo3-body');
                body.classList.add('estilo1-body');

                break;
            case 2:
                body.classList.remove('estilo1-body');
                body.classList.remove('estilo3-body');
                body.classList.add('estilo2-body');

                break;
            case 3:
                body.classList.remove('estilo1-body');
                body.classList.remove('estilo2-body');
                body.classList.add('estilo3-body');
                break;
        }

    });
}

