//
function display(value) {
    document.getElementById("show").value += value;
}
 
// This function evaluates the expression and returns the result
function calculation() {
    var p = document.getElementById("show").value;
    var q = eval(p);
    document.getElementById("show").value = q;
}
function clscreen() {
    document.getElementById("show").value = "";
}