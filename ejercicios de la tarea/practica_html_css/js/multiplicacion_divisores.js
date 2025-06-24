function ejercicio16() {
    const entrada = document.getElementById("inputNumeros16").value.trim();
  
    if (entrada === "") {
      document.getElementById("resultado16").textContent = "Por favor ingresa uno o más números.";
      return;
    }
  
    const numeros = entrada.split(/[;,]+/).map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    let resultado = "";
  
    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];
      let producto = 1;
      let tieneDivisores = false;
  
      for (let d = 1; d < numero; d++) {
        if (numero % d === 0) {
          producto *= d;
          tieneDivisores = true;
        }
      }
  
      if (tieneDivisores) {
        resultado += `Producto de divisores de ${numero} (excluyendo el propio número): ${producto}\n`;
      } else {
        resultado += `El número ${numero} no tiene divisores (excepto 1).\n`;
      }
    }
  
    document.getElementById("resultado16").textContent = resultado;
  }
  