function ejercicio13() {
    const palabra = document.getElementById("inputPalabra13").value.toLowerCase();
    if (!palabra) {
      document.getElementById("resultado13").textContent = "Escribe una palabra.";
      return;
    }
    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
      if ("aeiou".includes(palabra[i])) vocales++;
    }
    document.getElementById("resultado13").textContent = "Vocales: " + vocales;
  }