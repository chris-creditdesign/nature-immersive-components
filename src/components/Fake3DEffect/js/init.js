/* eslint-disable new-cap */
/* PIXI syntax */
import * as PIXI from "pixi.js"

const init = ref => {
	const width = 2000
	const height = 1211

	const app = new PIXI.Application({
		width,
		height,
		antialias: true,
		transparent: true,
	})

	ref.appendChild(app.view)

	const geometry = new PIXI.Geometry()
		.addAttribute(
			"aVertexPosition", // the attribute name
			[
				-width / 2,
				-height / 2, // x, y - measured from the center
				width / 2,
				-height / 2, // x, y
				width / 2,
				height / 2,
				-width / 2,
				height / 2,
			], // x, y
			2
		) // the size of the attribute
		.addAttribute(
			"aUvs", // the attribute name
			[
				0,
				0, // u, v
				1,
				0, // u, v
				1,
				1,
				0,
				1,
			], // u, v
			2
		) // the size of the attribute
		.addIndex([0, 1, 2, 0, 2, 3])

	const vertexSrcTest = `

    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {

        vUvs = aUvs;
        gl_Position = vec4(
						(projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).x, 
						(projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).y,
						0.0,
						1.0
				);

    }`

	const fragmentSrcTest = `
		//Define the precision of floating numbers
    precision mediump float;

    varying vec2 vUvs; //The coordinates of the current pixel
    uniform sampler2D u_image; //The image data
		uniform sampler2D u_imageMap; 
		uniform vec2 u_mouse;
		uniform vec2 u_threshold;

		vec2 mirrored(vec2 v) {
			vec2 m = mod(v,2.);
			return mix(m,2.0 - m, step(1.0 ,m));
		}

		void main(){
			vec4 tex1 = texture2D(u_imageMap, vUvs);
			
			vec2 fake3d = vec2(
					vUvs.x + (tex1.r - 0.5) * u_mouse.x / u_threshold.x, 
					vUvs.y + (tex1.r - 0.5) * u_mouse.y / u_threshold.y
			);	
		
			gl_FragColor = texture2D(u_image, fake3d);
		}
`

	const texture = new PIXI.Texture.from(
		"public/img/nature-150-2-test.jpg"
	)
	const textureMap = new PIXI.Texture.from(
		"public/img/nature-150-2-test-map.jpg"
	)

	const uniforms = {
		u_image: texture,
		u_imageMap: textureMap,
		u_mouse: {
			x: 0,
			y: 0,
		},
		u_threshold: {
			x: 35.0,
			y: 35.0,
		},
	}

	const shader = PIXI.Shader.from(
		vertexSrcTest,
		fragmentSrcTest,
		uniforms
	)

	const quad = new PIXI.Mesh(geometry, shader)

	quad.position.set(width / 2, height / 2)
	quad.scale.set(1)

	app.stage.addChild(quad)

	ref.addEventListener("mousemove", e => {
		const { offsetX, offsetY } = e
		const x = offsetX / width
		const y = offsetY / height
		quad.shader.uniforms.u_mouse = { x, y }
	})
}

export default init
