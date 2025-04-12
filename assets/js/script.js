const botones = document.querySelectorAll("button[data-valor]");

let operacion = "";
const resultado = document.getElementById("resultado");


botones.forEach(boton => {
    boton.addEventListener("click", ()=> {
        const valor = boton.dataset.valor;

        manejarClick(valor)
    })
})

function manejarClick(valor) {
    if(valor === "AC") {
        operacion = "";
        resultado.innerText= "0";
        return;
    }

    if(valor === "del"){
        operacion = operacion.slice(0, -1);
        resultado.innerText = operacion || "0";
        return;
    }
    if (valor === "="){
        try {
            const resultadoCalculado = calcularOperacion(operacion)
            operacion = resultadoCalculado.toString()
            resultado.innerText = operacion
        }
        catch{
            resultado.innerText = "Error";
            ;
        }
        return;
    }


    operacion += valor
    resultado.innerText = operacion;
}


function calcularOperacion (operacion) {
    let resultado;
    
    try{
        resultado = new Function('return ' + operacion)();
    }
    catch (error){
        console.log("Error en la operación")
        return "Error"
    }
    return resultado;
}