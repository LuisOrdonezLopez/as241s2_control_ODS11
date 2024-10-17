function showModal(step) {
    let modal = document.getElementById('myModal');
    let modalText = document.getElementById('modalText');

    //Aquí va el contenido
    let info = {
        '1992': '1992 - Cumbre de la Tierra: En Río de Janeiro\n\nLa Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo (Cumbre de la Tierra) se celebró en Río de Janeiro, Brasil, del 3 al 14 de junio de 1992. Más de 178 países adoptaron la Agenda 21, un plan de acción integral para el desarrollo sostenible. Este evento marcó un hito en la cooperación internacional para abordar problemas ambientales globales.',
        '2012': '2012 - Conferencia Río+20\n\nLa Conferencia de las Naciones Unidas sobre el Desarrollo Sostenible, también conocida como Río+20, se celebró en Río de Janeiro del 20 al 22 de junio de 2012. Los Estados Miembros adoptaron el documento "El futuro que queremos", que lanzó el proceso para desarrollar los Objetivos de Desarrollo Sostenible (ODS) y estableció un nuevo marco para el desarrollo sostenible.',
        '2015-2': '2015 - Agenda 2030 y Acuerdo de París\n\nEn septiembre de 2015, los Estados Miembros de la ONU adoptaron la Agenda 2030 para el Desarrollo Sostenible, que incluye 17 ODS para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos. En diciembre de 2015, se adoptó el Acuerdo de París durante la Conferencia de las Naciones Unidas sobre el Cambio Climático, con el objetivo de limitar el calentamiento global a menos de 2 grados Celsius.',
        '2024': '2024 - Cumbre del Futuro\n\nSe espera que en 2024 los líderes mundiales se reúnan para abordar los desafíos críticos y reafirmar su compromiso con los ODS. La cumbre se centrará en fortalecer la cooperación global y adaptarse a los desafíos actuales, con el objetivo de acelerar el progreso hacia los ODS.',
        '2000': '2000 - Declaración del Milenio\n\nEn septiembre de 2000, los líderes mundiales se reunieron en la Sede de las Naciones Unidas en Nueva York para adoptar la Declaración del Milenio. Este documento estableció ocho Objetivos de Desarrollo del Milenio (ODM) con el objetivo de reducir la pobreza extrema, la desigualdad y la mortalidad infantil para 2015.',
        '2015-1': '2015 - Agenda 2030 y Acuerdo de París\n\nEn septiembre de 2015, los Estados Miembros de la ONU adoptaron la Agenda 2030 para el Desarrollo Sostenible, que incluye 17 ODS para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos. En diciembre de 2015, se adoptó el Acuerdo de París durante la Conferencia de las Naciones Unidas sobre el Cambio Climático, con el objetivo de limitar el calentamiento global a menos de 2 grados Celsius.',
        '2020': '2020 - Impacto de la pandemia\n\nLa pandemia de COVID-19 afectó significativamente el progreso hacia los ODS, destacando la necesidad de fortalecer los sistemas de salud y la resiliencia económica. La crisis también subrayó la importancia de la cooperación internacional y la solidaridad global.',
    };

    modalText.innerText = info[step];
    modal.style.display = "block";
}

function hideModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
