// Menu Overlay Functionality
function toggleMenu() { 
	if (document.getElementById("navMenu").offsetWidth == 0) {
		document.getElementById("navMenu").style.width="100%";
	}
	else {
		document.getElementById("navMenu").style.width = "0%"; 
	}
}

// Like Ingredient Functionality 
function like_ingredient(clicked_id) {
	var heart = document.getElementById(clicked_id);
	if (heart.getAttribute("class") == "heart_red") {
		heart.setAttribute("class", "heart_black");  
	} else {
		heart.setAttribute("class", "heart_red");  
	}
}

// Like Recipe Functionality 
function like_recipe(clicked_id) {
	var heart = document.getElementById(clicked_id);
	if (heart.getAttribute("class") == "recipie_heart_red") {
		heart.setAttribute("class", "recipie_heart_black");  
	} else {
		heart.setAttribute("class", "recipie_heart_red");  
	}
}