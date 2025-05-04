const myInput = document.querySelector("#name-input"),
	toChange = document.querySelector("#name-output")
myInput.oninput = () => {
	const value = myInput.value.trim()
	toChange.textContent = value === "" ? "Anonymous" : value
}
