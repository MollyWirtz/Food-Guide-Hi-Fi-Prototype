
var count = 0; 

// Have certain severity ratings automatically selected for canned data 
var peanut_selected_id = "peanuts_red"; 
var salt_selected_id = "salt_green"; 

var peanut_selected = document.getElementById(peanut_selected_id); 
var salt_selected = document.getElementById(salt_selected_id); 

// Styling of selected severity buttons 
peanut_selected.style.border = "2px solid black"; 
peanut_selected.style.height = "22px"; 
peanut_selected.style.width = "22px"; 
salt_selected.style.border = "2px solid black"; 
salt_selected.style.height = "22px"; 
salt_selected.style.width = "22px"; 


// Respond to user changing a severity rating for canned data
function selectSeverity(clicked_id) {
	var ingredient = clicked_id.split("_")[0]; 
	var green = document.getElementById(ingredient + "_green"); 
	var yellow = document.getElementById(ingredient + "_yellow"); 
	var red = document.getElementById(ingredient + "_red"); 

	if (clicked_id == ingredient + "_green") {
		green.style.border = "2px solid black"; 
		green.style.height = "22px"; 
		green.style.width = "22px"; 		
		yellow.style.border = "none"; 
		yellow.style.height = "20px"; 
		yellow.style.width = "20px"; 		
		red.style.border = "none"; 
		red.style.height = "20px"; 
		red.style.width = "20px"; 
	}
	else if (clicked_id == ingredient + "_yellow") { 
		yellow.style.border = "2px solid black"; 
		yellow.style.height = "22px"; 
		yellow.style.width = "22px"; 		
		green.style.border = "none"; 
		green.style.height = "20px"; 
		green.style.width = "20px"; 		
		red.style.border = "none"; 
		red.style.height = "20px"; 
		red.style.width = "20px"; 
	}	
	else if (clicked_id == ingredient + "_red") { 
		red.style.border = "2px solid black"; 
		red.style.height = "22px"; 
		red.style.width = "22px"; 		
		green.style.border = "none"; 
		green.style.height = "20px"; 
		green.style.width = "20px"; 		
		yellow.style.border = "none"; 
		yellow.style.height = "20px"; 
		yellow.style.width = "20px"; 
	}
}


// Unlike an ingredient in Saved Ingredients  or Saved Ingredients Collapsable
function unlikeElement(clicked_id) {
	var heart = document.getElementById(clicked_id);
	var modal = document.getElementById("confirm_modal"); 
	var modal_text = document.getElementById("modal_subtitle"); 
	var no = document.getElementById("no"); 

	// Create element id strings 
	var label = clicked_id.substring(0, clicked_id.length-4); 
	var link = label; 
	label = label + "label";
	link = link + "link";

	var item_text = document.getElementById(label).textContent; 


	// Display modal 
	modal.style.display = "block";
	modal_text.innerHTML = "Are you sure you want to unlike " + "<br>" + item_text + "?";

	// Respond to user response to modal 
	no.onclick = function() {
		modal.style.display = "none"; 
	}
	yes.onclick = function() {
		modal.style.display = "none"; 
		// Remove proper element
		if (document.getElementById(label).parentElement.id == "recipe_section") {
			document.getElementById(clicked_id).remove(); 
			document.getElementById(label).remove(); 
			document.getElementById(link).remove(); 
		} else if (document.getElementById(label).parentElement.id == "ingredient_section") {
			document.getElementById(clicked_id).remove(); 
			document.getElementById(label).remove(); 
		}
	}
}


