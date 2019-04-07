window.onload = function () {
    'use strict';
    //variables
    const msg = libro.msg;
    const open = libro.open;
    const menu = libro.menu;

    const search = document.querySelector('#isearch');
    var fondo = document.querySelector('#fondo');
    
    window.addEventListener('keyup', (e) => {
        msg("Tecla: " + e.keyCode);
        if (e.keyCode == 27) {
            msg("Esc Key...");  
        }
        if (e.keyCode == 13) {
            open(search.value);
            msg("Return Key...");  
            search.value = '';
        }
        if (e.keyCode == 9) {
            e.preventDefault();
            open(search.value);
            msg("Return Key...");  
            search.value = '';
        }
    });

    window.addEventListener('click', (e) => {
        
        switch(e.target.id) {
            case "options":
                fondo.style.display = "block";
                msg("options click..." + e.target.id);
                menu();
            break;
            case "fondo":
                msg("fondo clicks..." + e.target.id);
                fondo.style.display = "none";
                break;
        }
    });
}