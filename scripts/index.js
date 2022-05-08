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
var mostrar_filmes = [true, false, false, false, false, false, false]

/* CONSTRUIR O BOTAO DE AVANÇO E DESAVANÇO E TIRAR O CONTROLE DO CAROUSEL.JS */

/* teste = fetch("../dados.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        let dados = jsondata.descricao
        for (let i = 0; i < dados.length; i++) {
            
        }

    }); */
var lista_menu = document.getElementById("lista-menu");
var filme_principal = "gallery-item gallery-item-3"
var botao2 = document.getElementById("voltar");
var botao1 = document.getElementById("avancar");
var foto1 = document.getElementById("foto1");
var foto2 = document.getElementById("foto2");
var foto3 = document.getElementById("foto3");
var foto4 = document.getElementById("foto4");
var foto5 = document.getElementById("foto5");
var foto6 = document.getElementById("foto6");
var foto7 = document.getElementById("foto7");

var radio1 = document.getElementById("botao1");
var radio2 = document.getElementById("botao2");
var radio3 = document.getElementById("botao3");
var radio4 = document.getElementById("botao4");
var radio5 = document.getElementById("botao5");
var radio6 = document.getElementById("botao6");
var radio7 = document.getElementById("botao7");


var radion = document.getElementsByName("position");

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


/* const myObj = {}
const myJSON = JSON.stringify(myObj) */
lista_menu.addEventListener('click',
    function (e) {
        console.log(e.target.id)
    });

radio1.addEventListener('click',
    function (e) {

        for (let i = 0; i < 7; i++) {
            radion[i].removeAttribute('checked');
            mostrar_filmes[i] = false
            if (i == 0) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }
        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-1"
        foto2.className = "gallery-item gallery-item-2"
        foto3.className = "gallery-item gallery-item-3"
        foto4.className = "gallery-item gallery-item-4"
        foto5.className = "gallery-item gallery-item-5"
        foto6.className = "gallery-item gallery-item-6"
        foto7.className = "gallery-item gallery-item-7"
        console.log(e.target)
    });
radio2.addEventListener('click',
    function (e) {
        for (let i = 0; i < 7; i++) {
            mostrar_filmes[i] = false
            radion[i].removeAttribute('checked');
            if (i == 1) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }
        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-7"
        foto2.className = "gallery-item gallery-item-1"
        foto3.className = "gallery-item gallery-item-2"
        foto4.className = "gallery-item gallery-item-3"
        foto5.className = "gallery-item gallery-item-4"
        foto6.className = "gallery-item gallery-item-5"
        foto7.className = "gallery-item gallery-item-6"
        console.log(e.target)
    });
radio3.addEventListener('click',
    function (e) {
        for (let i = 0; i < 7; i++) {
            mostrar_filmes[i] = false
            radion[i].removeAttribute('checked');
            if (i == 2) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }
        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-6"
        foto2.className = "gallery-item gallery-item-7"
        foto3.className = "gallery-item gallery-item-1"
        foto4.className = "gallery-item gallery-item-2"
        foto5.className = "gallery-item gallery-item-3"
        foto6.className = "gallery-item gallery-item-4"
        foto7.className = "gallery-item gallery-item-5"
        console.log(e.target)
    });
radio4.addEventListener('click',
    function (e) {
        for (let i = 0; i < 7; i++) {
            mostrar_filmes[i] = false
            radion[i].removeAttribute('checked');
            if (i == 3) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }
        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-5"
        foto2.className = "gallery-item gallery-item-6"
        foto3.className = "gallery-item gallery-item-7"
        foto4.className = "gallery-item gallery-item-1"
        foto5.className = "gallery-item gallery-item-2"
        foto6.className = "gallery-item gallery-item-3"
        foto7.className = "gallery-item gallery-item-4"
        console.log(e.target)
    });
