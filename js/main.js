(function () {
  'use strict';

  // Typewriter setup.
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

}());
