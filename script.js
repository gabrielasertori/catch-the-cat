'use strict'


var intervalo;


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
        cronometerStop();
        let minute = document.querySelector('#minute').textContent;
        let second = document.querySelector('#second').textContent;
        let milisecond = document.querySelector('#milisecond').textContent;
        let message = document.querySelector('#result')

        message.innerHTML = `Muito bem, você achou o gato em ${minute}${second}${milisecond}!!!`;
        document.querySelector('.btnRestart').hidden = false;

        message.style.cssText = `
        transform: translate(-50%, -50%);
        transition: transform 2s;
        `
    }
    
    if (clickX - catXNumber < 125 
        && clickX - catXNumber > -50 
        && clickY - catYNumber < 125 
        && clickY - catYNumber > -50) {
        state = 'queimando'

    } else if (clickX - catXNumber < 175 
        && clickX - catXNumber > -100 
        && clickY - catYNumber < 175 
        && clickY - catYNumber > -100) {
        state = 'quente'

    } else if (clickX - catXNumber < 275 
        && clickX - catXNumber > -200 
        && clickY - catYNumber < 275 
        && clickY - catYNumber > -200){
        state = 'morno'
        
    } else if (clickX - catXNumber < 575 
        && clickX - catXNumber > -500 
        && clickY - catYNumber < 575 
        && clickY - catYNumber > -500){
        state = 'frio'

    } else {
        state = 'congelando'
    }
    

    printMessage(e.x, e.y, state);
});


// Imprime as mensagens 'Quente' ou 'Frio' no <body>
function printMessage(x, y, state) {
    const message = document.createElement('span');
    
    if (state === 'quente') {
        document.querySelector('body').style.cssText = `
        background-color: #FEA82F;
        transition: background-color .8s`
        document.querySelector(':root').style.cssText = `
        --termometer-height: 18rem;
        --termometer-background-color: rgba(252, 91, 11, 0.651);
        `
        // message.textContent = 'Quente';
        // message.style.transform = `translate(${x - 110}px, ${y - 10}px)`;
            } else if (state === 'queimando') {
        document.querySelector('body').style.cssText = `
        background-color: #FF6701;
        transition: background-color .8s`
        document.querySelector(':root').style.cssText = `
        --termometer-height: 24.2rem;
        --termometer-background-color: rgb(255, 85, 6);
        `
        // message.textContent = 'Queimando';
        // message.style.transform = `translate(${x - 110}px, ${y - 10}px)`;
    } else if (state === 'morno') {
        document.querySelector('body').style.cssText = `
        background-color: #FFC288;
        transition: background-color .8s`
        document.querySelector(':root').style.cssText = `
        --termometer-height: 13rem;
        --termometer-background-color: rgba(202, 149, 5, 0.76);
        `
        // message.textContent = 'Morno';
        // message.style.transform = `translate(${x - 110}px, ${y - 10}px)`;
    } else if (state === 'frio') {
        document.querySelector('body').style.cssText = `
        background-color: #77ACF1;
        transition: background-color .8s`
        document.querySelector(':root').style.cssText = `
        --termometer-height: 8rem;
        --termometer-background-color: rgba(110, 208, 238, 0.76);
        `

        // message.textContent = 'Frio';
        // message.style.transform = `translate(${x - 110}px, ${y - 10}px)`;
    }  else {
        document.querySelector('body').style.cssText = `
        background-color: #3EDBF0;
        transition: background-color .8s`
        document.querySelector(':root').style.cssText = `
        --termometer-height: 2rem;
        --termometer-background-color: rgb(62, 202, 245);
        `

        // message.textContent = 'Congelando';
        // message.style.transform = `translate(${x - 84}px, ${y - 10}px)`;
    }

  
    message.style.position = 'absolute';
    document.body.appendChild(message);

    // Remove o elemento <span> após 300ms
    setTimeout(() => {
        message.remove();
    }, 300);
}

function start() {
    const border = document.getElementById("border");
    border.style.display = "none";
    document.querySelector('.termometer').style.opacity= '1';
    cronometerStart ();
}

//congelando: 500px
//frio: 500px a 200px
//morno: 200px a 100px
//quente: 100px a 50px
//queimando: 50px




function cronometerStop() {
    window.clearInterval(intervalo);
}


function cronometerStart (){

    let milisecond = 1;
    let second = 0;
    let minute = 0;
    intervalo = window.setInterval(function() {
        if (milisecond === 60) { second++; milisecond = 0; }
        if (second === 60) { minute++; s = 0; second = 0; }
        if (minute < 10) document.getElementById("minute").innerHTML = "0" + minute + ":"; else document.getElementById("minute").innerHTML = minute + ":";
        if (milisecond < 10) document.getElementById("milisecond").innerHTML = "0" + milisecond; else document.getElementById("milisecond").innerHTML = milisecond;
        if (second < 10) document.getElementById("second").innerHTML = "0" + second + ":"; else document.getElementById("second").innerHTML = second + ":";		
        milisecond++;
    },16.666);
}


function restart(){
    location.reload();
}