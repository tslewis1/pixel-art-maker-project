// Select size input

let widthBox = $("#input_width");

let heightBox = $("#input_height");

$("#sizePicker").submit(function(event) {
	makeGrid();
	event.preventDefault();
});

// Select color input
// Pull selected color from color picker and when clicking table cells, the color fills in

let color = "#000000";

$("#colorPicker").change(function () {
	color = $("#colorPicker").val();
});

$("#pixel_canvas").on("click", "tr td", function () {
	$(this).css('background-color', color);
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
