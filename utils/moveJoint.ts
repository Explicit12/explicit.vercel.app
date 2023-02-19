import { MathUtils } from "three";
import getMouseDegrees from "~/utils/getMouseDegrees";

import type { Object3D } from "three";

export default function moveJoint(
  mouseEvent: MouseEvent,
  joint: Object3D,
  degreeLimit: number,
): void {
  const degrees = getMouseDegrees(mouseEvent.x, mouseEvent.y, degreeLimit);
  joint.rotation.y = MathUtils.degToRad(degrees.x);
  joint.rotation.x = MathUtils.degToRad(degrees.y);
}
