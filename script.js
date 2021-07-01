'use strict'

function hideCat () {
    const cat = document.getElementById('cat');
    
    const x = parseInt(Math.random()*1000);
    const y = parseInt(Math.random()*1000);
    console.log(x)
    console.log(y)

    cat.style.transform = `translate(${x}px, ${y}px)`
    
}

hideCat()


window.addEventListener('click', (e) => {
    const click = e.target;
    const cat = document.getElementById('cat')

    if (click == cat) {
        cat.style.opacity = '1'
        console.log(click)
    }
})
