let wheel = document.querySelector('.wheel');
let inner = document.querySelector('.inner');
let spinBtn = document.querySelector('.spinBtn');

let _value1 = Math.ceil(Math.random() * -3600);
let _value2 = Math.ceil(Math.random() * 3600);

spinBtn.addEventListener('click', () => {
    wheel.style.transform = `rotate(${_value1}deg)`;
    inner.style.transform = `rotate(${_value2}deg)`;
     _value1 += Math.ceil(Math.random() * -3600);
    _value2 += Math.ceil(Math.random() * 3600);
});