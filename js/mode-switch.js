var menu = 0;

function toggle_menu() {
	if (menu == 0) {
		document.getElementById("dropdown").style.display = "block";
	} else {
		document.getElementById("dropdown").style.display = "none";
	}
	menu = 1 - menu;
}

function load_light() {
	document.getElementsByTagName('link')[0].href = "/css/light.css";
	document.cookie = "light";
}

function load_dark() {
	document.getElementsByTagName('link')[0].href = "/css/dark.css";
	document.cookie = "dark";
}

if (document.cookie == "light") { load_light(); }