radio5.addEventListener('click',
    function (e) {
        for (let i = 0; i < 7; i++) {
            mostrar_filmes[i] = false
            radion[i].removeAttribute('checked');
            if (i == 4) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }
        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-4"
        foto2.className = "gallery-item gallery-item-5"
        foto3.className = "gallery-item gallery-item-6"
        foto4.className = "gallery-item gallery-item-7"
        foto5.className = "gallery-item gallery-item-1"
        foto6.className = "gallery-item gallery-item-2"
        foto7.className = "gallery-item gallery-item-3"
        console.log(e.target)
    });
radio6.addEventListener('click',
    function (e) {
        for (let i = 0; i < 7; i++) {
            mostrar_filmes[i] = false
            radion[i].removeAttribute('checked');
            if (i == 5) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }
        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-3"
        foto2.className = "gallery-item gallery-item-4"
        foto3.className = "gallery-item gallery-item-5"
        foto4.className = "gallery-item gallery-item-6"
        foto5.className = "gallery-item gallery-item-7"
        foto6.className = "gallery-item gallery-item-1"
        foto7.className = "gallery-item gallery-item-2"
        console.log(e.target)
    });
radio7.addEventListener('click',
    function (e) {
        for (let i = 0; i < 7; i++) {
            mostrar_filmes[i] = false
            radion[i].removeAttribute('checked');
            if (i == 6) {
                mostrar_filmes[i] = true
                radion[i].setAttribute('checked', 'checked');
            }
        }

        console.log(mostrar_filmes)
        foto1.classList = "gallery-item gallery-item-2"
        foto2.className = "gallery-item gallery-item-3"
        foto3.className = "gallery-item gallery-item-4"
        foto4.className = "gallery-item gallery-item-5"
        foto5.className = "gallery-item gallery-item-6"
        foto6.className = "gallery-item gallery-item-7"
        foto7.className = "gallery-item gallery-item-1"
        console.log(e.target)
    });

