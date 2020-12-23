const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtnRef = document.querySelector('[data-action=start]');
const stopBtnRef = document.querySelector('[data-action=stop]');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const bgColorChenger = timer => {
    document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(1, colors.length)]}`;
};

startBtnRef.addEventListener('click', () => {
    startBtnRef.disabled = true;
    const intervalId = setInterval(bgColorChenger, 1000);

    stopBtnRef.addEventListener('click', () => {
        startBtnRef.disabled = false;
        clearInterval(intervalId);
    });
});