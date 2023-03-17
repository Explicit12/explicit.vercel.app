<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import {
    PerspectiveCamera,
    ReinhardToneMapping,
    WebGLRenderer,
    Scene,
    Clock,
    HemisphereLight,
    SpotLight,
    AnimationMixer,
  } from "three";

  import loadModel from "~~/utils/loadModel";
  import resizeCameraAspect from "~~/utils/resizeCameraAspect";
  import isSceneResizeNeeded from "~~/utils/isSceneResizeNeeded";

  import type { Ref } from "vue";
  import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

  import charaterModelFile from "~~/assets/models/character.glb";
  import idleAnimationFile from "~~/assets/models/MaleIdle.glb";

  const canvas: Ref<HTMLCanvasElement | null> = ref(null);
  const isCharacterLoaded = ref(false);

  const clock = new Clock();
  const camera = new PerspectiveCamera(75, 2, 0.1, 5);
  const scene = new Scene();

  let renderer: WebGLRenderer | null = null;

  function addLight() {
    const globalLight = new HemisphereLight(0xffeeb1, 0xfff, 2.5);

    const bottomLight = new SpotLight(0xffa95c, 2.5);
    bottomLight.position.set(-5, -5, 4);
    bottomLight.castShadow = true;
    bottomLight.shadow.mapSize.width = 1024 * 2;
    bottomLight.shadow.mapSize.height = 1024 * 2;

    const topLight = new SpotLight(0xfff, 15);
    topLight.position.set(10, 24, -10);

    scene.add(globalLight, bottomLight, topLight);
  }

  async function addCharacter(): Promise<{
    characterModel: GLTF;
    animationMixer: AnimationMixer;
  }> {
    const characterModel = await loadModel(charaterModelFile);
    const idleAnimation = await loadModel(idleAnimationFile);

    characterModel.scene.position.z = -1;
    characterModel.scene.position.y = -1.5;
    characterModel.scene.children[0].traverse((n) => {
      n.receiveShadow = true;
    });

    const animationMixer = new AnimationMixer(characterModel.scene.children[0]);
    idleAnimation.animations[0].tracks.splice(3, 3);
    idleAnimation.animations[0].tracks.splice(9, 3);

    animationMixer.clipAction(idleAnimation.animations[0]).play();

    scene.add(characterModel.scene);
    return { characterModel, animationMixer };
  }

  function render(
    canvas: HTMLCanvasElement,
    renderer: WebGLRenderer,
    scene: Scene,
    camera: PerspectiveCamera,
    mixer?: AnimationMixer,
  ): void {
    if (isSceneResizeNeeded(canvas)) {
      const { clientHeight: height, clientWidth: width } = canvas;
      renderer.setSize(width, height, false);
      resizeCameraAspect(canvas, camera);
    }

    if (mixer) mixer.update(clock.getDelta() / 2);
    renderer.render(scene, camera);

    window.requestAnimationFrame((time) => {
      render(canvas, renderer, scene, camera, mixer);
      return time;
    });
  }

  onMounted(() => {
    renderer = new WebGLRenderer({
      canvas: canvas.value || undefined,
      alpha: true,
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3;

    addLight();

    addCharacter().then(({ animationMixer }) => {
      window.requestAnimationFrame((time) => {
        if (canvas.value && animationMixer && renderer) {
          render(canvas.value, renderer, scene, camera, animationMixer);
        }
        return time;
      });

      isCharacterLoaded.value = true;
    });
  });
</script>

<template>
  <Transition name="fade">
    <canvas v-show="isCharacterLoaded" class="three-scene" ref="canvas" />
  </Transition>
</template>

<style scoped>
  .three-scene {
    height: 100%;
    width: 100%;
    display: block;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 250ms ease, filter 150ms ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
