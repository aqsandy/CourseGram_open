const storage = new Storage()

if(!storage.checkAdmin()){
    alert("Invalid access to the page!");
    window.location.href = './index.html'
}else{
    /* Push user info to the page  */
    const username_field = document.querySelector("#username");
    username_field.textContent = profile.username;

}
