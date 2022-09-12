const input1 = document.querySelector('#input1');
const iconborder1 = document.querySelector('#iconborder1');
const icon1 = document.querySelector('#icon1');

input1.addEventListener('focus', (event) => {
    iconborder1.style.border = '2px solid #5f30e2';
    iconborder1.style.borderRight = 'none';
    icon1.style.color = '#5f30e2';
});

input1.addEventListener('blur', (event) => {
    iconborder1.style.border = '';
    iconborder1.style.borderRight = 'none';
    icon1.style.color = '';
});

const input2 = document.querySelector('#input2');
const iconborder2 = document.querySelector('#iconborder2');
const icon2 = document.querySelector('#icon2');

input2.addEventListener('focus', (event) => {
    iconborder2.style.border = '2px solid #5f30e2';
    iconborder2.style.borderRight = 'none';
    icon2.style.color = '#5f30e2';
});

input2.addEventListener('blur', (event) => {
    iconborder2.style.border = '';
    iconborder2.style.borderRight = 'none';
    icon2.style.color = '';
});

const input3 = document.querySelector('#input3');
const iconborder3 = document.querySelector('#iconborder3');
const icon3 = document.querySelector('#icon3');

input3.addEventListener('focus', (event) => {
    iconborder3.style.border = '2px solid #5f30e2';
    iconborder3.style.borderRight = 'none';
    icon3.style.color = '#5f30e2';
});

input3.addEventListener('blur', (event) => {
    iconborder3.style.border = '';
    iconborder3.style.borderRight = 'none';
    icon3.style.color = '';
});
