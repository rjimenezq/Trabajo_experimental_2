function ejercicio1() {
  const entrada = document.getElementById("frutas").value;
  const arreglo = entrada.split(";");

  let resultado = "";
  resultado += "Fruta 1: " + (arreglo[0] || "No ingresada") + "\n";
  resultado += "Fruta 2: " + (arreglo[1] || "No ingresada") + "\n";
  resultado += "Fruta 3: " + (arreglo[2] || "No ingresada");

  document.getElementById("resultado1").innerText = resultado;
}