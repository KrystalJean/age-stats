// Fill bars according to percent
const percentages = document.querySelectorAll('.percentage');
const barFills = document.querySelectorAll('.bar-fill');
const ageTotalSessions = document.getElementById('age-total-sessions');
let totalPercent = 0;

for (let i = 0; i < percentages.length; i++) {
    barFills[i].style.height = percentages[i].innerHTML;
    totalPercent = totalPercent + +percentages[i].innerHTML.slice(0, -1);
}

ageTotalSessions.innerHTML = `${totalPercent}% of total sessions`;


// Theme Changer Menu
const xMark = document.getElementById('xMark');
const menu = document.getElementById('menu');
const dots = document.querySelectorAll('.dot');
const line = document.getElementById('line');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const body = document.body;

xMark.addEventListener('click', () => {
    dots.forEach(dot => {
        dot.classList.add('hide');
    })
    xMark.classList.add('hide');
    menu.classList.remove('hide');

    line.classList.add('hide');
    light.classList.add('hide');
    dark.classList.add('hide');
})

menu.addEventListener('click', () => {
    dots.forEach(dot => {
        dot.classList.remove('hide');
    })
    xMark.classList.remove('hide');
    menu.classList.add('hide');

    line.classList.remove('hide');
    light.classList.remove('hide');
    dark.classList.remove('hide');
})

light.addEventListener('click', () => {
    light.classList.add('inactive');
    dark.classList.remove('inactive');

    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
})

dark.addEventListener('click', () => {
    dark.classList.add('inactive');
    light.classList.remove('inactive');

    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
})

dots.forEach(dot => {
    dot.addEventListener('click', () => {

        if (dot === dots[0]) {
            barFills.forEach(barFill => {
                barFill.className = 'bar-fill';
                barFill.classList.add('purple-theme');
            })
        } else if (dot === dots[1]) {
            barFills.forEach(barFill => {
                barFill.className = 'bar-fill';
                barFill.classList.add('blue-theme');
            })
        } else if (dot === dots[2]) {
            barFills.forEach(barFill => {
                barFill.className = 'bar-fill';
                barFill.classList.add('green-theme');
            })
        } else if (dot === dots[3]) {
            barFills.forEach(barFill => {
                barFill.className = 'bar-fill';
                barFill.classList.add('yellow-theme');
            })
        } else if (dot === dots[4]) {
            barFills.forEach(barFill => {
                barFill.className = 'bar-fill';
                barFill.classList.add('orange-theme');
            })
        } else if (dot === dots[5]) {
            barFills.forEach(barFill => {
                barFill.className = 'bar-fill';
                barFill.classList.add('red-theme');
            })
        } else {
            console.log('Error');
        };

    });
})