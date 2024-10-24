let btn = document.getElementById('btn');
let inputs = document.querySelectorAll("input");
let errorMessage = document.getElementById('error-message');

// Кнопка регистрации
btn.onclick = () => {
	let password = document.getElementById('password');
	let email = document.getElementById('email').value.trim();
	
	// Сброс стилей
	password.style.border = '';
	errorMessage.style.display = 'none';
	errorMessage.textContent = '';

	// Проверка на заполнение полей
	let allFilled = Array.from(inputs).every(input => input.value.trim() !== "");

	if (!allFilled) {
		errorMessage.textContent = 'Пожалуйста, заполните все поля.';
    	errorMessage.style.display = 'block';
		return;
	 }

	//  Проверка на корректность Email
	 const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
	 if (!emailPattern.test(email)) {
		errorMessage.textContent = 'Некорректный email адрес.';
		errorMessage.style.display = 'block';
		return;
	 } else{
		location.replace("/Вход в личный кабинет/cabinet.html");
	}
}