const home = document.querySelector('#home')
const programRequirementsButton = document.querySelector('#programRequirements')
const saveAsPDFButton = document.querySelector('#saveAsPDF')
const printButton = document.querySelector('#print')
home.addEventListener('click', goHome)
programRequirementsButton.addEventListener('click', goProgramRequirements)
saveAsPDFButton.addEventListener('click', saveAsPDF)
printButton.addEventListener('click', print)

const storage = new Storage()

///////////////////////////////////
// Input related code goes here

// Create the input graph
var g = new dagreD3.graphlib.Graph()
.setGraph({edgesep: 40, ranksep: 300, nodesep: 40})
.setDefaultEdgeLabel(function() { return {}; });

// Here we're setting nodeclass, which is used by our custom drawNodes function
// below.
g.setNode(0,  { label: "ARC100H1",  class: "type-ARC100H1" });
g.setNode(1,  { label: "JAV101H1",  class: "type-JAV101H1" });
g.setNode(2,  { label: "JAV120H1",  class: "type-JAV120H1" });
g.setNode(3,  { label: "JAV130H1",  class: "type-JAV130H1" });
g.setNode(4,  { label: "JAV131H1",  class: "type-JAV131H1" });
g.setNode(5,  { label: "JAV151H1",  class: "type-JAV151H1" });
g.setNode(6,  { label: "JAV132H1",  class: "type-JAV132H1" });
g.setNode(7,  { label: "JAV152H1",  class: "type-JAV152H1" });
g.setNode(8,  { label: "ARC200H1",  class: "type-ARC200H1" });
g.setNode(9,  { label: "ARC201H1",  class: "type-ARC201H1" });
g.setNode(10, { label: "ARC251H1",  class: "type-ARC251H1" });
g.setNode(11, { label: "ARC252H1",  class: "type-ARC252H1" });
g.setNode(12, { label: "ARC253H1",  class: "type-ARC253H1" });
g.setNode(13, { label: "ARC302H1",  class: "type-ARC302H1" });
g.setNode(14, { label: "ARC351H1",  class: "type-ARC351H1" });
g.setNode(15, { label: "ARC352H1",  class: "type-ARC352H1" });
g.setNode(16, { label: "ARC353H1",  class: "type-ARC353H1" });
g.setNode(17, { label: "ARC354H1",  class: "type-ARC354H1" });
g.setNode(18, { label: "ARC355H1",  class: "type-ARC355H1" });
g.setNode(19, { label: "ARC356H1",  class: "type-ARC356H1" });
g.setNode(20, { label: "ARC357H1",  class: "type-ARC357H1" });
g.setNode(21, { label: "ARC365H1",  class: "type-ARC365H1" });
g.setNode(22, { label: "ARC366H1",  class: "type-ARC366H1" });
g.setNode(23, { label: "ARC367H1",  class: "type-ARC367H1" });
g.setNode(24, { label: "ARC462Y1",  class: "type-ARC462Y1" });
g.setNode(25, { label: "ARC382H1",  class: "type-ARC382H1" });
g.setNode(26, { label: "ARC480H1",  class: "type-ARC480H1" });
g.setNode(27, { label: "ARC481H1",  class: "type-ARC481H1" });
g.setNode(28, { label: "ARC482H1",  class: "type-ARC482H1" });
g.setNode(29, { label: "ARC456H1",  class: "type-ARC456H1" });

g.setEdge(25, 28);
g.setEdge(25, 27);
g.setEdge(25, 26);
g.setEdge(24, 29);
g.setEdge(9, 23);
g.setEdge(9, 22);
g.setEdge(9, 21);
g.setEdge(10, 20);
g.setEdge(11, 20);
g.setEdge(12, 20);
g.setEdge(10, 19);
g.setEdge(11, 19);
g.setEdge(12, 19);
g.setEdge(10, 18);
g.setEdge(11, 18);
g.setEdge(12, 18);
g.setEdge(10, 17);
g.setEdge(11, 17);
g.setEdge(12, 17);
g.setEdge(10, 16);
g.setEdge(11, 16);
g.setEdge(12, 16);
g.setEdge(10, 15);
g.setEdge(11, 15);
g.setEdge(12, 15);
g.setEdge(10, 14);
g.setEdge(11, 14);
g.setEdge(12, 14);
g.setEdge(7, 13);
g.setEdge(6, 12);
g.setEdge(7, 12);
g.setEdge(6, 11);
g.setEdge(7, 11);
g.setEdge(6, 10);
g.setEdge(7, 10);
g.setEdge(2, 3);
g.setEdge(4, 7);
g.setEdge(5, 7);
g.setEdge(0, 8);
g.setEdge(0, 9);
g.setEdge(1, 9);
g.setEdge(14, 29);
g.setEdge(15, 29);
g.setEdge(16, 29);
g.setEdge(17, 29);
g.setEdge(18, 29);
g.setEdge(19, 29);
g.setEdge(20, 29);



g.nodes().forEach(function(v) {
	var node = g.node(v);
	// Round the corners of the nodes
	node.rx = node.ry = 5;
});

// Set up edges, no special attributes.

// Create the renderer
var render = new dagreD3.render();
//render.createEdgePaths(createEdgePaths);

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg"),
	svgGroup = svg.append("g");

var svg = d3.select("svg"),
inner = d3.select("svg g"),
zoom = d3.zoom().on("zoom", function() {
  inner.attr("transform", d3.event.transform);
});
svg.call(zoom);
// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

// Center the graph
var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40);

//////////////////////////////////

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
	const addToProfileButton = document.createElement('button')
	addToProfileButton.setAttribute('id', 'addToProfile')
	const addToProfileButtonText = document.createTextNode('Add to Profile')
	addToProfileButton.appendChild(addToProfileButtonText)
	secondHeaderList.appendChild(addToProfileButton)
	secondHeader.firstElementChild.appendChild(secondHeaderList)
	addToProfileButton.addEventListener('click', addToProfile)

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