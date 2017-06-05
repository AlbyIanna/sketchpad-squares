$(document).ready(function() {
	var container = $("#container");
	for(i=0;i<16;i++){
		var newRow = $("<div class='row' id='row-" + i + "'></div>");
		container.append(newRow);
		for(j=0;j<16;j++){
			var newSquare = $("<div class='square' id='sq-" + j + "'></div>");
			newRow.append(newSquare);
			newSquare.hover(function() {
				$(this).toggleClass("active");
			}, function() {
				$(this).addClass("hovered");
			});
		}
	}
	$("#btn-clear").on("click", function() {
		value = prompt("Please, enter the number of squares per row:");
		clear_and_rebuild(value);
	});

	console.log($("#btn-clear").text);
	console.log("ciao");

});

function clear_and_rebuild(num) {
	var container = $("#container");
	container.empty();

	for(i=0;i<num;i++){
		var newRow = $("<div class='row' id='row-" + i + "'></div>");
		newRow.css("height", container.height()/num +"px")
		container.append(newRow);
		for(j=0;j<num;j++){
			var newSquare = $("<div class='square' id='sq-" + j + "'></div>");
			newSquare.css("width", container.width()/num);
			newSquare.css("height", container.height()/num);
			newRow.append(newSquare);
			newSquare.hover(function() {
				$(this).toggleClass("active");
			}, function() {
				$(this).addClass("hovered");
			});
		}
	}	
}