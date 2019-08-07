var img, canvas, ctx;

function SubirImagen()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    
    // Cargamos el objeto que nos permite subir imagenes
    var imagen = document.getElementById("imagen");
    if(imagen.files.length == 0)
    {
        alert('Debe ingresar una imagen');
        return;
    }

    // Creamos la imagen
    img = new Image();
    img.src = URL.createObjectURL(imagen.files[0]);

    img.onload = function() {
        // Dibujamos la imagen
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Mostramos el canvas
    document.getElementById("mycanvas").style.display = 'block';
}

function Texto()
{
    // Cargamos la caja de texto
    var texto = document.getElementById("texto");

    img.src = URL.createObjectURL(imagen.files[0]);
    img.onload = function() {
        // Dibujamos la imagen
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Agregamos el texto
        context.lineWidth  = 5;
        context.font = '30pt sans-serif';
        context.strokeStyle = 'black';
        context.fillStyle = 'white';
        context.textAlign = 'center';

        texto = texto.value.toUpperCase();

        var x = canvas.width/2;
        var y = canvas.height - 40;

        context.strokeText(texto, x, y);
        context.fillText(texto, x, y);
    };
}
