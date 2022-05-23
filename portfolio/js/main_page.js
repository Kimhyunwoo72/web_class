function main() {
  // bottom line
  gsap.to(".bg_box ul ", {
    duration: 1.5,
    width: 100 + "%",
    ease: "none",
    // delay: 3,
  });
  // right line
  gsap.to(".bg_box ul li:nth-child(1)", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 1.4,
  });
  gsap.to(".bg_box ul li:nth-child(2)", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 1.6,
  });
  gsap.to(".bg_box ul li:nth-child(3)", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 1.8,
  });
  gsap.to(".bg_box ul li:nth-child(4)", {
    duration: 0.7,
    height: 35 + "vw",
    opacity: "1",
    ease: "none",
    delay: 2,
  });
  //라인

  // h1
  gsap.from(".main_page h1 span span ", {
    delay: 2,
    y: 200,
    stagger: {
      amount: 0.6,
      // from: "end",
    },
  });
  setTimeout(() => {
    gsap.to(".main_page h1 span span ", {
      y: 0,
      delay: 2.5,
    });
  }, 4100);

  // h2
  gsap.from(".main_page h2 span span ", {
    delay: 2.2,
    y: 200,
    stagger: {
      amount: 0.6,
      // from: "center",
    },
  });

  gsap.to(".main_inpo", {
    opacity: 1,
    duration: 1.5,
    delay: 2.9,
  });
  gsap.to(".main_inner", {
    opacity: 1,
    duration: 2,
    delay: 3.7,
  });

  gsap.to("#about_bg", {
    opacity: 1,
    duration: 1,
    delay: 3,
  });
}
// 함수끝

var container;
var camera, scene, renderer;
var uniforms;

function init() {
  container = document.getElementById("about_bg");

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
    duration: 2500,
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
