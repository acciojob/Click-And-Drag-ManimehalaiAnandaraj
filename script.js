document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.items');
  const cubes = document.querySelectorAll('.item');
  
  // Initialize cube positions in a grid
  function initializeCubes() {
	  container.style.width="800px";
	  container.style.height="600px";
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
  let currentCube = null;
  let startX, startY, initialX, initialY;

  cubes.forEach(cube => {
    cube.addEventListener('mousedown', startDrag);
  });

  function startDrag(e) {
    isDragging = true;
    currentCube = e.target;
    currentCube.classList.add('dragging');
    
    // Get initial positions
    startX = e.clientX;
    startY = e.clientY;
    initialX = currentCube.offsetLeft;
    initialY = currentCube.offsetTop;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  }

  function drag(e) {
    if (!isDragging) return;
    
    // Calculate new position
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    currentCube.style.left = `${initialX + dx}px`;
    currentCube.style.top = `${initialY + dy}px`;
  }

  function stopDrag(e) {
    if (!isDragging) return;
    
    isDragging = false;
    currentCube.classList.remove('dragging');
    
    // Check boundaries and snap back if needed
    const cubeRect = currentCube.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    if (
      cubeRect.left < containerRect.left ||
      cubeRect.right > containerRect.right ||
      cubeRect.top < containerRect.top ||
      cubeRect.bottom > containerRect.bottom
    ) {
      // Snap back to initial position
      currentCube.style.left = `${initialX}px`;
      currentCube.style.top = `${initialY}px`;
    }
    
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    currentCube = null;
  }

  // Initialize the cubes
  initializeCubes();
});
