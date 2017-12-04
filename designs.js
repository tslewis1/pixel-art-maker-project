// Select size input

let widthBox = $("#input_width");

let heightBox = $("#input_height");

$("#sizePicker").submit(function(event) {
	makeGrid();
	event.preventDefault();
});

// Select color value from colorPicker

let color = "#000";

$("#colorPicker").change(function () {
	color = $("#colorPicker").val();
});

// Pull selected color from color picker and when clicking table cells, the color value fills in

// if/else statement clears and fills in color  accordingly


$("#pixel_canvas").on("click", "tr td", function () {
	if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)') {
		this.style.backgroundColor = color;
	} else {
		this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	};
});

// When size is submitted by the user, call makeGrid(), which creates a table that can then be colored in

function makeGrid() {

// Define variables for width and height of grid

	let width = widthBox.val();

	let height = heightBox.val();

// Clear grid before making a new one

	$("#pixel_canvas").empty();

// For loop creates each table row and cell that the user inputs as width and height

	for (i=1; i<=height; i++) {
		$("#pixel_canvas").append("<tr></tr>");
		for (j=1; j<=width; j++) {
			$("#pixel_canvas").children("tr").last().append("<td></td>");
		};
	};

};
