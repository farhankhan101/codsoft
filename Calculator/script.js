// This function clears all the values
function clearScreen() {
    document.getElementById("show").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("show").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("show").value;
    var q = eval(p);
    document.getElementById("show").value = q;
}