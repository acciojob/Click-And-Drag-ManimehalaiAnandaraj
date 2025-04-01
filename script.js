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

    // Update the item position
    item.style.left = `${itemX + dx}px`;
    item.style.top = `${itemY + dy}px`;
  });

  // Mouse up event
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});