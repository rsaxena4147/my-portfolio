var titles = document.getElementsByClassName("title")
var skills = document.getElementsByClassName("skills")

function opentab(tabname){
    for(title of titles){
        title.classList.remove("active-link");
    }
    for(skillii of skills){
        skillii.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var side = document.getElementById("sidemenu");
function openmenu(){
    side.style.right = "0";
}
function closemenu(){
    side.style.right = "-200px";
}