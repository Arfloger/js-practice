function parallax(evt) {
  layer = document.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateX(${evt.clientX / speed }px)`
  })
}

document.addEventListener('mousemove', parallax);