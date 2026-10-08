const comparador = document.getElementById('comparador');
const rango = document.getElementById('rango');

function actualizar() {
  comparador.style.setProperty('--pos', rango.value + '%');
}

rango.addEventListener('input', actualizar);
actualizar();
