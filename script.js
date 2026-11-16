
// Seleciona os elementos que terão animação
const elementos = document.querySelectorAll(".secao, .projeto");

// Configura a animação ao aparecer na tela
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.15
});

// Aplica a observação em cada elemento
elementos.forEach((elemento) => {
    elemento.classList.add("animacao");
    observador.observe(elemento);
});
