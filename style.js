document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const afterWrapper = document.getElementById('afterWrapper');
  const handle = document.getElementById('handle');
  const imgAfter = afterWrapper.querySelector('.img-after');

  let isDragging = false;

  function updateSliderWidth() {
    // Asegura que la imagen de arriba mantenga el ancho exacto del contenedor principal
    imgAfter.style.width = `${slider.offsetWidth}px`;
  }

  function setSliderPosition(x) {
    const rect = slider.getBoundingClientRect();
    let position = x - rect.left;

    // Limitar dentro de los bordes
    if (position < 0) position = 0;
    if (position > rect.width) position = rect.width;

    const percentage = (position / rect.width) * 100;

    afterWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Ajustar ancho al redimensionar la ventana
  window.addEventListener('resize', updateSliderWidth);
  updateSliderWidth();

  // Eventos para ratón y pantalla táctil
  const startDrag = (e) => {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const moveDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  slider.addEventListener('mousedown', startDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mousemove', moveDrag);

  slider.addEventListener('touchstart', startDrag);
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('touchmove', moveDrag);
});