const form = document.querySelector(".login-form")
form.onsubmit = e => {
	e.preventDefault()
	let errors = 0
	const inputs = form.querySelectorAll("input")
	const data = {}
	inputs.forEach(input => {
		const value = input.value.trim()
		data[input.getAttribute("name")] = value
		errors += value === ""
	})
	if (errors > 0) {
		alert("All form fields must be filled in")
		return
	}
	inputs.forEach(input => (input.value = ""))
	console.log("🚀 ~ data:", data)
}
