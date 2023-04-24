function App() {}
window.onload = function (event) {
  let app = new App();
  window.app = app;
};

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const carruselList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector("#track");
  const carrusel = track.querySelectorAll(".carrusel");

  const carruselWidth = carrusel[0].offsetWidth;
  const trackWidth = track.offsetWidth;
  const listWidth = carruselList.offsetWidth;
  let leftPosition = track.offsetLeft;

  btn.dataset.button == "button-prev"
    ? (leftPosition += carruselWidth)
    : (leftPosition -= carruselWidth);

  if (leftPosition > 0) {
    leftPosition = -(trackWidth - listWidth);
  } else if (leftPosition < -(trackWidth - listWidth)) {
    leftPosition = 0;
  }
  
  track.style.left = leftPosition + "px";
};

  
