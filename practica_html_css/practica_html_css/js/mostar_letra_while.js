function ejercicio12() {
  const palabra = document.getElementById("inputPalabra12").value.trim();

  if (!palabra) {
    document.getElementById("resultado12").textContent = "Por favor ingresa una palabra.";
    return;
  }

  let j = 0;
  let resultado = "";

  while (j < palabra.length) {
    resultado += palabra[j] + "\n";
    j++;
  }

  const resultadoDiv = document.getElementById("resultado12");
  resultadoDiv.textContent = resultado;

  // Animación fade-in (opcional, si tienes en tu CSS)
  resultadoDiv.classList.remove("fade-in");
  void resultadoDiv.offsetWidth; // reinicia animación
  resultadoDiv.classList.add("fade-in");
}
