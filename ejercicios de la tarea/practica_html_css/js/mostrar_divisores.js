function ejercicio15() {
  const input = document.getElementById("inputNumeros15").value.trim();

  if (!input) {
    document.getElementById("resultado15").textContent = "Por favor ingresa algunos números.";
    return;
  }

  // Convertir el texto a arreglo de números
  const numeros = input.split(/[;,]+/).map(n => Number(n.trim())).filter(n => !isNaN(n) && n > 0);

  if (numeros.length === 0) {
    document.getElementById("resultado15").textContent = "No ingresaste números válidos.";
    return;
  }

  let resultado = "";

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    resultado += `Divisores de ${numero}:\n`;

    let d = 1;
    while (d <= numero) {
      if (numero % d === 0) {
        resultado += d + "\n";
      }
      d++;
    }
    resultado += "\n";
  }

  document.getElementById("resultado15").textContent = resultado;
}
