export default function isSceneResizeNeeded(
  canvas: HTMLCanvasElement,
): boolean {
  const { clientHeight: height, clientWidth: width } = canvas;
  return canvas.width !== width || canvas.height !== height;
}
