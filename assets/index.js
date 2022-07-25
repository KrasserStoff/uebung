function runApp() {
	const form = document.getElementById("form");

	form.addEventListener("submit", submitForm);

	window.airbrake = new Airbrake.Notifier({
		projectId: 187636,
		projectKey: "77b1823da05706642d8b4aa1e62e7742",
		environment: "uebung",
	});
}

runApp();

function submitForm(event) {
	event.preventDefault();
	console.log(getFormValue("name"));

	var formData = {
		name: getFormValue("name"),
	};
	// add exercise logic here
	sendData(formData);
}

// returns the value of an input field by ID
function getFormValue(id) {
	return document.getElementById(id).value;
}

// sends data log to airbrake for documentation
function sendData(formData) {
	airbrake.notify({
		error: "Übung",
		context: {
			component: "uebung",
			severity: "info",
		},
		params: formData,
	});
}
