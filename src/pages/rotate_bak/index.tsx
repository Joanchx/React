// import React, { useEffect } from 'react';
// import {
// 	Scene,
// 	Camera,
// 	PerspectiveCamera,
// 	WebGLRenderer,
// 	BoxGeometry,
// 	MeshBasicMaterial,
// 	Mesh,
// 	TextureLoader,
// 	DoubleSide,
// } from 'three';
// import Stats from 'stats.js';
// import { OrbitControls } from './OrbitControls';

// const Rotate = () => {
// 	const scene = new Scene();
// 	const camera = new PerspectiveCamera(
// 		100,
// 		window.innerWidth / window.innerHeight,
// 		0.1,
// 		800
// 	);
// 	const renderer = new WebGLRenderer({ antialias: true });
// 	let dom = document.getElementById('element');
// 	const stats = new Stats();
// 	//设置舞台的大小
// 	renderer.setSize(window.innerWidth, window.innerHeight);

// 	useEffect(() => {
// 		dom = document.getElementById('element');
// 		dom && dom.appendChild(renderer.domElement);

// 		window.addEventListener('resize', () => onResize());
// 		draw();
// 	}, []);

// 	const onResize = () => {
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		camera.aspect = window.innerWidth / window.innerHeight;
// 		camera.updateProjectionMatrix();
// 		render();
// 	};

// 	const render = () => {
// 		stats.begin();
// 		window.requestAnimationFrame(() => render());
// 		const box = scene.getObjectByName('box');
// 		if (box) {
// 			box.rotation.x += 0.005;
// 			box.rotation.y += 0.005;
// 			box.rotation.z += 0.005;
// 		}
// 		renderer.render(scene, camera);
// 		stats.end();
// 	};

// 	const draw = () => {
// 		const textureLoader = new TextureLoader();
// 		//材质
// 		const boxTexture = textureLoader.load(
// 			require('../../assets/images/wan.jpg')
// 		);

// 		const boxGeometry = new BoxGeometry(1, 1, 1);
// 		const meshBasicMaterial = new MeshBasicMaterial({
// 			map: boxTexture,
// 			side: DoubleSide,
// 		});
// 		//立方体
// 		const mesh = new Mesh(boxGeometry, meshBasicMaterial);
// 		mesh.name = 'box';

// 		//天空
// 		const skyBoxGeometry = new BoxGeometry(200, 200, 200);
// 		const skyBoxMaterials = [
// 			new MeshBasicMaterial({
// 				map: textureLoader.load(
// 					require('../../assets/images/start.jpg')
// 				),
// 				side: DoubleSide,
// 			}),
// 			new MeshBasicMaterial({
// 				map: textureLoader.load(
// 					require('../../assets/images/start.jpg')
// 				),
// 				side: DoubleSide,
// 			}),
// 			new MeshBasicMaterial({
// 				map: textureLoader.load(
// 					require('../../assets/images/start.jpg')
// 				),
// 				side: DoubleSide,
// 			}),
// 			new MeshBasicMaterial({
// 				map: textureLoader.load(
// 					require('../../assets/images/start.jpg')
// 				),
// 				side: DoubleSide,
// 			}),
// 			new MeshBasicMaterial({
// 				map: textureLoader.load(
// 					require('../../assets/images/start.jpg')
// 				),
// 				side: DoubleSide,
// 			}),
// 			new MeshBasicMaterial({
// 				map: textureLoader.load(
// 					require('../../assets/images/start.jpg')
// 				),
// 				side: DoubleSide,
// 			}),
// 		];
// 		const skyBoxMesh = new Mesh(skyBoxGeometry, skyBoxMaterials);

// 		//相机的位置
// 		camera.position.set(0, 0, 3);

// 		scene.add(mesh);
// 		scene.add(skyBoxMesh);

// 		const stats = new Stats();
// 		stats.showPanel(0);
// 		dom && dom.appendChild(stats.dom);

// 		new OrbitControls(camera, renderer.domElement);

// 		render();
// 	};

// 	return <div id='element'></div>;
// };

// export default Rotate;
