// Your code here.
  document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.items');
            const cubeCount = 16; // You can change this number
            
            // Create cubes in a grid formation
            for (let i = 0; i < cubeCount; i++) {
                const cube = document.createElement('div');
                cube.className = 'cube';
                cube.textContent = i + 1;
                
                // Calculate grid position (4 columns)
                const row = Math.floor(i / 4);
                const col = i % 4;
                
                // Position cubes with some spacing
                cube.style.left = `${50 + col * 110}px`;
                cube.style.top = `${50 + row * 110}px`;
                
                container.appendChild(cube);
            }
            
            // Drag functionality
            let currentDraggedCube = null;
            let offsetX = 0;
            let offsetY = 0;
            
            container.addEventListener('mousedown', function(e) {
                if (e.target.classList.contains('cube')) {
                    currentDraggedCube = e.target;
                    currentDraggedCube.classList.add('dragging');
                    
                    // Calculate offset between mouse and cube top-left corner
                    const rect = currentDraggedCube.getBoundingClientRect();
                    offsetX = e.clientX - rect.left;
                    offsetY = e.clientY - rect.top;
                    
                    // Prevent text selection during drag
                    e.preventDefault();
                }
            });
            
            document.addEventListener('mousemove', function(e) {
                if (currentDraggedCube) {
                    // Calculate new position
                    let newX = e.clientX - offsetX - container.getBoundingClientRect().left;
                    let newY = e.clientY - offsetY - container.getBoundingClientRect().top;
                    
                    // Apply boundary constraints
                    const containerRect = container.getBoundingClientRect();
                    const cubeWidth = currentDraggedCube.offsetWidth;
                    const cubeHeight = currentDraggedCube.offsetHeight;
                    
                    newX = Math.max(0, Math.min(newX, containerRect.width - cubeWidth));
                    newY = Math.max(0, Math.min(newY, containerRect.height - cubeHeight));
                    
                    // Update position
                    currentDraggedCube.style.left = `${newX}px`;
                    currentDraggedCube.style.top = `${newY}px`;
                }
            });
            
            document.addEventListener('mouseup', function() {
                if (currentDraggedCube) {
                    currentDraggedCube.classList.remove('dragging');
                    currentDraggedCube = null;
                }
            });
        });