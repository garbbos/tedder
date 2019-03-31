window.onload = function () {
    'use strict';
    //variables
    const msg = libro.msg;
    const open = libro.open;

    const fondo = document.querySelector('.fondo');
    const search = document.querySelector('#isearch');

    fondo.style.display = "block";

    nuevo.addEventListener('click', () => {
       fondo.style.visibility = "visible";
        msg("fondo open");  
    });

    fondo.addEventListener('click', () => {
        fondo.style.visibility = "hidden";
        msg("fondo close");  
    });

    window.addEventListener('keyup', (e) => {
        fondo.style.visibility = "hidden";
        if (e.keyCode == 27) {
            msg("Esc Key...");  
        }
        if (e.keyCode == 13) {
            open(search.value);
            msg("Return Key...");  
            search.value = '';
        }
    });

    window.addEventListener('click', (e) => {
        
        msg(e.target.id);
        switch(e.target.id) {
            case "options":
            msg("options click...");
            break;
        }
    });
}