
// ---------------- Navigation Bar: Responsive design when device-width below 800px ----------------

var responsiveMenu = document.getElementById("responsiveMenu");
var navTop = document.getElementById("navTopResponsive");

function show() {
	responsiveMenu.style.display = "flex";
	navTop.style.display = "none";		
}

function hide() {
	responsiveMenu.style.display = "none";
	navTop.style.display = "flex";	
}



// ------------------ Skills Section: Animation starts when scroll down ---------------------------

const skillsSection = document.getElementById("skills");
const elems100 = document.getElementsByClassName('skills100');
const elems80 = document.getElementsByClassName('skills80');
const skillJava = document.getElementById('skill-java');
const skillReact = document.getElementById('skill-react');

function debounce(func, wait = 20, immediate = true) {

	var timeout;

	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function skillsChartRun() {

			// Half way through skills section
			var chartsRunAt = (window.scrollY + window.innerHeight) - 100;
			
			//Bottom of the skills section
			const sectionBottom = skillsSection.offsetTop + skillsSection.offsetHeight;

			const isHalfShown = chartsRunAt > skillsSection.offsetTop;
			const isNotScrollPast = window.scrollY < sectionBottom;

			if (isHalfShown && isNotScrollPast) {
				
				for (var i=0 ; i< elems100.length ; i++) {
					elems100[i].style.animation = "skillsRunTo100 5s 1";
				}

				for (var i=0 ; i< elems80.length ; i++) {
					elems80[i].style.animation = "skillsRunTo80 5s 1";
				}

				skillJava.style.animation = "skillsRunTo60 5s 1";
				skillReact.style.animation = "skillsRunTo20 5s 1";
			}
		}
		

		window.addEventListener('scroll', debounce(skillsChartRun));

