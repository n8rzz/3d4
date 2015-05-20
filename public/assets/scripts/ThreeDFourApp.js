define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var Stage = require('structurejs/display/Stage');
    var EventBroker = require('structurejs/event/EventBroker');

    var SceneView = require('view/SceneView');

    /**
     * TODO: YUIDoc_comment
     *
     * @class ThreeDFourApp
     * @extends Stage
     * @constructor
     **/
    var ThreeDFourApp = (function () {

        var _super = Extend(ThreeDFourApp, Stage);

        function ThreeDFourApp() {
            _super.call(this);

            /**
             * A view that contains the 3d4 scene
             * @property _sceneView
             * @type {SceneView}
             * @private
             */
            this._sceneView = null;

        }

        /**
         * @overridden Stage.create
         */
        ThreeDFourApp.prototype.create = function () {
            _super.prototype.create.call(this);

            var $scene = this.$element.find('.js-gameStage');

            this._sceneView = new SceneView($scene);
            this.addChild(this._sceneView);
            this._sceneView.disable();
        };

        /**
         * @overridden Stage.enable
         */
        ThreeDFourApp.prototype.enable = function () {
            if (this.isEnabled === true) { return this; }

            // Enable the child objects and/or add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden Stage.disable
         */
        ThreeDFourApp.prototype.disable = function () {
            if (this.isEnabled === false) { return this; }

            // Disable the child objects and/or remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden Stage.layout
         */
        ThreeDFourApp.prototype.layout = function () {
            // Layout or update the objects in this parent class.

            return this;
        };

        /**
         * @overridden Stage.destroy
         */
        ThreeDFourApp.prototype.destroy = function () {
            _super.prototype.destroy.call(this);

            this._sceneView.destryo();
            this._sceneView = null;
        };

        return ThreeDFourApp;
    })();

    module.exports = ThreeDFourApp;

});