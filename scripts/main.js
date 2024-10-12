function openMenu() {
    var btn = document.getElementById("silentMenu")
    var list = document.getElementById("list")
    
    if(list.style.display === "none") {
        list.style.display = "inline";
    } else {
        list.style.display = "none"
    }
}