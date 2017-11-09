// Select color input

let color = document.getElementById("color");

// Select size input

let widthBox = $("#input_width");

let heightBox = $("#input_height");

$("#sizePicker").submit(function(event) {
	makeGrid();
	event.preventDefault();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Define variables for width and height of grid

	let width = widthBox.val();

	let height = heightBox.val();

// Clear grid before making a new one

	$("#pixel_canvas").empty();

// For loop creates each table row and cell that the user inputs as width and height

	for (i=1; i<=width; i++) {
		$("#pixel_canvas").append("<tr></tr>");
		for (j=1; j<=height; j++) {
			$("#pixel_canvas").children("tr").last().append("<td></td>");
		};
	};

};

// Pull selected color from color picker and when clicking table cells, the color fills in

// $("table").on("click", "td", function() {
// 	$("td").css('background-color', color);
// });