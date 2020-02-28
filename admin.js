const profiles = JSON.parse(sessionStorage.getItem('profile'))
if(!profile.admin){
    alert("Invalid access to the page!");
}else{
    /* Push user info to the page  */
    const username_field = document.querySelector("#username");
    username_field.textContent = profile.username;
    
}
