'use strict'

function hideCat () {
	const cat = document.getElementById('cat');
	const x = parseInt(Math.random()*1000);
	const y = parseInt(Math.random()*600);
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
		state = 'hot'

	} else if (clickX - catXNumber < 275
		&& clickX - catXNumber > -200
		&& clickY - catYNumber < 275
		&& clickY - catYNumber > -200){
		state = 'warm'

	} else {
		state = 'cold'
	}
	printMessage(e.x, e.y, state);
});


// Print 'warm' or 'cold' on screen
function printMessage(x, y, state) {
	const message = document.createElement('span');

	if (state === 'hot') {
		message.textContent = 'hot';
		message.style.transform = `translate(${x - 110}px, ${y - 30}px)`;
	} else if (state == 'warm') {
		message.textContent = 'warm';
		message.style.transform = `translate(${x - 84}px, ${y - 30}px)`;
	} else {
		message.textContent = 'cold';
		message.style.transform = `translate(${x - 84}px, ${y - 30}px)`;
	}

	message.style.position = 'absolute';
	document.body.appendChild(message);
	setTimeout(() => {
		message.remove();
	}, 300);
}

function start() {
	const border = document.getElementById("border");
	border.style.display = "none";
}
