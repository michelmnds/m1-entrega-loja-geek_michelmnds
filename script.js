const itens = [
    {
        image: "./assets/img/painting/clock.jpg",
        name: "Relógio",
        price: "R$99,90",
        type: "quadro"
    },
    {
        image: "./assets/img/painting/gamepad.jpg",
        name: "Gamepad",
        price: "R$99,90",
        type: "quadro"
    },
    {
        image: "./assets/img/painting/personagem.jpg",
        name: "Personagem",
        price: "R$99,90",
        type: "quadro"
    },

    {
        image: "./assets/img/actions/animewoman.jpg",
        name: "Anime Woman",
        price: "R$99,90",
        type: "actionFigure"
    },
    {
        image: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Goku",
        price: "R$99,90",
        type: "actionFigure"
    },
    {
        image: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Baby Yoda",
        price: "R$99,90",
        type: "actionFigure"
    },
]

listFigures = []
listFrames = []
lists = [listFigures, listFrames]

function separaItens(itens){
    for (let i = 0; i < itens.length; i++){
            if (itens[i].type == "quadro"){
                listFrames.push(itens[i])               
            }
            else{
                listFigures.push(itens[i])
            }
    }
    return lists
}
let retorno = separaItens(itens)
console.log(retorno)

let ulProdutosPaitings = document.querySelector('.produto')
let ulProdutosFigures = document.querySelector('.produto1')

for (let i = 0; i < listFrames.length; i++){

    let liProduto = document.createElement('li')
    liProduto.classList.add('liProduto')

    let img = document.createElement('img')
    img.src = itens[i].image
    img.classList.add('imagemProd')
    liProduto.appendChild(img)

    let aNome = document.createElement('a')
    aNome.classList.add('nomeProd')
    aNome.innerHTML = itens[i].name
    aNome.href = ""

    pPreco = document.createElement('p')
    pPreco.classList.add('valorProd')
    pPreco.innerHTML = itens[i].price

    ulProdutosPaitings.appendChild(liProduto)
    liProduto.appendChild(aNome)
    liProduto.appendChild(pPreco)

    
}

for (let i = 0; i < listFigures.length; i++){

    let liProduto = document.createElement('li')
    liProduto.classList.add('liProduto')

    let img = document.createElement('img')
    img.src = itens[i + 3].image
    img.classList.add('imagemProd')
    liProduto.appendChild(img)

    let aNome = document.createElement('a')
    aNome.classList.add('nomeProd')
    aNome.innerHTML = itens[i + 3].name
    aNome.href = ""

    pPreco = document.createElement('p')
    pPreco.classList.add('valorProd')
    pPreco.innerHTML = itens[i + 3].price

    ulProdutosFigures.appendChild(liProduto)
    liProduto.appendChild(aNome)
    liProduto.appendChild(pPreco)

    
}
