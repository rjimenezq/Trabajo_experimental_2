function ejercicio6() {
  const nombre = document.getElementById("inputNombre6").value;
  if (nombre.length < 4) {
    document.getElementById("resultado6").textContent = "Escribe al menos 4 letras.";
    return;
  }
  const letras = [nombre[0], nombre[1], nombre[2], nombre[3]];
  document.getElementById("resultado6").textContent = "Letras: " + letras.join(", ");
}
