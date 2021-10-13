import jquery=require('jquery');
const $:JQueryStatic=jquery;
//creacion de objeto
let usuarioo:{
    height:string,
    weight:string,
    npm:string,
    nombre: string,
    cumple:string,
    age:string,
    fecha:string,
    moti:string,
}
//llenado de datos
usuarioo={
    height:"1.75",
    weight:"70kg",
    npm:"70",
    nombre:"Pepito Perez",
    cumple:"Septiembre 21,1979",
    age:"43 años",
    fecha:"20-10-2020",
    moti:"Hospitalizado por Bronquitis"
    
}
//asignacion de objeto
    $("#user").append(`<h1>${usuarioo.nombre}</h1>`);
    $("#user").append(`<p>${usuarioo.cumple}<p>`);
    $("#user").append(`<p>${usuarioo.age}<p>`);
   // $("#recuadrosignos").append(`<p>${usuarioo.height}</p>`);
    //$("#recuadrosignos").append(`<p>${usuarioo.weight}</p>`);
    //$("#recuadrosignos").append(`<p>${usuarioo.npm}</p>`);

//uso de botones
$('#button').on('click',function(event:any){
    if($('#form').attr('style')== 'display: none;'){
        $('#form').show();
        $('#textoantecedentes').hide();
    }
    else{
        $('#textoantecedentes').show();
        $('form').hide(); 
    }
});

//mostrar info pgna principal

$('#motivos').on('click',function(event:any){
    if($('#datosclinicos').attr('style')== 'display: none;'){
        $('#datosclinicos').show();}
    else{
        $('#datosclinicos').hide(); 
    }
});
//validacion regiony comuna
$("#reg").on('change',function(){
    $("#city").empty();if($(this).val() === "Antofagasta"){
        $("#city").append('<option value="Antofagasta">Antofagasta</option>')
        $("#city").append('<option value="Calama">Calama</option>')
    }if($(this).val() === "Tarapaca"){
        $("#city").append('<option value="Iquique">Iquique</option>')
        $("#city").append('<option value="Arica">Arica</option>')
    } if($(this).val() === "Santiago"){
        $("#city").append('<option value="Pudahuel">Pudahuel</option>')
        $("#city").append('<option value="Chicureo">Chicureo</option>')
    }
});
//validar rut

function ValidarRut(valor:any){
    var tmp=valor.split('-');
    let digito=tmp[1];
    let rut=tmp[0];
    if(digito=='K') digito='k';
    var M=0,S=1;
    for(;rut;rut=Math.floor(rut/10))
      S=(S+rut%10*(9-M++%6))%11;
      console.log(S?S-1:'k');

   return S?S-1:'k';
}

//funcion principal
(function () {

    
   
    let nombreCompleto:any=document.getElementById("nombrecompleto");
    let telefono:any=document.getElementById("telefono");
    let rut:any=document.getElementById("rut");
    let email:any=document.getElementById("email");
    telefono.maxLength="9";

    

    rut.pattern="^[0-9]{8}-[0-9Kk]{1}$";

    let campos:any=document.getElementById("campos");

    console.log(nombreCompleto.value);


    // obtener los formularios 
    let forms = document.querySelectorAll('.needs-validation')
    

    

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
        
          if (!form.checkValidity()) {
            if(nombreCompleto.value=="") {
                campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }

            if(rut.value==""){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Campo requerido";
            }

            if(ValidarRut(rut.value)>1){
                campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML="Rut no válido";
            }

            event.preventDefault();
            event.stopPropagation();
        
          }
          
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated')
        }, false) 
      })
  })()
  
 