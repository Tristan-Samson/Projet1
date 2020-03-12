function hide(){
    var x = document.getElementById("hidden_menu");
    if(x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}