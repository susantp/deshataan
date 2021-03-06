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


// individual package photo gallery form validation

// image file validator
function isFileImage(file) {
    // const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];

    // return file && acceptedImageTypes.includes(file['type'])
    var allowedExtension = ['jpeg', 'jpg', 'png', 'gif'];
    return allowedExtension.includes(file);
}

function photoGalleryValidateForm() {

    var formm = document.getElementById('pgform');
    var imageTitle = document.getElementById("imageTitle");
    var image = document.getElementById("image");
    var packageType = document.getElementById("packageType");
    var individualPackage = document.getElementById("individualPackage");
    // var = document.getElementById("");
    // var = document.getElementById("");

    var allowedExtension = ['jpeg', 'jpg', 'png', 'gif'];
    var fileExtension = image.value.split('.').pop().toLowerCase();

    if (!imageTitle.checkValidity()) {
        document.getElementById("demo1").innerHTML = imageTitle.validationMessage;

    } else {
        document.getElementById("demo1").innerHTML = "";
    }

    if (image.value == "") {
        document.getElementById("demo2").innerHTML = "Please select an image";
        formm.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    } else {
        if (isFileImage(fileExtension)) {
            document.getElementById("demo2").innerHTML = "";
        } else {
            formm.addEventListener('submit', function(e) {
                e.preventDefault();
            });
            document.getElementById("demo2").innerHTML = "Invalid image format";
            setTimeout(function() {
                document.getElementById("demo2").style.visibility = "hidden";
            }, 3000);

        }
    }

    if (packageType.value == "") {
        document.getElementById("demo3").innerHTML = packageType.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }


    if (individualPackage.value == "") {
        document.getElementById("demo4").innerHTML = individualPackage.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }





}

// trip information form validation

function tripInformationValidateForm() {
    var arrivalDate = document.getElementById("arrivalDate");
    var departureDate = document.getElementById("departureDate");
    var inclusions = document.getElementById("inclusions");
    var packageType = document.getElementById("packageType");
    var individualPackage = document.getElementById("individualPackage");

    if (!arrivalDate.checkValidity()) {
        document.getElementById("demo1").innerHTML = arrivalDate.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "";
    }

    if (!departureDate.checkValidity()) {
        document.getElementById("demo2").innerHTML = departureDate.validationMessage;
    } else {
        document.getElementById("demo2").innerHTML = "";
    }

    if (!inclusions.checkValidity()) {
        document.getElementById("demo3").innerHTML = inclusions.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }

    if (packageType.value == "") {
        document.getElementById("demo4").innerHTML = packageType.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }


    if (individualPackage.value == "") {
        document.getElementById("demo5").innerHTML = individualPackage.validationMessage;
    } else {
        document.getElementById("demo5").innerHTML = "";
    }

}


// itinerary form validation

function itineraryValidateForm() {
    var itineraryTitle = document.getElementById("itineraryTitle");
    var itineraryDesc = document.getElementById("itineraryDesc");
    var packageType = document.getElementById("packageType");
    var individualPackage = document.getElementById("individualPackage");

    if (!itineraryTitle.checkValidity()) {
        document.getElementById("demo1").innerHTML = itineraryTitle.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "";
    }

    if (!itineraryDesc.checkValidity()) {
        document.getElementById("demo2").innerHTML = itineraryDesc.validationMessage;
    } else {
        document.getElementById("demo2").innerHTML = "";
    }


    if (packageType.value == "") {
        document.getElementById("demo3").innerHTML = packageType.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }


    if (individualPackage.value == "") {
        document.getElementById("demo4").innerHTML = individualPackage.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }
}

// hotels form validation started


// add hotel form validation
function addHoteValidateForm() {
    var hotelTitle = document.getElementById("hotelTitle");
    var hotelLocation = document.getElementById("hotelLocation");
    var hotelContact = document.getElementById("hotelContact");
    var hotelPrice = document.getElementById("hotelPrice");
    var availableRoom = document.getElementById("availableRoom");
    var hotelDesc = document.getElementById("hotelDesc");
    var hotelAmenities = document.getElementById("hotelAmenities");

    if (!hotelTitle.checkValidity()) {
        document.getElementById("demo1").innerHTML = hotelTitle.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "";
    }


    if (!hotelLocation.checkValidity()) {
        document.getElementById("demo2").innerHTML = hotelLocation.validationMessage;
    } else {
        document.getElementById("demo2").innerHTML = "";
    }

    if (!hotelContact.checkValidity()) {
        document.getElementById("demo3").innerHTML = hotelContact.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }


    if (!hotelPrice.checkValidity()) {
        document.getElementById("demo4").innerHTML = hotelPrice.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }

    if (!availableRoom.checkValidity()) {
        document.getElementById("demo5").innerHTML = availableRoom.validationMessage;
    } else {
        document.getElementById("demo5").innerHTML = "";
    }

    if (!hotelDesc.checkValidity()) {
        document.getElementById("demo6").innerHTML = hotelDesc.validationMessage;
    } else {
        document.getElementById("demo6").innerHTML = "";
    }

    if (!hotelAmenities.checkValidity()) {
        document.getElementById("demo7").innerHTML = hotelAmenities.validationMessage;
    } else {
        document.getElementById("demo7").innerHTML = "";
    }
}




// hotel special features form validation

function hotelSpecialFeatureValidateForm() {
    //  var = document.getElementById("")

    var placesCovered = document.getElementById("placesCovered");
    var inclusions = document.getElementById("inclusions");
    var exclusions = document.getElementById("exclusions");
    var datePicker = document.getElementById("datePicker");
    var hotelName = document.getElementById("hotelName");




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

    if (!datePicker.checkValidity()) {
        document.getElementById("demo4").innerHTML = datePicker.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }

    if (hotelName.value == "") {
        document.getElementById("demo5").innerHTML = hotelName.validationMessage;
    } else {
        document.getElementById("demo5").innerHTML = "";
    }

}

// form validation for hotel room availabilities
function hotelRoomAvaiValidateForm() {

    var title = document.getElementById("title");
    var amenities = document.getElementById("amenities");
    var includes = document.getElementById("includes");
    var maximumPerson = document.getElementById("maximumPerson");
    var price = document.getElementById("price");
    var hotelName = document.getElementById("hotelName");

    if (!title.checkValidity()) {
        document.getElementById("demo1").innerHTML = title.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "";
    }

    if (!amenities.checkValidity()) {
        document.getElementById("demo2").innerHTML = amenities.validationMessage;
    } else {
        document.getElementById("demo2").innerHTML = "";
    }


    if (!includes.checkValidity()) {
        document.getElementById("demo3").innerHTML = includes.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "";
    }

    if (!maximumPerson.checkValidity()) {
        document.getElementById("demo4").innerHTML = maximumPerson.validationMessage;
    } else {
        document.getElementById("demo4").innerHTML = "";
    }

    if (!price.checkValidity()) {
        document.getElementById("demo5").innerHTML = price.validationMessage;
    } else {
        document.getElementById("demo5").innerHTML = "";
    }

    if (hotelName.value == "") {
        document.getElementById("demo6").innerHTML = hotelName.validationMessage;
    } else {
        document.getElementById("demo6").innerHTML = "";
    }




}