botao1.addEventListener('click',
    function (e) {
        // gallery-item-5
        for (let i = 0; i < mostrar_filmes.length; i++) {
            if (mostrar_filmes[i]) {
                if (i == 6) {
                    mostrar_filmes[i] = false;
                    mostrar_filmes[0] = true
                }
                else {
                    mostrar_filmes[i] = false;
                    mostrar_filmes[i + 1] = true
                }
                if (i == 0) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[1].checked) {
                        foto1.classList = "gallery-item gallery-item-7"
                        foto2.className = "gallery-item gallery-item-1"
                        foto3.className = "gallery-item gallery-item-2"
                        foto4.className = "gallery-item gallery-item-3"
                        foto5.className = "gallery-item gallery-item-4"
                        foto6.className = "gallery-item gallery-item-5"
                        foto7.className = "gallery-item gallery-item-6"
                        radion[1].checked = true
                    }
                }
                else if (i == 1) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[2].checked) {
                        radion[2].checked = true
                        foto1.classList = "gallery-item gallery-item-6"
                        foto2.className = "gallery-item gallery-item-7"
                        foto3.className = "gallery-item gallery-item-1"
                        foto4.className = "gallery-item gallery-item-2"
                        foto5.className = "gallery-item gallery-item-3"
                        foto6.className = "gallery-item gallery-item-4"
                        foto7.className = "gallery-item gallery-item-5"
                    }
                }
                else if (i == 2) {
                    if (radion[i].checked) {
                        radion[i].checked = true
                    }
                    if (!radion[3].checked) {
                        radion[3].checked = true
                        foto1.classList = "gallery-item gallery-item-5"
                        foto2.className = "gallery-item gallery-item-6"
                        foto3.className = "gallery-item gallery-item-7"
                        foto4.className = "gallery-item gallery-item-1"
                        foto5.className = "gallery-item gallery-item-2"
                        foto6.className = "gallery-item gallery-item-3"
                        foto7.className = "gallery-item gallery-item-4"
                    }
                }
                else if (i == 3) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[4].checked) {
                        foto1.classList = "gallery-item gallery-item-4"
                        foto2.className = "gallery-item gallery-item-5"
                        foto3.className = "gallery-item gallery-item-6"
                        foto4.className = "gallery-item gallery-item-7"
                        foto5.className = "gallery-item gallery-item-1"
                        foto6.className = "gallery-item gallery-item-2"
                        foto7.className = "gallery-item gallery-item-3"
                        radion[4].checked = true
                    }
                }
                else if (i == 3) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[4].checked) {
                        radion[4].checked = true
                        foto1.classList = "gallery-item gallery-item-3"
                        foto2.className = "gallery-item gallery-item-4"
                        foto3.className = "gallery-item gallery-item-5"
                        foto4.className = "gallery-item gallery-item-6"
                        foto5.className = "gallery-item gallery-item-7"
                        foto6.className = "gallery-item gallery-item-1"
                        foto7.className = "gallery-item gallery-item-2"
                    }
                }
                else if (i == 4) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[5].checked) {
                        radion[5].checked = true
                        foto1.classList = "gallery-item gallery-item-3"
                        foto2.className = "gallery-item gallery-item-4"
                        foto3.className = "gallery-item gallery-item-5"
                        foto4.className = "gallery-item gallery-item-6"
                        foto5.className = "gallery-item gallery-item-7"
                        foto6.className = "gallery-item gallery-item-1"
                        foto7.className = "gallery-item gallery-item-2"
                    }
                }
                else if (i == 5) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[6].checked) {
                        radion[6].checked = true
                        foto1.classList = "gallery-item gallery-item-2"
                        foto2.className = "gallery-item gallery-item-3"
                        foto3.className = "gallery-item gallery-item-4"
                        foto4.className = "gallery-item gallery-item-5"
                        foto5.className = "gallery-item gallery-item-6"
                        foto6.className = "gallery-item gallery-item-7"
                        foto7.className = "gallery-item gallery-item-1"
                    }
                }
                else if (i == 6) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[0].checked) {
                        foto1.classList = "gallery-item gallery-item-1"
                        foto2.className = "gallery-item gallery-item-2"
                        foto3.className = "gallery-item gallery-item-3"
                        foto4.className = "gallery-item gallery-item-4"
                        foto5.className = "gallery-item gallery-item-5"
                        foto6.className = "gallery-item gallery-item-6"
                        foto7.className = "gallery-item gallery-item-7"
                        radion[0].checked = true
                    }
                }
                break
            }
        }
    });


