let download = document.querySelector('.download');
let container = document.getElementById('container');
let number = document.getElementById('number');

download.addEventListener('click', (e) => {
    download.classList.add('start');
    let degree = 0;
    let interval = setInterval(() => {
        degree += 1;
        if (degree > 100) {
            clearInterval(interval);
            number.innerHTML = `<i class="fa-solid fa-check"></i><br><small>100% Done</small>`;
            container.classList.add('done');
            return;
        }
        container.style.background = `conic-gradient(#f5036c ${degree}%, #333 ${degree}%)`;
        number.innerHTML = degree + '<span>%</span>';
    }, 100);
});