/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('привет')
})
// Вставка нового элемента
var link = document.createElement('link');
link.rel = 'icon';
link.href = '/n1.ico.ico';
document.head.appendChild(link);