document.getElementById("form_PesoIdeal").addEventListener("submit", function(event) {
    event.preventDefault();

    const sexo = document.getElementById('Sexo').value;
    const edad = parseInt(document.getElementById('edad').value);
    const PesoActual = parseFloat(document.getElementById('PesoActual').value);
    let estatura = parseFloat(document.getElementById('Altura').value);

    let PesoIdeal, imc, calificacion, badge;

    if (sexo === 'masculino') {
        PesoIdeal = estatura - 100 - ((estatura - 150) / 4);
    } else if (sexo === 'femenino') {
        PesoIdeal = estatura - 100 - ((estatura - 150) / 2);
    }

    estatura = estatura / 100;  // Convertir estatura a metros
    imc = PesoActual / (estatura * estatura);

    switch (true) {
        case imc < 18.5:
            calificacion = "Bajo peso";
            badge = '<span class="badge text-bg-danger">Danger</span>';
            break;
        case imc >= 18.5 && imc < 24.9:
            calificacion = "Peso normal";
            badge = '<span class="badge text-bg-info">Info</span>';
            break;
        case imc >= 25 && imc < 29.9:
            calificacion = "Sobrepeso";
            badge = '<span class="badge text-bg-danger">Danger</span>';
            break;
        case imc >= 30:
            calificacion = "Obesidad";
            badge = '<span class="badge text-bg-danger">Danger</span>';
            break;
    }

    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-info" role="alert">
            <span class="badge text-bg-info">Info</span> Su peso ideal es: ${PesoIdeal.toFixed(2)} kg
        </div>
        <div class="alert alert-info" role="alert">
            ${badge} Su IMC es: ${imc.toFixed(2)} (${calificacion})
        </div>
    `;
});

