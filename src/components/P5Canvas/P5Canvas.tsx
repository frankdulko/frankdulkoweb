import React, { useEffect, useRef } from "react";
import p5 from "p5";

export const P5Canvas = () => {
  const p5ContainerRef = useRef(null);

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current ?? undefined);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div style={{ position: "absolute", zIndex: "-1" }} ref={p5ContainerRef} />
  );
};

function sketch(p: p5) {
  // this class describes the properties of a single particle.
  class Particle {
    x: number;
    y: number;
    r: number;
    xSpeed: number;
    ySpeed: number;

    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor(x?: number, y?: number) {
      this.x = x ? x : p.random(0, p.width);
      this.y = y ? y : p.random(0, p.height);
      this.r = p.random(4, 10);
      this.xSpeed = p.random(-2, 2);
      this.ySpeed = p.random(-1, 1.5);
    }

    // creation of a particle.
    createParticle() {
      p.noStroke();
      p.fill("rgba(200,169,169,0.5)");
      p.circle(this.x, this.y, this.r);
    }

    // setting the particle in motion.
    moveParticle() {
      if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
      if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
      // if (this.x > p.mouseX - 10 && this.x < p.mouseX + 10) {
      //   if (this.x < p.mouseX && this.xSpeed < 0) this.xSpeed *= -1;
      //   if (this.x > p.mouseX && this.xSpeed > 0) this.xSpeed *= -1;
      // }
      // if (this.y > p.mouseY - 10 && this.y < p.mouseY + 10) {
      //   if (this.y < p.mouseY && this.ySpeed < 0) this.ySpeed *= -1;
      //   if (this.y > p.mouseY && this.ySpeed > 0) this.ySpeed *= -1;
      // }
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles: Array<Particle>) {
      particles.forEach((element) => {
        let dis = p.dist(this.x, this.y, element.x, element.y);
        if (dis < 85) {
          p.stroke("rgba(255,255,255,0.04)");
          p.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  let particles: Array<Particle> = [];

  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(this.windowWidth, this.windowHeight - 75);
    for (let i = 0; i < p.width / 40; i++) {
      particles.push(new Particle());
    }
  };

  p.draw = function () {
    p.background("rgb(25, 25, 25)");
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(this.windowWidth, this.windowHeight - 75);
  };

  p.mouseClicked = function () {
    particles.push(new Particle(p.mouseX, p.mouseY));
  };
}
