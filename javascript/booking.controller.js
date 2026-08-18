console.log("booking.controller.js loaded");

/* =========================================================
   NIVA SURGERY
   BOOKING CONTROLLER
========================================================= */

/*
   IMPORTANT:
   Frontend:
   http://10.139.138.46:5501

   Flask:
   http://10.139.138.46:5000
*/

const API_BASE_URL = "https://nivasurgery-backend-production-b016.up.railway.app";


/* =========================================================
   OPEN BOOKING
========================================================= */

function openBooking(serviceName) {

    const modal = document.getElementById("bookingModal");

    if (!modal) {
        console.error("bookingModal not found");
        return;
    }

    document.body.style.overflow = "hidden";

    modal.style.display = "flex";

    const serviceInput = document.getElementById("serviceType");

    if (serviceInput && serviceName) {
        serviceInput.value = serviceName;
    }

    resetBookingForm();
}


/* =========================================================
   CLOSE BOOKING
========================================================= */

function closeBooking() {

    const modal = document.getElementById("bookingModal");

    if (modal) {
        modal.style.display = "none";
    }

    document.body.style.overflow = "";

    resetBookingForm();
}


/* =========================================================
   RESET BOOKING FORM
========================================================= */

function resetBookingForm() {

    const mobile =
        document.getElementById("bookingMobile");

    const name =
        document.getElementById("custName");

    const address =
        document.getElementById("custAddress");

    const bookingSuccess =
        document.getElementById("bookingSuccess");

    const bookingHeading =
        document.querySelector("#bookingModal .booking-heading");

    const bookingFields =
        document.querySelectorAll("#bookingModal .booking-field");

    const primaryButton =
        document.querySelector("#bookingModal .primary-btn");


    if (mobile) {
        mobile.value = "";
    }

    if (name) {
        name.value = "";
    }

    if (address) {
        address.value = "";
    }


    /* Restore booking form */
    if (bookingHeading) {
        bookingHeading.style.display = "";
    }

    bookingFields.forEach(function (field) {
        field.style.display = "";
    });

    if (primaryButton) {
        primaryButton.style.display = "";
    }


    /* Hide success screen */
    if (bookingSuccess) {
        bookingSuccess.style.display = "none";
    }
}


/* =========================================================
   CONFIRM BOOKING
========================================================= */

async function confirmBooking() {

    console.log("CONFIRM BUTTON CLICKED");

    const mobileInput = document.getElementById("bookingMobile");
    const nameInput = document.getElementById("custName");
    const addressInput = document.getElementById("custAddress");
    const serviceInput = document.getElementById("serviceType");

    if (!mobileInput || !nameInput || !addressInput || !serviceInput) {

        console.error("Booking form fields missing");

        alert("Booking form is not configured correctly.");

        return;
    }


    const mobile = mobileInput.value.trim();
    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    const service = serviceInput.value.trim();


    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!/^\d{10}$/.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        mobileInput.focus();

        return;
    }


    if (!name) {

        alert("Please enter your name.");

        nameInput.focus();

        return;
    }


    if (!address) {

        alert("Please enter your address.");

        addressInput.focus();

        return;
    }


    if (!service) {

        alert("Service information is missing.");

        return;
    }


    /* =====================================================
       BUTTON LOADING
    ===================================================== */

    const confirmButton = document.querySelector(
        "#bookingModal .primary-btn"
    );

    let originalText = "Confirm Booking";

    if (confirmButton) {

        originalText = confirmButton.innerText;

        confirmButton.disabled = true;

        confirmButton.innerText = "Submitting...";
    }


    /* =====================================================
       DATA FOR FLASK
    ===================================================== */

    const bookingData = {

        name: name,

        mobile_no: mobile,

        email: "",

        service: service,

        message: "Booking from website",

        address: address

    };


    console.log("SENDING BOOKING DATA:", bookingData);


    /* =====================================================
       SEND TO FLASK
    ===================================================== */

    try {

const response = await fetch(
    `${API_BASE_URL}/api/web-leads`,
    {
        method: "POST",

        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        },

        body: JSON.stringify(bookingData)
    }
);


        console.log(
            "SERVER STATUS:",
            response.status
        );


        /* =================================================
           READ SERVER RESPONSE
        ================================================= */

        const data = await response.json().catch(() => null);


        console.log(
            "SERVER RESPONSE:",
            data
        );


        /* =================================================
           SERVER ERROR
        ================================================= */

        if (!response.ok) {

            const errorMessage =
                data?.error ||
                `Server returned HTTP ${response.status}`;

            throw new Error(errorMessage);
        }


        /* =================================================
           APPLICATION ERROR
        ================================================= */

        if (!data || data.success !== true) {

            throw new Error(
                data?.error ||
                "Booking could not be completed."
            );
        }


/* =================================================
   SUCCESS
================================================= */

console.log(
    "BOOKING SUCCESSFULLY SUBMITTED"
);

const bookingSuccess =
    document.getElementById("bookingSuccess");

