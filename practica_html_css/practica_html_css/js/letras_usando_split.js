function ejercicio7() {
    const palabra = document.getElementById("inputPalabra7").value;
    if (!palabra) {
      document.getElementById("resultado7").textContent = "Escribe una palabra.";
      return;
    }
    const letras = palabra.split("");
    document.getElementById("resultado7").textContent = "[" + letras.join(", ") + "]";
  }