// Conversion of temperature function
function temperature(){
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}

// Conversion of weight function
function weight(){
    var kg = document.getElementById("kilograms").value;
    var p = (kg * 2.2)
    document.getElementById("pounds").value = p
}

// Conversion of distance function
function distance(){
    var km = document.getElementById("kilometres").value;
    var m = (km * 0.62137)
    document.getElementById("miles").value = m
}