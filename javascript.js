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
		document.getElementById(y).style.top = 85
		document.getElementById(x).style.width = "100%";
		document.getElementById(x).style.height = "100%";
		document.getElementById("description").style.display = "block"
		clicked = 2;
		add_comments(x);
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
		document.getElementById("description").style.display = "none"
		clicked = 1;
	}
}


var comments = ["So cool",
"Awesome!",
"Lammmmeeee",
"Needs more cowbell",
"I really love the style of this video",
"OMG, this is the most amazing thing ever",
"lol",
"Check out my youtube channel",
"So much spam in this comment section",
"Another one",
"I wish this video was longer",
"This is dumb",
"Love it!",
"Great video, can't wait for more",
"Haha, beautiful",
"Psh."];

var comment_table = ["tr1","tr2","tr3","tr4","tr5","tr6","tr7","tr8"]

var title_array = ["X-men:Apocalypse | Official Trailer[HD] | 20th Century FOX",
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

function add_comments(x)
{
	document.getElementById("title").innerHTML = title_array[x-1];
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
