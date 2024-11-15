const quotes = [
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "No importa lo lento que avances, siempre y cuando no te detengas.",
    "Cree en ti mismo y todo será posible.",
    "Cada día es una nueva oportunidad para ser mejor.",
    "Los sueños no funcionan a menos que tú lo hagas.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "La vida es un 10% lo que te ocurre y un 90% cómo reaccionas."
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('generate-quote');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});