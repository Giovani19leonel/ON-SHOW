let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
filme_atual = document.getElementById("filme_pagina_2");
filme_atual.src = obj[0].filme
console.log(obj[1].filme_id)

var pagina_genero = document.getElementById("genero");
var pagina_nota = document.getElementById("nota");
var pagina_duracao = document.getElementById("duracao");
var pagina_ano = document.getElementById("ano");
var pagina_sinopse = document.getElementById("sinopse-filme");
var pagina_filme = document.getElementById("filme-video")

teste = fetch("../dados.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        let dados = jsondata.descricao
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].titulo == obj[1].filme_id) {
                console.log(dados[i].id)
                pagina_ano.innerText = dados[i].ano
                pagina_genero.innerText = dados[i].genero
                pagina_duracao.innerText = dados[i].duracao
                pagina_nota.innerText = dados[i].nota
                pagina_sinopse.innerText = dados[i].sinopse
                pagina_filme.style.display = "flex"
                pagina_filme.src = dados[i].video
            }
        }

    });

var type = "filme";
var imdb = "tt5272052";
var season = "";
var episode = "";
warezPlugin(type, imdb, season, episode);
function warezPlugin(type, imdb, season, episode) {
    if (type == "filme") { season = ""; episode = ""; } else { if (season !== "") { season = "/" + season; } if (episode !== "") { episode = "/" + episode; } }
    var frame = document.getElementById('embedWarezCdn');
    frame.innerHTML += '<iframe src="https://embed.warezcdn.com/' + type + '/' + imdb + season + episode + '" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" + style="height:800px; width:800px;"></iframe>';
}

