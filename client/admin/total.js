async function get_courses() {
    const url = "http://localhost:5001/api/v1/programs/getCourses"
    const request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }    
    })
    const response = await fetch(request);
    return response.json()
}

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

async function get_courses() {
    const url = "http://localhost:5001/api/v1/programs/getCourses"
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

async function loading_courses(){
    let courses = await get_courses()
    const table = document.querySelector('tbody')
    for(let i=0;i<courses.length;i++){
        let campus = ''
        switch(courses[i].courseCode.substr(7,8)){
            case '1':
                campus = "St.George"
                break;
            case '5':
                campus = "Mississauga"
        }
        /* Buttons */
        const delete_button = document.createElement('td')
        delete_button.setAttribute('class','tb')
        delete_button.setAttribute('id','opt')
        const button1 = document.createElement('button')
        button1.setAttribute('class','ui primary button')
        button1.setAttribute('id','delete_course')
        button1.innerText = 'Delete'
        delete_button.appendChild(button1)
        const edit_button = document.createElement('td')
        edit_button.setAttribute('class','tb')
        edit_button.setAttribute('id','opt')
        const button2 = document.createElement('button')
        button2.setAttribute('class','ui primary button')
        button2.setAttribute('id','edit_course')
        button2.innerText ='Edit'
        edit_button.appendChild(button2)
        const course = document.createElement('tr')
        course.setAttribute('class','course')
        course.setAttribute('id',courses[i].courseCode)
        const course_code = document.createElement('td')
        course_code.setAttribute('class','tb')
        course_code.innerText=courses[i].courseCode
        const course_name = document.createElement('td')
        course_name.setAttribute('class','tb')
        course_name.innerText=courses[i].data.courseTitle
        const course_br = document.createElement('td')
        course_br.setAttribute('class','tb')
        course_br.innerText =courses[i].data.breadthCategories
        const course_distribution = document.createElement('td')
        course_distribution.setAttribute('class','tb')
        course_distribution.innerText =courses[i].data.distributionCategories
        const course_campus = document.createElement('td')
        course_campus.setAttribute('class','tb')
        course_campus.innerText=campus
        course.appendChild(course_code)
        course.appendChild(course_name)
        course.appendChild(course_br)
        course.appendChild(course_distribution)
        course.appendChild(course_campus)
        course.appendChild(delete_button)
        course.appendChild(edit_button)
        table.appendChild(course)
    }
}

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
        button1.setAttribute('id',programs[i].POStID)
        button1.innerText = 'Delete'
        delete_button.appendChild(button1)

        button1.addEventListener("click", delete_program)
        const edit_button = document.createElement('td')
        edit_button.setAttribute('class','tb')
        edit_button.setAttribute('id','opt')
        const button2 = document.createElement('button')
        button2.setAttribute('class','ui primary button')
        button2.setAttribute('id','edit_program')
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
        table.appendChild(program)
    }
}

async function load_profiles(){
    let profiles = await get_profiles()
    console.log(profiles)
    const table = document.querySelector('table')

    for(let i=0;i<profiles.length;i++){
        const profile = document.createElement('tr')
        const id_num = document.createElement('td')
        const username = document.createElement('td')
        const email = document.createElement('td')
        const delete_button = document.createElement('td')
        const del_but = document.createElement('button')

        id_num.setAttribute('class','tb')
        username.setAttribute('class','tb')
        email.setAttribute('class','tb')
        delete_button.setAttribute('class','tb')
        delete_button.setAttribute('id','opt')
        del_but.setAttribute('class','ui primary button')
        del_but.setAttribute('id',profiles[i].username)
        del_but.innerHTML = "Delete"
        delete_button.appendChild(del_but)
        del_but.addEventListener("click", delete_profile)
        id_num.innerHTML = i;
        username.innerHTML = profiles[i].username
        email.innerHTML = profiles[i].email

        profile.setAttribute('id',profiles[i].username)
        profile.appendChild(id_num)
        profile.appendChild(username)
        profile.appendChild(email)
        profile.appendChild(delete_button)
        
        table.appendChild(profile)
    }
}


async function load_courses(){
    let courses = await get_courses()
    
    const table = document.querySelector('table')

    for(let i=0;i<courses.length;i++){
        const course = courses[i].data
        
        const course_row = document.createElement('tr')
        const course_id = document.createElement('td')
        const course_name = document.createElement('td')
        const course_code = document.createElement('td')
        const delete_button = document.createElement('td')
        const del_but = document.createElement('button')

        course_id.setAttribute('class','tb')
        course_name.setAttribute('class','tb')
        course_code.setAttribute('class','tb')
        delete_button.setAttribute('class','tb')
        delete_button.setAttribute('id','opt')
        del_but.setAttribute('class','ui primary button')
        del_but.setAttribute('id',courses[i].courseCode)
        del_but.innerHTML = "Delete"
        delete_button.appendChild(del_but)
        del_but.addEventListener("click", delete_course)
        course_id.innerHTML = i;
        course_name.innerHTML = course.courseTitle
        course_code.innerHTML = courses[i].courseCode

        
        course_row.appendChild(course_id)
        course_row.appendChild(course_name)
        course_row.appendChild(course_code)
        course_row.appendChild(delete_button)
        
        table.appendChild(course_row)
    }
}


if(course_page != null){
    loading_courses()
    course_page.addEventListener('click', delete_course);
    course_page.addEventListener('click', edit_course);
}
else if(profile_page != null){
    load_profiles()
}
else if(program_page != null){
    loading_programs()
}

function delete_course(e){
    console.log(e.target.id)
    var conf = confirm('Are you sure?')
    if(conf){
        del_courses(e.target.id)
    }
    window.location.reload()
}

function delete_profile(e){
    console.log(e.target.id)
    var conf = confirm('Are you sure?')
    if(conf){
        del_username(e.target.id)
    }
    window.location.reload()
}

async function delete_program(e){
    var conf = confirm('Are you sure?')
    if(conf){
        del_program(e.target.id)
    }
    window.location.reload()
}