// Create the input graph
let g = new dagreD3.graphlib.Graph()
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

g.setEdge(25, 28, {curve:d3.curveBasis});
g.setEdge(25, 27, {curve:d3.curveBasis});
g.setEdge(25, 26, {curve:d3.curveBasis});
g.setEdge(24, 29, {curve:d3.curveBasis});
g.setEdge(9, 23, {curve:d3.curveBasis});
g.setEdge(9, 22, {curve:d3.curveBasis});
g.setEdge(9, 21, {curve:d3.curveBasis});
g.setEdge(10, 20, {curve:d3.curveBasis});
g.setEdge(11, 20, {curve:d3.curveBasis});
g.setEdge(12, 20, {curve:d3.curveBasis});
g.setEdge(10, 19, {curve:d3.curveBasis});
g.setEdge(11, 19, {curve:d3.curveBasis});
g.setEdge(12, 19, {curve:d3.curveBasis});
g.setEdge(10, 18, {curve:d3.curveBasis});
g.setEdge(11, 18, {curve:d3.curveBasis});
g.setEdge(12, 18, {curve:d3.curveBasis});
g.setEdge(10, 17, {curve:d3.curveBasis});
g.setEdge(11, 17, {curve:d3.curveBasis});
g.setEdge(12, 17, {curve:d3.curveBasis});
g.setEdge(10, 16, {curve:d3.curveBasis});
g.setEdge(11, 16, {curve:d3.curveBasis});
g.setEdge(12, 16, {curve:d3.curveBasis});
g.setEdge(10, 15, {curve:d3.curveBasis});
g.setEdge(11, 15, {curve:d3.curveBasis});
g.setEdge(12, 15, {curve:d3.curveBasis});
g.setEdge(10, 14, {curve:d3.curveBasis});
g.setEdge(11, 14, {curve:d3.curveBasis});
g.setEdge(12, 14, {curve:d3.curveBasis});
g.setEdge(7, 13, {curve:d3.curveBasis});
g.setEdge(6, 12, {curve:d3.curveBasis});
g.setEdge(7, 12, {curve:d3.curveBasis});
g.setEdge(6, 11, {curve:d3.curveBasis});
g.setEdge(7, 11, {curve:d3.curveBasis});
g.setEdge(6, 10, {curve:d3.curveBasis});
g.setEdge(7, 10, {curve:d3.curveBasis});
g.setEdge(2, 3, {curve:d3.curveBasis});
g.setEdge(4, 7, {curve:d3.curveBasis});
g.setEdge(5, 7, {curve:d3.curveBasis});
g.setEdge(0, 8, {curve:d3.curveBasis});
g.setEdge(0, 9, {curve:d3.curveBasis});
g.setEdge(1, 9, {curve:d3.curveBasis});
g.setEdge(14, 29, {curve:d3.curveBasis});
g.setEdge(15, 29, {curve:d3.curveBasis});
g.setEdge(16, 29, {curve:d3.curveBasis});
g.setEdge(17, 29, {curve:d3.curveBasis});
g.setEdge(18, 29, {curve:d3.curveBasis});
g.setEdge(19, 29, {curve:d3.curveBasis});
g.setEdge(20, 29, {curve:d3.curveBasis});


// Set up edges, no special attributes.

// Create the renderer
let render = new dagreD3.render();
//render.createEdgePaths(createEdgePaths);

// Set up an SVG group so that we can translate the final graph.
let svg = d3.select("svg"),
  svgGroup = svg.append("g");


//From github documentation
inner = d3.select("svg g"),
zoom = d3.zoom().on("zoom", function() {
  inner.attr("transform", d3.event.transform);
});
svg.call(zoom);
// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

// Center the graph
let xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
svg.attr("height", g.graph().height + 40);

//highlight edges
let everyNode = svg.selectAll("g.nodes rect");
let testpath = d3.selectAll('g.edgePath path');
let everyPath = d3.selectAll('g.edgePath').select('.path');
let node = svg.selectAll(".node");

//highlight nodes	
svg.selectAll("g.nodes text")
  .on("mouseover", function(d) {
	//Hiding each path and node first
    everyPath.style("opacity", 0.1);
    everyNode.style("opacity", 0.1);
	  let connectedEdges = g.nodeEdges(d)
		neighbors = g.neighbors(d);
    everyPath.each(function(node) {
      for (let i = 0; i < connectedEdges.length; i++) {

		//If the node is connected to the edge in question at any end
        if ((connectedEdges[i].w == node.w && d == node.w) || (connectedEdges[i].v == node.v && d == node.v)) {
          d3.select(this).style("opacity", 1); //reset opacity;
        }
      }
    })
    everyNode.each(function(node) {
      
      if (d == node) {
        
        d3.select(this).style("opacity",1)
      };
      for (var i = 0; i < d.length; i++){
        if (neighbors[i] == d) {
          d3.select(this).style("opacity",1);                                 
        }				
      }
    })
  })
  .on("mouseout", function() {
    everyNode.style("opacity", 1);
    everyPath.style("opacity", 1);
  })