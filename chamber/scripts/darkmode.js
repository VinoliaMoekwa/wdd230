var darkmode = document.getElementById("icon");

darkmode.onclick = function(){

    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains ("darktheme")){
        icon.src = "images/lightmode.png";
    }else {
    icon.src="images/darkmode.png";
    }
}

