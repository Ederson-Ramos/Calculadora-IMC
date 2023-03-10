document.querySelector("form").addEventListener("submit" , function(event) {
    event.preventDefault();
})

function botao() {
    var peso = document.getElementById("numeroPeso").value;
    console.log(peso);

    var altura = document.getElementById("numeroAltura").value;
    console.log(altura);

    var converterPeso = parseInt(peso);

    var converterAltura = parseFloat(altura);

    var calculo = converterPeso / (converterAltura * converterAltura);
    console.log(calculo)

    const abaixoPeso = 18.5

    const pesoNormal = 24.9

    const sobrePeso1 = 25

    const sobrePeso2 = 29.9

    const obesidade = 30

    if (calculo < abaixoPeso) {
        document.getElementById("resultado")
        .innerHTML = "Você está: Abaixo do peso ideal!";
    }

    if (calculo == pesoNormal || calculo >= abaixoPeso) {
        document.getElementById("resultado")
        .innerHTML = "Você está: Com o peso ideal!";
    }

    if (calculo == sobrePeso2 || calculo >= sobrePeso1) {
        document.getElementById("resultado")
        .innerHTML = "Você está: Acima do peso ideal!";
    }

    if (calculo >= obesidade) {
        document.getElementById("resultado")
        .innerHTML = "Você está: Obeso!";
    }
}
