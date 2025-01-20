document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!");
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector("main"); // Alvo: área principal do texto
    const regex = /\b([1-9]|[1-9][0-9]|100)\b/g; // Regex para números de 1 a 100

    if (container) {
        container.innerHTML = container.innerHTML.replace(regex, function(match) {
            return `<span class="superscript">${match}</span>`;
        });
    }
});
