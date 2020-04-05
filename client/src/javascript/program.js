const programRequirementsButton = document.querySelector('#programRequirements')
const saveAsPDFButton = document.querySelector('#saveAsPDF')
const printButton = document.querySelector('#print')
const svgCourse = document.querySelector('#graph')
programRequirementsButton.addEventListener('click', goProgramRequirements)
saveAsPDFButton.addEventListener('click', saveAsPDF)
printButton.addEventListener('click', print)

const storage = new Storage()

if (storage.profile != null) {
	const secondHeader = document.querySelector('#secondHeader')
	const secondHeaderList = document.createElement('li')
	secondHeaderList.setAttribute('class', 'secondHeaderList')
	
	if (storage.checkProfileForProgram(storage.getProgramId())) {
		const removeProgramFromProfileButton = document.createElement('button')
		removeProgramFromProfileButton.setAttribute('id', 'addToProfile')
		const removeProgramFromProfileButtonText = document.createTextNode('Remove from Profile')
		removeProgramFromProfileButton.appendChild(removeProgramFromProfileButtonText)
		secondHeaderList.appendChild(removeProgramFromProfileButton)
		secondHeader.firstElementChild.appendChild(secondHeaderList)
		removeProgramFromProfileButton.addEventListener('click', removeFromProfile)
	} else {
		const addToProfileButton = document.createElement('button')
		addToProfileButton.setAttribute('id', 'addToProfile')
		const addToProfileButtonText = document.createTextNode('Add to Profile')
		addToProfileButton.appendChild(addToProfileButtonText)
		secondHeaderList.appendChild(addToProfileButton)
		secondHeader.firstElementChild.appendChild(secondHeaderList)
		
		addToProfileButton.addEventListener('click', addToProfile)
	}

	for (const child of secondHeader.firstElementChild.children) {
		child.style.width = '24%'
	}
}

function goProfile(e) {
	e.preventDefault()
	if (storage.profile != null) {
		if (storage.profile.admin) {
			window.location.href = 'admin.html'
		}
		else {
			window.location.href = 'profile.html'
		}
	}
}

function goProgramRequirements(e) {
	e.preventDefault()
	window.location.href = 'program-requirements.html'
}

function saveAsPDF(e) {
	e.preventDefault()
	alert('This feature has not been implemented yet.')
}

function print(e) {
	e.preventDefault()
	alert('This feature has not been implemented yet.')
}

function addToProfile(e) {
	e.preventDefault()
	if (!storage.checkProfileForProgram(storage.getProgramId())) {
		storage.programToProfile()
	}
}

function removeFromProfile(e) {
	e.preventDefault()
	if (storage.checkProfileForProgram(storage.getProgramId())) {
		storage.removeProgramFromProfile()
	}
}