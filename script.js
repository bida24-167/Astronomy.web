// STAR MAP CANVAS
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('star-map-canvas');
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }

  const ctx = canvas.getContext('2d');

  // Set canvas dimensions dynamically
  canvas.width = canvas.offsetWidth || 800;
  canvas.height = canvas.offsetHeight || 600;

  // Variables for zoom and pan
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  // Example star data (x, y, radius)
  const stars = [
    { x: 100, y: 150, radius: 3 },
    { x: 200, y: 300, radius: 5 },
    { x: 400, y: 200, radius: 2 },
    { x: 500, y: 400, radius: 4 }
  ];

  // Draw stars on the canvas
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply transformations
    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    // Draw each star
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    });

    ctx.restore();
  }

  // Event listeners for zooming
  const zoomInButton = document.getElementById('zoom-in');
  const zoomOutButton = document.getElementById('zoom-out');
  const resetViewButton = document.getElementById('reset-view');

  if (!zoomInButton || !zoomOutButton || !resetViewButton) {
    console.error("One or more buttons are missing!");
  } else {
    zoomInButton.addEventListener('click', () => {
      scale *= 1.2;
      drawStars();
    });

    zoomOutButton.addEventListener('click', () => {
      scale /= 1.2;
      drawStars();
    });

    resetViewButton.addEventListener('click', () => {
      scale = 1;
      offsetX = 0;
      offsetY = 0;
      drawStars();
    });
  }

  // Event listeners for panning
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.offsetX - offsetX;
    startY = e.offsetY - offsetY;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
      offsetX = e.offsetX - startX;
      offsetY = e.offsetY - startY;
      drawStars();
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvas.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  // Initial draw
  drawStars();
});

// LOGIN AND SIGNUP FORM
    // Check if elements exist before adding event listeners
    if (!formWrapper || !switchToSignupBtn || !switchToLoginBtn || !loginForm || !signupForm) {
        console.error('One or more form elements are missing!');
        return;
    }

    // Form Toggle Functions
    function switchToSignup() {
        formWrapper.classList.add('active');
        clearErrors();
    }
    
    function switchToLogin() {
        formWrapper.classList.remove('active');
        clearErrors();
    }
    
    // Clear all error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.style.display = 'none';
        });
    }
    
    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Password validation (minimum 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    // Login Form Submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        let isValid = true;
        
        if (!validateEmail(email)) {
            document.getElementById('loginEmailError').style.display = 'block';
            isValid = false;
        }
        
        if (!validatePassword(password)) {
            document.getElementById('loginPasswordError').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Show loading state
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Signing in...';
            
            // Simulate API call
            setTimeout(() => {
                console.log('Login data:', { email, password });
                alert('Login successful! (This is a demo)');
                loginForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign In';
            }, 1500);
        }
    });
    
    // Signup Form Submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();
        
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        let isValid = true;
        
        if (name === '') {
            document.getElementById('signupNameError').style.display = 'block';
            isValid = false;
        }
        
        if (!validateEmail(email)) {
            document.getElementById('signupEmailError').style.display = 'block';
            isValid = false;
        }
        
        if (!validatePassword(password)) {
            document.getElementById('signupPasswordError').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Show loading state
            const submitBtn = signupForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Creating account...';
            
            // Simulate API call
            setTimeout(() => {
                console.log('Signup data:', { name, email, password });
                alert('Account created successfully! (This is a demo)');
                signupForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Sign Up';
                switchToLogin(); // Switch back to login form after signup
            }, 1500);
        }
    });
    
    // Event Listeners for form switching
    switchToSignupBtn.addEventListener('click', Register);
    switchToLoginBtn.addEventListener('click', Sign-Up);