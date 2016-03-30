var clicked = 1;
function enlarge(x,y)
{
	if (clicked == 1) {
		document.getElementById(y).style.width = "70%";
		document.getElementById(y).style.height = "70%";
		document.getElementById(y).style.zIndex = 5;
		document.getElementById(y).style.position = "fixed";
		document.getElementById(y).style.display = "block";
		document.getElementById(y).style.boxShadow = "10px 10px 25px #000000";
		document.getElementById(y).style.top = 65
		document.getElementById(x).style.width = "100%";
		document.getElementById(x).style.height = "100%";
		clicked = 2;
	}
	else {
		document.getElementById(x).style.width = 500;
		document.getElementById(x).style.height = 332;
		document.getElementById(y).style.width = 508;
		document.getElementById(y).style.height = 340;
		document.getElementById(y).style.zIndex = 0;
		document.getElementById(y).style.boxShadow = "none";
		document.getElementById(y).style.position = "relative";
		document.getElementById(y).style.display = "inline-block";
		document.getElementById(y).style.top = 0
		clicked = 1;
	}
}