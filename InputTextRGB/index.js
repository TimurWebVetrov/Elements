const label = document.querySelector('label');

label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i*30}ms; filter: hue-rotate(${i*10}deg">${letters}</span>`).join('');