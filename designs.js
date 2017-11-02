// Select color input
// Select size input

// Define variables for width and height of grid

let width = $("#input_width").val();

let height = $("#input_height").val();


// When size is submitted by the user, call makeGrid()

function makeGrid() {

// This for loop creates each table row and cell that the user inputs as width and height

	for (i=1; i<=width; i++) {
		$("#pixel_canvas").append("<tr></tr>");
		for (j=1; j<=height; j++) {
			$("#pixel_canvas").children("tr").last().append("<td></td>");
		}
	}

}
