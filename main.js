let is_mobile = false;

if ($(window).width() <= 680) {
	is_mobile = true;
}

$("body").on("change", "input[name='toggle']", function (e) {
	let disaster = $("input[name='toggle']:checked").attr("id");

	//set up fly to details by disaster
	let flyTo = {
		earthquake: { center: [-150.460084, 61.914779], zoom: 3.30, speed: 0.7 },
		volcano: { center: [-155.705549, 20.790428], zoom: 5.18, speed: 0.7 },
		coastal_storm: { center: [-105.10303301722637, 34.47865289747214], zoom: 2.4, speed: 0.7 },
		fire: { center: [-98.454838, 39.186895], zoom: 3.00, speed: 0.7 },
		flood: { center: [-106.27317786599627, 37.285607045140154], zoom: 2.5, speed: 0.7 },
		hurricane: { center: [-98.454838, 39.186895], zoom: 3.00, speed: 0.7 },
		mud: { center: [-98.454838, 39.186895], zoom: 3.00, speed: 0.7 },
		severe_storm: { center: [-98.454838, 39.186895], zoom: 3.00, speed: 0.7 },
		snow: { center: [-98.454838, 39.186895], zoom: 3.00, speed: 0.7 },
		tornado: { center: [-98.454838, 39.186895], zoom: 3.00, speed: 0.7 }
	};

	if (is_mobile) {
		flyTo = {
			earthquake: { center: [-151.8274484224618, 43.5497589383587], zoom: 2, speed: 0.7 },
			volcano: { center: [-157.5001097469375, 18.505329193200993], zoom: 5.00, speed: 0.7 },
			coastal_storm: { center: [-117.1040921372927, 14.544287629706425], zoom: 1, speed: 0.7 },
			fire: { center: [-109.69922716592869, 28.051790618975957], zoom: 2.00, speed: 0.7 },
			flood: { center: [-118.51032417347074, 3.3378437507758534], zoom: 1.00, speed: 0.7 },
			hurricane: { center: [-81.71571668628425, 28.095079895159984], zoom: 4.00, speed: 0.7 },
			mud: { center: [-80.19237361592133, 37.57557273719359], zoom: 5.00, speed: 0.7 },
			severe_storm: { center: [-92.0221663011905, 15.72529974614124], zoom: 2.00, speed: 0.7 },
			snow: { center: [-87.56081494107553, 29.87073564246313], zoom: 2.00, speed: 0.7 },
			tornado: { center: [-72.76661207072493, 40.753983842152266], zoom: 6.00, speed: 0.7 }
		};
	}

	map.flyTo(flyTo[disaster]);

	let selection = $(`.${disaster}`);


	// $("input[type='checkbox']:checked").each(function () {
	// 	const $this_checkbox = $(this),
	// 		id = $this_checkbox.attr("id");
	//
	// 	selection.push(`.${id}`);
	// });
	//
	// selection = selection.join(",");
	//
	// console.log(selection);

	$(".state.active").removeClass("active");
	$(selection).addClass("active");

	disaster_toggle(disaster);

	console.log("We made it!");
	// console.log("state name" + state_name)
});


// $("body").on("change", "#state", function () {
// 	console.log("Change on all checkbox");
// 	if ($("#state:checked").length > 0) {
// 		console.log("Checkbox is checked");
// 		$("input[type='checkbox']:not(#state):checked").each(function () {
// 			$(this).prop("checked", false);
// 		});
// 		// $("input[type='checkbox']:not(#state):checked").trigger("change");
// 		console.log("Unchecking all other checkboxes");
// 	}
// });
//
// $("body").on("change", "input[type='checkbox']:not(#state)", function () {
// 	console.log("Change on other checkboxes");
// 	if ($("input[type='checkbox']:not(#state):checked").length > 0) {
// 		console.log("There are other checkboxes checked");
// 		$("#state:checked").prop("checked", false).trigger("change");
// 		console.log("Removed check from all");
// 	}
// });