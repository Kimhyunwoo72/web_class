      //화면 설정
      const scene9 = new THREE.Scene();
      //카메라 설정
      const camera9 = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera9.position.z = 400;
      scene9.add(camera9);
      //렌더링 설정
      const renderer9 = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer9.setPixelRatio(
        window.devicePixelRatio ? window.devicePixelRatio : 1
      );
      renderer9.setSize(window.innerWidth, window.innerHeight);
      renderer9.autoClear = false;
      renderer9.setClearColor(0x000000, 0.0);
      document.getElementById("canvas_bg").appendChild(renderer9.domElement);
      //오브젝트 설정
      const circle = new THREE.Object3D();
      const skelet = new THREE.Object3D();
      const particle = new THREE.Object3D();
      scene9.add(circle);
      scene9.add(skelet);
      scene9.add(particle);
      //모양 설정
      const geometry = new THREE.TetrahedronGeometry(2, 0);
      const geom = new THREE.IcosahedronGeometry(7, 1);
      const geom2 = new THREE.IcosahedronGeometry(15, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading,
      });
      const mat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading,
      });
      const mat2 = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        side: THREE.DoubleSide,
      });
      //파티클 설정
      for (let i = 0; i < 1000; i++) {
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position
          .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize();
        mesh.position.multiplyScalar(90 + Math.random() * 700);
        mesh.rotation.set(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        );
        particle.add(mesh);
      }
      //크기 설정
      // var planet = new THREE.Mesh(geom, mat);
      // planet.scale.x = planet.scale.y = planet.scale.z = 16;
      // circle.add(planet);
      // var planet2 = new THREE.Mesh(geom2, mat2);
      // planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
      // skelet.add(planet2);
      //조명 설정
      const ambientLight = new THREE.AmbientLight(0x999999);
      const lights = [];
      lights[0] = new THREE.DirectionalLight(0xf5f5f5, 0);
      lights[0].position.set(1, 0, 0);
      lights[1] = new THREE.DirectionalLight(0xe4a951, 1);
      lights[1].position.set(0.75, 1, 0.5);
      lights[2] = new THREE.DirectionalLight(0xda0ba9, 0.5);
      lights[2].position.set(-0.75, -1, 0.5);
      scene9.add(ambientLight);
      scene9.add(lights[0]);
      scene9.add(lights[1]);
      scene9.add(lights[2]);

      //애니메이션 설정
      function animate() {
        requestAnimationFrame(animate);
        particle.rotation.x += 0.0001;
        particle.rotation.y -= 0.003;
        circle.rotation.x -= 0.002;
        circle.rotation.y -= 0.003;
        skelet.rotation.x -= 0.001;
        skelet.rotation.y += 0.002;
        renderer9.clear();
        renderer9.render(scene9, camera9);
      }
      animate();

      //화면 사이즈 설정
      function onWindowResize() {
        camera9.aspect = window.innerWidth / window.innerHeight;
        camera9.updateProjectionMatrix();
        renderer9.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener("resize", onWindowResize);