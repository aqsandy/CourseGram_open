const home = document.querySelector('#home')
const programRequirementsButton = document.querySelector('#programRequirements')
const saveAsPDFButton = document.querySelector('#saveAsPDF')
const printButton = document.querySelector('#print')
const svgCourse = document.querySelector('#graph')
home.addEventListener('click', goHome)
programRequirementsButton.addEventListener('click', goProgramRequirements)
saveAsPDFButton.addEventListener('click', saveAsPDF)
printButton.addEventListener('click', print)

const storage = new Storage()

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
} else {
	const login = document.querySelector('#login')
	login.addEventListener('click', goLogin)
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
	} else {
		alert('Program already added to profile.')
	}
}

function removeFromProfile(e) {
	e.preventDefault()
	if (storage.checkProfileForProgram(storage.getProgramId())) {
		storage.removeProgramFromProfile()
	} else {
		alert('Program already removed from profile.')
	}
}