function openNav() {
    let width = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width-readed');
    document.getElementById("mySidepanel").style.width = width;
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
}

  function slowScrollBackground() {
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("background");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }