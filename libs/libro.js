var libro = (function() {
    'use strict';

    const puntos = document.querySelector('#puntos');
    const setup = document.querySelector('#setup');
    var titulo = document.querySelector('#titulo');
    var titulo_texto = [];

    var lib = {};

    lib.msg = function(_texto) {
        var d = new Date();

        window.console.log(_texto + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }

    lib.open = function(_valor) {
        if (_valor.length > 0) {
            lib.msg("Open function... " + _valor);
            titulo.innerHTML = "&nbsp;" + _valor;
        }
        
    }

    lib.menu = function(){
        lib.msg("Menu function... ");
        setup.focus();
    }

    return lib;
}());

