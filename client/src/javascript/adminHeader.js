/* 
General header redirect files
*/
const home = document.querySelector('#home')
home.addEventListener('click', goHome)

function goHome(e) {
	e.preventDefault()
	window.location.href = 'index.html'
}