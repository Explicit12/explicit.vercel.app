export default function getMouseDegrees(
  x: number,
  y: number,
  degreeLimit: number,
): { x: number; y: number } {
  let dx = 0;
  let dy = 0;
  let xdiff = 0;
  let xPercentage = 0;
  let ydiff = 0;
  let yPercentage = 0;

  const w = { x: window.innerWidth, y: window.innerHeight / 2 };

  if (x <= w.x / 2) {
    xdiff = w.x / 2 - x;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }

  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }

  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (((degreeLimit / 4) * 0.5 * yPercentage) / 100) * -1;
  }

  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = ((degreeLimit / 2) * yPercentage) / 100;
  }

  return { x: dx, y: dy };
}
