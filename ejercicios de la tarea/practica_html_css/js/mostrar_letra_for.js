function ejercicio11() {
  const palabra = document.getElementById("inputPalabra11").value.trim();
  if (palabra === "") {
    document.getElementById("resultado11").textContent = "Escribe una palabra primero.";
    return;
  }

  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
    resultado += palabra[i] + "\n";
  }

  document.getElementById("resultado11").textContent = resultado;
}
