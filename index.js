// Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Typed.js
      const typed = new Typed('#typed', {
        strings: [
          "Enterprise IT solutions",
          "Cloud infrastructure services",
          "Cybersecurity expertise",
          "Digital transformation partners",
          "24/7 IT support"
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
      
      // Initialize particles after library is loaded
      if (typeof tsParticles !== 'undefined') {
        // Particle configuration
        tsParticles.load("particles-overlay", {
          fpsLimit: 60,
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#3b82f6"
            },
            shape: {
              type: ["circle", "triangle"],
              options: {
                triangle: {
                  fill: true
                }
              }
            },
            opacity: {
              value: 0.5,
              random: true
            },
            size: {
              value: 5,
              random: true
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out"
            },
            rotate: {
              value: {
                min: 0,
                max: 360
              },
              animation: {
                enable: true,
                speed: 5
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.2,
              width: 1
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.3
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      } else {
        console.error("tsParticles is not defined. Make sure the library is loaded.");
      }

      // Header scroll effect
      window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        } else {
          header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
      });

      // Mobile menu toggle
      document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
      });
      
      // Close mobile menu when clicking a link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          const navLinks = document.querySelector('.nav-links');
          navLinks.classList.remove('active');
        });
      });
    });