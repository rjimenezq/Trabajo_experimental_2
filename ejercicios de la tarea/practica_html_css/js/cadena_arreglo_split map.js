function ejercicio8() {
    const texto = document.getElementById("inputNumeros8").value;
    if (!texto) {
      document.getElementById("resultado8").textContent = "Escribe números separados por ;";
      return;
    }
    const arreglo = texto.split(";").map(Number);
    if (arreglo.some(isNaN)) {
      document.getElementById("resultado8").textContent = "Entrada inválida.";
      return;
    }
    document.getElementById("resultado8").textContent = "[" + arreglo.join(", ") + "]";
  }
  