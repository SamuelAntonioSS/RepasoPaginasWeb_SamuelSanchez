document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".btn-respuesta");

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            const respuesta = this.nextElementSibling;
            if (respuesta.style.display === "none" || respuesta.style.display === "") {
                respuesta.style.display = "block";
            } else {
                respuesta.style.display = "none";
            }
        });
    });
});

const botonModo = document.getElementById('modo-toggle');
const body = document.body;


if (localStorage.getItem('modoOscuro') === 'true') {
    body.classList.add('modo-oscuro');
    botonModo.textContent = 'Cambiar a modo claro';
}


botonModo.addEventListener('click', function() {
    body.classList.toggle('modo-oscuro');
    
   
    if (body.classList.contains('modo-oscuro')) {
        botonModo.textContent = 'Cambiar a modo claro';
        localStorage.setItem('modoOscuro', 'true');
    } else {
        botonModo.textContent = 'Cambiar a modo oscuro';
        localStorage.setItem('modoOscuro', 'false');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const flechaArriba = document.getElementById("flechaArriba");

    // Muestra la flecha cuando el usuario se desplace hacia abajo
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            flechaArriba.style.display = "block"; // Muestra la flecha
        } else {
            flechaArriba.style.display = "none"; // Oculta la flecha
        }
    };

    // Cuando el usuario hace clic en la flecha, vuelve al inicio
    flechaArriba.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});