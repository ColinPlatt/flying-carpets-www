import "@react-three/fiber";
import "@gsap";



const internals = {};

(internals as any).W = 500;
(internals as any).H = 500;

(internals as any).randomIntFromInterval = (min: any, max: any) => Math.floor(Math.random() * (max - min + 1) + min);

(internals as any).materials = {
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    orange: new fiber.MeshPhongMaterial({ color: 0xB7513C, flatShading: true }),
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    green: new fiber.MeshPhongMaterial({ color: 0x379351, flatShading: true }),
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    brown: new fiber.MeshPhongMaterial({ color: 0x5C2C22, flatShading: true }),
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    pink: new fiber.MeshPhongMaterial({ color: 0xB1325E, flatShading: true }),
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    gray: new fiber.MeshPhongMaterial({ color: 0x666666, flatShading: true }),
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    clouds: new fiber.MeshPhongMaterial({ color: 0xeeeeee, flatShading: true }),
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    rabbit: new fiber.MeshPhongMaterial({ color: 0xaaaaaa, flatShading: true })
};

(internals as any).shadowSupport = (group: any) => {
    group.traverse((object: any) => {
        // @ts-expect-error TS(2304): Cannot find name 'fiber'.
        if (object instanceof fiber.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
};


console.log('🥕🐰✈️☁️');


class Cloud {
  mesh: any;
  constructor(config: any) {

    console.log('☁️');

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.mesh = new fiber.Group();

    const cloud = this._createCould();

    this.mesh.position.x = 200;
    this.mesh.position.y = config.y || Math.random();
    this.mesh.position.z = config.z || 0;

    this.mesh.add(cloud);

    this.animate(config);
  }

  animate(config: any) {

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.mesh.position, {
    duration: 3.5,
    x: -200,
    repeat: Infinity,
    delay: config.delay || 0,
    onRepeat: () => {
        this.mesh.position.y = (internals as any).randomIntFromInterval(-10, 20);
    }
});
  }

  _createCould() {

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const group = new fiber.Group();

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const cloudGeo = new fiber.SphereGeometry(5, 4, 6);
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const cloud = new fiber.Mesh(cloudGeo, (internals as any).materials.clouds);
    cloud.scale.set(1, 0.8, 1);

    const cloud2 = cloud.clone();
    cloud2.scale.set(.55, .35, 1);
    cloud2.position.set(5, -1.5, 2);

    const cloud3 = cloud.clone();
    cloud3.scale.set(.75, .5, 1);
    cloud3.position.set(-5.5, -2, -1);

    group.add(cloud);
    group.add(cloud2);
    group.add(cloud3);

    (internals as any).shadowSupport(group);

    return group;
  }
}

class Carrot {
  body: any;
  leafs: any;
  mesh: any;
  pilot: any;
  wings: any;
  constructor() {

    console.log('🥕');

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.mesh = new fiber.Group();

    this.body = this._createBody();
    this.wings = this._createWings();
    this.leafs = this._createLeafs();
    this.pilot = new Pilot();

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.mesh.rotateOnAxis(new fiber.Vector3(1, 0, 0), -Math.PI/2);
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.mesh.rotateOnAxis(new fiber.Vector3(0, 0, 1), Math.PI/2);

    this.mesh.add(this.body);
    this.mesh.add(this.wings);
    this.mesh.add(this.leafs);
    this.mesh.add(this.pilot.mesh);

    this.animate();
  }

  animate() {

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.mesh.position, {
      duration: 1,
      x: -2,
      y: 4,
      repeat: Infinity,
      yoyo: true,
      // @ts-expect-error TS(2304): Cannot find name 'Sine'.
      ease: Sine.easeInOut
    });

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.mesh.rotation, {
      duration: 1,
      x: -1.7,
      repeat: Infinity,
      yoyo: true,
      // @ts-expect-error TS(2304): Cannot find name 'Sine'.
      ease: Sine.easeInOut
    });

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.leafs.rotation, {
      duration: 0.1,
      y: Math.PI,
      repeat: Infinity,
      // @ts-expect-error TS(2304): Cannot find name 'Power0'.
      ease: Power0.easeNone
    });
  }

  _createBody() {

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const group = new fiber.Group();

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const bodyGeom = new fiber.CylinderGeometry(5, 2, 25);
    bodyGeom.vertices[16].y += 3;
    bodyGeom.vertices[17].y -= 2;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    group.add(new fiber.Mesh(bodyGeom, (internals as any).materials.orange));

    (internals as any).shadowSupport(group);

    return group;
  }

  _createWings() {

    console.log('✈️');

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const group = new fiber.Group();
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const geometry = new fiber.CubeGeometry(7, 7, 0.5);

    geometry.vertices[2].y += 2;
    geometry.vertices[3].y += 2;
    geometry.vertices[2].x -= 1;
    geometry.vertices[3].x -= 1;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const wingR = new fiber.Mesh(geometry, (internals as any).materials.brown);
    wingR.position.x = 6;
    wingR.position.y = 2;
    wingR.position.z = 1;

    const wingL = wingR.clone();
    wingL.position.x = -6;
    wingL.rotation.y = Math.PI;

    group.add(wingR);
    group.add(wingL);

    (internals as any).shadowSupport(group);

    return group;
  }

  _createLeafs() {

    console.log('🍃');

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const group = new fiber.Group();
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const geometry = new fiber.CylinderGeometry(1.5, 1, 5, 4);

    geometry.vertices[8].y += 0.5;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const leafA = new fiber.Mesh(geometry, (internals as any).materials.green);
    leafA.position.y = 16;

    const leafB = leafA.clone();
    leafB.position.x = -1.75;
    leafB.position.y = 15;
    leafB.rotation.z = 0.4;

    const leafC = leafB.clone();
    leafC.position.x = leafB.position.x * -1;
    leafC.rotation.z = leafB.rotation.z * -1;

    group.add(leafA);
    group.add(leafB);
    group.add(leafC);

    (internals as any).shadowSupport(group);

    return group;
  }
}