// Remove preference from Edit My Food Preferences Collapsable
function removePreference(clicked_id) {
	var modal = document.getElementById("confirm_modal"); 
	var modal_text = document.getElementById("modal_subtitle"); 
	var no = document.getElementById("no"); 
	var label_id_split = clicked_id.split("_btn"); 
	var label_id = label_id_split[0] + "_label"; 
	var severity_id = label_id_split[0] + "_container"; 
	var item_text = document.getElementById(label_id).textContent; 

	// Display modal
	modal.style.display = "block";
	modal_text.innerHTML = "Are you sure you want to remove" + "<br>" + item_text + "<br>" + "from your food preferences?";

	// Respond to user response to modal 
	no.onclick = function() {
		modal.style.display = "none"; 
	}

	yes.onclick = function() {
		modal.style.display = "none"; 
		// Remove elements
		document.getElementById(clicked_id).remove(); 
		document.getElementById(label_id).remove(); 
		document.getElementById(severity_id).remove();  
	}
}


// Add a severity rating to newly added elements
function addSeverity(clicked_id) {

	var clicked_btn = document.getElementById(clicked_id); 
	var parent_element_id = clicked_btn.parentElement.id; 
	var green = document.getElementById("green"); 
	var yellow = document.getElementById("yellow"); 
	var red = document.getElementById("red"); 

	// Set styling of newly selected severity button 
	clicked_btn.style.border = "2px solid black"; 
	clicked_btn.style.height = "22px"; 
	clicked_btn.style.width = "22px"; 

	// Switch between button stylings based on selected button
	if (clicked_id == "green") {
		yellow.style.border = "none"; 
		yellow.style.height = "20px"; 
		yellow.style.width = "20px"; 

		red.style.border = "none"; 
		red.style.height = "20px"; 
		red.style.width = "20px"; 
	} 
	else if (clicked_id == "yellow") {
		green.style.border = "none"; 
		green.style.height = "20px"; 
		green.style.width = "20px"; 

		red.style.border = "none"; 
		red.style.height = "20px"; 
		red.style.width = "20px"; 
	} 
	else if (clicked_id == "red") {
		green.style.border = "none"; 
		green.style.height = "20px"; 
		green.style.width = "20px"; 

		yellow.style.border = "none"; 
		yellow.style.height = "20px"; 
		yellow.style.width = "20px"; 
	}
}


