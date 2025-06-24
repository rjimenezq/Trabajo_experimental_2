function ejercicio14() {
  const palabra1 = document.getElementById("inputPalabra1").value.trim();
  const palabra2 = document.getElementById("inputPalabra2").value.trim();

  if (palabra1 === "" || palabra2 === "") {
    document.getElementById("resultado14").textContent = "Por favor ingresa ambas palabras.";
    return;
  }

  if (palabra1.length !== palabra2.length) {
    document.getElementById("resultado14").textContent = "Las palabras deben tener la misma longitud.";
    return;
  }

  let resultado = "";

  for (let i = 0; i < palabra1.length; i++) {
    let letra1 = palabra1[i];
    let letra2 = palabra2[i];
    resultado += `¿Son iguales en posición ${i}? ${letra1 === letra2}\n`;
  }

  document.getElementById("resultado14").textContent = resultado;
}

