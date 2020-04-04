const selectProgramButton = document.querySelector('#selectProgramButton')
selectProgramButton.addEventListener('click', goProgram)

const storage = new Storage()

loadPrograms()

function loadPrograms() {
	// Gets list of programs from server and creates buttons in DOM
	if (storage.programs == null) {
		storage.loadPrograms()
	}
	const select = document.querySelector('.ui.dropdown')
	Object.keys(storage.programs).map((id) => {
		const programName = storage.getProgramName(id)
		const programType = storage.getProgramType(id)
		const programCode = storage.getProgramCode(id)
		let programCampus = storage.getProgramCampus(id)
		if (programCampus == 'stg') {
			programCampus = 'St. George'
		} else if (programCampus == 'eri') {
			programCampus = 'UTM'
		}
		const option = document.createElement('option')
		option.setAttribute('value', id)
		const optionText = document.createTextNode(programName + ' ' + programType + ' (' + programCode + ', ' + programCampus + ')')
		option.appendChild(optionText)
		select.appendChild(option)
	})
}

function goProgram(e) {
	e.preventDefault()
	const select = document.querySelector('.ui.dropdown')
	const id = select.value
	if (id != '' && storage.programs != null) {
		storage.setProgram(id)
		window.location.href = 'program.html'
	}
}
