function myFunction() {
    var input, filter, ul, li, a, b, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (b = 0; b < li.length; b++) {
        a = li[b].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[b].style.display = "";
        } else {
            li[b].style.display = "none";
        }
    }
}
