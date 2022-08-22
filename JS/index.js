function MyHeaderNav() {
    var x = document.getElementById("myHeadernav");
    if (x.className === "header_nav") {
        x.className += " responsive";
    } else {
        x.className = "header_nav";
    }
}
