'use strict'

function hideCat () {
	const cat = document.getElementById('cat');
	const x = parseInt(Math.random()*1000);
	const y = parseInt(Math.random()*600);
	cat.style.transform = `translate(${x}px, ${y}px)`
}
hideCat();

window.addEventListener('click', (e) => {
	const click = e.target;
	const cat = document.getElementById('cat');
	let state = '';
	let locale = catLocale(e, cat);

	if (click == cat) {
		cat.style.opacity = '1';
		return;
	}
	if (locale[0] < 175 && locale[0] > -100
		&& locale[1] < 175 && locale[1] > -100) {
		state = 'hot';
	} else if (locale[0] < 275 && locale[0] > -200
		&& locale[1] < 275 && locale[1] > -200){
		state = 'warm';
	} else {
		state = 'cold';
	}
	printMessage(e.x, e.y, state);
});

// Return the diff between click and cat location
function catLocale(event, cat) {
	const clickX = event.x;
	const catX = cat.style.transform;
	const catXNumber = parseInt(catX.slice(10,13));

	const clickY = event.y;
	const catY = cat.style.transform;
	const catYNumber = parseInt(catY.slice(17,20));

	return [(clickX - catXNumber), (clickY - catYNumber)];
}

// Print 'hot', 'warm' or 'cold' on screen
function printMessage(x, y, state) {
	const message = document.createElement('span');

	if (state === 'hot') {
		message.textContent = 'hot';
	} else if (state == 'warm') {
		message.textContent = 'warm';
	} else {
		message.textContent = 'cold';
	}
	message.style.transform = `translate(${x - 84}px, ${y - 30}px)`;
	message.style.position = 'absolute';
	document.body.appendChild(message);
	setTimeout(() => {
		message.remove();
	}, 400);
}

function start() {
	const border = document.getElementById("border");
	border.style.display = "none";
}
