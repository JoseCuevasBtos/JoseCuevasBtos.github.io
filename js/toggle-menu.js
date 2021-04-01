var menu = 0;

function toggle_menu() {
	if (menu == 0) {
		document.getElementById("dropdown").style.display = "block";
	} else {
		document.getElementById("dropdown").style.display = "none";
	}
	menu = 1 - menu;
}
