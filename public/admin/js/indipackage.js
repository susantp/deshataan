function validateForm() {

    var status = false;

    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var location = document.getElementById("location");
    var duration = document.getElementById("duration");
    var datePicker = document.getElementById("datePicker");
    var datePicker1 = document.getElementById("datePicker1");

    var ticketQuantity = document.getElementById("ticketQuantity");

    var price = document.getElementById("price");
    var packageType = document.getElementById("packageType");

    // var = document.getElementById("");

    if (!title.checkValidity()) {
        document.getElementById("demo").innerHTML = title.validationMessage;
        this.status = false;
    } else {
        document.getElementById("demo").innerHTML = "";
        this.status = true;
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

    if (!packageType.checkValidity()) {
        document.getElementById("demo8").innerHTML = packageType.validationMessage;
    } else {
        document.getElementById("demo8").innerHTML = "";

    }








}
