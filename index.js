var connToken = "90935161|-31949241451633030|90958689";

var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";

var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = "/api/iml";

$(document).ready(function () {
    resetForm();
});

function validateAndGetFormData() {

    var rollNo = $("#rollNo").val().trim();
    var fullName = $("#fullName").val().trim();
    var email = $("#email").val().trim();
    var mobileNo = $("#mobileNo").val().trim();
    var studentClass = $("#studentClass").val();
    var birthDate = $("#birthDate").val();
    var address = $("#address").val().trim();
    var enrollmentDate = $("#enrollmentDate").val();

    if (rollNo === "") {
        alert("Please enter Roll Number");
        $("#rollNo").focus();
        return "";
    }

    if (fullName === "") {
        alert("Please enter Full Name");
        $("#fullName").focus();
        return "";
    }

    if (email === "") {
        alert("Please enter Email Address");
        $("#email").focus();
        return "";
    }

    if (mobileNo === "") {
        alert("Please enter Mobile Number");
        $("#mobileNo").focus();
        return "";
    }

    if (studentClass === "") {
        alert("Please select Program / Year");
        $("#studentClass").focus();
        return "";
    }

    if (birthDate === "") {
        alert("Please select Birth Date");
        $("#birthDate").focus();
        return "";
    }

    if (address === "") {
        alert("Please enter Address");
        $("#address").focus();
        return "";
    }

    if (enrollmentDate === "") {
        alert("Please select Enrollment Date");
        $("#enrollmentDate").focus();
        return "";
    }

    var jsonObj = {
        rollNo: rollNo,
        fullName: fullName,
        email: email,
        mobileNo: mobileNo,
        programYear: studentClass,
        birthDate: birthDate,
        address: address,
        enrollmentDate: enrollmentDate
    };

    return JSON.stringify(jsonObj);
}

function saveStudent() {

    var jsonStr = validateAndGetFormData();

    if (jsonStr === "") {
        return;
    }

    var putRequest = createPUTRequest(
        connToken,
        jsonStr,
        dbName,
        relName
    );

    jQuery.ajaxSetup({ async: false });

    var resultObj = executeCommandAtGivenBaseUrl(
        putRequest,
        jpdbBaseURL,
        jpdbIML
    );

    jQuery.ajaxSetup({ async: true });

    console.log(resultObj);

    alert("Student Record Saved Successfully!");

    resetForm();
}

function getStudent() {
    console.log("Search functionality can be extended.");
}

function updateStudent() {
    alert("Update functionality can be extended as per JPDB course implementation.");
}

function resetForm() {

    $("#studentForm")[0].reset();

    $("#rollNo").focus();
}
