import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export default async function loadModel(path: string): Promise<GLTF> {
  const loader = new GLTFLoader();
  const model: GLTF = await new Promise((res) => {
    loader.load(path, (gltf) => res(gltf));
  });

  return model;
}
