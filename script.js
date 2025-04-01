document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.items');
  const cubes = document.querySelectorAll('.item');
  
  // Initialize cube positions in a grid
  function initializeCubes() {
    const containerWidth = container.offsetWidth;
    const cubeSize = 25;
    const gap = 20;
    const cubesPerRow = Math.floor((containerWidth - gap) / (cubeSize + gap));
    
    cubes.forEach((cube, index) => {
      const row = Math.floor(index / cubesPerRow);
      const col = index % cubesPerRow;
      
      cube.style.left = `${gap + col * (cubeSize + gap)}px`;
      cube.style.top = `${gap + row * (cubeSize + gap)}px`;
      cube.textContent = index + 1; // Number the cubes
    });
  }

  // Dragging functionality
  let isDragging = false;
  let startX, scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mousemove', (e) => {
    if(!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX);
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener('mouseup', () => isDragging = false);
  container.addEventListener('mouseleave', () => isDragging = false);

  // Initialize the cubes
  initializeCubes();
});