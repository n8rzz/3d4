define(function(require, module, exports) {
    'use strict';

    return {
        CAMERA: {
            VIEW_ANGLE: 45,
            ASPECT: WIDTH / HEIGHT,
            NEAR: 1,
            FAR: 10000,
            X: 500,
            Y: 700,
            Z: 2500,
        },
        SQUARE_SIZE: 250,
        GAME_BOARD: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        SHAPES: {
            GAME_BOARD: {
                SQUARE_SIZE: 250,
                X: this.squareSize * 4,
                Z: 50,
                Y: this.squareSize * 4,
                COLOR: 0x4e9f64,
                MATERIAL: new THREE.MeshLambertMaterial({ color: 0x4e9f64}) // flat green
            },
            POST: {
                RADIUS_TOP: 5,
                RADIUS_BOTTOM: 5,
                HEIGHT: 300,
                RADIUS_SEGMENTS: 16,
                COLOR: 0x000000,
                MATERIAL: new THREE.MeshLambertMaterial({color: this.color}),
                Y: 150
            },
            SPHERE: {
                RADIUS: 50,
                SEGMENTS: 25,
                RINGS: 25,
                COLOR: 0xcc0000,
                MATERIAL: new THREE.MeshLambertMaterial({color: this.color}),
                X: 50,
                Y: 75,
                Z: 50
            }
        }
    };
});