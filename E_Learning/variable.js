var zipCode = "44000";
var town;

function checkZipCode() {

    switch (zipCode) {

        case "44000":
            town = "Nantes";
            break;
        case "44260":
            town = "La Chapelle Launay";
            break;
        case "44120":
            town = "Cordemais";
            break;
        default:
            town = "Pas dans la liste"

    }
    document.getElementById("output").innerHTML = "ZIPCODE:   " + zipCode + "   town:" + town;

}
