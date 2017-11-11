$(document).ready(function(){
	function questionList(){
	if ($.inArray ($('.questionName').val(), ["pizza","bacon","chicken","strawberries","orange juice","fruit juice","call of duty",
		"star wars","hannah","airsoft","csgo","mason","twitter","fruit","meat","computers","tory lanez","nav","science",
		"technology","video games","fig bars","chipotle","roosters","chick-fil-a","fat daddy's",
		"music","amd","android","california","lotus","evora","lotus evora","bmw i8","lambo","rap","samsung",
		"google","sprite","chicken alfredo","cars","calzones","web development","money","a$ap ferg","playboi carti",
		"lil uzi vert","jay critch","rich the kid","drake","workaholics","spongebob","family guy","nba","basketball",
		"derrick rose","lebron james","cavs","fortnite","pubg","ufc","overwatch",
		"cheesecake","clothing","mall","outlast","battlefield","lincoln","h&m","hyperdenim","mnml",
		"pacsun","adidas","bape","burger","cheeseburger","cheeseburgers","asus","olive","nike","esports",
		"toyota","honda","burritos","burrito","steak","longhorns","bareburger","melt","crosstown","ice cream",
		"honey","smoothies","burgers","ps4","sony","kefir","blueberries","puma",
		"dave east","instagram","snapchat","tj maxx","cameras","linkedin",
		"comedy","mace windu","memes","neil degrasse tyson","girls","fried chicken","zelda",
		"desiigner","post malone","21 savage","cheese","macaroni & cheese",
		"peanut butter","ham","seafood","fish","laughing","javascript","jquery","html",
		"css","bootstrap","jaguar","lotus elise","elise","documentaries",
		"steam","elder scrolls","lebron","young and reckless","elwood","discord","pasta",
		"tesla","ethika","rolls royce","yogurt","dragon ball z","dbz","oreos","culvers","in n out",
		"avacados","turkey","ice cream sandwiches","ihop","mitchells steakhouse","mlg","snapple",
		"lemonnade","skittle","splashberry","mr.bigglesworth","feta","garlic butter","garlic","friends","family",
		"micro center","best buy","indeed","glassdoor","zip recruiter","newegg","whole foods","kroger",
		"bob evans","mod pizza","smashburger","jones soda","amazon","food","parties","road trips","chrome","cookies"]) >=0 )
	{
		$('#result').text('Yes.');

	}
	else{
		$('#result').text('Hm....Not sure.');
	}
}
	$('.questionName').on('keyup', function(e){
		if (e.keyCode == 13){
			questionList();
		}
	});
});