// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }

  // Contact Form Submission
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (form && formMessage) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
      };

      // Show loading message
      formMessage.textContent = 'Sending message...';
      formMessage.className = 'form-message';
      formMessage.style.display = 'block';

      // Simulate form submission (replace with actual backend call)
      setTimeout(() => {
        // Success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
        formMessage.className = 'form-message success';

        // Reset form
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);

        // In production, you would send data to your backend:
        // fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //   formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        //   formMessage.className = 'form-message success';
        //   form.reset();
        // })
        // .catch(error => {
        //   formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
        //   formMessage.className = 'form-message error';
        // });

      }, 1000);
    });
  }

  // Smooth scroll for anchor links (optional enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for empty href or just "#"
      if (!href || href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll effect to header (optional enhancement)
  let lastScroll = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
  });
});
