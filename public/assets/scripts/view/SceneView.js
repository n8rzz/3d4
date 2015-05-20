define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var DOMElement = require('structurejs/display/DOMElement');
    var THREE = require('threejs');
    var CONSTANTS = require('../lib/SceneConstants');

    var HEIGHT = window.innerHeight;
    var WIDTH = window.innerWidth;

    /**
     * TODO: YUIDoc_comment
     *
     * @class SceneView
     * @extends DOMElement
     * @constructor
     **/
    var SceneView = (function () {

        var _super = Extend(SceneView, DOMElement);

        function SceneView($element) {
            _super.call(this, $element);

            /**
             *
             */
            this.renderer = null;

            /**
             *
             */
            this.scene = null;

            /**
             *
             */
            this.camera = null;

            /**
             *
             */
            this.onRenderFacets = [];

            /**
             *
             */
            this.onWindowResize = null;

            /**
             *
             */
            this.ambientLight = null;

            /**
             *
             */
            this.frontLight = null;

            /**
             *
             */
            this.backLight = null;


        }

        /**
         * @overridden DOMElement.create
         */
        SceneView.prototype.create = function () {
            _super.prototype.create.call(this);

            // Create or setup objects in this parent class.
        };

        /**
         * @overridden DOMElement.enable
         */
        SceneView.prototype.enable = function () {
            if (this.isEnabled === true) { return this; }

            // Enable the child objects and/or add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden DOMElement.disable
         */
        SceneView.prototype.disable = function () {
            if (this.isEnabled === false) { return this; }

            // Disable the child objects and/or remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
        * @overridden DOMElement.layout
        */
        SceneView.prototype.layout = function () {
            // Layout or update the objects in this parent class.

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize( WIDTH, HEIGHT );

            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.01, 1000);
            this.camera.position.z = 3;

            // this.onWindowResize = new THREEx.WindowResize(renderer, camera);

            this.ambientLight = new THREE.AmbientLight(CONSTANTS.LIGHT.AMBIENT);
            this.scene.add(this.ambientLight);

            this.frontLight = new THREE.DirectionalLight(CONSTANTS.LIGHT.FRONT.COLOR, CONSTANTS.LIGHT.FRONT.INTENSITY);
            this.frontLight.position.set(CONSTANTS.LIGHT.FRONT.POSITION)
            this.scene.add(this.frontLight);

            this.backLight = new THREE.DirectionalLight(CONSTANTS.LIGHT.BACK, CONSTANTS.LIGHT.BACK.INTENSITY);
            this.backLight.position.set(CONSTANTS.LIGHT.BACK.POSITION);
            this.scene.add(this.backLight);

            return this.render()
                        .redraw();
        };

        /**
         * @overridden DOMElement.destroy
         */
        SceneView.prototype.destroy = function () {
            // Call destroy on any child objects.
            // This super method will also null out your properties for garbage collection.

            _super.prototype.destroy.call(this);

            this.renderer = null;
            this.scene = null;
            this.camera = null;
            this.onRenderFacets = [];
            this.onWindowResize = null;
            this.ambientLight = null;
            this.frontLight = null;
            this.backLight = null;
        };



        SceneView.prototype.render = function () {
            document.body.appendChild(renderer.domElement);



            return this;
        };

        SceneView.prototype.redraw = function () {
            this.onRenderFacets.push(function() {
                this.renderer.render(scene, camera);
            });


            return this;
        };

        return SceneView;
    })();

    module.exports = SceneView;

});