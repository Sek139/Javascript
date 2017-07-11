var airlines = new Array();
airlines[0] = "air france";
airlines[1] = "transavia";
airlines[2] = "corse air";
airlines[3] = "ethiopian airlines";
airlines[4] = "royal air maroc";
airlines[5] = "ryan air";
airlines[6] = "delta";
airlines[7] = "air ivoire";

function output() {
    var output = " the position of air ivoire is: " + airlines.indexOf("air ivoire");
    document.getElementById("output").innerHTML = output;
    airlines.sort();
    for (var i = 0; i < airlines.length; i++)
    {
        document.getElementById("output").innerHTML += "<br/>" + airlines[i];
    }

}