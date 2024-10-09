document.addEventListener('DOMContentLoaded', function(event) {
    let circles = document.querySelectorAll('.circle');
    circles.forEach(function(circle) {
        let degree = 0;
        // Изменяем выбор элемента на circle.querySelector('h2')
        var targetDegree = parseInt(circle.querySelector('.number').getAttribute('data-degree'));
        console.log(targetDegree); // Проверка значения
        let color = circle.querySelector('.number').getAttribute('data-color');
        let number = circle.querySelector('.number');

        var interval = setInterval(() => {
            degree += 1;
            if(degree > targetDegree) {
                clearInterval(interval);
                return;
            }
            // Используем degree для создания градиента
            circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + `<span>%</span>`;
            number.style.color = color;
        }, 50);
    });
});