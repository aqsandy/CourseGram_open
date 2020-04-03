const home = document.querySelector('#home')
home.addEventListener('click', goHome)

const storage = new Storage()

loadPrograms()

if (storage.profile != null) {
	const header = document.querySelector('#header')
	header.firstElementChild.children[2].remove()
	const profileContainer = document.createElement('li')
	profileContainer.setAttribute('id', 'profileContainer')
	const profileButton = document.createElement('button')
	profileButton.setAttribute('id', 'profile')
	const profileButtonText = document.createTextNode(storage.getUsername())
	profileButton.appendChild(profileButtonText)
	profileContainer.appendChild(profileButton)
	header.firstElementChild.appendChild(profileContainer)
	const profile = document.querySelector('#profile')
	profile.addEventListener('click', goProfile)
} else {
	const login = document.querySelector('#login')
	login.addEventListener('click', goLogin)
}

function loadPrograms() {
	// Gets list of programs from server and creates buttons in DOM
	if (storage.programs == null) {
		storage.loadPrograms()
	}
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
		const programs = document.querySelector('#programs')
		const program = document.createElement('li')
		program.setAttribute('class', 'program')
		const programButton = document.createElement('button')
		programButton.setAttribute('class', 'programButton')
		const programButtonText = document.createTextNode(programName + ' ' + programType + ' (' + programCode + ', ' + programCampus + ')')
		programButton.appendChild(programButtonText)
		program.appendChild(programButton)
		programs.children[1].appendChild(program)
		programButton.addEventListener('click', goProgram)
	})
}

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}

function goLogin(e) {
	e.preventDefault()
	window.location.href = 'login.html'
}

function goProfile(e) {
	e.preventDefault()
	if (storage.profile != null) {
		if (storage.profile.admin) {
			window.location.href = 'admin.html'
		} else {
			window.location.href = 'profile.html'
		}
	}
}

function goProgram(e) {
	e.preventDefault()
	const list = e.target.parentElement
	for (let i = 0; i < list.children.length; i++) {
		if (list.children[i] == e.target) {
			const id = Object.keys(storage.programs)[i]
			storage.setProgram(id)
			window.location.href = 'program.html'
		}
	}
}
