function ejercicio10() {
  const entrada = document.getElementById("inputFrutas10").value.trim();

  if (entrada === "") {
    document.getElementById("resultado10").textContent = "Por favor ingresa algunas frutas.";
    return;
  }

  const frutas = entrada.split(/[;,]+/).map(f => f.trim()).filter(f => f !== "");
  let i = 0;
  let resultado = "";

  while (i < frutas.length) {
    resultado += frutas[i] + "\n";
    i++;
  }

  document.getElementById("resultado10").textContent = resultado;
}
