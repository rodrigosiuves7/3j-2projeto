const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizarDadosGlobais(){
    const res = await fetch(url);
    const secao = document.querySelector('.graficos-container')
    const dados= await res.json()
    const totalPessoasMundo = dados.total_pessoas_mundo
    const totalPessoasConectadas = dados.total_pessoas_conectadas
    const tempoMedio = dados.tempo_medio
    console.log (dados)
    const paragrafo = document.createElement('p');
    // * cria um elemento <p> no HTML;
    paragrafo.classList.add('graficos-textos')
    //* adiciona a classe 'graficos-texto' no elemento <p>
    paragrafo.innerHTML = `você sabia que o mundo tem ${totalPessoasMundo} de habitantes e destes ${totalPessoasConectadas} estão conectadas a alguma rede social e ficamem media ${tempoMedio} conectadas`
  secao.appendChild(paragrafo)  
}

visualizarDadosGlobais();