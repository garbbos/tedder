var libro = (function() {
    'use strict';

    var lib = {};

    lib.msg = function(texto) {
        var d = new Date();

        window.console.log(texto + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    lib.searching = function() {
        lib.msg("Searching Database...");
    }

    return lib;
}());

