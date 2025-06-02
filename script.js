var skilllinks = document.getElementsByClassName("skill-link");
var skillcontents = document.getElementsByClassName("skill-contents");

function opentab(tabname) {
    for (skilllink of skilllinks) {
        skilllink.classList.remove("active-link");
    }
    for (skillcontent of skillcontents) {
        skillcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}