function ejercicio3() {
  const entrada = document.getElementById("valores").value;
  const partes = entrada.split(";").map(Number);
  const datos = [];
  datos[0] = partes[0] || 0;
  datos[1] = partes[1] || 0;

  document.getElementById("resultado3").innerText = JSON.stringify(datos);
}