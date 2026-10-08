const slider = document.getElementById('cmpSlider');
const rango = document.getElementById('cmpRango');

function actualizar() {
  slider.style.setProperty('--pos', rango.value + '%');
}

rango.addEventListener('input', actualizar);
actualizar();
