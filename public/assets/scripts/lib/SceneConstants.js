define(function(require, module, exports) {
    'use strict';

    return {
        CAMERA: {
            POSITION: {
                Z: 3
            }
        },
        LIGHT: {
            AMBIENT: '0x404040',
            FRONT: {
                COLOR: 'white',
                INTENSITY: '1',
                POSITION: [0.5, 0.5, 2]
            },
            BACK: {
                COLOR: 'white',
                INTENSITY: '0.75',
                POSITION: [-0.5, -0.5, -2]
            }
        }
    };
});