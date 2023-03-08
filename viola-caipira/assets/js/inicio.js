


function inicio(){


    function c(cl){
        const el = document.createElement("div");
        el.setAttribute("class", cl);
        return el;
    }


    const page = c("page_inicio");

    page.innerHTML = `<h2>História da Viola Caipira</h2>

    <p>A viola caipira é um instrumento musical de cordas popular no Brasil, especialmente nas regiões do interior do país. Acredita-se que sua origem remonta aos instrumentos de cordas trazidos pelos colonizadores portugueses durante o período colonial.</p>
    <p>Ao longo do tempo, a viola caipira foi se desenvolvendo e se adaptando às características musicais e culturais do Brasil. No século XIX, o instrumento já era bastante popular entre os trabalhadores rurais e era utilizado em diversas ocasiões, como festas, bailes e celebrações religiosas.</p>
    <p>A partir do início do século XX, a viola caipira passou a ser incorporada à música sertaneja, gênero musical que se consolidou nas décadas seguintes. Com o tempo, surgiram diversos estilos de música regional que utilizam a viola caipira como instrumento principal, como o cururu, o catira, a moda de viola e o rasqueado.</p>
    <p>Apesar de ter enfrentado momentos de ostracismo em algumas épocas, a viola caipira nunca perdeu sua importância cultural e, nas últimas décadas, tem experimentado uma nova fase de popularidade e valorização, com a emergência de novos músicos e grupos que se dedicam a explorar a riqueza musical do instrumento e de suas tradições.</p>
    `;

    

    return page;

}