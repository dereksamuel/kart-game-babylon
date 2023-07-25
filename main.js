import { Car } from "./car";
import "./style.css";
import * as BABYLON from "@babylonjs/core";
import '@babylonjs/loaders/glTF';

window.globalScene = null;

function createScene() {
  const $canvas = document.getElementById("renderCanvas");
  const engine = new BABYLON.Engine($canvas, true);

  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl($canvas, true);

  window.globalScene = scene;

  return { scene, engine };
}

(() => {
  const { scene, engine } = createScene();

  const emmeraldCar = new Car({ name: "emmerald" });
  emmeraldCar.create();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });
})();
