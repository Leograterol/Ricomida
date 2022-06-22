
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


 $(document).ready(function () {

    /*click btn ingresar y enviar Correo*/
    $("#enviarCorreo").click(function () {
        prompt("Ingrese su correo electronico");
        alert("El correo fue enviado correctamente...");
    });

  
    /*cambiar color de subtitulo a Rojo con doble click*/
    $("p:lang(ES)").on("dblclick", function () {
        $(this).css({
            "color": "red"
        });
    });

    /**/
    /*cambiar color de subtitulo a Negro con un click*/
    $("p:lang(ES)").on("click", function () {
        $(this).css({
            "color": "black"
        });
    });

    /*ocultar o mostrar contenido de las card al hacer click en el titulo de la receta*/
    $(".card-title").on("click", function () {
        $('.card-img-top').toggle("slow");
        $('.card-text').toggle("slow");
    });



});