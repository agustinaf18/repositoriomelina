function actualizarContador() {
  var fechaEvento = new Date("2026-04-25T21:30:00").getTime();
  var ahora = new Date().getTime();
  var distancia = fechaEvento - ahora;

  if (distancia > 0) {
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2,"0");
    document.getElementById("horas").textContent = horas.toString().padStart(2,"0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2,"0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2,"0");
  } else {
    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
  }
}

// Ejecutar cada segundo
setInterval(actualizarContador, 1000);
