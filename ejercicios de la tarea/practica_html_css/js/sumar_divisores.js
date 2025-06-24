function ejercicio16() {
  const entrada = document.getElementById("inputNumeros16").value.trim();

  if (entrada === "") {
    document.getElementById("resultado16").textContent = "Por favor ingresa algunos números.";
    return;
  }

  // Separa números por coma o punto y coma y limpia espacios
  const numeros = entrada.split(/[;,]+/).map(num => parseInt(num.trim())).filter(num => !isNaN(num));

  if (numeros.length === 0) {
    document.getElementById("resultado16").textContent = "No se detectaron números válidos.";
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

    resultado += `Suma de divisores de ${numero} (sin incluir el propio número): ${suma}\n`;
  }

  document.getElementById("resultado16").textContent = resultado;
}
