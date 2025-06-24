function ejercicio5() {
    const palabra = document.getElementById("inputPalabra5").value;
    if (!palabra) {
      document.getElementById("resultado5").textContent = "Escribe una palabra.";
      return;
    }
    document.getElementById("resultado5").textContent = `La palabra tiene ${palabra.length} caracteres`;
  }