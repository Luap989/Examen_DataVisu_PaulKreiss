document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let counter = 0;

    document.getElementById('increase').onclick = () => {
        counter++;
        counterElement.textContent = counter;
    };

    document.getElementById('decrease').onclick = () => {
        counter--;
        counterElement.textContent = counter;
    };

    document.getElementById('reset').onclick = () => {
        counter = 0;
        counterElement.textContent = counter;
    };
});
