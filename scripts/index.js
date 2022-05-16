var mostrar_filmes = [true, false, false, false, false, false, false]
var ultimos_adicionados = []; var filmes_populares = []; var titulo_ultimos_adicionados = [];
var lista_acao = []; var lista_aventura = []; var lista_comedia = []; var lista_drama = [];
var lista_romance = []; var lista_suspense = []; var lista_terror = []; var lista_series = [];
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

let b = fetch("../dados.json").then(function (response) {
    return response.json()
})
var radion = document.getElementsByName("position");

function ultimos_add() {
    fetch("../dados.json").then(function (response) {
        return response.json()
    }).then(function (data) {
        // DADOS: 
        let titulos_filmes = [];
        let titulos_filmes_populares = [];
        let catalogo_filmes = [];
        let genero_filmes = [];
        let lista_id = [];

        dados = data.descricao
        for (let i = 0; i < dados.length; i++) {
            let filmes = dados[i].genero.split("/")
            filmes.push(dados[i].id)
            genero_filmes.push(filmes)
            catalogo_filmes.push(dados[i].catalogo)

        }
        for (let i = 0; i < dados.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (genero_filmes[i][j] == "Ação") {
                    let filme_id = genero_filmes[i][2]
                    lista_id.push(filme_id)
                }
                if (i == dados.length - 1 && j == 1) {
                    lista_acao = [lista_id, catalogo_filmes]
                    console.log(lista_acao[0][5])
                }
                /* if (genero_filmes[i][j] == "Aventura") {
                    let filme_id = genero_filmes[i][2]
                    lista_aventura.push(filme_id)
                }
                if (genero_filmes[i][j] == "Comédia") {
                    let filme_id = genero_filmes[i][2]
                    lista_comedia.push(filme_id)
                }
                if (genero_filmes[i][j] == "Drama") {
                    let filme_id = genero_filmes[i][2]
                    lista_drama.push(filme_id)
                }
                if (genero_filmes[i][j] == "Romance") {
                    let filme_id = genero_filmes[i][2]
                    lista_romance.push(filme_id)
                }
                if (genero_filmes[i][j] == "Suspense") {
                    let filme_id = genero_filmes[i][2]
                    lista_suspense.push(filme_id)
                }
                if (genero_filmes[i][j] == "Terror") {
                    let filme_id = genero_filmes[i][2]
                    lista_terror.push(filme_id)
                } */
            }
        }

        for (let i = 0; i < data.populares.length; i++) {
            let lista = [data.populares[i].id, data.populares[i].catalogo]
            filmes_populares.push(lista)
            titulos_filmes_populares.push(data.populares[i].titulo)
        }

        for (let i = 0; i < dados.length; i++) {
            titulos_filmes.push(dados[i].titulo)
            catalogo_filmes.push(dados[i].catalogo)
        }
        for (let i = 0; i < 2; i++) {
            let div = $("<div/>", {
                class: "div-populares-" + i,
                id: "div-populares-um-fila-" + i
            });
            $("#populares-fila-um").append(div);
        }
        for (let i = 0; i < 3; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "populares-um-" + i
            });
            $("#div-populares-um-fila-0").append(li);
            /*  console.log(i) */
        }
        for (let i = 3; i < 6; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "populares-um-" + i
            });
            $("#div-populares-um-fila-1").append(li);
            /*  console.log(i) */
        }
        for (let i = 0; i < 6; i++) {
            let img = $("<img/>", {
                src: filmes_populares[i][1]
            });
            let titulo = $("<h1 class=titulosFilmes>" + titulos_filmes_populares[i] + "</h1>");
            $("#populares-um-" + i).append(img)
            $("#populares-um-" + i).append(titulo)
        }
        for (let i = 0; i < 2; i++) {
            let div = $("<div/>", {
                class: "div-populares-" + i,
                id: "div-populares-dois-fila-" + i
            });
            $("#populares-fila-dois").append(div);
        }
        for (let i = 6; i < 9; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "populares-dois-" + i
            });

            $("#div-populares-dois-fila-0").append(li);
        }
        for (let i = 9; i < 12; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "populares-dois-" + i
            });

            $("#div-populares-dois-fila-1").append(li);
        }
        for (let i = 6; i < 12; i++) {
            let img = $("<img/>", {
                src: filmes_populares[i][1]
            });
            let titulo = $("<h1 class=titulosFilmes>" + titulos_filmes_populares[i] + "</h1>");
            $("#populares-dois-" + i).append(img)
            $("#populares-dois-" + i).append(titulo)
        }

        for (let i = (dados.length - 18); i < dados.length; i++) {
            ultimos_adicionados.push(dados[i].catalogo)
            titulo_ultimos_adicionados.push(titulos_filmes[i])
        }

        for (let i = 0; i < 7; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "fila-um-populares-" + i
            });

            $("#lista-um-adicionados").append(li);
        }
        for (let i = 0; i < 6; i++) {
            let img = $("<img/>", {
                src: ultimos_adicionados[i]
            });
            let titulo = $("<h1 class=ultimosTitulosFilmes>" + titulo_ultimos_adicionados[i] + "</h1>");
            $("#fila-um-populares-" + i).append(img)
            $("#fila-um-populares-" + i).append(titulo)
        }

        for (let i = 0; i < 7; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "fila-dois-populares-" + i
            });
            $("#lista-dois-adicionados").append(li);
        }
        for (let i = 6; i < 12; i++) {
            let img = $("<img/>", {
                src: ultimos_adicionados[i]
            });
            let titulo = $("<h1 class=ultimosTitulosFilmes>" + titulo_ultimos_adicionados[i] + "</h1>");
            $("#fila-dois-populares-" + (i - 6)).append(img)
            $("#fila-dois-populares-" + (i - 6)).append(titulo)
        }

        for (let i = 0; i < 7; i++) {
            let li = $("<li/>", {
                class: "item-populares",
                id: "fila-tres-populares-" + i
            });
            $("#lista-tres-adicionados").append(li);
        }
        for (let i = 12; i < 18; i++) {
            let img = $("<img/>", {
                src: ultimos_adicionados[i]
            });
            let titulo = $("<h1 class=ultimosTitulosFilmes>" + titulo_ultimos_adicionados[i] + "</h1>");
            $("#fila-tres-populares-" + (i - 12)).append(img)
            $("#fila-tres-populares-" + (i - 12)).append(titulo)
        }

    });
}
ultimos_add()