class Pilot {
  earPivotL: any;
  earPivotR: any;
  eye: any;
  eyeb: any;
  mesh: any;
  pilot: any;

  constructor() {

    console.log('🐰');

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.mesh = new fiber.Group();

    this.pilot = this._createPilot();

    this.mesh.rotation.x = 1.5;
    this.mesh.position.set(0, 7, 5);

    this.mesh.add(this.pilot);

    this.animate();
  }

  animate() {

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.earPivotL.rotation, {
      duration: 0.1,
      x: Math.sin(-Math.PI/3),
      repeat: Infinity,
      yoyo: true
    });

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.earPivotR.rotation, {
        duration: 0.1,
        x: -Math.PI/2.25,
      repeat: Infinity,
      yoyo: true
    });

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.eye.scale, {
        duration: 0.,
        y: 0.1,
      repeat: Infinity,
      yoyo: true,
      delay: 5,
      repeatDelay: 3
    });

    // @ts-expect-error TS(2304): Cannot find name 'gsap'.
    gsap.to(this.eyeb.scale, {
        duration: 0.5,
        y: 0.1,
      repeat: Infinity,
      yoyo: true,
      delay: 5,
      repeatDelay: 3
    });
  }

  _createPilot() {

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const group = new fiber.Group();

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const bodyGeo = new fiber.CubeGeometry(5, 5, 5);
    bodyGeo.vertices[3].y += 0.5;
    bodyGeo.vertices[6].y += 0.5;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const body = new fiber.Mesh(bodyGeo, (internals as any).materials.rabbit);
    body.position.y = 1;
    body.position.z = 4;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const seatGeo = new fiber.CubeGeometry(6, 1, 6);
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const seat = new fiber.Mesh(seatGeo, (internals as any).materials.brown);
    seat.position.set(0, -2.5, 0);
    seat.rotation.set(.25, 0, 0);
    body.add(seat);

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.earPivotL = new fiber.Object3D();
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    this.earPivotL.applyMatrix(new fiber.Matrix4().makeTranslation(0, 2.5, 0));
    this.earPivotL.rotation.x = -Math.PI/2.25;

    this.earPivotR = this.earPivotL.clone();
    this.earPivotR.rotation.x = -Math.PI/3;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const earGeo = new fiber.CubeGeometry(2, 6, 0.5);
    earGeo.vertices[2].x -= 0.5;
    earGeo.vertices[3].x -= 0.5;
    earGeo.vertices[6].x += 0.5;
    earGeo.vertices[7].x += 0.5;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const ear = new fiber.Mesh(earGeo, (internals as any).materials.rabbit);
    ear.position.x = -1.5;
    ear.position.y = 2.5;

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const earInside = new fiber.Mesh(earGeo, (internals as any).materials.pink);
    earInside.scale.set(.5, .7, .5);
    earInside.position.set(0, 0, .25);
    ear.add(earInside);

    this.earPivotL.add(ear);
    body.add(this.earPivotL);

    const ear2 = ear.clone();
    ear2.position.x = ear.position.x * -1;
    this.earPivotR.add(ear2);
    body.add(this.earPivotR);

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const eyeGeo = new fiber.CubeGeometry(0.5, 1, 0.5);
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const eye = new fiber.Mesh(eyeGeo, (internals as any).materials.gray);
    eye.position.set(1, 0.5, 2.5);
    body.add(eye);
    this.eye = eye;

    const eyeb = eye.clone();
    eyeb.position.x = eye.position.x * -1;
    this.eyeb = eyeb;
    body.add(eyeb);

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const noseGeo = new fiber.CubeGeometry(0.5, 0.5, 0.5);
    noseGeo.vertices[2].x = 0;
    noseGeo.vertices[3].x = 0;
    noseGeo.vertices[6].x = 0;
    noseGeo.vertices[7].x = 0;
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const nose = new fiber.Mesh(noseGeo, (internals as any).materials.pink);
    nose.position.set(0, -.5, 2.5);
    body.add(nose);

    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const mouthGeo = new fiber.CubeGeometry(.25, 0.25, 0.5);
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const mouth = new fiber.Mesh(mouthGeo, (internals as any).materials.gray);
    mouth.position.set(0, -1.5, 2.5);
    body.add(mouth);

    group.add(body);

    (internals as any).shadowSupport(group);

    return group;
  }
}


