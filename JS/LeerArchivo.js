// Variable que contiene lo que lee del archivo "file.txt"
let dataFile = "nada";

//Se ejecuta cuando ya cargó toda la página
$(function () {
    console.log("ready!");
    traerArchivo();
});

//Funcion recursiva que se actualiza cada 500 milisegundos
function traerArchivo() {
    setTimeout(function () {
        ajax();
        var contenidoArchivo = dataFile;
        var partir = contenidoArchivo.split(",");
        
        for (let  i=0;  i < partir.length; i=i+6) {
            var o=i+1;
            var nombreUsuario = partir[i];
            var apellidoUsuario = partir[o];
            var nombreCompleto = nombreUsuario+" "+apellidoUsuario;
            console.log(partir[i]);
            var numerodeusuarios = partir.length/6;
            if (numerodeusuarios<=1) {
                if (nombreCompleto=='nada undefined') {
                    console.log("no exist user");
                }else{
                    if (($(".containerName").text())==nombreCompleto){
                        console.log("dont create user")
                    }else{
                        if($('.containerName').text().includes(nombreCompleto)==true){
                            console.log("User Exist");
                            
                        }else{
                            $("ol").append("<li><div class='UserInterface'><div class='containerUserInterface'><div class='containerName'>" + nombreCompleto + "</div><div class='containerButtonEdit'><button id='ButtonEditUser' class='btn btn-warning'><span class='glyphicon glyphicon-pencil' id='PencilIcon'></span>Edit</button></div></div></div></li>");
                        }
                    }
                }
            } else {
                
            }        
        }
        
        traerArchivo();
    }, 1000);
}

//Comuninación con el script de php
function ajax() {
    $.ajax({
        // la URL para la petición
        url: './php/leerArchivo.php',

        // especifica si será una petición POST o GET
        type: 'POST',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (data) {
            // console.log(data);
            dataFile = data;
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            console.log("Error");
            console.log(xhr);
            console.log(status);
        },
    });
}