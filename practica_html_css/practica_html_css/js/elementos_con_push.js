function ejercicio2() {
  const entrada = document.getElementById("entrada").value;
  const nuevoNumero = parseInt(document.getElementById("nuevo").value);

  // Convertimos a arreglo
  const arreglo = entrada.split(";").map(Number);

  // Agregamos con push()
  arreglo.push(nuevoNumero);

  // Mostramos resultado
  document.getElementById("resultado2").innerText = JSON.stringify(arreglo);
}

