// sessionStorage = window.opener.sessionStorage;
// const storage = new Storage();
//     /* Push user info to the page  */
//     const username_field = document.querySelector("#username");
//     username_field.textContent = storage.getUsername();
//     /* For admin profile page */
//     if(document.querySelector("#profile")!=='null'){
//         //In profile page 
//         let profiles = JSON.parse(sessionStorage.getItem('profiles'));
//         console.log(profiles);
//         // for(let i=0;i<profiles.length;i++){

//         // }

// }

const course_page = document.querySelector("#course");
const profile_page = document.querySelector("#profile");
const program_page = document.querySelector("#program");
if(course_page != null){
    course_page.addEventListener('click', delete_course);
    course_page.addEventListener('click', edit_course);
}
else if(profile_page != null){
    profile_page.addEventListener('click', delete_profile);
    profile_page.addEventListener('click', edit_profile);
}
else if(program_page != null){
    program_page.addEventListener('click', delete_program);
    program_page.addEventListener('click', edit_program);
}
function edit_course(e){
    e.preventDefault();
    if(e.target.classList.contains('edit_course')){
        alert("Not available yet!");
    }
}
function delete_course(e){
    e.preventDefault();
    if(e.target.classList.contains('delete_course')){
        console.log(course_page.children[0]);
        console.log(e.target.parentElement.parentElement);
        course_page.children[0].children[0].removeChild(e.target.parentElement.parentElement);
    }
}
function edit_profile(e){
    e.preventDefault();
    if(e.target.classList.contains('edit_profile')){
        alert("Not available yet!");
    }
}
function delete_profile(e){
    e.preventDefault();
    if(e.target.classList.contains('delete_profile')){
        console.log(e.target.parentElement.parentElement);
        profile_page.children[0].children[0].removeChild(e.target.parentElement.parentElement);
    }
}

function edit_program(e){
    e.preventDefault();
    if(e.target.classList.contains('edit_program')){
        alert("Not available yet!");
    }
}
function delete_program(e){
    e.preventDefault();
    if(e.target.classList.contains('delete_program')){
        console.log(e.target.parentElement.parentElement);
        program_page.children[0].children[0].removeChild(e.target.parentElement.parentElement);
    }
}