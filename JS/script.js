let itens = [
    {
        imagem: "./assets/img/painting/clock.jpg",
        nome: "Clock",
        preco: 20.49,
        tipo: "figura"
    },
    {
        imagem: "./assets/img/painting/gamepad.jpg",
        nome: "Gamepad",
        preco: 29.99,
        tipo: "figura"
    },
    {
        imagem: "./assets/img/painting/personagem.jpg",
        nome: "Personagem",
        preco: 38.70,
        tipo: "figura"
    },
    {
        imagem: "./assets/img/actions/animewoman.jpg",
        nome: "Animewoman",
        preco: 235.50,
        tipo: "acao"
    },
    {
        imagem: "./assets/img/actions/dragonballpersonagem.jpg",
        nome: "Dragonball",
        preco: 247.80,
        tipo: "acao"
    },
    {
        imagem: "./assets/img/actions/starwarspersonagem.jpg",
        nome: "Starwars",
        preco: 299.88,
        tipo: "acao"
    }
]

let listaFiguras = [];
let listaAcao = [];

function separaItens(listaItens) {

    for (let i = 0; i < listaItens.length; i++) {
        if (listaItens[i].tipo == "figura") {
            listaFiguras.push(listaItens[i])
        } else {
            listaAcao.push(listaItens[i])
        }
    }
}
separaItens(itens)


function formartarPreco (value){    
     
    let precoFormatado = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    return precoFormatado
}
// formartarPreco(20.75)

function listarFiguras(lista) {

    for (let i = 0; i < lista.length; i++) {

        if(lista[i].tipo == "figura"){
            criarTemplate(lista[i]);
        }else{
            criarTemplate(lista[i]);
        }
    }
}
listarFiguras(itens);

function criarTemplate() {
    
    for (let i = 0; i < itens.length; i++) {
     
        //CRIANDO AS TAGS DO TEMPLATE
        let tagLi = document.createElement("li");
        console.log(tagLi);
        let tagFigure = document.createElement("figure");
        let tagImg = document.createElement("img");
        let tagH2 = document.createElement("h2");
        let tagP = document.createElement("p");

        //ADICIONANDO CLASSES ÀS TAGS
        tagLi.className = 'liCard';
        tagFigure.className = 'imagemFigure';
        tagImg.className = 'imagemProduto';
        tagH2.className = 'tituloProduto';
        tagP.className = 'precoP';

        //ATRIBUINDO VALOR AS PROPRIEDADES 
        tagImg.src = itens[i].imagem;
        tagImg.alt = itens[i].nome;        
        tagH2.innerText = itens[i].nome;        
        tagP.innerText = formartarPreco (itens[i].preco);

    
        //VINCULANDO AS TAGS (OBJETOS) HIERARQUICAMENTE
        tagFigure.appendChild(tagImg)
        tagLi.append(tagFigure,tagH2,tagP) 
        
        if(itens[i].tipo == "figura"){
            const ullistaFigura = document.querySelector(".ullistaFigura").appendChild(tagLi);
        }else{
            const ullistaAcao = document.querySelector(".ullistaAcao").appendChild(tagLi);
        }
    }

}

