(function () {
  'use strict';

  // Function for starting TypeWriterJS.
  function initTypeWriter() {

    const app = document.getElementById('typewriter');

    const typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
      deleteSpeed: 50,
      cursor: '_'
    });

    typewriter
      .pauseFor(2500)
      .typeString('Full-stack <strong>Web Developer</strong>')
      .pauseFor(1000)
      .deleteChars(13)
      .typeString('<strong>Drupal Developer</strong>')
      .pauseFor(1000)
      .deleteChars(30)
      .typeString('<strong>Mentor</strong> and  <strong>Teacher</strong>')
      .pauseFor(1000)
      .deleteChars(30)
      .start();
  }

  // Function for starting ParticleJS.
  function initParticleJS() {

    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 }
        }
      },
      retina_detect: true
    });
  }

  initParticleJS();
  initTypeWriter();

}());
