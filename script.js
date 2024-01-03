const keys = document.querySelectorAll('li'),
	  results = document.querySelector('p'),
	  clear = document.querySelector('.clear');


for(let i = 0; i < keys.length; i++) {
	if(keys[i].innerHTML === '=') {
		keys[i].addEventListener('click', calculate);
	} else {
		keys[i].addEventListener('click', addToCurrentValue(i))
	}
}

function addToCurrentValue(i){
	return () => {
		if(keys[i].innerHTML === '/') {
			results.innerHTML += '/'
		} else if (keys[i].innerHTML === 'x') {
			results.innerHTML += '*'
		} else {
			results.innerHTML += keys[i].innerHTML;
		}
	}
}

function calculate(){
	return (results.innerHTML = eval(results.innerHTML))
}

clear.addEventListener('click', () => {
	results.innerHTML = '';
})