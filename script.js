$(document).ready(function(){
    error = document.getElementById('error'),
    err_message = document.getElementById('err-message'),
    error2 = document.getElementById('error2'),
    err_message2 = document.getElementById('err-message2')


$('#telefoneVendedor').keyup(function() {
    let element = $(this);
    let numbers_only = /[^0-9]/;
    let replaced;

    if(numbers_only.test(element.val())){
        $(error).fadeIn('slow',function(){
            $(this).html('erro no número do telefone');
        });
        $(err_message).fadeIn('slow',function(){
            $(this).html('somente números são permitidos');
        });
    }
    replaced = element.val().replace(numbers_only,'');
    element.val(replaced);
});

$('#telefoneVendedor').focusout(function () {
    $(error).fadeOut(1000,function(){
        $(this).html('');
    });
    $(err_message).fadeOut(1000,function(){
        $(this).html('');
    });
});

$('#anoObra').keyup(function() {
   let element = $(this);
   let numbers_only = /[^0-9]/;
   let replaced;

   if(numbers_only.test(element.val())){
       $(error2).fadeIn('slow',function(){
           $(this).html('erro no ano da obra');
       });
       $(err_message2).fadeIn('slow',function(){
           $(this).html('somente numeros são permitidos');
       });
   }
   replaced = element.val().replace(numbers_only,'');
   element.val(replaced);
});

$('#anoObra').focusout(function () {
   $(error2).fadeOut(1000,function(){
       $(this).html('');
   });
   $(err_message2).fadeOut(1000,function(){
       $(this).html('');
   });
});


$('#emailVendedor').keyup(function() {
   let element = $(this);
   let letters_only = /[^a-zA-Z0-9@.]/
   let replaced;

   if(letters_only.test(element.val())){
       $(error).fadeIn('slow',function(){
           $(this).html('erro no email do vendedor');
       });
       $(err_message).fadeIn('slow',function(){
           $(this).html('somente letras são permitidas');
       });
   }
   replaced = element.val().replace(letters_only,'');
   element.val(replaced);
});

$('#emailVendedor').focusout(function () {
   $(error).fadeOut(1000,function(){
       $(this).html('');
   });
   $(err_message).fadeOut(1000,function(){
       $(this).html('');
   });
});


});


var theForm = document.formularioCadastro;

// Validacao do formulario de cadastro
function validationFunc() {
   if (theForm.titulo.value == "") {
      alert( "O campo título está vazio" );
      return false;
   }

   if (theForm.autor.value == "") {
      alert( "O campo autor está vazio" );
      return false;
   }

   if (theForm.editora.value == "") {
      alert( "O campo editora está vazio" );
      return false;
   }

   if (theForm.anoObra.value == "") {
      alert( "O campo ano da obra está vazio" );
      return false;
   }

   if (theForm.capaLivro.value == "") {
      alert( "Não há imagens anexadas" );
      return false;
   }

   if (theForm.nomeVendedor.value == "") {
      alert( "O campo nome do vendedor está vazio" );
      return false;
   }

   if (theForm.emailVendedor.value == "") {
      alert( "O campo e-mail do vendedor está vazio" );
      return false;
   }

   if (theForm.telefoneVendedor.value == "") {
      alert( "O campo telefone do vendedor esta vazio" );
      return false;
   }

   return true;
}