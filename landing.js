initBackground = () => {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const c = canvas.getContext('2d');
  let particleArr;

  const mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  /**
   * A particle class
   * @constructor
   * @param {int} x - X-cooridnate.
   * @param {int} y - Y-cooridnate.
   * @param {int} radius - Radius of a particle.
   * @param {string} color - Color of a particle.
   */
  function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };
    this.radius = radius;
    this.style = color;
    this.mass = 10000;

    this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      c.strokeStyle = this.style;
      c.stroke();
      c.fillStyle = this.style;
      c.fill();
      c.closePath();
    };

    this.update = (particleArr) => {
      this.draw();

      for (let i = 0; i < particleArr.length; i++) {
        if (this === particleArr[i]) continue;

        if (
          distance(this.x, this.y, particleArr[i].x, particleArr[i].y) -
            this.radius * 2 <
          0
        ) {
          resolveCollision(this, particleArr[i]);
        }
      }

      if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
        this.velocity.y = -this.velocity.y;
      }

      if (distance(mouse.x, mouse.y, this.x, this.y) < 100) {
        this.style = 'black';
        this.radius = 3;
      } else {
        this.style = color;
        this.radius = radius;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    };
  }
  rotate = (velocity, angle) => {
    const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };

    return rotatedVelocities;
  };

  resolveCollision = (particle, otherParticle) => {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      // Grab angle between the two colliding particles
      const angle = -Math.atan2(
        otherParticle.y - particle.y,
        otherParticle.x - particle.x,
      );

      // Store mass in var for better readability in collision equation
      const m1 = particle.mass;
      const m2 = otherParticle.mass;

      // Velocity before equation
      const u1 = rotate(particle.velocity, angle);
      const u2 = rotate(otherParticle.velocity, angle);

      // Velocity after 1d collision equation
      const v1 = {
        x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
        y: u1.y,
      };
      const v2 = {
        x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
        y: u2.y,
      };

      // Final velocity after rotating axis back to original location
      const vFinal1 = rotate(v1, -angle);
      const vFinal2 = rotate(v2, -angle);

      // Swap particle velocities for realistic bounce effect
      particle.velocity.x = vFinal1.x;
      particle.velocity.y = vFinal1.y;

      otherParticle.velocity.x = vFinal2.x;
      otherParticle.velocity.y = vFinal2.y;
    }
  };

  randomIntRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  distance = (x1, y1, x2, y2) => {
    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  };

  init = () => {
    particleArr = [];
    const radius = 1;
    for (let i = 0; i < 700; i++) {
      let x = randomIntRange(radius, canvas.width - radius);
      let y = randomIntRange(radius, canvas.height - radius);
      const color = 'rgba(255, 255, 255, 0.1)';
      if (i !== 0) {
        for (let j = 0; j < particleArr.length; j++) {
          if (
            distance(x, y, particleArr[j].x, particleArr[j].y) - radius * 2 <
            0
          ) {
            x = randomIntRange(radius, canvas.width - radius);
            y = randomIntRange(radius, canvas.height - radius);
            j = -1;
          }
        }
      }
      particleArr.push(new Particle(x, y, radius, color));
    }
  };

  animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    particleArr.forEach((particle) => {
      particle.update(particleArr);
    });
  };

  init();
  animate();
};

initBackground();