if (bookingSuccess) {

    /* Hide booking form */
    const bookingHeading =
        document.querySelector("#bookingModal .booking-heading");

    const bookingFields =
        document.querySelectorAll("#bookingModal .booking-field");

    const primaryButton =
        document.querySelector("#bookingModal .primary-btn");

    if (bookingHeading) {
        bookingHeading.style.display = "none";
    }

    bookingFields.forEach(function (field) {
        field.style.display = "none";
    });

    if (primaryButton) {
        primaryButton.style.display = "none";
    }

    /* Show success screen */
    bookingSuccess.style.display = "block";
}

    } catch (error) {

        console.error(
            "BOOKING SERVER ERROR:",
            error
        );


        alert(
            "Cannot connect to server. Please try again."
        );


    } finally {

        if (confirmButton) {

            confirmButton.disabled = false;

            confirmButton.innerText = originalText;
        }

    }

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE MODAL
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById("bookingModal");

        if (!modal) return;


        if (
            event.target === modal
        ) {

            closeBooking();

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") return;


        const modal =
            document.getElementById("bookingModal");


        if (
            modal &&
            modal.style.display === "flex"
        ) {

            closeBooking();

        }

    }
);


/* =========================================================
   CALLBACK MODAL
   KEEPING EXISTING FUNCTIONALITY
========================================================= */

function openCallback(doctorName) {

    document.body.style.overflow = "hidden";


    const modal =
        document.getElementById("callbackModal");


    if (!modal) {

        console.error("callbackModal not found");

        return;
    }


    modal.style.display = "flex";


    const doctorInput =
        document.getElementById("callbackDoctor");


    if (doctorInput) {

        doctorInput.value =
            doctorName || "";

    }

}


function closeCallback() {

    const modal =
        document.getElementById("callbackModal");


    if (modal) {

        modal.style.display = "none";

    }


    document.body.style.overflow = "";

}


/* =========================================================
   CALLBACK SUBMISSION
========================================================= */

async function submitCallback() {

    const mobileInput =
        document.getElementById("callbackMobile");


    if (!mobileInput) {

        alert("Mobile number field not found.");

        return;
    }


    const mobile =
        mobileInput.value.trim();


    if (!/^\d{10}$/.test(mobile)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;
    }


    alert(
        "Thank you. Our team will call you back shortly."
    );


    closeCallback();

}


/* =========================================================
   CONSULTATION FORM
========================================================= */

async function submitConsultForm() {

    console.log(
        "submitConsultForm fired"
    );


    const nameInput =
        document.getElementById("consultName");


    const mobileInput =
        document.getElementById("consultMobile");


    if (!nameInput || !mobileInput) {

        alert(
            "Consultation form fields not found."
        );

        return;
    }


    const name =
        nameInput.value.trim();


    const mobile =
        mobileInput.value.trim();


    if (!name) {

        alert(
            "Please enter your full name."
        );

        return;
    }


    if (!/^\d{10}$/.test(mobile)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;
    }


    const payload = {

        name: name,

        mobile_no: mobile,

        email: "",

        service: "Surgery Consultation",

        message: "Callback request from surgery page",

        address: ""

    };


    try {

        const response = await fetch(
            `${API_BASE_URL}/api/web-leads`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(payload)
            }
        );


        const data =
            await response.json().catch(() => null);


        if (!response.ok || !data?.success) {

            throw new Error(
                data?.error ||
                "Submission failed."
            );
        }


        const popup =
            document.getElementById("simplePopup");


        if (popup) {

            popup.style.display = "flex";

        }


        nameInput.value = "";

        mobileInput.value = "";


    } catch (error) {

        console.error(
            "CONSULT FORM ERROR:",
            error
        );


        alert(
            "Cannot connect to server. Please try again."
        );

    }

}


/* =========================================================
   CHECKUP MODAL
========================================================= */

function openCheckupModal() {

    const modal =
        document.getElementById(
            "checkupModalOverlay"
        );


    if (modal) {

        modal.style.display = "flex";

    }

}


function closeCheckupModal() {

    const modal =
        document.getElementById(
            "checkupModalOverlay"
        );


    if (modal) {

        modal.style.display = "none";

    }

}


/* =========================================================
   CHECKUP FORM
========================================================= */

async function submitCheckupForm() {

    console.log(
        "submitCheckupForm fired"
    );


    const nameInput =
        document.getElementById("checkupName");


    const mobileInput =
        document.getElementById("checkupMobile");


    if (!nameInput || !mobileInput) {

        alert(
            "Checkup form fields not found."
        );

        return;
    }


    const name =
        nameInput.value.trim();


    const mobile =
        mobileInput.value.trim();


    if (!name) {

        alert(
            "Please enter your full name."
        );

        return;
    }


    if (!/^\d{10}$/.test(mobile)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;
    }


    const messageInput =
        document.getElementById(
            "checkupMessage"
        );


    const payload = {

        name: name,

        mobile_no: mobile,

        email: "",

        service: "Checkup",

        message:
            messageInput?.value.trim() ||
            "Callback request from Checkup button",

        address: ""

    };


    try {

        const response = await fetch(
            `${API_BASE_URL}/api/web-leads`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(payload)
            }
        );


        const data =
            await response.json().catch(() => null);


        if (!response.ok || data?.success === false) {

            throw new Error(
                data?.error ||
                "Submission failed."
            );
        }


        const simplePopup =
            document.getElementById(
                "simplePopup"
            );


        if (simplePopup) {

            simplePopup.style.display = "flex";

        }


        nameInput.value = "";

        mobileInput.value = "";


        if (messageInput) {

            messageInput.value = "";

        }


        closeCheckupModal();


    } catch (error) {

        console.error(
            "CHECKUP FORM ERROR:",
            error
        );


        alert(
            "Cannot connect to server. Please try again."
        );

    }

}