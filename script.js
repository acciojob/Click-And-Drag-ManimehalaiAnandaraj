// Your code here.
  const items = document.querySelectorAll('.item');
  const container = document.querySelector('.items');
// Loop through each item
items.forEach(item => {
  // Initialize position variables
  let mouseX = 0;
  let mouseY = 0;
  let itemX = 0;
  let itemY = 0;
  let isDragging = false;

  // Mouse down event
  item.addEventListener('mousedown', (e) => {
    isDragging = true;
	  mouseX = e.clientX;
    mouseY = e.clientY;
    itemX = item.offsetLeft;
    itemY = item.offsetTop;
  });

    // Get the initial mouse position
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Get the initial item position
    let rect = item.getBoundingClientRect();
    itemX = rect.left;
    itemY = rect.top;
  });

  // Mouse move event
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Calculate the new position
    const dx = e.clientX - mouseX;
    const dy = e.clientY - mouseY;
	      let newX = itemX + dx;
    let newY = itemY + dy;


   // Boundary checking
    const rect = container.getBoundingClientRect();
    const itemWidth = item.offsetWidth;
    const itemHeight = item.offsetHeight;
    newX = Math.max(0, Math.min(newX, rect.width - itemWidth));
    newY = Math.max(0, Math.min(newY, rect.height - itemHeight));

    item.style.left = `${newX}px`;
    item.style.top = `${newY}px`;
  });
  // Mouse up event
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});