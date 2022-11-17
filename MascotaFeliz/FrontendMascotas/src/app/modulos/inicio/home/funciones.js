// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        console.log(form.checkValidity());
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation()
        }else{
            RegistrarPersona();
            event.preventDefault()

        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

function RegistrarPersona(){
   
    let cedula = document.querySelector("#txtDocumento").value;
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellidos").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtCelular").value;
     

    let url = `http://localhost:3000/usuarios`;
    let datos = {
        cedula:cedula,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        rol:"cliente"
            };

            console.log(JSON.stringify(datos));
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje =>{
        console.log(mensaje)
    })
}
  