botao2.addEventListener('click',
    function (e) {
        for (let i = 0; i < mostrar_filmes.length; i++) {
            if (mostrar_filmes[i]) {
                if (i == 0) {
                    mostrar_filmes[i] = false;
                    mostrar_filmes[6] = true
                }
                else {
                    mostrar_filmes[i] = false;
                    mostrar_filmes[i - 1] = true
                }
                console.log(mostrar_filmes)
                if (i == 0) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[6].checked) {
                        foto1.classList = "gallery-item gallery-item-2"
                        foto2.className = "gallery-item gallery-item-3"
                        foto3.className = "gallery-item gallery-item-4"
                        foto4.className = "gallery-item gallery-item-5"
                        foto5.className = "gallery-item gallery-item-6"
                        foto6.className = "gallery-item gallery-item-7"
                        foto7.className = "gallery-item gallery-item-1"
                        radion[6].checked = true
                    }
                }
                else if (i == 1) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[0].checked) {
                        radion[0].checked = true
                        foto1.classList = "gallery-item gallery-item-1"
                        foto2.className = "gallery-item gallery-item-2"
                        foto3.className = "gallery-item gallery-item-3"
                        foto4.className = "gallery-item gallery-item-4"
                        foto5.className = "gallery-item gallery-item-5"
                        foto6.className = "gallery-item gallery-item-6"
                        foto7.className = "gallery-item gallery-item-7"
                    }
                }
                else if (i == 2) {
                    if (radion[i].checked) {
                        radion[i].checked = true
                    }
                    if (!radion[1].checked) {
                        radion[1].checked = true
                        foto1.classList = "gallery-item gallery-item-7"
                        foto2.className = "gallery-item gallery-item-1"
                        foto3.className = "gallery-item gallery-item-2"
                        foto4.className = "gallery-item gallery-item-3"
                        foto5.className = "gallery-item gallery-item-4"
                        foto6.className = "gallery-item gallery-item-5"
                        foto7.className = "gallery-item gallery-item-6"
                    }
                }
                else if (i == 3) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[2].checked) {
                        foto1.classList = "gallery-item gallery-item-6"
                        foto2.className = "gallery-item gallery-item-7"
                        foto3.className = "gallery-item gallery-item-1"
                        foto4.className = "gallery-item gallery-item-2"
                        foto5.className = "gallery-item gallery-item-3"
                        foto6.className = "gallery-item gallery-item-4"
                        foto7.className = "gallery-item gallery-item-5"
                        radion[2].checked = true
                    }
                }
                else if (i == 4) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[3].checked) {
                        radion[3].checked = true
                        foto1.classList = "gallery-item gallery-item-5"
                        foto2.className = "gallery-item gallery-item-6"
                        foto3.className = "gallery-item gallery-item-7"
                        foto4.className = "gallery-item gallery-item-1"
                        foto5.className = "gallery-item gallery-item-2"
                        foto6.className = "gallery-item gallery-item-3"
                        foto7.className = "gallery-item gallery-item-4"
                    }
                }
                else if (i == 5) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[4].checked) {
                        radion[4].checked = true
                        foto1.classList = "gallery-item gallery-item-4"
                        foto2.className = "gallery-item gallery-item-5"
                        foto3.className = "gallery-item gallery-item-6"
                        foto4.className = "gallery-item gallery-item-7"
                        foto5.className = "gallery-item gallery-item-1"
                        foto6.className = "gallery-item gallery-item-2"
                        foto7.className = "gallery-item gallery-item-3"
                    }
                }
                else if (i == 6) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[5].checked) {
                        radion[5].checked = true
                        foto1.classList = "gallery-item gallery-item-3"
                        foto2.className = "gallery-item gallery-item-4"
                        foto3.className = "gallery-item gallery-item-5"
                        foto4.className = "gallery-item gallery-item-6"
                        foto5.className = "gallery-item gallery-item-7"
                        foto6.className = "gallery-item gallery-item-1"
                        foto7.className = "gallery-item gallery-item-2"
                    }
                }
                else if (i == 0) {
                    if (radion[i].checked) {
                        radion[i].removeAttribute('checked')
                    }
                    if (!radion[6].checked) {
                        foto1.classList = "gallery-item gallery-item-1"
                        foto2.className = "gallery-item gallery-item-2"
                        foto3.className = "gallery-item gallery-item-3"
                        foto4.className = "gallery-item gallery-item-4"
                        foto5.className = "gallery-item gallery-item-5"
                        foto6.className = "gallery-item gallery-item-6"
                        foto7.className = "gallery-item gallery-item-7"
                        radion[6].checked = true
                    }
                }
                break
            }
        }
        // gallery-item-3
        //var teste = document.getElementsByName("position"); console.log(teste)
        //teste[0].checked == true?

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



foto1.addEventListener('click',
    function (e) {
        console.log(e.target.className)
    });
/* const myObj = {}
const myJSON = JSON.stringify(myObj) */
foto4.addEventListener('click',
    function (e) {
        console.log(e.target.className)
    });

/* BOTAO RADIO TABELA:
BOTAO1 - filme1 -  gallery-item-1
         filme2 -   gallery-item-2
         filme3 -   gallery-item-3
         filme4 -   gallery-item-4
         filme5 -   gallery-item-5
         filme6 -   gallery-item-6
         filme7 -   gallery-item-7
    

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
    $(".menu").toggle("change")
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

