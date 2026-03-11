import * as THREE from "three";

export default class Haalga {
    constructor({
        a = 2,         
        b = 2,       
        color = 0xF40B8B,
        x = 0,
        y = 0,
        z = 0
    } = {}) {
        this.a = a;
        this.b = b;
        this.color = color;
        this.group = new THREE.Group();
        this.group.position.set(x,y,z);
        this.isOpen = false;
        this.Draw();
    }

    Rotate(alp) {
        this.group.rotation.y = alp;
    }

    toggle() {
        if (this.isOpen) {
            this.group.rotation.y = 0;
        } else {
            this.group.rotation.y = -Math.PI / 2;
        }

        this.isOpen = !this.isOpen;
    }

    Draw() {

        const material = new THREE.MeshBasicMaterial({
            color: this.color
        });
        const geometry = new THREE.BoxGeometry(this.a, this.b, 0.1);
        const door = new THREE.Mesh(geometry, material);
        door.position.x = this.a / 2;
        this.group.add(door);

        const bariulGeo = new THREE.BoxGeometry(0.3, 0.2, 0.1);
        const bariulMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const bariul = new THREE.Mesh(bariulGeo, bariulMat);
        bariul.position.set(this.a - 0.2, 0, 0.1);
        this.group.add(bariul);

        
    }
}