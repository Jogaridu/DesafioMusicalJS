"use strict"
const pintarTecla = (tecla) => {
    const todasTeclas = document.querySelectorAll(".tecla");
    todasTeclas.forEach(element => {
        element.style.background = "white"
    });
    document.querySelector(`.${tecla}`).style.background = "gray";
}

const criarTeclas = () => {

    let teclaHtml = '';

    sons().sons.forEach (elemento => {
        teclaHtml += `
        <div class="tecla ${elemento.key}">${elemento.key}</div>

        <audio src="sounds/${elemento.sound}" id="${elemento.key}"></audio>`
    })
    
    document.getElementById("teclasPiano").innerHTML = teclaHtml;
}

const somEscolhido = (key) => {
    
    sons().sons.forEach(elemento => {
        if (elemento.key === key.toUpperCase()) {
            document.getElementById(`${elemento.key}`).play();
            pintarTecla(elemento.key);
        }
    }); 
}

criarTeclas();

document.querySelectorAll(".tecla").forEach(tecla => {
    tecla.addEventListener("click", (evento) => somEscolhido(evento.target.innerHTML));
});

document.body.addEventListener("keydown", (evento) => somEscolhido(evento.key));

