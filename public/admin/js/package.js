// package validation form

function pkgValidateForm() {
    var packageType = document.getElementById("packageType");
    var packageDesc = document.getElementById("packageDesc");



    if (!packageType.checkValidity()) {
        document.getElementById("demo").innerHTML = packageType.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "";

    }


    if (!packageDesc.checkValidity()) {
        document.getElementById("demo1").innerHTML = packageDesc.validationMessage;

    } else {
        document.getElementById("demo1").innerHTML = "";
    }



}


// package validation form

function indiPkgValidateForm() {



    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var location = document.getElementById("location");
    var duration = document.getElementById("duration");
    var datePicker = document.getElementById("datePicker");
    var datePicker1 = document.getElementById("datePicker1");

    var ticketQuantity = document.getElementById("ticketQuantity");

    var price = document.getElementById("price");
    var packageType = document.getElementById("packageType");



    if (!title.checkValidity()) {
        document.getElementById("demo").innerHTML = title.validationMessage;

    } else {
        document.getElementById("demo").innerHTML = "";

    }


    if (!description.checkValidity()) {
        document.getElementById("demo1").innerHTML = description.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "";
    }


    if (!location.checkValidity()) {
        document.getElementById("demo2").innerHTML = location.validationMessage;
    } else {
        document.getElementById("demo2").innerHTML = "";
    }

    if (!duration.checkValidity()) {
        document.getElementById("demo3").innerHTML = duration.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }


    if (!datePicker.checkValidity()) {
        document.getElementById("demo4").innerHTML = datePicker.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }

    if (!datePicker1.checkValidity()) {
        document.getElementById("demo5").innerHTML = datePicker1.validationMessage;
    } else {
        document.getElementById("demo5").innerHTML = "";
    }

    if (!ticketQuantity.checkValidity()) {
        document.getElementById("demo6").innerHTML = ticketQuantity.validationMessage;
    } else {
        document.getElementById("demo6").innerHTML = "";
    }

    if (!price.checkValidity()) {
        document.getElementById("demo7").innerHTML = price.validationMessage;
    } else {
        document.getElementById("demo7").innerHTML = "";

    }

    if (packageType.value == "") {

        document.getElementById("demo8").innerHTML = packageType.validationMessage;
        return false;


    } else {
        document.getElementById("demo8").innerHTML = "";

    }


}



// about tour form validation
function aboutTourValidateForm() {

    var placesCovered = document.getElementById("placesCovered");
    var inclusions = document.getElementById("inclusions");
    var exclusions = document.getElementById("exclusions");
    var datePicker1 = document.getElementById("datePicker1");
    var packageType = document.getElementById("packageType");
    var individualPackage = document.getElementById("individualPackage");


    if (!placesCovered.checkValidity()) {
        document.getElementById("demo1").innerHTML = placesCovered.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "";
    }


    if (!inclusions.checkValidity()) {
        document.getElementById("demo2").innerHTML = inclusions.validationMessage;
    } else {
        document.getElementById("demo2").innerHTML = "";
    }

    if (!exclusions.checkValidity()) {
        document.getElementById("demo3").innerHTML = exclusions.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }


    if (!datePicker1.checkValidity()) {
        document.getElementById("demo4").innerHTML = datePicker1.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }


    if (packageType.value == "") {
        document.getElementById("demo5").innerHTML = packageType.validationMessage;
    } else {
        document.getElementById("demo5").innerHTML = "";
    }


    if (individualPackage.value == "") {
        document.getElementById("demo6").innerHTML = individualPackage.validationMessage;
    } else {
        document.getElementById("demo6").innerHTML = "";
    }

}
