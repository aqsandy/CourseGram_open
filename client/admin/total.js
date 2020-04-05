async function get_programs() {
    const url = "http://localhost:5001/api/v1/programs/getPrograms"
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }    
    })
    const response = await fetch(request);
    return response.json()
}

const course_page = document.querySelector("#course");
const profile_page = document.querySelector("#profile");
const program_page = document.querySelector("#program");
async function loading_programs(){
    let programs = await get_programs()
    const table = document.querySelector('tbody')
    for(let i=0;i<programs.length;i++){
        let campus = ''
        switch(programs[i].campus){
            case 'stg':
                campus = "St.George"
                break;
            case 'eri':
                campus = "Mississauga"
        }
        /* Buttons */
        const delete_button = document.createElement('td')
        delete_button.setAttribute('class','tb')
        delete_button.setAttribute('id','opt')
        const button1 = document.createElement('button')
        button1.setAttribute('class','ui primary button')
        button1.setAttribute('id','delete_program')
        button1.innerText = 'Delete'
        delete_button.appendChild(button1)
        const edit_button = document.createElement('td')
        edit_button.setAttribute('class','tb')
        edit_button.setAttribute('id','opt')
        const button2 = document.createElement('button')
        button2.setAttribute('class','ui primary button')
        button2.setAttribute('id','delete_program')
        button2.innerText ='Edit'
        edit_button.appendChild(button2)
        const program = document.createElement('tr')
        program.setAttribute('class','program')
        program.setAttribute('id',programs[i].POStID)
        const program_type = document.createElement('td')
        program_type.setAttribute('class','tb')
        program_type.innerText=programs[i].type
        const program_name = document.createElement('td')
        program_name.setAttribute('class','tb')
        program_name.innerText=programs[i].name
        const program_code = document.createElement('td')
        program_code.setAttribute('class','tb')
        program_code.innerText =programs[i].POStID
        const program_campus = document.createElement('td')
        program_campus.setAttribute('class','tb')
        program_campus.innerText=campus
        program.appendChild(program_type)
        program.appendChild(program_name)
        program.appendChild(program_code)
        program.appendChild(program_campus)
        program.appendChild(delete_button)
        program.appendChild(edit_button)
        table.appendChild(program)
    }
}
if(course_page != null){
    course_page.addEventListener('click', delete_course);
    course_page.addEventListener('click', edit_course);
}
else if(profile_page != null){
    profile_page.addEventListener('click', delete_profile);
    profile_page.addEventListener('click', edit_profile);
}
else if(program_page != null){
    loading_programs()
    program_page.addEventListener('click', delete_program);
    program_page.addEventListener('click', edit_program);
}
function edit_course(e){
    e.preventDefault();
    if(e.target.getAttribute("id")=='edit_course'){
        alert("Not available yet!");
    }
}
function delete_course(e){
    e.preventDefault();
    console.log(e.target.getAttribute("id"));
    if(e.target.getAttribute("id")=='delete_course'){
        console.log(e.target.parentElement.parentElement);
        alert("Not available yet! Currently deleting local data!");
        course_page.children[0].children[0].removeChild(e.target.parentElement.parentElement);
    }
}
function edit_profile(e){
    e.preventDefault();
    if(e.target.getAttribute("id")=='edit_profile'){
        alert("Not available yet!");
    }
}
function delete_profile(e){
    e.preventDefault();
    if(e.target.getAttribute("id")=='delete_profile'){
        console.log(e.target.parentElement.parentElement);
        alert("Not available yet! Currently deleting local data!");
        profile_page.children[0].children[0].removeChild(e.target.parentElement.parentElement);
    }
}

function edit_program(e){
    e.preventDefault();
    if(e.target.getAttribute("id")=='edit_program'){
        alert("Not available yet!");
    }
}
async function delete_program(e){
    e.preventDefault();
    if(e.target.getAttribute("id")=='delete_program'){
        console.log(e.target.parentElement.parentElement);
        alert("Not available yet! Currently deleting local data!");
        program_page.children[0].children[0].removeChild(e.target.parentElement.parentElement);
    }
}