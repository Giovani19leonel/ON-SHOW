var homemdeferro1 = document.getElementById("homemdeferro1");
var homemdeferro2 = document.getElementById("homemdeferro2");
var homemdeferro3 = document.getElementById("homemdeferro3");
var osvingadores = document.getElementById("osvingadores");
var osvingadoreseradeultron = document.getElementById("osvingadoreseradeultron");
var osvingadoresguerrainfinita = document.getElementById("osvingadoresguerrainfinita");
var osvingadoresultimato = document.getElementById("osvingadoresultimato");
var filme_pagina_2 = document.getElementById("filme_pagina_2");
var lista_nome = ["homemdeferro1", "homemdeferro2", "homemdeferro3", "osvingadores", "osvingadoreseradeultron", "osvingadoresguerrainfinita", "osvingadoresultimato"]
var lista_filmes = [homemdeferro1, homemdeferro2, homemdeferro3, osvingadores, osvingadoreseradeultron, osvingadoresguerrainfinita, osvingadoresultimato]
var lista = [lista_nome, lista_filmes]
var mostrar_filmes = []


/* teste = fetch("../dados.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        let dados = jsondata.descricao
        for (let i = 0; i < dados.length; i++) {
            
        }

    }); */

$(document).ready(function () {
    $.get("../dados.json", function (data) {

        // DADOS: 
        let titulos_filmes = [];


        dados = data.descricao
        for (let i = 0; i < dados.length; i++) {
            titulos_filmes.push(dados[i].titulo)
        }
    });
});

var lista_menu = document.getElementById("lista-menu");
/* const myObj = {}
const myJSON = JSON.stringify(myObj) */
lista_menu.addEventListener('click',
    function (e) {
        console.log(e.target.id)
    });

var div_filmes = document.getElementById("lista_filme");
/* const myObj = {}
const myJSON = JSON.stringify(myObj) */
div_filmes.addEventListener('click',
    function (e) {
        filme_clicado_src = e.target.src;
        filme_clicado_id = e.target.alt
        enviar_filme(filme_clicado_src, filme_clicado_id)
    });


/* for (let i = 0; i < lista_filmes.length; i++) {
    mostrar_filmes.push(false);
    lista[1][i].style.display = 'none';
}
 */
function enviar_filme(filme_atual, id) {
    const myObj = [{ filme: filme_atual }, { filme_id: id }]
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);
}

function pesquisar() {
    $(document).ready(function () {
        $.get("../dados.json", function (data) {

            // DADOS: 
            let titulos_filmes = [];
            let id_filmes = [];
            let filtro = []
            var img; var li; var ul;
            var pesquisado = $("#entrada").val();
            /* pesquisado = pesquisado.replace(/\s+/g, ''); */
            var dados = data.descricao
            for (let i = 0; i < dados.length; i++) {
                titulos_filmes.push(dados[i].titulo)
                id_filmes.push(dados[i].id)

            }
            if (pesquisado) {
                let exp = new RegExp(pesquisado.trim(), 'i');
                filtro = titulos_filmes.filter(dados => exp.test(dados));
                const divisao = Math.floor(filtro.length / 5)
                for (let k = 0; k < divisao; k++) {
                    let tamanho = $("#lista_filme").children("ul").length
                    console.log(tamanho)
                }
                /* for (let i = 0; i < titulos_filmes.length; i++) {
                    for (let j = 0; j < filtro.length; j++) {
                        if (titulos_filmes[i] == filtro[j]) {
                            if (j == 4) {
                                
                            }
                            li = $("<li/>", {
                                id: id_filmes[i],
                            });
                            $("#filmes_lista").append(li);
                            img = $("<img/>", {
                                alt: titulos_filmes[i],
                                src: data.descricao[i].catalogo,
                            });
                            $("#" + id_filmes[i]).append(img);
                        }
                    }
                } */
            }
        });
    });



    /* let entrada = document.getElementById("entrada"); entrada = entrada.value; entrada = entrada.toLowerCase();
    entrada = entrada.replace(/\s+/g, '');
    filtro = filterItems(entrada);
    if (entrada != "" && filtro != "") {
        for (let j = 0; j < lista_filmes.length; j++) {
            for (let i = 0; i < filtro.length; i++) {
                if (lista_nome[j] == filtro[i] && lista[1][j].style.display == 'none') {
                    mostrar_filmes[j] = true;
                    lista[1][j].style.display = 'flex';
                }
                if (lista[1][j].style.display == 'flex') {
                    if (lista_nome[j] != filtro[i]) {
                        mostrar_filmes[j] = false;
                        if (i == filtro.length - 1 && !mostrar_filmes[j]) {
                            lista[1][j].style.display = 'none';
                        }
                    }
                    else {
                        mostrar_filmes[j] = true;
                        break
                    }
                }
            }
        }
    }
    else {
        filtro = [];
        for (let i = 0; i < lista_filmes.length; i++) {
            lista[1][i].style.display = 'none';
            mostrar_filmes[i] = false
        }
    } */
}
function myFunction(x) {
    x.classList.toggle("change");
    $(".menu")[0].classList.toggle("change")
    /* console.log($(".menu")[0].classList) */
    /* console.log($(".menu")[0].classList.value.toggle("change")) */
    /*     $(".menu").toggle("change") */

};
/* $(".lista-menu") */
/* function filterItems(query) {
    return lista_nome.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
} */
