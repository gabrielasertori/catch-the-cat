'use strict'

function hideCat () {
    const cat = document.getElementById('cat');
    const x = parseInt(Math.random()*1000);
    const y = parseInt(Math.random()*600);
    /* console.log(x)
    console.log(y) */

    cat.style.transform = `translate(${x}px, ${y}px)`
}
hideCat()


window.addEventListener('click', (e) => {
    const click = e.target;
    const cat = document.getElementById('cat');
    let state = '';

    const clickX = e.x;
    const catX = cat.style.transform;
    const catXNumber = parseInt(catX.slice(10,13));

    const clickY = e.y;
    const catY = cat.style.transform;
    const catYNumber = parseInt(catY.slice(17,20));

    if (click == cat) {
        cat.style.opacity = '1';
        return;
    }
    
    if (clickX - catXNumber < 175 
        && clickX - catXNumber > -100 
        && clickY - catYNumber < 175 
        && clickY - catYNumber > -100) {
        state = 'quente';
    } else {
        state = 'frio';
    }

    printMessage(e.x, e.y, state);
});


// Imprime as mensagens 'Quente' ou 'Frio' no <body>
function printMessage(x, y, state) {
    const message = document.createElement('span');
    
    if (state === 'quente') {
        message.textContent = 'Quente';
        message.style.transform = `translate(${x - 110}px, ${y - 10}px)`;
    } else {
        message.textContent = 'Frio';
        message.style.transform = `translate(${x - 84}px, ${y - 10}px)`;
    }

    message.style.position = 'absolute';
    document.body.appendChild(message);

    // Remove o elemento <span> após 300ms
    setTimeout(() => {
        message.remove();
    }, 300);
}