function removerHome() {
    for (let i = 0; i < 7; i++) {
        $("#populares-um-" + i).remove()
    }
    for (let i = 6; i < 12; i++) {
        $("#populares-dois-" + i).remove()
    }
    for (let i = 0; i < 7; i++) {
        $("#fila-um-populares-" + i).remove()
    }
    for (let i = 0; i < 7; i++) {
        $("#fila-dois-populares-" + i).remove()
    }
    for (let i = 0; i < 7; i++) {
        $("#fila-tres-populares-" + i).remove()
    }
}

function add_img(categoria, lista) {

    let max = lista.length / 30
    let quantidade_pagina = []
    console.log(max)
    let type; let valorFloat; let ultima_pagina
    if (max % 1 === 0) {
        type = "int"
    } else {
        type = "float"
    }

    if (type == "float") {
        valorFloat = Math.round(max)
        if ((max - valorFloat) < 0) {
            valorFloat = valorFloat - max
            valorFloat = valorFloat.toFixed(3)
            console.log(valorFloat)
        }
        else {
            valorFloat = valorFloat - max
            valorFloat = valorFloat * -1
            valorFloat = valorFloat.toFixed(3)
        }
        ultima_pagina = 30 * valorFloat
        max = max - valorFloat
        for (let i = 0; i < max; i++) {
            if ((i + 1) == max) {
                quantidade_pagina.push(ultima_pagina)
            }
            else {
                quantidade_pagina.push(30)
            }
        }

        for (let j = 0; j < quantidade_pagina.length; j++) {
            let indexLista = 1
            if (j == 0) {
                for (let i = (quantidade_pagina[j] * (j + 1)) - 30; i < quantidade_pagina[j] * (j + 1); i++) {
                    for (let k = 1; k < 6; k++)
                        if ((quantidade_pagina[j] * (j + 1) - i) / 6 == k) {
                            indexLista = indexLista + 1
                        }
                    let li = $("<li/>", {
                        class: "item-populares",
                        id: "fila-" + j + "-" + categoria + "-" + i
                        // id = fila-0-acao-0
                    });
                    $("#" + categoria + "-fila-" + indexLista).append(li);
                }
                for (let i = (quantidade_pagina[j] * (j + 1)) - 30; i < quantidade_pagina[j] * (j + 1); i++) {
                    let img = $("<img/>", {
                        src: lista[i]
                    });
                    $("#fila-" + j + "-" + categoria + "-" + i).append(img)
                }
            }
        }
    }


    for (let i = 0; i < 6; i++) {
        let li = $("<li/>", {
            class: "item-populares",
            id: "fila-um-" + categoria + "-" + i
        });
        $("#" + categoria + "-fila-um").append(li);
    }
    for (let i = 0; i < 6; i++) {
        let img = $("<img/>", {
            src: lista[i]
        });
        $("#fila-um-" + categoria + "-" + i).append(img)
    }
}

/* const myObj = {}
const myJSON = JSON.stringify(myObj) */
lista_menu.addEventListener('click',
    function (e) {
        console.log(e.target.id)
        if (e.target.id == "ACAO") {
            $("#home").css("display", "none");
            removerHome()
            $(".filtrado").css("display", "none");
            $("#home-acao").css("display", "block");
            add_img("acao", lista_acao[1])
        }
        else if (e.target.id == "AVENTURA") {
            $("#home").css("display", "none");
            $(".filtrado").css("display", "none");
            $("#home-aventura").css("display", "block");
        }
        else if (e.target.id == "COMEDIA") {
            $("#home").css("display", "none");
            $(".filtrado").css("display", "none");
            $("#home-comedia").css("display", "block");
        }
        else if (e.target.id == "DRAMA") {
            $("#home").css("display", "none");
            $(".filtrado").css("display", "none");
            $("#home-drama").css("display", "block");
        }
        else if (e.target.id == "ROMANCE") {
            $("#home").css("display", "none");
            $(".filtrado").css("display", "none");
            $("#home-romance").css("display", "block");
        } else if (e.target.id == "SUSPENSE") {
            $("#home").css("display", "none");
            $(".filtrado").css("display", "none");
            $("#home-suspense").css("display", "block");
        } else if (e.target.id == "TERROR") {
            $("#home").css("display", "none");
            $(".filtrado").css("display", "none");
            $("#home-terror").css("display", "block");
        } else if (e.target.id == "SERIES") {
            $("#home").css("display", "none")
            $(".filtrado").css("display", "none");
            $("#home-series").css("display", "block");
        }
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


/* 
var div_filmes = document.getElementById("lista_filme"); */
/* const myObj = {}
const myJSON = JSON.stringify(myObj) */
/* div_filmes.addEventListener('click',
    function (e) {
        filme_clicado_src = e.target.src;
        filme_clicado_id = e.target.alt
        enviar_filme(filme_clicado_src, filme_clicado_id)
    }); */



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

