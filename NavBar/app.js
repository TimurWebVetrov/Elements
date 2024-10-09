// Menu №2
let tb2_List = document.querySelectorAll('.tab-2_item');

function  tb2_moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

tb2_List.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        tb2_moveIndicator(e.target);
    })
})

function  tb2_activeLink() {
    tb2_List.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

tb2_List.forEach((item) => item.addEventListener('mouseover',  tb2_activeLink));


// Menu №3
let tb3_marker = document.querySelector('#tab-3_indicator');
let tb3_nav = document.querySelector('.tab-3');
let tb3_item = document.querySelectorAll('.tab-3 .tab-3_link');

tb3_nav.onclick = function() {
    tb3_marker.classList.toggle('change');
}

function tb3_indicator(e) {
    tb3_marker.style.left = e.offsetLeft + 'px';
    tb3_marker.style.width = e.offsetWidth + 'px';
    tb3_marker.style.display = 'block';
    tb3_marker.style.filter = 'hue-rotate('+ Math.random() * 360 + 'deg)';
}

tb3_item.forEach(link => {
    link.addEventListener('click', (e) => {
        tb3_indicator(e.target); 
    })
})

function tb3_addActiveClass() {
    tb3_item.forEach((i) => i.classList.remove('active'));
    this.classList.add('active');
}

tb3_item.forEach((i) => {
    i.addEventListener('click', tb3_addActiveClass);
})


// Menu №4
let tb4_list = document.querySelectorAll('.tab-4_item');

for (let i = 0; i < tb4_list.length; i++) {
    tb4_list[i].onmouseover = function() {
        let j = 0;
        while (j < tb4_list.length) {
            tb4_list[j++].className = 'tab-4_item';
        }
        tb4_list[i].className = 'tab-4_item active';
    }
}

tb4_list.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        let bg = document.querySelector('.box-4');
        let color = e.target.getAttribute('data-color');
        bg.style.backgroundColor = color;
    })
})


// Menu №5
let tb5_marker = document.querySelector('#tab-5_marker');
let tb5_list = document.querySelectorAll('.tab-5 .tab-5_item');

function tb5_moveIndicator(e) {
    tb5_marker.style.left = e.offsetLeft + 'px';
    tb5_marker.style.width = e.offsetWidth + 'px';
}

tb5_list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        tb5_moveIndicator(e.target);
    })
})

function tb5_activeLink() {
    tb5_list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

tb5_list.forEach((item) => item.addEventListener('mouseover', tb5_activeLink));


// Menu №9
let tb9_marker = document.querySelector('#tab-9_marker');
let tb9_item = document.querySelectorAll('.tab-9 .tab-9_link');

function tb9_indicator(e) {
    tb9_marker.style.left = e.offsetLeft + 'px';
    tb9_marker.style.width = e.offsetWidth + 'px';
}

tb9_item.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        tb9_indicator(e.target)
    })
})


// Menu №10
const tb10_list = document.querySelectorAll('.tab-10_item');

function tb10_activeLink(e) {
    e.preventDefault()
    tb10_list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    }) 
}

tb10_list.forEach((item) => { 
    item.addEventListener('click', tb10_activeLink);
})


// Menu №11
const tb11_list = document.querySelectorAll('.tab-11_item');

function tb11_activeLink(e) {
    e.preventDefault()
    tb11_list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    }) 
}

tb11_list.forEach((item) => { 
    item.addEventListener('click', tb11_activeLink);
})


// Menu №12
const tb12_list = document.querySelectorAll('.tab-12 .tab-12_item');

function tb12_activeLink(e) {
    e.preventDefault()
    tb12_list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

tb12_list.forEach((item) => {
    item.addEventListener('click', tb12_activeLink);
})


// Menu №13
const tb13_marker = document.querySelector('#tab-13_marker');
const tb13_list = document.querySelectorAll('.tab-13 .tab-13_item');

function tb13_moveIndicator(e) {
    tb13_marker.style.left = e.offsetLeft + 'px';
    tb13_marker.style.width = e.offsetWidth + 'px';
}

tb13_list.forEach(link => {
    link.addEventListener('click', (e) => {
        tb13_moveIndicator(e.target);
        console.log(e.target)
    })
})

function tb13_activeLink(e) {
    e.preventDefault()
    tb13_list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

tb13_list.forEach((item) => {
    item.addEventListener('click', tb13_activeLink);
})


// Menu №16
const tb16_list = document.querySelectorAll('.tab-16_item');

function tb16_activeLink(e) {
    e.preventDefault()
    tb16_list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

tb16_list.forEach((item) => item.addEventListener('click', tb16_activeLink));

// Menu №17
let tb17_nav = document.querySelector('.tab-17');
document.querySelector('.tab-17_toggle').onclick = function() {
    this.classList.toggle('active');
    tb17_nav.classList.toggle('active');
}

// Menu №18
const bt18_menuToggle = document.querySelector('.tab-18_menuToggle');
const bt18_nav = document.querySelector('.tab-18');
const bt18_list = document.querySelectorAll('.tab-18_item');

bt18_menuToggle.onclick = function() {
    bt18_nav.classList.toggle('open');
}

function bt18_activeLink(e) {
    e.preventDefault()
    bt18_list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

bt18_list.forEach((item) => item.addEventListener('click', bt18_activeLink))