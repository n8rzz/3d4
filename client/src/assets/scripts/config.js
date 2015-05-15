require.config({
    baseUrl: 'assets/scripts',

    paths: {
        requirejs: '../vendor/requirejs/require',
        jquery: '../vendor/jquery/jquery',
        'jquery-ujs': '../vendor/jquery-ujs/src/rails',
        handlebars: '../vendor/handlebars/handlebars.runtime',
        structurejs: '../vendor/structurejs/js/',
        threejs: '../vendor/threejs/buils/three.min'
    },

    shim: {
        jquery: { exports: '$' }
    },

    waitSeconds: 120
});
