let userInput= {};

function is2CharLength(evt) {
  evt = (evt) ? evt : window.event;

  console.log("====>", evt.target.value)
  if ( evt.target.value.length > 2) {
      return false;
  }
  return true;
}

function handleFormInput(e) {
    userInput[e.id] = e.value;
}
  
function isValidated(event) {
    var form = document.getElementById("main-form");
  
    if (form.checkValidity() === false) {
      isFormValidated = false;
    } else {
      event.preventDefault();
  
      isFormValidated = true;
  
      generateLink();
    }
  }
  
function generateLink() {
    let sourceLanguage = userInput.source_lang;
    let targetLanguage = userInput.target_lang;
    let articleUrl = userInput.article_link;
    let finalUrl;
    
    if(articleUrl === undefined){
      finalUrl = `https://translate.google.com/translate?hl=${targetLanguage}&sl=${sourceLanguage}&u=${articleUrl}`;
      document.getElementById("result").value = finalUrl;
      //location = finalUrl;
      
    } else {
      finalUrl = `https://translate.google.com/translate?hl=${targetLanguage}&sl=${sourceLanguage}&u=${articleUrl}`;
      document.getElementById("result").value = finalUrl;
      //location = finalUrl;
    }

    var copyButton = document.getElementById("copy-button");

    copyButton.style ="display:block;"
  }

  function copyText() {
    // Get the text field
    var copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
    
  // Alert the copied text
  alert("URL has been copied!");
  }