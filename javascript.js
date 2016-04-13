var clicked = 1;
function enlarge(x,y,z)
{
	if (clicked == 1) {
		document.getElementById(y).style.width = "70%";
		document.getElementById(y).style.height = "70%";
		document.getElementById(y).style.zIndex = 5;
		document.getElementById(y).style.position = "fixed";
		document.getElementById(y).style.display = "block";
		if (z=="video"){
			document.getElementById(y).style.boxShadow = "10px 10px 25px #000000";
			document.getElementById(x).style.width = "100%";
			document.getElementById(x).style.height = "100%";
		}
		else {
			if (document.getElementById(x).naturalWidth / window.innerWidth > document.getElementById(x).naturalHeight / window.innerHeight){
				document.getElementById(x).style.width = "100%";
				var ratio = document.getElementById(x).naturalWidth / window.innerWidth
				var ht = document.getElementById(x).naturalHeight / ratio * .7
				document.getElementById(x).style.height = ht;
				document.getElementById(x).style.position = "absolute";
				document.getElementById(x).style.left = "0";
				document.getElementById(x).style.right = "0";
				document.getElementById(x).style.marginLeft = "auto";
				document.getElementById(x).style.marginRight = "auto";
				document.getElementById(x).style.top = "50%";
				document.getElementById(x).style.marginTop = -1*ht*.5;
			}
		}
		document.getElementById(y).style.top = 85
		document.getElementById("description").style.display = "block";
		document.getElementById("dim_background").style.display = "block";
		clicked = 2;
		add_comments(x,z);
	}
	else {
		document.getElementById(y).style.width = 504;
		document.getElementById(y).style.height = 336;
		document.getElementById(y).style.zIndex = 0;
		if (z=="video"){
			document.getElementById(y).style.boxShadow = "none";
			document.getElementById(x).style.width = 500;
			document.getElementById(x).style.height = 332;
		}
		else{
			document.getElementById(x).style.height = "100%";
			document.getElementById(x).style.width = "auto";
			document.getElementById(x).style.position = "static";
			document.getElementById(x).style.marginTop = 0;
		}
		document.getElementById(y).style.position = "relative";
		document.getElementById(y).style.display = "inline-block";
		document.getElementById(y).style.top = 0;
		document.getElementById("description").style.display = "none";
		document.getElementById("dim_background").style.display = "none";
		clicked = 1;
	}
}


var comments = ["So cool",
"Awesome!",
"Lammmmeeee",
"Needs more cowbell",
"I really love the style of this",
"OMG, this is the most amazing thing ever",
"lol",
"Check out my youtube channel",
"So much spam in this comment section",
"Another one",
"I wish there was more!",
"This is dumb",
"Love it!",
"Really great, can't wait for more",
"Haha, beautiful",
"Psh."];

var comment_table = ["tr1","tr2","tr3","tr4","tr5","tr6","tr7","tr8"]

var video_title_array = ["X-men:Apocalypse | Official Trailer[HD] | 20th Century FOX",
"ZAYN - BeFoUr (Audio)",
"Little Boy Befriends a Baby Deer",
"Full Speech: Donald Trump Rally in Tucson, AZ (3-19-16)",
"Ariana Grande - Dangerous Woman (A Cappella)",
"Ylvis - Vill på IKEA [ENGLISH SUBTITLES] [HD]",
"Foods You Thought Were Healthy But Actually Aren't",
"ZAYN - PILLOWTALK",
"Can you fold paper more than 7 times with hydraulic press",
"Miss Peregrine's Home for Peculiar Children | Official Trailer[HD] | 20th Century FOX",
"GHOSTBUSTERS - Official Trailer (HD)",
"Jake Gyllenhaal Bombed His Lord of the Rings Audition"];

var photo_title_array = ["Blurry Cityscape",
"Streetlight",
"Moths on Streetlight",
"Telephone Pole",
"Air and Space Museum - DC",
"Smithsonian Castle",
"Sloth",
"Duck",
"Wolves",
"Corgi",
"Huskeys",
"Lion cub"];

function add_comments(x,z)
{
	if (z == "video"){
		document.getElementById("title").innerHTML = video_title_array[x-1];
	}
	else {
		document.getElementById("title").innerHTML = photo_title_array[x-1];
	}
	var comments_used = [];
	for (i=0; i < 8; i++){
		do {var number = Math.floor((Math.random()*16)+1);
		}
		while (comments_used.indexOf(number) > -1);
		comments_used[i] = number;
		document.getElementById(comment_table[i]).innerHTML = comments[number-1];
	}
	var comments_used = [];
}


function purchase_a()
{
	document.getElementById("purchase_wrapper").style.display = "block";
	setTimeout(purchase_b, 1000);
}

function purchase_b()
{
	document.getElementById("purchase_wrapper").style.display = "none";
}
