import { useEffect, useRef } from "react";
import Matter from "matter-js";

const PhysicsLanyard = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    // Setup Matter.js Engine
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Render Canvas
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 400,
        height: 600,
        background: "transparent",
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });

    // --- BUAT KARTU ID (CARD BODY) ---
    // Ganti url gambar dengan path foto Anda
    const cardBody = Bodies.rectangle(200, 400, 220, 320, {
      chamfer: { radius: 20 }, // Sudut tumpul
      render: {
        sprite: {
          texture: "/assets/LC_BEM_CROP.png", // PASTIIN GAMBAR INI ADA (Lanyard + Card jadi satu gambar png transparan)
          xScale: 0.6, // Sesuaikan skala gambar
          yScale: 0.6
        }
      }
    });

    // --- BUAT TALI (CHAIN) ---
    const group = Matter.Body.nextGroup(true);
    const rope = Composites.stack(200, 50, 8, 1, 10, 10, function(x, y) {
      return Bodies.rectangle(x, y, 10, 20, { 
          collisionFilter: { group: group },
          render: { fillStyle: "#C62828" } // Warna Tali Merah
      });
    });
    
    Composites.chain(rope, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 10, render: { type: 'line', strokeStyle: '#C62828', lineWidth: 4 } });

    // Gabungkan Tali ke Langit-langit (Titik Tetap)
    const anchor = Constraint.create({
        pointA: { x: 200, y: -20 },
        bodyB: rope.bodies[0],
        pointB: { x: 0, y: -10 },
        stiffness: 1,
        length: 0,
        render: { visible: false }
    });

    // Gabungkan Tali ke Kartu
    const cardConstraint = Constraint.create({
        bodyA: rope.bodies[rope.bodies.length - 1],
        bodyB: cardBody,
        pointA: { x: 0, y: 10 },
        pointB: { x: 0, y: -140 }, // Titik gantung di atas kartu
        stiffness: 1,
        length: 0,
        render: { visible: false }
    });

    // --- MOUSE INTERACTION (GRABBING) ---
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(world, [anchor, rope, cardBody, cardConstraint, mouseConstraint]);

    // Jalankan
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Cleanup saat komponen hilang
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className="cursor-grab active:cursor-grabbing" />;
};

export default PhysicsLanyard;