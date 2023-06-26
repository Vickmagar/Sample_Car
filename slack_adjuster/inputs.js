const inputs = document.querySelectorAll("input");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    if (input.name === "nombre" && input.value.toLowerCase().includes("amsted")) {
      apellidoInput.disabled = true;
      emailInput.disabled = true;
      apellidoInput.classList.add("disabled");
      emailInput.classList.add("disabled");
    } else {
      apellidoInput.disabled = false;
      emailInput.disabled = false;
      apellidoInput.classList.remove("disabled");
      emailInput.classList.remove("disabled");
    }
    
    if (input.value !== "") {
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
    }
  });
});