// Add a preference to Edit My Food Preferences Collapsable
function addElt() {
	count += 1;

	// Get containers
	var lbl_container = document.getElementById("preferences_ingred_section"); 
	var severity_container = document.getElementById("label_container_profile_s"); 
	var tog_container = document.getElementById("toggle_container_profile"); 

	// Get modal
	var modal = document.getElementById("severity_modal"); 
	var modal_text = document.getElementById("severity_modal_subtitle"); 
	var ok = document.getElementById("ok"); 

	// Create new elements
	var prompt = document.createElement("INPUT");
	var severity_options = document.createElement("SPAN"); 
	var green_btn = document.createElement("BUTTON"); 
	var yellow_btn = document.createElement("BUTTON"); 
	var red_btn = document.createElement("BUTTON"); 

	// Modal response to user
	ok.onclick = function() {
		modal.style.display = "none"; 
	}

	// If user input into text box
	if (document.getElementById("input")) {
		var input = document.getElementById("input").value; 
		var allFieldsFilled = true; 

		// If input and + button clicked second time (submit new preference)
		if (count > 0) {
			var temp_green = document.getElementById("green"); 
			var temp_yellow = document.getElementById("yellow"); 
			var temp_red = document.getElementById("red"); 

			// Make sure severity rating is selected 
			if ((temp_green.style.border == "") && (temp_yellow.style.border == "") && ((temp_red.style.border == ""))) {
				modal.style.display = "block"; 
				modal_text.textContent = "Please select a severity rating";
				allFieldsFilled = false; 
			}

			// Make sure text input is provided 
			if (input == "") {
				modal.style.display = "block"; 
				modal_text.textContent = "Please name an ingredient";
				allFieldsFilled = false 
			}

			// If all inputs are filled in
			if (allFieldsFilled == true){

				// Create new ids for elements 
				if (input[input.length-1] == " ") {
					input = input.substring(0, input.length-1); 
				}
				var new_btn_id = input.replace(/ /g, "_"); 
				var new_lbl = new_btn_id; 
				new_btn_id = new_btn_id + "_btn"; 
				var new_lbl_id = new_lbl + "_label"; 

				// Create new button
				var new_btn = document.createElement("button"); 
				new_btn.setAttribute("class", "remove"); 
				new_btn.setAttribute("id", new_btn_id); 
				new_btn.textContent = "-"; 
				new_btn.setAttribute("onclick", "removePreference(this.id);"); 
				document.getElementById("add").before(new_btn); 

				// Create new label
				var new_lbl_obj = document.createElement("p"); 
				new_lbl_obj.setAttribute("id", new_lbl_id); 
				new_lbl_obj.textContent = input; 
				lbl_container.appendChild(new_lbl_obj); 
				document.getElementById("input").remove(); 

				// Create new severity ratings
				var container_name = new_lbl+"_container";  
				severity_options.setAttribute("id", container_name);
				severity_options.setAttribute("class", "severity_btn_container"); 
				severity_options.setAttribute("onclick", "selectSeverity(this.id)"); 

				var green_name = new_lbl+"_green"; 
				green_btn.setAttribute("id", green_name); 
				green_btn.setAttribute("class", "severity_btn_g"); 
				green_btn.setAttribute("onclick", "addSeverity(this.id)"); 
				severity_options.appendChild(green_btn); 

				var yellow_name = new_lbl+"_yellow"; 
				yellow_btn.setAttribute("id", yellow_name); 
				yellow_btn.setAttribute("class", "severity_btn_y"); 
				yellow_btn.setAttribute("onclick", "selectSeverity(this.id)");
				severity_options.appendChild(yellow_btn); 

				var red_name = new_lbl+"_red"; 
				red_btn.setAttribute("id", red_name); 
				red_btn.setAttribute("class", "severity_btn_r"); 
				red_btn.setAttribute("onclick", "selectSeverity(this.id)");
				severity_options.appendChild(red_btn); 

				severity_container.appendChild(severity_options); 

				// Find selected elt, change style accordingly 
				if (document.getElementById("green").style.border != "none") {
					green_btn.style.border = "2px solid black"; 
					green_btn.style.height = "22px"; 
					green_btn.style.width = "22px"; 					
				} else if (document.getElementById("yellow").style.border != "none") {
					yellow_btn.style.border = "2px solid black"; 
					yellow_btn.style.height = "22px"; 
					yellow_btn.style.width = "22px";
				} else if (document.getElementById("red").style.border != "none") {
					red_btn.style.border = "2px solid black"; 
					red_btn.style.height = "22px"; 
					red_btn.style.width = "22px";
				}

				// Remove temporary container 
				var x = document.getElementById("temp_container"); 
				x.remove(); 
				count = 0; 
			}
		}	

		// Create user input text box, severity options 
	} else {
		prompt.setAttribute("type", "text");
		prompt.setAttribute("id", "input"); 
		prompt.style.padding = "8.5px 0px 8.5px 0px";  
		lbl_container.appendChild(prompt);

		severity_options.setAttribute("class", "severity_btn_container"); 
		severity_options.setAttribute("id", "temp_container"); 

		green_btn.setAttribute("id", "green"); 
		green_btn.setAttribute("class", "severity_btn_g"); 
		green_btn.setAttribute("onclick", "addSeverity(this.id)"); 
		severity_options.appendChild(green_btn); 

		yellow_btn.setAttribute("id", "yellow"); 
		yellow_btn.setAttribute("class", "severity_btn_y"); 
		yellow_btn.setAttribute("onclick", "addSeverity(this.id)"); 
		severity_options.appendChild(yellow_btn); 

		red_btn.setAttribute("id", "red"); 
		red_btn.setAttribute("class", "severity_btn_r"); 
		red_btn.setAttribute("onclick", "addSeverity(this.id)");
		severity_options.appendChild(red_btn); 

		severity_container.appendChild(severity_options); 

	}

}


