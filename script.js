function myFunction() {
	alert('hello');
}

//https://stackoverflow.com/questions/24309789/how-to-slide-in-divs-from-off-screen-into-absolute-layout-using-css-transitions

let colour = '';
let goldBlack = document.getElementById('goldBlack');
let blueWhite = document.getElementById('blueWhite');
goldBlack.addEventListener('animationend', endFunctionSelection);
blueWhite.addEventListener('animationend', endFunctionSelection);
document
	.getElementById('productImage')
	.addEventListener('animationend', endFunctionProduct);
document
	.getElementById('backgroundCircle')
	.addEventListener('animationend', endBackground);

function onLoadFunc() {
	goldBlack.disabled = 'true';
	colour = 'black';
	document
		.getElementById('backgroundCircle')
		.classList.add('backgroundAnimation');
	document.getElementById('productImage').classList.add('fadeInAnimation');

	//animate product + background
}

blueWhite.onclick = () => {
	colour = 'white';
	document.getElementById('productImage').style.opacity = 0;
	document.getElementById('productImage').style.backgroundImage =
		"url('./mobile//whiteProduct.svg')";
	document.getElementById('productImage').classList.add('fadeInAnimation');
	goldBlack.style.boxShadow = 'none';
	blueWhite.disabled = true;
	goldBlack.disabled = true;
	console.log('blue has been pressed');
	blueWhite.classList.add('colourSelectorsAnimation');
};

goldBlack.onclick = () => {
	colour = 'black';
	document.getElementById('productImage').style.opacity = 0;
	document.getElementById('productImage').style.backgroundImage =
		"url('./mobile//goldProduct.svg')";
	document.getElementById('productImage').classList.add('fadeInAnimation');
	blueWhite.style.boxShadow = 'none';
	goldBlack.disabled = true;
	blueWhite.disabled = true;
	console.log('gold has been pressed');
	goldBlack.classList.add('colourSelectorsAnimation');
};

function endFunctionSelection() {
	if (colour == 'black') {
		goldBlack.style.boxShadow = '0 0 0 1px white';
		blueWhite.classList.remove('colourSelectorsAnimation');
		blueWhite.disabled = false;
	} else {
		blueWhite.style.boxShadow = '0 0 0 1px white';
		goldBlack.classList.remove('colourSelectorsAnimation');
		goldBlack.disabled = false;
	}
}

function endFunctionProduct() {
	document.getElementById('productImage').classList.remove('fadeInAnimation');
	document.getElementById('productImage').style.opacity = 1;
}

function endBackground() {
	document
		.getElementById('backgroundCircle')
		.classList.remove('backgroundAnimation');
	document.getElementById('backgroundCircle').style.position = 'static';
	document.getElementById('backgroundCircle').style.left = '0em';
	document.getElementById('backgroundCircle').style.backgroundPosition =
		'center center';
	document.getElementById('backgroundCircle').style.backgroundRepeat =
		'no-repeat';
}
