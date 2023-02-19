import type { PerspectiveCamera } from "three";

export default function resizeCameraAspect(
  canvas: HTMLCanvasElement,
  camera: PerspectiveCamera,
): void {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
}
