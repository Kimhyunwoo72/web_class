  let tl = gsap.timeline();
  tl.to(".loader", {opacity:1, delay:0.4, ease: "power1.out"})
  tl.to(".bottomLine", {duration: .5, width:100 + "%",opacity:1, ease: "power1.out"})
  tl.to(".mainLine1", {duration: .5, height:100 + "%",opacity:1, ease: "power1.out"},"-=.2")
  tl.to(".mainLine2", {duration: .5, height:100 + "%",opacity:1, ease: "power1.out"},"-=.2")
  tl.to(".mainLine3", {duration: .5, height:100 + "%",opacity:1, ease: "power1.out"},"-=.2")
  tl.to(".mainLine4", {duration: .5, height:100 + "%",opacity:1, ease: "power1.out"},"-=.2")
  tl.to("#banner_bg", {opacity: 1,duration: 1,});
  tl.to(".main_inpo", {opacity: 1,duration: 1.5, y:0},"-=.5");
  tl.to(".main_inner", { opacity: 1,duration: 1.5},"-=.8");

  tl.to(".bottomLine", {duration: .5, width:100 + "%",opacity:.2, ease: "power1.out"},"-=1")
  tl.to(".mainLine1", {duration: .5, height:100 + "%",opacity:.2, ease: "power1.out"},"-=1")
  tl.to(".mainLine2", {duration: .5, height:100 + "%",opacity:.2, ease: "power1.out"},"-=1")
  tl.to(".mainLine3", {duration: .5, height:100 + "%",opacity:.2, ease: "power1.out"},"-=1")
  tl.to(".mainLine4", {duration: .5, height:100 + "%",opacity:.2, ease: "power1.out"},"-=1")


  // tl.to("#banner_bg", {duration: .5, opacity:1, ease: "power1.out"})




var container;
var camera, scene, renderer;
var uniforms;

function init() {
  container = document.getElementById("banner_bg");

  camera = new THREE.Camera();
  camera.position.z = 1;

  scene = new THREE.Scene();

  var geometry = new THREE.PlaneBufferGeometry(2, 2);

  uniforms = {
    time: {
      type: "f",
      value: 1.0,
    },
    resolution: {
      type: "v2",
      value: new THREE.Vector2(),
    },
  };

  var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
  });

  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  onWindowResize();
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize(event) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  uniforms.resolution.value.x = renderer.domElement.width;
  uniforms.resolution.value.y = renderer.domElement.height;
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  uniforms.time.value += 0.07;
  renderer.render(scene, camera);
}

// main font
var textWrapper = document.querySelector(".intro-title1");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: ".intro-title1 .letter",
    translateX: [170, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    // delay: 2,
    delay: function (el, i) {
      return 3800 + 50 * i;
    },
  });

var textWrapper = document.querySelector(".intro-title2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: ".intro-title2 .letter",
    translateX: [170, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3000,
    // delay: 2,
    delay: function (el, i) {
      return 4000 + 70 * i;
    },
  });
