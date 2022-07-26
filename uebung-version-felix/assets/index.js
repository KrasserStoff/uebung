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
/* 	console.log(getFormValue("name"));
	console.log(getFormValue("adress"));
	console.log(getFormValue("mail")); */

	var formData = {
		name: getFormValue("name"),
		address:getFormValue("adress"),
		mail: getFormValue("mail")
	};

	sendData(formData);
	console.log(formData);
	window.location.href = 'success.html'
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




