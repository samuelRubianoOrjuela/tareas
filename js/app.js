document.getElementById("tareaButton").addEventListener("click", () => {
	let dataTarea = {
		nombreTarea: document.getElementById("nombreTarea").value,
		responsableTarea: document.getElementById("responsableTarea").value,
		startDate: document.getElementById("startDate").value,
		endDate: document.getElementById("endDate").value,
		tiempoTarea: document.getElementById("tiempoTarea").value,
	};
});