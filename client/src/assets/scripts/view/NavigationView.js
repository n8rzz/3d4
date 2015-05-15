define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var DOMElement = require('structurejs/display/DOMElement');

    /**
     * TODO: YUIDoc_comment
     *
     * @class NavigationView
     * @extends DOMElement
     * @constructor
     **/
    var NavigationView = (function () {

        var _super = Extend(NavigationView, DOMElement);

        function NavigationView() {
            _super.call(this);


        }

        /**
         * @overridden DOMElement.create
         */
        NavigationView.prototype.create = function () {
            _super.prototype.create.call(this);

            // Create or setup objects in this parent class.
        };

        /**
         * @overridden DOMElement.enable
         */
        NavigationView.prototype.enable = function () {
            if (this.isEnabled === true) { return this; }

            // Enable the child objects and/or add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden DOMElement.disable
         */
        NavigationView.prototype.disable = function () {
            if (this.isEnabled === false) { return this; }

            // Disable the child objects and/or remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
        * @overridden DOMElement.layout
        */
        NavigationView.prototype.layout = function () {
            // Layout or update the objects in this parent class.

            return this;
        };

        /**
         * @overridden DOMElement.destroy
         */
        NavigationView.prototype.destroy = function () {
            // Call destroy on any child objects.
            // This super method will also null out your properties for garbage collection.

            _super.prototype.destroy.call(this);
        };

        return NavigationView;
    })();

    module.exports = NavigationView;

});