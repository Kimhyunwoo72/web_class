window.addEventListener("load", function () {
  let sec2WrapWidth = document.querySelector(".sec2__wrap").offsetWidth;
  let horizontal2 = sec2WrapWidth - window.innerWidth;

  var windowWidth = window.innerWidth;
  if (windowWidth <= 750) {
    gsap.to(".about_title", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        toggleActions: "resume pause reset pause",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      duration: 1,
    });

    // about_title
    // gsap.from(".about_title h2", {
    //   scrollTrigger: {
    //     trigger: ".about_page",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 0,
    //   y: 150,
    //   duration: 1,
    // });
    // gsap.to(".about_title h2", {
    //   scrollTrigger: {
    //     trigger: ".about_page",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 1,
    //   y: 0,
    //   duration: 1.5,
    // });
    // about_title

    // about_num
    gsap.from(".about_cont ul li .about_num1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_num1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "sine.out",
      delay: 0.8,
    });

    gsap.from(".about_cont ul li .about_num2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_num2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "sine.out",
      delay: 1.2,
    });

    gsap.from(".about_cont ul li .about_num3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_num3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "sine.out",
      delay: 1.5,
    });
    // about_num

    //about_desc
    gsap.from(".about_cont ul li .about_desc1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      y: 20,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_desc1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      delay: 1.4,
    });

    gsap.from(".about_cont ul li .about_desc2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      y: 20,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_desc2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      delay: 1.6,
    });

    gsap.from(".about_cont ul li .about_desc3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      y: 20,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_desc3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      delay: 1.8,
    });
    //about_desc

    //about_cont line
    gsap.from(".about_cont ul li:nth-child(1)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 0,
      height: 0,
    });
    gsap.to(".about_cont ul li:nth-child(1)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      height: 100 + "%",
      duration: 1,
      ease: "none",
      delay: 1,
    });

    gsap.from(".about_cont ul li > div", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      scaleX: 1,
      scaleY: 1,
    });
    gsap.to(".about_cont ul li > div", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      delay: 1,
      duration: 4,
      scaleX: 1.3,
      scaleY: 1.3,
    });

    // 반응형 끝
  } else {
    // gsap.to(".about_title", {
    //   scrollTrigger: {
    //     scroller: pageContents,
    //     trigger: ".about_page",
    //     toggleActions: "resume pause reset pause",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 1,
    //   duration: 1,
    // });

    // about_title
    // gsap.from(".about_title h2", {
    //   scrollTrigger: {
    //     trigger: ".about_page",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 0,
    //   y: 100,
    //   duration: 1,
    // });
    // gsap.to(".about_title h2", {
    //   scrollTrigger: {
    //     trigger: ".about_page",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    // });
    // about_title

    // about_cont
    // gsap.from(".about_cont", {
    //   scrollTrigger: {
    //     trigger: ".about_page",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 0,
    //   width: 0,
    // });
    // gsap.to(".about_cont", {
    //   scrollTrigger: {
    //     trigger: ".about_page",
    //     markers: true,
    //     start: "5% center",
    //   },
    //   opacity: 1,
    //   width: 100 + "%",
    //   duration: 1,
    // });
    // about_cont

    //about_cont line
    gsap.from(".about_cont ul li:nth-child(1)", {
      scrollTrigger: {
        trigger: ".about_page",
        scroller: pageContents,
        markers: true,
        start: "5% center",
      },
      opacity: 0,
      height: 0,
    });
    gsap.to(".about_cont ul li:nth-child(1)", {
      scrollTrigger: {
        trigger: ".about_page",
        scroller: pageContents,
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      height: 100 + "%",
      duration: 1,
      ease: "none",
      delay: 1,
    });
    //about_cont line
    gsap.from(".about_cont ul li > div", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      scaleX: 1,
      scaleY: 1,
    });
    gsap.to(".about_cont ul li > div", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      delay: 1,
      duration: 4,
      scaleX: 1.3,
      scaleY: 1.3,
    });

    gsap.from(".about_cont ul li:nth-child(2)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 0,
      height: 0,
    });
    gsap.to(".about_cont ul li:nth-child(2)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      height: 100 + "%",
      duration: 0.7,
      ease: "none",
      delay: 1.1,
    });

    gsap.from(".about_cont ul li:nth-child(3)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 0,
      height: 0,
    });
    gsap.to(".about_cont ul li:nth-child(3)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      height: 100 + "%",
      duration: 0.7,
      ease: "none",
      delay: 1.2,
      paddingTop: 9 + "%",
    });

    gsap.from(".about_cont ul li:nth-child(4)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 0,
      height: 0,
    });
    gsap.to(".about_cont ul li:nth-child(4)", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      height: 100 + "%",
      duration: 0.7,
      ease: "none",
      delay: 1.4,
      paddingTop: 15 + "%",
    });
    //about_cont line

    // about_num
    gsap.from(".about_cont ul li .about_num1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_num1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "sine.out",
      delay: 1.8,
    });

    gsap.from(".about_cont ul li .about_num2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_num2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "sine.out",
      delay: 2.2,
    });

    gsap.from(".about_cont ul li .about_num3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_num3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "sine.out",
      delay: 2.5,
    });
    // about_num

    //about_desc
    gsap.from(".about_cont ul li .about_desc1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      y: 20,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_desc1", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      delay: 2.4,
    });

    gsap.from(".about_cont ul li .about_desc2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      y: 20,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_desc2", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      delay: 2.6,
    });

    gsap.from(".about_cont ul li .about_desc3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      y: 20,
      opacity: 0,
    });
    gsap.to(".about_cont ul li .about_desc3", {
      scrollTrigger: {
        scroller: pageContents,
        trigger: ".about_page",
        markers: true,
        start: "5% center",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power1.out",
      delay: 2.8,
    });
    //about_desc
  }

  /////////////////////////////////////////////////////////////////

  //about_page 2 title-->
  gsap.from(".aboutImg_box > .about_text", {
    scrollTrigger: {
      scroller: pageContents,
      trigger: ".aboutImg_box",
      markers: true,
      start: "10% center",
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.to(".aboutImg_box > .about_text", {
    scrollTrigger: {
      scroller: pageContents,
      trigger: ".aboutImg_box",
      markers: true,
      start: "10% center",
    },
    opacity: 1,
    y: 0,
    duration: 1,
  });
  //about_page 2 title-->

  //about_page 2 img-->
  gsap.from(".slider__img", {
    scrollTrigger: {
      scroller: pageContents,
      trigger: ".aboutImg_box",
      markers: true,
      start: "10% center",
    },
    opacity: 0,
    duration: 1,
  });
  gsap.to(".slider__img", {
    scrollTrigger: {
      scroller: pageContents,
      trigger: ".aboutImg_box",
      markers: true,
      start: "10% center",
    },
    opacity: 1,
    ease: "power2.out",
    duration: 2,
  });
  //about_page 2 img-->
});

// slider
class Stage {
  constructor() {
    this.renderParam = {
      clearColor: 0x0000,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.cameraParam = {
      fov: 45,
      near: 0.1,
      far: 100,
      lookAt: new THREE.Vector3(0, 0, 0),
      x: 0,
      y: 0,
      z: 10,
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.isInitialized = false;
  }

  init() {
    this._setScene();
    this._setRender();
    this._setCamera();
    this.isInitialized = true;
  }

  _setScene() {
    this.scene = new THREE.Scene();
  }

  _setRender() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(new THREE.Color(this.renderParam.clearColor));
    this.renderer.setSize(this.renderParam.width, this.renderParam.height);
    const wrapper = document.querySelector("#webgl");
    wrapper.appendChild(this.renderer.domElement);
  }

  _setCamera() {
    if (!this.isInitialized) {
      this.camera = new THREE.PerspectiveCamera(
        0,
        0,
        this.cameraParam.near,
        this.cameraParam.far
      );

      this.camera.position.set(
        this.cameraParam.x,
        this.cameraParam.y,
        this.cameraParam.z
      );
      this.camera.lookAt(this.cameraParam.lookAt);
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;

    this.camera.fov =
      THREE.MathUtils.radToDeg(
        Math.atan(width / this.camera.aspect / (2 * this.camera.position.z))
      ) * 2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  _render() {
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    this._setCamera();
  }

  onRaf() {
    this._render();
  }
}

class Mesh {
  constructor(stage) {
    this.geometryRatio = 0.8;

    this.geometryParm = {
      width: 1.0,
      height: 1.0,
      widthSegments: 32.0,
      heightSegments: 32.0,
    };

    this.materialParam = {
      useWireframe: false,
    };

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.naturalSize = {
      x: 1728,
      y: 564,
    };

    this.images = [
      "./assets/img/slider01.jpg",
      "./assets/img/slider02.jpg",
      "./assets/img/slider03.jpg",
      "./assets/img/slider04.jpg",
    ];

    this.noiseImage =
      "https://hisamikurita.github.io/sample-images/dist/assets/images/noise.webp";

    this.uniforms = {
      u_noise_texture: {
        type: "t",
        value: new THREE.TextureLoader().load(this.noiseImage),
      },
      u_texture_01: {
        type: "t",
        value: new THREE.TextureLoader().load(this.images[0]),
      },
      u_texture_02: {
        type: "t",
        value: new THREE.TextureLoader().load(this.images[1]),
      },
      u_texture_03: {
        type: "t",
        value: new THREE.TextureLoader().load(this.images[2]),
      },
      u_texture_04: {
        type: "t",
        value: new THREE.TextureLoader().load(this.images[3]),
      },
      u_noise_switch_01: {
        type: "f",
        value: 0.0,
      },
      u_noise_switch_02: {
        type: "f",
        value: 0.0,
      },
      u_noise_switch_03: {
        type: "f",
        value: 0.0,
      },
      u_noise_switch_04: {
        type: "f",
        value: 0.0,
      },
      u_texture_switch_01: {
        type: "f",
        value: 1.0,
      },
      u_texture_switch_02: {
        type: "f",
        value: 0.0,
      },
      u_texture_switch_03: {
        type: "f",
        value: 0.0,
      },
      u_texture_switch_04: {
        type: "f",
        value: 0.0,
      },
      u_wave: {
        type: "f",
        value: 0.0,
      },
      u_time: {
        type: "f",
        value: 0.0,
      },
      u_meshsize: {
        type: "v2",
        value: {
          x: this.width,
          y: this.height,
        },
      },
      u_texturesize: {
        type: "v2",
        value: {
          x: this.naturalSize.x,
          y: this.naturalSize.y,
        },
      },
    };

    this.stage = stage;
    this.mesh = null;
    this.duration = 0.9;
    this.ease = "power1.out";
  }

  init() {
    this._setMesh();
    this._setMeshScale();
  }

  _setMesh() {
    const geometry = new THREE.PlaneBufferGeometry(
      this.geometryParm.width,
      this.geometryParm.height,
      this.geometryParm.widthSegments,
      this.geometryParm.heightSegments
    );

    const material = new THREE.RawShaderMaterial({
      vertexShader: document.querySelector("#js-vertex-shader").textContent,
      fragmentShader: document.querySelector("#js-fragment-shader").textContent,
      wireframe: this.materialParam.useWireframe,
      transparent: true,
      uniforms: this.uniforms,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.stage.scene.add(this.mesh);
  }

  _setMeshScale() {
    this.width = document.querySelector("#webgl").getBoundingClientRect().width;
    this.height = document
      .querySelector("#webgl")
      .getBoundingClientRect().height;

    this.mesh.scale.x = this.width;
    this.mesh.scale.y = this.height;

    this.uniforms.u_meshsize.value.x = this.mesh.scale.x;
    this.uniforms.u_meshsize.value.y = this.mesh.scale.y;
  }

  onResize() {
    this._setMeshScale();
  }

  _setWave() {
    gsap.fromTo(
      this.mesh.material.uniforms.u_wave,
      {
        value: 0.0,
      },
      {
        duration: this.duration / 2,
        ease: this.ease,
        value: 1.0,
        onComplete: () => {
          gsap.to(this.mesh.material.uniforms.u_wave, {
            duration: this.duration,
            ease: this.ease,
            value: 0.0,
          });
        },
      }
    );
  }

  _setNoise(number) {
    switch (number) {
      case 0:
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_01,
          {
            value: 0.0,
          },
          {
            duration: this.duration,
            ease: this.ease,
            value: 1.0,
          }
        );
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_02,
          {
            value: -1.0,
          },
          {
            duration: this.duration * 1.3,
            ease: this.ease,
            value: 0.0,
          }
        );
        break;
      case 1:
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_02,
          {
            value: 0.0,
          },
          {
            duration: this.duration,
            ease: this.ease,
            value: 1.0,
          }
        );
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_03,
          {
            value: -1.0,
          },
          {
            duration: this.duration * 1.3,
            ease: this.ease,
            value: 0.0,
          }
        );
        break;
      case 2:
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_03,
          {
            value: 0.0,
          },
          {
            duration: this.duration,
            ease: this.ease,
            value: 1.0,
          }
        );
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_04,
          {
            value: -1.0,
          },
          {
            duration: this.duration * 1.3,
            ease: this.ease,
            value: 0.0,
          }
        );
        break;
      case 3:
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_04,
          {
            value: 0.0,
          },
          {
            duration: this.duration,
            ease: this.ease,
            value: 1.0,
          }
        );
        gsap.fromTo(
          this.mesh.material.uniforms.u_noise_switch_01,
          {
            value: -1.0,
          },
          {
            duration: this.duration * 1.3,
            ease: this.ease,
            value: 0.0,
          }
        );
        break;
    }
  }

  _changeSlide(number) {
    this._setWave();
    this._setNoise(number);

    switch (number) {
      case 0:
        gsap.to(this.mesh.material.uniforms.u_texture_switch_01, {
          duration: this.duration,
          ease: this.ease,
          value: 0.0,
        });
        gsap.to(this.mesh.material.uniforms.u_texture_switch_02, {
          duration: this.duration,
          ease: this.ease,
          value: 1.0,
        });
        break;
      case 1:
        gsap.to(this.mesh.material.uniforms.u_texture_switch_02, {
          duration: this.duration,
          ease: this.ease,
          value: 0.0,
        });
        gsap.to(this.mesh.material.uniforms.u_texture_switch_03, {
          duration: this.duration,
          ease: this.ease,
          value: 1.0,
        });
        break;
      case 2:
        gsap.to(this.mesh.material.uniforms.u_texture_switch_03, {
          duration: this.duration,
          ease: this.ease,
          value: 0.0,
        });
        gsap.to(this.mesh.material.uniforms.u_texture_switch_04, {
          duration: this.duration,
          ease: this.ease,
          value: 1.0,
        });
        break;
      case 3:
        gsap.to(this.mesh.material.uniforms.u_texture_switch_04, {
          duration: this.duration,
          ease: this.ease,
          value: 0.0,
        });
        gsap.to(this.mesh.material.uniforms.u_texture_switch_01, {
          duration: this.duration,
          ease: this.ease,
          value: 1.0,
        });
        break;
    }
  }

  _render() {
    this.uniforms.u_time.value += 0.05;
  }

  onRaf() {
    this._render();
  }
}

class Slider {
  constructor() {
    const stage = new Stage();
    stage.init();

    const mesh = new Mesh(stage);
    mesh.init();

    window.addEventListener("resize", () => {
      stage.onResize();
      mesh.onResize();
    });

    const _raf = () => {
      window.requestAnimationFrame(() => {
        _raf();

        stage.onRaf();
        mesh.onRaf();
      });
    };

    _raf();

    this.currentNum = 0;

    const _moveChangeSlide = () => {
      if (this.currentNum > 2) {
        this.currentNum = 0;
      } else {
        this.currentNum++;
      }
    };

    const _autoChangeSlide = () => {
      gsap
        .to(
          {},
          {
            ease: "none",
            duration: 3.0,
            repeat: -1.0,
          }
        )
        .eventCallback("onRepeat", () => {
          mesh._changeSlide(this.currentNum);
          _moveChangeSlide();
        });
    };

    window.addEventListener("load", () => {
      _autoChangeSlide();
    });
  }
}

new Slider();
// slider
