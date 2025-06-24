function ejercicio16() {
  const entrada = document.getElementById("inputNumeros16").value.trim();

  if (entrada === "") {
    document.getElementById("resultado16").textContent = "Por favor ingresa algunos números.";
    return;
  }

  // Separar y convertir a números
  const numeros = entrada.split(/[;,]+/).map(n => Number(n.trim())).filter(n => !isNaN(n));

  if (numeros.length === 0) {
    document.getElementById("resultado16").textContent = "No ingresaste números válidos.";
    return;
  }

  let resultado = "";

  for (let i = 0; i < numeros.length; i++) {
    let producto = 1
    let d = 1;

    while (d < numero) {
      if (numero % d === 0) {
        producto*= d;
      }
      d++;
    }

    resultado += `producto de divisores de ${numero} (sin incluir el propio número): ${producto}\n`;
  }

  document.getElementById("resultado16").textContent = resultado;
}
