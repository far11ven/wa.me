let msgDetails= {};

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
  
      sendMsg();
    }
  }
  
function sendMsg() {
    let countryCode = msgDetails.country_code;
    let phoneNumber = msgDetails.phone_number;
    let textMsg = msgDetails.msg;
    
    location = `https://wa.me/${countryCode + phoneNumber}?text=${textMsg}`;
  }