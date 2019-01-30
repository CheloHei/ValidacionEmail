//Variables
const email = $('#email');
const asunto = $('#asunto');
const mensaje = $('#mensaje');
//const btnEnviar = document.getElementById('enviar');
const btnEnviar = $('#enviar');
const resetBtn = $('#resetear');


//EventListeneres
eventListeners();
function eventListeners() {
    $(document).ready(inicioApp);

    $(email).blur(validarCampo);
    $(asunto).blur(validarCampo);
    $(mensaje).blur(validarCampo);

    $(btnEnviar).on('click',enviarEmail);
    $(resetBtn).on('click',limpiarCampos);


}


//Functions
function inicioApp(){
    $(btnEnviar).attr('disabled', true);
}
function validarCampo(){
    //se valida que la longitud del texto no este vacio
    validarLongitud(this);
    //Solo validar email
    if (this.type === 'email') {
        validarEmail(this);
    }

let errores = $('.error');

    if($(email).val()!=='' && $(asunto).val() !=='' && $(mensaje).val()!=='')
    //if (email.value !== '' && asunto.value !== '' && mensaje.value !=='')
    if (errores.length === 0) {
        
        $(btnEnviar).attr('disabled',false);
    }
    
        //btnEnviar.disabled = false;
    
}

function limpiarCampos(e){
    e.preventDefault();
    $('#enviar-mail').trigger('reset');
}




function enviarEmail(e){

    const spinner = $('#spinner');
    $(spinner).css('display','block');


    const enviar = document.createElement('img');
    enviar.src = 'img/tenor.gif';
    enviar.style.display = 'block';



    setTimeout(function(){
        $(spinner).css('display','none');
        //document.querySelector('#loaders').appendChild(enviado);
        $('#loaders').append(enviar);

        setTimeout(function(){
            $(enviar).remove();
            //formulario.reset();
            $('#enviar-mail').trigger('reset');
        },5000);
    },3000);

    e.preventDefault();
}




function validarLongitud(campo){
    console.log(campo.value.length);


    if ($(campo).val().length > 0) {
        console.log('Funciona');
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
        
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        $(campo).css('border-bottom-color','green');
        //campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}