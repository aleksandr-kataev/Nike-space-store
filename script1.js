let productImage = document.getElementById('productImage');
let goldBlack = document.getElementById('goldBlack');
let blueWhite = document.getElementById('blueWhite');
let colour = '';

animationend = (id, func) => {
	id.addEventListener('animationend', func);
};

animationend(goldBlack, endFunctionProduct);
animationend(blueWhite, endFunctionProduct);
animationend(productImage, endFunctionProduct);

function onLoadFunc() {
	colour = 'black';
	productImage.classList.add('fadeInAnimation');
}

goldBlack.onclick = () => {
	colour = 'black';
};

endFunctionProduct = () => {
	productImage.classList.remove('fadeInAnimation');
};

//this animation works remove the class when it ends plus add animation to other elements
//https://stackoverflow.com/questions/11660710/css-transition-fade-in
