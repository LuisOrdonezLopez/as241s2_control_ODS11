
//-----------------------------------------------------------
// ScrollReveal - Animación de desplazamiento
function animacion (){
    const sr = ScrollReveal({
        origin: "top",
        distance: "85px",
        duration: 2500,
        reset: false
    
    });
    
    sr.reveal(".ods-text", { delay: 150 });
    sr.reveal(".buttom-ods", { delay: 250 });
    sr.reveal(".info-section", { delay: 250 });
    sr.reveal(".timeline", { delay: 250 });
    sr.reveal(".timeline2", { delay: 250 });

}

animacion();


//-----------------------------------------------------------

//-----------------------------------------------------------
// Funcionalidad para ir a la página oficla de ODS 
function pagina(){

    document.querySelector('.buttom-ods button').addEventListener('click' , function (){

        window.location.href = 'https://www.un.org/sustainabledevelopment/es/';
    });


// Las funciones anónimas son aquellas que no tienen un nombre definido
// y se utilizan comúnmente como manejadores de eventos. 
// En este caso, la función será ejecutada cuando ocurra un evento


}
pagina();


//-----------------------------------------------------------