console.log('🥕🐰✈️☁️');


// @ts-expect-error TS(2304): Cannot find name 'fiber'.
(internals as any).renderer = new fiber.WebGLRenderer({ alpha: true, antialias: true });
// @ts-expect-error TS(2304): Cannot find name 'fiber'.
(internals as any).camera = new fiber.PerspectiveCamera(45, ((internals as any).W / (internals as any).H), 1, 1000);
// @ts-expect-error TS(2304): Cannot find name 'fiber'.
(internals as any).scene = new fiber.Scene();
// @ts-expect-error TS(2304): Cannot find name 'fiber'.
(internals as any).scene.fog = new fiber.Fog(0xd5f8f8, 100, 300);

// setup renderer
(internals as any).renderer.setPixelRatio(window.devicePixelRatio);
(internals as any).renderer.setClearColor(0xc5f5f5, .7);
(internals as any).renderer.setSize((internals as any).W, (internals as any).H);
(internals as any).renderer.shadowMap.enabled = true;
document.body.appendChild((internals as any).renderer.domElement);

// setup camera
(internals as any).camera.position.set(40, 20, 100);
(internals as any).scene.add((internals as any).camera);

// controls
// @ts-expect-error TS(2304): Cannot find name 'fiber'.
(internals as any).controls = new fiber.OrbitControls((internals as any).camera, (internals as any).renderer.domElement);
(internals as any).controls.minDistance = 50;
(internals as any).controls.maxDistance = 250;

(function setupLights() {
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const directional = new fiber.DirectionalLight(0xffffff, 1);
    directional.position.set(30, 20, 0);
    directional.castShadow = true;
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    (internals as any).scene.add(new fiber.AmbientLight(0xc5f5f5, 1));
    (internals as any).scene.add(directional);
}());

(function createFloor() {
    // @ts-expect-error TS(2304): Cannot find name 'fiber'.
    const floor = new fiber.Mesh(new fiber.PlaneBufferGeometry(1000, 1000), new fiber.MeshBasicMaterial({ color: 0xe0dacd }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -100;
    (internals as any).scene.add(floor);
}());

(function addElements() {
    (internals as any).scene.add(new Carrot().mesh);
    (internals as any).scene.add(new Cloud({ y: -5, z: 20 }).mesh);
    (internals as any).scene.add(new Cloud({ y: 0, z: 10, delay: 1 }).mesh);
    (internals as any).scene.add(new Cloud({ y: 15, z: -10, delay: .5 }).mesh);
    (internals as any).scene.add(new Cloud({ y: -15, z: 10, delay: 2 }).mesh);
}());

(internals as any).resizeHandler = () => {
    (internals as any).W = window.innerWidth;
    (internals as any).H = window.innerHeight;
    (internals as any).renderer.setSize((internals as any).W, (internals as any).H);
    (internals as any).camera.aspect = (internals as any).W / (internals as any).H;
    (internals as any).camera.updateProjectionMatrix();
};
window.addEventListener('resize', (internals as any).resizeHandler, false);
(internals as any).resizeHandler();

(internals as any).render = () => (internals as any).renderer.render((internals as any).scene, (internals as any).camera);
// @ts-expect-error TS(2304): Cannot find name 'TweenLite'.
TweenLite.ticker.addEventListener("tick", (internals as any).render);