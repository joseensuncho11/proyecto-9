function tienda_zapatos(){
    //Obtener los valores ingresados en los inputs (Variables entrada)
    const precio_unitario = parseFloat(document.getElementById('precio_unitario').value);
    const cantidad = parseInt(document.getElementById('cantidad_zapatos').value);
    
    //Declarar variables del proceso y salida

    let respuesta;

    // Validacion
    if (isNaN(precio_unitario) || isNaN(cantidad) || precio_unitario===null || cantidad===null ) {
        respuesta = `<div class='alert alert-danger' role='alert'>Ingrese valores validos </div>`
    } 
    else
        {
    let subtotal = precio_unitario * cantidad;
    let porcentaje_descuento, valor_descuento, total_Compra;
    
    // Proceso - Caluclos
    if (cantidad < 10) {
        porcentaje_descuento = 0;
    } else if (cantidad >= 10 && cantidad < 20) {
        porcentaje_descuento = 0.10;
    } else if (cantidad >= 20 && cantidad < 30) {
        porcentaje_descuento = 0.20;
    } else if (cantidad >= 30) {
        porcentaje_descuento = 0.40;
    } else {
        porcentaje_descuento = 0.40;
    }
    valor_descuento = subtotal * porcentaje_descuento;
    total_Compra = subtotal - valor_descuento;
    
    respuesta = `<div class='alert alert-success' role='alert'>Respuesta: El porcentaje de descuento es del ${porcentaje_descuento * 100}%. <br> El valor del descuento es $ ${valor_descuento.toFixed(2)}<br> Total de la compra es $${total_Compra.toFixed(2)} <br></div>`; 
    }

    //salida    

    document.getElementById("respuesta").innerHTML =respuesta;
}

function indice_edad() {
    // Obtener los valores ingresados en los inputs (Variables entrada)
    const edad = parseFloat(document.getElementById('edad').value);
    // Declarar variables del proceso y salida
    let respuesta, res, imagenSrc;

    // Validación
    if (isNaN(edad) || edad == null) {
        respuesta = `<div class='alert alert-danger' role='alert'>Ingrese valores válidos</div>`;
    } else {
        // Proceso - Cálculos
        if (edad <= 12) {
            res = "Niño";
            imagenSrc = "<img src='imagen/recreo.png'>"
        } else if (edad > 12 && edad <= 40) {
            res = "Joven";
            imagenSrc = "<img src='imagen/nino.png'>"
        } else if (edad > 40 && edad <= 60) {
            res = "Adulto";
            imagenSrc = "<img src='imagen/adulto.png'>"
        } else if (edad > 60) {
            res = "Adulto Mayor";
            imagenSrc = "<img src='imagen/adulto-mayor.png'>"
        } else {
            res = "Ingresó un valor errado";
            imagenSrc = ""; // No se muestra imagen
        }
        respuesta = `<div class='alert alert-success' role='alert'> Respuesta: De acuerdo a la edad ${edad}, años. <br> la persona es: ${res} ${imagenSrc}</div>`;
    }

    // Salida del texto
    document.getElementById("respuesta2").innerHTML = respuesta;

    
}

function indice_imc() {
    // Obtener los valores ingresados en los inputs (Variables entrada)
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    // Declarar variables del proceso y salida
    let imc, respuesta, imagenSrc, altipo,resultado;
    
    // Proceso - Cálculos
    imc = peso / (estatura * estatura);
    console.log(imc);

    if( isNaN(peso) || isNaN(estatura) || peso===null || estatura===null){
        resultado = `<div class='alert alert-danger' role='alert'>Ingrese valores válidos</div>`;
    } else {

        if (imc < 18.5) {
            respuesta = "Bajo peso";
            imagenSrc = "imagen/bajo-peso.png";
            altipo = 'alert-secondary';
        } else if (imc >= 18.5 && imc < 24.9) {
            respuesta = "Normal";
            imagenSrc = "imagen/normal.png";  // Debes agregar la imagen correspondiente
            altipo = 'alert-success';
        } else if (imc >= 25 && imc < 29.9) {
            respuesta = "Sobrepeso";
            imagenSrc = "imagen/sobrepeso.png";  // Debes agregar la imagen correspondiente
            altipo = 'alert-warning';
        } else if (imc >= 30 && imc < 34.9) {
            respuesta = "Obesidad tipo 1";
            imagenSrc = "imagen/obesidad-1.png";  // Debes agregar la imagen correspondiente
            altipo = 'alert-danger';
        } else if (imc >= 35 && imc < 39.9) {
            respuesta = "Obesidad tipo 2";
            imagenSrc = "imagen/obesidad-2.png";  // Debes agregar la imagen correspondiente
            altipo = 'alert-danger';
        } else if (imc >= 40 && imc < 49.9) {
            respuesta = "Obesidad tipo 3";
            imagenSrc = "imagen/obesidad-3.png";  // Debes agregar la imagen correspondiente
            altipo = 'alert-danger';
        } else if (imc >= 50 ) {
            respuesta = "Obesidad tipo 4";
            imagenSrc = "imagen/obesidad-4.png";  // Debes agregar la imagen correspondiente
            altipo = 'alert-danger';
        }
        resultado=`<div class='alert ${altipo}' role='alert'> Respuesta: El imc de la persona es: ${imc.toFixed(2)} y la clasificación es: ${respuesta} <img src='${imagenSrc}' alt='${respuesta}'></div>`;
    }

    // Salida
    document.getElementById('respuesta3').innerHTML = resultado;
        
}


function presion_arterial(){
    //Obtener los valores ingresados en los inputs (Variables entrada)
    const presión = parseFloat(document.getElementById('presion').value);
    //Declarar variables del proceso y salida
    let respuesta;
    if( isNaN(presión) || presión===null){
        resultado = `<div class='alert alert-danger' role='alert'>Ingrese valores válidos</div>`;
    } else 
    {
        
        // Proceso - Calculos
        if (presión < 90 ) {
            respuesta = "PRESION BAJA";
            altipo = 'alert-secondary';
        } else if(presión >= 90 && presión < 120 ) {
            altipo = 'alert-success';
            respuesta = "PRESION NORMAL";
        } else if(presión >= 120 && presión <= 139 ) {
            respuesta = "PREHIPERTENSION"; 
            altipo = 'alert-warning';
        } else if(presión >= 140 && presión <= 159 ) {
            respuesta = "PRESION ALTA - HIPERTENSION FASE 1";
            altipo = 'alert-danger';
        } else if(presión >= 160 ) {
            respuesta = " PRESION ALTA - HIPERTENSION FASE 2"
            altipo = 'alert-danger';
        }
        resultado=`<div class='alert ${altipo} role='alert'>Respuesta: La presión arterial de la persona es: ${presión} mm Hg y la clasificación es: ${respuesta} </div>`;
    }
    // Salida
    document.getElementById('respuesta4').innerHTML= resultado;
}



