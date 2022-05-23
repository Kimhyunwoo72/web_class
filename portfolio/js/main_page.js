  
  // bottom line
  gsap.to(".bottomLine ", {
    duration: 1.5,
    width: 100 + "%",
    ease: "none",
    // delay: 3,
  });
  // right line
  gsap.to(".mainLine1", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
  });
  gsap.to(".mainLine2", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 0.5,
  });
  gsap.to(".mainLine3", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 0.7,
  });
  gsap.to(".mainLine4", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 1,
  });
  //라인

  gsap.to(".main_inpo", {
    opacity: 1,
    duration: 1.5,
    delay: 2.9,
    y:0
  });
  gsap.to(".main_inner", {
    opacity: 1,
    duration: 2,
    delay: 2.7,
    ease: "power2.out",
    y:0
  });

  gsap.to("#banner_bg", {
    opacity: 1,
    duration: 1,
    delay: 1,
  });


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
      return 2800 + 50 * i;
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
    duration: 2500,
    // delay: 2,
    delay: function (el, i) {
      return 3000 + 70 * i;
    },
  });
