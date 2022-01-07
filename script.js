let ktg = document.getElementById("ktg");
let gtk = document.getElementById("gtk");
ktg.addEventListener ("click", function () {
    var ktgAsk = prompt ("Type Kilograms");
    var ktgAns = ktgAsk * 1000;
    alert ("The Answer Is " + ktgAns);
})
gtk.addEventListener ("click", function () {
    var gtkAsk = prompt ("Type Grams");
    var gtkAns = gtkAsk / 1000;
    alert ("The Answer Is " + gtkAns);
})