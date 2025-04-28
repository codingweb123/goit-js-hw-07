function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`
}
const MIN = 30,
	MAX = 70,
	STEP = 10,
	MAXCUBES = 5
const createBtn = document.querySelector(".create-btn"),
	destroyBtn = document.querySelector(".destroy-btn"),
	createInput = document.querySelector(".create-input"),
	boxesList = document.querySelector(".boxes")
createBtn.onclick = () => {
	const cubes = createInput.value
	if (cubes < 1 || cubes > MAXCUBES) {
		alert(`Cubes number must not be less than 1 or bigger than ${MAXCUBES}`)
		return
	}
	let cubesHTML = ""
	for (let i = 0; i < cubes; i++) {
		const width = MIN + STEP * i
		const height = width
		cubesHTML += `<div style="width:${width}px;height:${height}px;background-color:${getRandomHexColor()}"></div>`
	}
	boxesList.insertAdjacentHTML(
		"beforeend",
		`<div class="box">${cubesHTML}</div>`
	)
}
destroyBtn.onclick = () => {
	const boxes = [...document.querySelectorAll(".boxes .box")]
	if (boxes.length <= 1) {
		alert("There are no boxes to delete")
		return
	}
	boxes.pop().remove()
}
