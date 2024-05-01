let msgData = {};

let isFormValidated = false;

msgData["sender"] = "Parlo.in";

function handleFormInput(e) {
  msgData[e.id] = e.value;
}

function isValidated(event) {
  var form = document.getElementById("msg-form");

  if (form.checkValidity() === false) {
    isFormValidated = false;
  } else {
    event.preventDefault();

    isFormValidated = true;

    sendMsg();
  }
}

function sendMsg() {
  let requestBody = msgData;

  fetch("https://prod.kushalbhalaik.xyz/api/contact", {
    method: "POST",

    body: JSON.stringify(requestBody),

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())

    .then((responseJson) => {
      if (responseJson.message === "message was sent") {
        var formParent = document.getElementById("msg-form");

        formParent.innerHTML = "";

        var newElement = document.createElement("h4");

        newElement.setAttribute("id", "success-message");
        newElement.setAttribute("class", "shadow p-4 mt-4 mb-4 pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7");


        newElement.innerHTML = `<p> Thank you! <br> 
            <strong style='color:green'> Your message has been sent. </strong></p><br>
            <a href="/p/contact-us.html" class="font-medium text-indigo-600 hover:text-indigo-300" target="_self"> forgot something else to say?
            </a>
            `;

        formParent.appendChild(newElement);
      }
    })

    .catch((err) => {
      console.log("err", err.message);
      alert('Something went wrong!');
    })

    .finally(() => {})
      
}
