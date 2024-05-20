function myFunction() {
    document.getElementById("menuDropDown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var drop = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < drop.length; i++) {
            var openDropdown = drop[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}