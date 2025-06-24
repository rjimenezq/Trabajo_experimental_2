function ejercicio9() {
  const entrada = document.getElementById("inputFrutas9").value.trim();
  
  if (entrada === "") {
    document.getElementById("resultado9").textContent = "Por favor escribe algunas frutas.";
    return;
  }

  const frutas = entrada.split(/[;,]+/).map(f => f.trim()).filter(f => f !== "");
  let resultado = "";

  for (let i = 0; i < frutas.length; i++) {
    resultado += frutas[i] + "\n";
  }

  document.getElementById("resultado9").textContent = resultado;
}

  