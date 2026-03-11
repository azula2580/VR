{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/"
  }
}
import * as THREE from "three";
export default class Mod {
  constructor({
    trunkHeight = 3,    // их биений өндөр
    trunkRadius = 0.3,  // их биений радиус
    leavesRadius = 1.5, // навчны радиус
    leavesHeight = 2.5, // навчны өндөр
    layers = 3,         // навчны давхарга
    trunkColor = 0x8B4513,
    leavesColor = 0x228B22,
  } = {}) {
    this.trunkHeight = trunkHeight;
    this.trunkRadius = trunkRadius;
    this.leavesRadius = leavesRadius;
    this.leavesHeight = leavesHeight;
    this.layers = layers;
    this.trunkColor = trunkColor;
    this.leavesColor = leavesColor;
    this.group = new THREE.Group();
    this.Draw();
  }
  Rotate(alp) {
    this.group.rotation.y = alp;
  }
  Draw() {
    const trunkMat = new THREE.MeshBasicMaterial({ color: this.trunkColor });
    const trunkGeo = new THREE.CylinderGeometry(this.trunkRadius * 0.7, this.trunkRadius, this.trunkHeight,8);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(0, this.trunkHeight / 2, 0);
    this.group.add(trunk);

    const leavesMat = new THREE.MeshBasicMaterial({ color: this.leavesColor });
    for (let i = 0; i < this.layers; i++) {
      const radius = this.leavesRadius * (1 - i * 0.15);
      const leavesGeo = new THREE.ConeGeometry(radius, this.leavesHeight, 8);
      const leaves = new THREE.Mesh(leavesGeo, leavesMat);
      leaves.position.set(0,this.trunkHeight + this.leavesHeight / 2 + i * (this.leavesHeight * 0.6),0);
      this.group.add(leaves);
    }
  }

}
