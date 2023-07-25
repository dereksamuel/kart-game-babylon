import { SceneLoader } from "@babylonjs/core";

export class Car {
  constructor({ name }) {
    this.name = name;
  }

  create() {
    SceneLoader
      .ImportMeshAsync("", "/assets/models/", `${this.name}_car.gltf`, globalScene)
      .then((result) => {
        console.log(result);
      });
  }
}
