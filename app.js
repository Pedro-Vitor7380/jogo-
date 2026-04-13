let listaDeNumerosSorteados = [];
let limiteDeNumerosParaSortear = 10
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoTag(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
mensagemInicial()

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoTag("h1", "Parabens");
        let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas";
        let fraseTentativa = `voce acertou o numero secreto em ${tentativas} ${palavraTentativa} `;
        exibirTextoTag("p", fraseTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (chute > numeroSecreto) {
            exibirTextoTag("p", "o numero secreto é menor");
        } else {
            exibirTextoTag("p", "o numero secreto é maior");
        }
    }
    tentativas++
    limparChute()
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumerosParaSortear + 1);
    let quantitadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantitadeDeElementosNaLista == limiteDeNumerosParaSortear) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector("input");
    chute.value = " "
}

function novojogo() {
    numeroSecreto = numeroAleatorio();
    limparChute()
    tentativas = 1
    mensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

function mensagemInicial() {
    exibirTextoTag("h1", "Bem Vindo ao jogo do numero secreto");
    exibirTextoTag("p", `insira um numero de 1 a ${limiteDeNumerosParaSortear}`);
}