// # Dom Manipulation.
// ## Ejercicio 1. Contador/temporizador.
// Crea un programa utilizando HTML, CSS y JavaScript que permita al usuario acceder a un contador sencillo (ascendente y descendente) sin límite. Así mismo, se muestre un temporizador que permita al usuario establecer un tiempo (en segundos) y que haga una cuenta regresiva por cada segundo hasta llegar a 0 y arroje una alerta de tiempo finalizado.
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const counterEl = document.querySelector('.counter');
let count = 0;

incrementBtn.addEventListener('click', () => {
	count++;
	counterEl.innerText = count;
});

decrementBtn.addEventListener('click', () => {
	count--;
	counterEl.innerText = count;
});

const startBtn = document.getElementById('start-btn');
const timerEl = document.querySelector('.timer');
let timeLeft = 0;
let timerId;

startBtn.addEventListener('click', () => {
	timeLeft = parseInt(document.getElementById('time-input').value);
	if (isNaN(timeLeft)) {
		alert('Ingrese un número para iniciar.');
		return;
	}
	timerId = setInterval(() => {
		timeLeft--;
		timerEl.innerText = timeLeft;
		if (timeLeft === 0) {
			clearInterval(timerId);
			alert('¡Tiempo finalizado!');
		}
	}, 1000);
});

// ## Ejercicio 2. Calculadora sencilla de dos números.
// Crea un programa utilizando HTML, CSS y JavaScript que solicite dos números al usuario y permita suma, restar, multiplicar o dividir dichos números y muestre el resultado.
// Una vez que tengas diseñados los dos programas, alójalos de manera estática en GitHub Pages y comparte el enlace de dicha página.
// **Fecha límite:** *18 de junio, 23:59 hrs.*

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');
const resultEl = document.querySelector('.result');

addBtn.addEventListener('click', () => {
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const result = num1 + num2;
	resultEl.innerText = `Resultado: ${result}`;
});

subtractBtn.addEventListener('click', () => {
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const result = num1 - num2;
	resultEl.innerText = `Resultado: ${result}`;
});

multiplyBtn.addEventListener('click', () => {
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const result = num1 * num2;
	resultEl.innerText = `Resultado: ${result}`;
});

divideBtn.addEventListener('click', () => {
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	if (num2 === 0) {
		resultEl.innerText = 'Error: no se puede dividir por cero';
		return;
	}
	const result = num1 / num2;
	resultEl.innerText = `Resultado: ${result}`;
});