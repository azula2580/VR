import * as THREE from "three";
import { CSG } from "three-csg-ts";
export default class Hana {
    constructor({
        urgun = 6,
        undur = 3,
        zuzaan = 0.2,
        color = 0xffffff,
        x = 0,
        y = 0,
        z = 0
    } = {}) {

        this.urgun = urgun;
        this.undur = undur;
        this.zuzaan = zuzaan;
        this.color = color;

        this.group = new THREE.Group();
        this.group.position.set(x, y, z);

        this.Draw();
    }

    Rotate(alp){
        this.group.rotation.y = alp;
    }

    Draw(){
        const material = new THREE.MeshStandardMaterial({color: this.color});
        const geometry = new THREE.BoxGeometry(this.urgun,this.undur,this.zuzaan);
        const wall = new THREE.Mesh(geometry, material);
        wall.position.y = this.undur / 2;
        // Цонхны нүх
        const holeGeo = new THREE.BoxGeometry(3,2,0.3);
        const hole = new THREE.Mesh(holeGeo);
        hole.position.set(0,2,0);

        const wallCSG = CSG.fromMesh(wall);
        const holeCSG = CSG.fromMesh(hole);
        const resultCSG = wallCSG.subtract(holeCSG);
        const resultMesh = CSG.toMesh(resultCSG, wall.matrix, wall.material);
        this.group.add(resultMesh);
    }
}