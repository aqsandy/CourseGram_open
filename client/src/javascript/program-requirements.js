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
	notes.innerHTML = '';
	
	const array = storage.getProgramNotes().split("\\n")
	console.log(array)
	for(let i = 0; i < array.length; i++){
		notes.innerHTML += "<b>" + array[i].substring(0, 2) + "</b>" + " " + array[i].substring(2)
		notes.innerHTML +='<br/><br/>'
	}
}

function goProgram(e) {
	e.preventDefault()
	window.location.href = 'program.html'
}