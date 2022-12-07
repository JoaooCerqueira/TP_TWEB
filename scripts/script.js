
//login
function login(form){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if ( form.password.value == "teste" && form.email.value == "joao.diogo@gmail.com"){
        alert('Login com sucesso');
        window.location = "loginsucesso.html";
    }
    else{
        alert("Email ou password incorretos")
    }

}


//regista

function verificaEmail(){
    if( document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 ){
           alert( "Por favor, insira um E-MAIL válido!");
           document.getElementById('email').value="";
        }
    }



    function registo (form){
        let nome = document.getElementById('nome').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value;
    
        if( form.password.value && form.nome.value && form.email.value){
            alert('Registado');
            window.location = 'registadosucesso.html';
        }
        else{
            alert("Preencha os dados corretamente!")
        }
    
    }