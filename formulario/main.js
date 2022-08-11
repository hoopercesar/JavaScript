
// Función que captura un texto ingresado en formulario
let infos = [];
function captura() {
    var nombre = document.getElementById("nombre").value;
    var ap_mater = document.getElementById("ap_mater").value;
    var ap_pater = document.getElementById("ap_pater").value;
    var celu = document.getElementById("celu").value;
    var civil = document.getElementById("ecivil").value;

    var hoy = new Date();
    var fecha = hoy.getDate()+'/'+(hoy.getMonth()+1)+'/'+hoy.getFullYear()
    var hora = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();

    if (nombre=="") {
        alert('Debe Ingresar su Nombre');
        document.getElementById("nombre").focus();
    } else {
        let info = {
            Fecha: fecha, Hora: hora,
            Nombre: nombre , Apellido_Materno: ap_mater, Apellido_Paterno: ap_pater,
            Movil: celu, Estado_Civil: civil
        };
        infos.push(info);

        // Guarda en un storage local
        localStorage.setItem('ListaFormulario', JSON.stringify(infos) );

        // reinicia y limpia formulario una ve que los datos han sido enviados
        document.getElementById("nombre").value = "";
        document.getElementById("ap_mater").value = "";
        document.getElementById("ap_pater").value = "";
        document.getElementById("celu").value = "";
        document.getElementById("ecivil").value = "";

    }
    return infos
}



