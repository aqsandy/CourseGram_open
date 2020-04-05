const backToProgram = document.querySelector('#backToProgram')
backToProgram.addEventListener('click', goProgram)

const storage = new Storage()

if (storage.program != null) {
	const programName = storage.getProgramName()
	const programType = storage.getProgramType()
	const programCode = storage.getProgramCode()
	const programTitle = document.querySelector('#programTitle')
	let programCampus = storage.getProgramCampus()
		if (programCampus == 'stg') {
			programCampus = 'St. George'
		} else if (programCampus == 'eri') {
			programCampus = 'UTM'
		}
	programTitle.innerHTML = programName + ' ' + programType + ' (' + programCode + ', ' + programCampus + ')'
	const notes = document.querySelector('#notes')
	const notesText = document.createTextNode(storage.getProgramNotes())
	notes.appendChild(notesText)
}

function goProgram(e) {
	e.preventDefault()
	window.location.href = 'program.html'
}