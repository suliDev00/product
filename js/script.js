//-------------------------------------
//theme mode switcher
document.getElementById("mode").addEventListener("click", function () {
    let mode = document.getElementById("mode");
    let checked = document.getElementById("mode").checked;
    if (!mode == checked) {
        document.getElementsByTagName("body")[0].style.background = "#fff";
        document.getElementsByClassName("header")[0].style.background = "#fff";
        document.getElementsByClassName("box")[0].style.background = "#fff";
        document.getElementsByClassName("box")[0].style.boxShadow =
            " 2px 2px 5px rgb(0,0,0,0.2)";
        document.getElementsByClassName("mbox")[0].style.background = "#fff";
        document.getElementsByClassName("mbox")[0].style.boxShadow =
            " 2px 2px 5px rgb(0,0,0,0.2)";
        document.getElementsByClassName("htext")[0].style.color = "black";
        document.getElementById("mlb").style.color = "black";
    } else {
        document.getElementsByTagName("body")[0].style.background = "rgb(50,50,50)";
        document.getElementsByClassName("header")[0].style.background = "#000";
        document.getElementsByClassName("box")[0].style.background = "#000";
        document.getElementsByClassName("box")[0].style.boxShadow =
            " 2px 2px 15px grey";
        document.getElementsByClassName("mbox")[0].style.background = "#000";
        document.getElementsByClassName("mbox")[0].style.boxShadow =
            " 2px 2px 15px grey";
        document.getElementsByClassName("htext")[0].style.color = "white";
        document.getElementById("mlb").style.color = "white";
    }
});


