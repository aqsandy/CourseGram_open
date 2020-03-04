const storage = new Storage()
if(!storage.checkAdmin()){
    alert("Invalid access to the page!");
    window.location.href = './index.html'
}else{
    /* Push user info to the page  */
    // const username_field = document.querySelector("#username");
    // username_field.textContent = storage.getUsername();
}
function load_profile(){
    const info = document.querySelector("#info");
    console.log(info);
    if(info.querySelector("#embed")!=='null'){
        //embeded page found in the div
        info.removeChild(info.childNodes[0]);
    }
    const newelement = document.createElement("embed");
    newelement.setAttribute("src","./admin/profile.html");
    newelement.setAttribute("id", "embed");
    newelement.setAttribute("height","100%");
    newelement.setAttribute("weight","100%");
    info.appendChild(newelement);
}
function load_program(){
    const info = document.querySelector("#info");
    if(info.querySelector("#embed")!=='null'){
        //embeded page found in the div
        info.removeChild(info.childNodes[0]);
    }
    const newelement = document.createElement("embed");
    newelement.setAttribute("src","./admin/program.html");
    newelement.setAttribute("id", "embed");
    info.appendChild(newelement);
}
function load_course(){
    const info = document.querySelector("#info");
    if(info.querySelector("#embed")!=='null'){
        //embeded page found in the div
        info.removeChild(info.childNodes[0]);
    }
    const newelement = document.createElement("embed");
    newelement.setAttribute("src","./admin/course.html");
    newelement.setAttribute("id", "embed");
    info.appendChild(newelement);
}
function load_requests(){
    const info = document.querySelector("#info");
    if(info.querySelector("#embed")!=='null'){
        //embeded page found in the div
        info.removeChild(info.childNodes[0]);
    }
    const newelement = document.createElement("embed");
    newelement.setAttribute("src","./admin/requests.html");
    newelement.setAttribute("id", "embed");
    info.appendChild(newelement);
}
function load_manage(){
    const info = document.querySelector("#info");
    if(info.querySelector("#embed")!=='null'){
        //embeded page found in the div
        info.removeChild(info.childNodes[0]);
    }
    const newelement = document.createElement("embed");
    newelement.setAttribute("src","./admin/manage.html");
    newelement.setAttribute("id", "embed");
    info.appendChild(newelement);
}