const myInput = document.querySelector("#name-input"),
	toChange = document.querySelector("#name-output")
myInput.onkeydown = myInput.onkeyup = () => toChange.textContent = myInput.value