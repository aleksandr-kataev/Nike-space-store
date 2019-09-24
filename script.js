classRemove = (id, classToRemove) => {
	id.classList.remove(classToRemove);
};

classAdd = (id, classToAdd) => {
	id.classList.add(classToAdd);
};

endFunctionProduct = () => {
	productImage.classList.remove('fadeInAnimation');
};

let colour = 'black';
let size = 7;
classAdd(goldBlack, 'selectAnimation');
document.getElementById('goldBlack').disabled = true;
classAdd(size7, 'selectSizeAnimation');
document.getElementById('size7').disabled = true;

let mq = window.matchMedia('(max-width: 570px)');
if (mq.matches) {
	const sizePicker = document.getElementById('cntsizePicker');
	const productImage = document.getElementById('productImage');
	const goldBlack = document.getElementById('goldBlack');
	const blueWhite = document.getElementById('blueWhite');
	colourSelect = () => {
		if (colour == 'black') {
			colour = 'white';
			classAdd(blueWhite, 'selectAnimation');
			classRemove(goldBlack, 'selectAnimation');
			goldBlack.disabled = true;
			blueWhite.disabled = true;
			productImage.src = './mobile//whiteProduct.svg';
			classAdd(productImage, 'fadeInAnimation');
		} else {
			colour = 'black';
			classAdd(goldBlack, 'selectAnimation');
			classRemove(blueWhite, 'selectAnimation');
			goldBlack.disabled = true;
			blueWhite.disabled = true;
			productImage.src = './mobile//goldProduct.svg';
			classAdd(productImage, 'fadeInAnimation');
		}
	};

	endSelectFunc = () => {
		if (colour == 'black') {
			blueWhite.disabled = false;
		} else {
			goldBlack.disabled = false;
		}
	};

	disSizeBnt = () => {
		document.querySelectorAll('button.sizeBnt').forEach((elem) => {
			elem.disabled = true;
		});
	};

	sizePicker.addEventListener('animationend', function(e) {
		document.querySelectorAll('button.sizeBnt').forEach((elem) => {
			elem.disabled = false;
		});
		document.getElementById(e.target.id).style.disabled = true;
	});

	sizePicker.addEventListener('click', function(e) {
		document.querySelectorAll('button.sizeBnt').forEach((elem) => {
			classRemove(elem, 'selectSizeAnimation');
		});

		//1.clean up the code !js!
		//2.fix the animation for size~
		//3.add sidebar
		//4.adaptive design
		//5.add to the cart

		// In index2.html
		//if (window.innerWidth < 960) {
		//	window.location = 'index1.html';
		//}

		// In index1.html
		//if (window.innerWidth >= 960) {
		//	window.location = 'index2.html';
		//}
		const targetID = e.target.id;
		switch (targetID) {
			case 'size7':
				disSizeBnt();
				size = 7;
				classAdd(document.getElementById('size7'), 'selectSizeAnimation');
				break;
			case 'size8':
				size = 8;
				classAdd(document.getElementById('size8'), 'selectSizeAnimation');
				disSizeBnt();
				break;
			case 'size9':
				size = 9;
				classAdd(document.getElementById('size9'), 'selectSizeAnimation');
				disSizeBnt();
				break;
			case 'size10':
				size = 10;
				classAdd(document.getElementById('size10'), 'selectSizeAnimation');
				disSizeBnt();
				break;
			case 'size11':
				size = 11;
				classAdd(document.getElementById('size11'), 'selectSizeAnimation');
				disSizeBnt();
				break;
		}
	});

	//[...document.querySelectorAll('.sizeBnt')].forEach(function(item) {
	//	item.addEventListener('click', function() {
	//		console.log(this.innerHTML);
	//	});
	//});
	//https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
	//sizeSelect gets called for every element so the animation applies to all of the them onLoad
	goldBlack.addEventListener('animationend', endSelectFunc);
	blueWhite.addEventListener('animationend', endSelectFunc);
	productImage.addEventListener('animationend', () => {
		classRemove(productImage, 'fadeInAnimation');
	});
	goldBlack.addEventListener('click', colourSelect);
	blueWhite.addEventListener('click', colourSelect);
} else {
	// window width is greater than 570px
}

desktop = () => {};
