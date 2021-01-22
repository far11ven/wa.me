let msgDetails= {};

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}
function handleFormInput(e) {
    msgDetails[e.id] = e.value;
}
  
function isvalidated(event) {
    var form = document.getElementById("main-form");
  
    if (form.checkValidity() === false) {
      isFormValidated = false;
    } else {
      event.preventDefault();
  
      isFormValidated = true;
  
      sendToWhatsapp();
    }
  }
  
function sendToWhatsapp() {
    let countryCode = msgDetails.country_code;
    let phoneNumber = msgDetails.phone_number;
    let textMsg = msgDetails.msg;
    
    location = `https://wa.me/${countryCode + phoneNumber}?text=${textMsg}`;
  }