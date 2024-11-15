document.addEventListener("DOMContentLoaded", function () {
    // Lista de frases motivacionales
    const quotes = [
        "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello. - Charles R. Swindoll",
        "No hay atajos para llegar a los lugares que realmente merecen la pena. - Beverly Sills",
        "El éxito no es el final, el fracaso no es fatal: lo que cuenta es el valor para continuar. - Winston Churchill",
        "Nuestra mayor debilidad radica en rendirnos. La forma más segura de tener éxito es intentarlo una vez más. - Thomas Edison",
        "Cree en ti mismo y en lo que eres. Sé consciente de que hay algo dentro de ti que es más grande que cualquier obstáculo. - Christian D. Larson",
        "El único límite para nuestra realización de mañana son nuestras dudas de hoy. - Franklin D. Roosevelt",
        "El futuro pertenece a quienes creen en la belleza de sus sueños. - Eleanor Roosevelt"
    ];

    const quoteText = document.querySelector(".quote");
    const generateButton = document.querySelector("#generate-quote");

    if (generateButton && quoteText) {
        generateButton.addEventListener("click", () => {
            // Seleccionar una frase aleatoria y actualizar el contenido
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const newQuote = quotes[randomIndex];
            quoteText.textContent = newQuote;
        });
    } else {
        console.error("Error: No se pudo encontrar el botón o el área de texto para la frase.");
    }

    // Manejo de los botones de reacción
    const reactionButtons = document.querySelectorAll(".reaction-button");
    const reactionCount = document.querySelector(".reaction-count");

    if (reactionCount) {
        reactionButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                // Cambiar el color del botón para indicar que se hizo clic
                button.style.backgroundColor = "#ddd";

                // Actualizar el contador de reacciones
                let currentCount = parseInt(reactionCount.innerText.split(":")[1].trim()) || 0;
                reactionCount.innerText = `Reacciones: ${currentCount + 1}`;
            });
        });
    } else {
        console.error("Error: No se encontró el contador de reacciones.");
    }
});
