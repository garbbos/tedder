var libro = (function() {
    'use strict';

    const puntos = document.querySelector('#puntos');
    var titulo = document.querySelector('#titulo');
    var titulos = [];

    var lib = {};

    lib.msg = function(_texto) {
        var d = new Date();

        window.console.log(_texto + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    lib.open = function(_valor) {
        if (_valor.length > 0) {
            lib.msg("Open function... " + _valor);
            titulos[0] = "&nbsp;";
            titulos.push(_valor);
            titulo.innerHTML = titulos.join(' &rang; ');
        }
        

    }

    return lib;
}());

