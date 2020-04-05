
var g = new dagreD3.graphlib.Graph({compound:true})
.setGraph({edgesep: 10, ranksep: 500, nodesep: 18})
.setDefaultEdgeLabel(function() { return {}; });
const log = console.log

function getprogram(program) {
    log("get program is running")
    const url = "http://localhost:5001/api/v1/programs/getProgram"
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({code: program}),
        headers: {
            'Content-Type': 'application/json'
        }    
    })
    fetch(request).then((res) => {
        if (res.status === 200) {
            //draw graph
            return res.json()
        }
        else {
            return false
        }
    })
    .then((info) =>{
        log("The info: " + JSON.stringify(info))
        draw_program(info)
    })
    .catch((error) => {
        log("error occured")
        log(error)
        return false
    })

}

async function get_course(course) {
    const url = "http://localhost:5001/api/v1/programs/getCourse"
    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({courseCode: course}),
        headers: {
            'Content-Type': 'application/json'
        }    
    })
    const response = await fetch(request);
    return response.json()
}

async function edge_setter(course){
    
    let course_info = await get_course(course)
    if(course_info.prerequisite.length != 0){
        //prerequisite exits
        log(course)
        course_info.prerequisite.forEach((prereq)=>{
            if(prereq.substr(0,3)== 'MAT'||prereq.substr(0,3)== 'STA'||prereq.substr(0,3)== 'CSC'){
                log("adding edge for prereq " + prereq)
                g.setNode(prereq,{label:prereq,style:"fill:#7c8e51"})
                g.setEdge(prereq,course,{label: "prerequisite",curve:d3.curveBasis})
            }
            return true
        })
    }
    if(course_info.corequisite.length != 0){
        //prerequisite exits
        course_info.corequisite.forEach((coreq)=>{
            if(coreq.substr(0,3)== 'MAT'||coreq.substr(0,3)== 'STA'||coreq.substr(0,3)== 'CSC'){
                log("adding edge for coreq "+coreq)
                g.setNode(coreq,{label:coreq,style:"fill:#7c8e51"})
                g.setEdge(coreq,course,{label: "corequisite",curve:d3.curveBasis,arrowheadStyle:"stroke: #a7d0b8;fill:#a7d0b8"})
            }
            return true
        })
    }
}

function requirement_generator(requirement,type){
    switch(requirement.requisiteType){
        case "MINIMUM":
            g.setNode(requirement.rid,{label:"One of the "+type+" in the group", clusterLabelPos: 'bottom',style:"fill: #bad5dc"});
            requirement.code.forEach((course)=>{
                
                if(type == "course"){
                    edge_setter(course)
                }
                g.setParent(course, requirement.rid)
            });
            break;
        case "ALL":
            g.setNode(requirement.rid,{label:"All of the "+type+" in the group", clusterLabelPos: 'bottom',style:"fill: #b4b4af"});
            requirement.code.forEach((course)=>{
                
                if(type == "course"){
                    edge_setter(course)
                }
                g.setParent(course, requirement.rid)
            });
            break;
        case "ANY":
            g.setNode(requirement.rid,{label:"Any of the "+type+" in the group", clusterLabelPos: 'bottom',style:"fill: #e3e8ee"});
            requirement.code.forEach((course)=>{
               
                if(type == "course"){
                    edge_setter(course)
                }
                g.setParent(course, requirement.rid)
            });
            break;
        case "EXCLUDE":
            g.setNode(requirement.rid,{label:"Not accept", clusterLabelPos: 'bottom',style:"fill: #d4dfe5"});
            requirement.code.forEach((course)=>{
                
                if(type == "course"){
                    edge_setter(course)
                }
                g.setParent(course, requirement.rid)
            });
            break;
        case "NOF":
            g.setNode(requirement.rid,{label:requirement.nof+" of the course in the group", clusterLabelPos: 'bottom',style:"fill: #a5b4b9"});
            requirement.code.forEach((course)=>{
                
                if(type == "course"){
                    edge_setter(course)
                }
                g.setParent(course, requirement.rid)
            });
            break;
    }
}

async function draw_program(program_info){
    let name = program_info.name;
    let type = program_info.type;
    let ori_campus = program_info.campus;
    let campus = "";
    let req_credit = program_info.required_credits;
    let note = program_info.notes;
    let subject_comb = program_info.subjectPOStCombinations;
    let required_courses = program_info.required_courses;
    switch(ori_campus){
        case "stg":
            campus = "St. George Campus"
            break;
        case "eri":
            campus = "Mississauga Campus"
    }
    // bottom layer of the graph
    // g.setNode('program', {label: name+" "+type+" holds at "+campus+" Require Credits: "+req_credit, clusterLabelPos: 'top', style: 'fill: #d3d7e8'});
    /* creating all course node */
    for (let i = 0;i<required_courses.length;i++){
        const requirement = required_courses[i];
        // g.setParent(requirement.rid,'program')
        if(requirement.courseEntity == true){
            //course requirement
            requirement.code.forEach((course)=>{
                log(course)
                g.setNode(course,{label:course,style:"fill:#7c8e51"})
            })
        }else if(requirement.categoryEntity == true){
            //category requirement
            requirement.code.forEach((category)=>{
                log(category)
                g.setNode(category,{label:category,style:"fill:#384d47"})
            })
        }
    }
    /* Creating relation */
    log("relation here!")
    for (let i = 0;i<required_courses.length;i++){
        const requirement = required_courses[i];
        if(requirement.courseEntity == true){
            for(let j=0;j<requirement.code.length;j++){
                log("edge setter called")
                await edge_setter(requirement.code[j])
            }
        }
    }
    // for (let i = 0;i<required_courses.length;i++){
    //     const requirement = required_courses[i];
    //     if(requirement.courseEntity == true){
    //         //course requirement
    //         requirement_generator(requirement,"course")
    //     }else if(requirement.categoryEntity == true){
    //         //category requirement
    //         requirement_generator(requirement,"category")
    //     }else if(requirement.setholder == true){
    //         //skip setholder
    //         continue
    //     }else if(requirement.combination == true){
    //         //combination dealer
    //         g.setNode(requirement.rid, {style: 'fill: #d3d7e8'});
    //         requirement.code.forEach((rid)=>{
    //             const sub_category = required_courses[rid]
    //             log(sub_category)
    //             if(sub_category.courseEntity){
    //                 //course requirement
    //                 requirement_generator(sub_category,"course")
                    
    //             }else if(sub_category.categoryEntity){
    //                 //category requirement
    //                 requirement_generator(sub_category,"category")
    //             }
    //             g.setParent(sub_category,requirement.rid)
    //         })
    //     }
    // }
    log(g.nodes())
    g.nodes().forEach(function(v) {
        var node = g.node(v);
        // Round the corners of the nodes
        node.rx = node.ry = 5;
        
      });

    // Create the renderer
    var render = new dagreD3.render();
    /* Putting notes here */
    const newelement = document.createElement("p");
    newelement.textContent = "Notes:"+note
    document.body.appendChild(newelement)
    // Set up an SVG group so that we can translate the final graph.
    var svg = d3.select("svg"),
        svgGroup = svg.append("g");
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
    return true
}