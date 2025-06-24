function ejercicio17() {
  const entrada = document.getElementById("inputNumeros17").value.trim();

  if (entrada === "") {
    document.getElementById("resultado17").textContent = "Por favor ingresa algunos números.";
    return;
  }

  // Separa números por coma o punto y coma y limpia espacios
  const numeros = entrada.split(/[;,]+/).map(num => parseInt(num.trim())).filter(num => !isNaN(num));

  if (numeros.length === 0) {
    document.getElementById("resultado17").textContent = "No se detectaron números válidos.";
    return;
  }

  let resultado = "";

  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    let suma = 0;
    let d = 1;

    while (d < numero) {
      if (numero % d === 0) {
        suma += d;
      }
      d++;
    }

    if (suma === numero) {
      resultado += `${numero} es un número perfecto.\n`;
    } else {
      resultado += `${numero} NO es un número perfecto.\n`;
    }
  }

  document.getElementById("resultado17").textContent = resultado;
}
