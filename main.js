//------------------------------------------Obtenemos los input directamente del DOM-------------------------------------------------------
const form = document.getElementById("form");
const alert = document.getElementById("alert");
const card = document.getElementById("card");
const cvc = document.getElementById("cvc");
const amount = document.getElementById("amount");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postalCode");
const button = document.getElementById("button");
const textArea = document.getElementById("textArea");
const inputs = [
  card,
  cvc,
  amount,
  firstName,
  lastName,
  city,
  state,
  postalCode,
  textArea,
];

//------------------------------------------------Form listener y preventDefault----------------------------------------------------------
button.addEventListener("click", function () {
  checkInputs();
});

//-------------------------------------------------Check Inputs--------------------------------------------------------------------------
function checkInputs() {
  const cardValue = card.value.trim();
  const cvcValue = cvc.value.trim();
  const amountValue = amount.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNamValuee = lastName.value.trim();
  const cityValue = city.value.trim();
  const stateValue = state.value.trim();
  const postalCodeValue = postalCode.value.trim();

  for (let i = 0; i <= inputs.length; i++) {
    if (inputs[i].value.trim() == "") {
      setErrorFor(inputs[i]);
    } else {
      setSuccessFor(inputs[i]);
    }
  }
}

//---------------------------------------------------------------------------Function Error-----------------------------------------------------
function setErrorFor(input) {
  input.style.backgroundColor = "#f8d7da";
  input.style.borderColor = "#f5c2c7";
  alert.style.display = "block";
}

//--------------------------------------------------------------------------Function Success------------------------------------------------------
function setSuccessFor(input) {
  input.className = "form-control border-success";
  alert.style.display = "none";
  input.style.backgroundColor = "#fff";
}
