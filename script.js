const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};


function buscaCortePorId(id) {

    for (let i = 0; i < barbearia.cortes.length; i++) {

        if (barbearia.cortes[i].id == id) {

            return barbearia.cortes[i];
        }
    }
    return `Corte não encontrado`;
}

function buscaBarbaPorId(id) {

    for (let i = 0; i < barbearia.barbas.length; i++) {

        if (barbearia.barbas[i].id == id) {

            return barbearia.barbas[i];
        }
    }
    return `Barba não encontrada`;
}

function verificaStatusBarbearia() {

    if (barbearia.estaAberto == true) {

        return `Estamos abertos`;
    }
    return `Estamos fechados`;
}

function retornaTodosCortes() {

    return barbearia.cortes;
}

function retornaTodasBarbas() {

    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {

    let corte = buscaCortePorId(corteId);
    let barba = buscaBarbaPorId(barbaId);
    let pedido = {};

    pedido.nome = nomeCliente;

    pedido.pedidoCorte = corte.tipo;
    pedido.pedidoCortePreco = corte.valor;

    pedido.pedidoBarba = barba.tipo;
    pedido.pedidoBarbaPreco = barba.valor;

    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {

    if (lista == barbearia.cortes) {

        for (let i = 0; i < barbearia.cortes.length; i++) {

            if (barbearia.cortes[i].id == id) {

                barbearia.cortes[i].tipo = tipo;
                barbearia.cortes[i].valor = valor;

                return barbearia.cortes;
            }
        }
    }

    for (let i = 0; i < barbearia.barbas.length; i++) {

        if (barbearia.barbas[i].id == id) {

            barbearia.barbas[i].tipo = tipo;
            barbearia.barbas[i].valor = valor;

            return barbearia.barbas;
        }
    }
}

function calculaTotal(pedido) {

    let precoCorte = pedido.pedidoCortePreco;
    let precoBarba = pedido.pedidoBarbaPreco;

    let valorFinal = precoCorte + precoBarba;

    return valorFinal;
}
