function openNav() {
    let width = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width-readed');
    document.getElementById("mySidepanel").style.width = width;
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
}