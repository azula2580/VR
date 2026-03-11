{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js",
    "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/"
  }
}
import * as THREE from "three";
export default class Tsonh {
    constructor({
        urgun = 3,
        undur = 2.9,
        color = 0x87CEEB,
        x = 0,
        y = 0,
        z = 0
    } = {}) {
        this.urgun = urgun;
        this.undur = undur;
        this.color = color;
        this.group = new THREE.Group();
        this.group.position.set(x,y,z);
        this.Draw();
    }
    Rotate(alp){
        this.group.rotation.y = alp;
    }
    Draw(){
        const glassGeo = new THREE.BoxGeometry(this.urgun, this.undur, 0.05);
        const glassMat = new THREE.MeshStandardMaterial({color: this.color,transparent: true,opacity: 0.6});
        const glass = new THREE.Mesh(glassGeo, glassMat);
        this.group.add(glass);

        const frameMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const frameTop = new THREE.Mesh(new THREE.BoxGeometry(this.urgun + 0.1, 0.1, 0.1),frameMat);
        frameTop.position.y = this.undur/2;
        this.group.add(frameTop);

        const frameBottom = new THREE.Mesh(new THREE.BoxGeometry(this.urgun + 0.1, 0.1, 0.1),frameMat);
        frameBottom.position.y = -this.undur/2;
        this.group.add(frameBottom);

        const frameLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, this.undur, 0.1),frameMat);
        frameLeft.position.x = -this.urgun/2;
        this.group.add(frameLeft);

        const frameRight = new THREE.Mesh(new THREE.BoxGeometry(0.1, this.undur, 0.1),frameMat);
        frameRight.position.x = this.urgun/2;
        this.group.add(frameRight);
    }

}
