var connToken = "90935161|-31949241451633030|90958689";

var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";

var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = "/api/iml";
var jpdbIRL = "/api/irl";

function validateAndGetFormData() {

    var rollNo = $("#rollNo").val();
    var fullName = $("#fullName").val();
    var studentClass = $("#studentClass").val();
    var birthDate = $("#birthDate").val();
    var address = $("#address").val();
    var enrollmentDate = $("#enrollmentDate").val();

    if (rollNo === "") {
        alert("Roll Number is required");
        $("#rollNo").focus();
        return "";
    }

    if (fullName === "") {
        alert("Full Name is required");
        $("#fullName").focus();
        return "";
    }

    if (studentClass === "") {
        alert("Class is required");
        $("#studentClass").focus();
        return "";
    }

    if (birthDate === "") {
        alert("Birth Date is required");
        $("#birthDate").focus();
        return "";
    }

    if (address === "") {
        alert("Address is required");
        $("#address").focus();
        return "";
    }

    if (enrollmentDate === "") {
        alert("Enrollment Date is required");
        $("#enrollmentDate").focus();
        return "";
    }

    var jsonStrObj = {
        rollNo: rollNo,
        fullName: fullName,
        studentClass: studentClass,
        birthDate: birthDate,
        address: address,
        enrollmentDate: enrollmentDate
    };

    return JSON.stringify(jsonStrObj);
}

function saveStudent() {

    var jsonStr = validateAndGetFormData();

    if (jsonStr === "") {
        return;
    }

    var putReqStr = createPUTRequest(
        connToken,
        jsonStr,
        dbName,
        relName
    );

    jQuery.ajaxSetup({async:false});

    var resultObj = executeCommandAtGivenBaseUrl(
        putReqStr,
        jpdbBaseURL,
        jpdbIML
    );

    jQuery.ajaxSetup({async:true});

    alert("Student Record Saved Successfully");

    console.log(resultObj);

    resetForm();
}

function getStudent() {

    var rollNo = $("#rollNo").val();

    if (rollNo === "") {
        return;
    }

    alert("GET functionality to be implemented using createGET_BY_KEYRequest()");
}

function updateStudent() {

    alert("UPDATE functionality to be implemented using createUPDATERecordRequest()");
}

function resetForm() {

    $("#rollNo").val("");
    $("#fullName").val("");
    $("#studentClass").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");

    $("#rollNo").focus();
}

$(document).ready(function () {
    $("#rollNo").focus();
});