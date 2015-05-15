define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var Stage = require('structurejs/display/Stage');
    var NavigationView = require('./view/NavigationView');
    var GameStageView = require('./view/GameStageView');

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

            this._navigationView = null;
            this._gameStageView = null;

        }

        /**
         * @overridden Stage.create
         */
        ThreeDFourApp.prototype.create = function () {
            _super.prototype.create.call(this);

            this._navigationView = new NavigationView(); // add $element to attach everything to
            this.addChild(this._navigationView);

            this._gameStageView = new GameStageView(); // add $element to attach everything to
            this.addChild(this._gameStageView);
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
            // Call destroy on any child objects.
            // This super method will also null out your properties for garbage collection.

            _super.prototype.destroy.call(this);
        };

        return ThreeDFourApp;
    })();

    module.exports = ThreeDFourApp;

});