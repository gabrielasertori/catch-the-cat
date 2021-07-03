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
    const cat = document.getElementById('cat')

    const clickX = e.x;
    const catX = cat.style.transform;
    const catXNumber = parseInt(catX.slice(10,13))

    const clickY = e.y;
    const catY = cat.style.transform;
    const catYNumber = parseInt(catY.slice(17,20))

    
    if (clickX - catXNumber < 125 
        && clickX - catXNumber > -50 
        && clickY - catYNumber < 125 
        && clickY - catYNumber > -50) {
        console.log("Queimando!")

    } else if (clickX - catXNumber < 175 
        && clickX - catXNumber > -100 
        && clickY - catYNumber < 175 
        && clickY - catYNumber > -100){
        console.log("Quente!")

    } else if (clickX - catXNumber < 275 
        && clickX - catXNumber > -200 
        && clickY - catYNumber < 275 
        && clickY - catYNumber > -200){
        console.log("Morno")
        
    } else if (clickX - catXNumber < 575 
        && clickX - catXNumber > -500 
        && clickY - catYNumber < 575 
        && clickY - catYNumber > -500){
        console.log("Frio!")

    } else {
        console.log("Congelando")
    }
    

    if (click == cat) {
        cat.style.opacity = '1'
        console.log(click)
    }
})

function start() {
    const border = document.getElementById("border");
    border.style.display = "none";
}

//congelando: 500px
//frio: 500px a 200px
//morno: 200px a 100px
//quente: 100px a 50px
//queimando: 50px