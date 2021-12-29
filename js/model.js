let renderer, scene, camera;

class Creeper {
  constructor() {
    // 头 身体 脚 几何体大小
    const headGeo = new THREE.BoxGeometry(4, 4, 4);
    const bodyGeo = new THREE.BoxGeometry(4, 8, 2);
    const handGeo = new THREE.BoxGeometry(5, 1, 1);
    const footGeo = new THREE.BoxGeometry(2, 3, 2);

    // 冯氏材质设为绿色
    const creeperMat = new THREE.MeshPhongMaterial({
      color: 0x00ff22,
    });

    // 头 Mesh( geometry : Geometry, material : Material )
    // 表示基于以三角形为polygon mesh（多边形网格）的物体的类。 同时也作为其他类的基类，例如SkinnedMesh。
    this.head = new THREE.Mesh(headGeo, creeperMat);
    this.head.position.set(0, 6, 0);

    // 身体
    this.body = new THREE.Mesh(bodyGeo, creeperMat);
    this.body.position.set(0, 0, 0);

    // 手
    this.hand1 = new THREE.Mesh(handGeo, creeperMat);
    this.hand1.position.set(2, 4, 2);
    this.hand2 = new THREE.Mesh(handGeo, creeperMat);
    this.hand2.position.set(2, 4, -2);
    this.hand = new THREE.Group();
    this.hand.add(this.hand1);
    this.hand.add(this.hand2);

    // 四只脚
    this.foot1 = new THREE.Mesh(footGeo, creeperMat);
    this.foot1.position.set(-1, -5.5, 2);
    this.foot2 = this.foot1.clone(); // 剩下三隻腳都複製第一隻的 Mesh
    this.foot2.position.set(-1, -5.5, -2);
    this.foot3 = this.foot1.clone();
    this.foot3.position.set(1, -5.5, 2);
    this.foot4 = this.foot1.clone();
    this.foot4.position.set(1, -5.5, -2);

    // 將四隻腳組合為一個 group
    this.feet = new THREE.Group();
    this.feet.add(this.foot1);
    this.feet.add(this.foot2);
    this.feet.add(this.foot3);
    this.feet.add(this.foot4);

    // 將頭、身體、腳組合為一個 group
    this.creeper = new THREE.Group();
    this.creeper.add(this.head);
    this.creeper.add(this.body);
    this.creeper.add(this.hand);
    this.creeper.add(this.feet);
  }
}

// 生成苦力怕 并加到场景
function createCreeper() {
  const creeperObj = new Creeper();
  scene.add(creeperObj.creeper);
}

// 初始化
function init() {
  // 建立场景
  scene = new THREE.Scene();

  // 相機設定與 OrbitControls
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(30, 30, 30);
  camera.lookAt(scene.position);

  // 三轴坐标辅助
  let axes = new THREE.AxesHelper(25);
  scene.add(axes);

  // 渲染器設定
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xeeeeee, 1.0); // 预设背景颜色

  // 加入地板
  const planeGeometry = new THREE.PlaneGeometry(60, 60);
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI; // 使平面与y轴垂直 并让正面朝上
  plane.position.set(0, -7, 0);
  scene.add(plane);

  // 生产苦力怕
  createCreeper();

  // 簡單的 spotlight 照亮物體
  let spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(-10, 40, 30);
  scene.add(spotLight);
  // let spotHelper = new THREE.SpotLightHelper(spotLight)
  // scene.add(spotHelper)

  // 將渲染出來的畫面放到網頁上的 DOM
  document.body.appendChild(renderer.domElement);
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
render();
