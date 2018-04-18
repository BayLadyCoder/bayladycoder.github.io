










function active() {

	var menu = document.getElementById("menu");


		if (menu.style.display == 'none') {
			menu.style.display = "block";
		} else {
			menu.style.display = "none";
		}

	var screenWidth = screen.availWidth;	
	console.log(screenWidth);
	if (screenWidth < 800) {
	var item1 = document.getElementById("item1").offsetHeight;
	var item2 = document.getElementById("item2").offsetHeight;
	var item3 = document.getElementById("item3").offsetHeight;
	var item4 = document.getElementById("item4").offsetHeight;
	var item5 = document.getElementById("item5").offsetHeight;

	var dropDownMenuHeight = (item1 + item2 + item3 + item4 + item5)

	var headerStart = document.getElementById("header");

	headerStart.style.marginTop = dropDownMenuHeight+"px";
	}
}







