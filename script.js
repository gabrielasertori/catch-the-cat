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

    
    if (clickX - catXNumber < 175 
        && clickX - catXNumber > -100 
        && clickY - catYNumber < 175 
        && clickY - catYNumber > -100) {
        console.log("Quente!")
    } else {
        console.log("Frio!")
    }

    if (click == cat) {
        cat.style.opacity = '1'
        console.log(click)
    }
})

