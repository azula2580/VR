import * as THREE from "three";
export default class Hais {
  constructor({
    a = 2, //urt
    b = 1.5,  //ondor
    color = 0xffff00
  } = {}) {
    this.a = a;
    this.b = b;
    this.color = color;    
    this.group = new THREE.Group();
    this.Draw();
  }
  Rotate(alp){
    this.group.rotation.y = alp;
  }
  Draw() {
    const material = new THREE.MeshBasicMaterial( { color: this.color } );
    const x = this.a/21;
    const y = this.b/9;
    const geometry1 = new THREE.BoxGeometry( this.a, y, 0.1); //hondlon
    const geometry2 = new THREE.BoxGeometry( x, this.b, 0.1 ); //bosoo
    const hondol1 = new THREE.Mesh( geometry1, material );
    hondol1.position.set(this.a/2,3*y/2,-0.05);
    this.group.add( hondol1 );
    const hondol2 = new THREE.Mesh( geometry1, material );
    hondol2.position.set(this.a/2,7*y,-0.05);
    this.group.add( hondol2 );
    //bosoo modnuud
    for(let i=0;i<10;i++){
        const modx = new THREE.Mesh( geometry2, material );
        modx.position.set(3*x/2+i*2*x,this.b/2,0.05);
        this.group.add( modx );
    }
  }
}