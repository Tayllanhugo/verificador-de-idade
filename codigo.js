function verificar() {
    var da = window.document.getElementById('data')
    var res = window.document.getElementById('resultado')
    var img = window.document.getElementById('imagem')
    var mas = window.document.getElementById('masculino')

    /*Calcular a idade */
    var dataatual = new Date();
    var agora = dataatual.getFullYear();
    
    var dataNascimento = new Date(da.value);
    var anoNascimento = dataNascimento.getFullYear();

    var idade = agora - anoNascimento;

    /*mostrar na tela qual das opções foi selecionada com o input radio*/

    var genero = mas.checked ? 'masculino' : 'feminino';

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    if (idade <= 10 && genero == 'masculino') {
        img.innerHTML = '<img class="img" src="imagens/crianca.jpg" alt="imagem">'
    } else {
        if (idade <= 25 && genero == 'masculino') {
            img.innerHTML = '<img class="img" src="imagens/jovem.jpg" alt="imagem">'
        }else {
            if (idade <= 50 && genero == 'masculino') {
                img.innerHTML = '<img class="img" src="imagens/40-anos.jpg" alt="imagem">'
            }else {
                img.innerHTML = '<img class="img" src="imagens/idoso.jpg" alt="imagem">'
            }
        }
    }

    if (idade <= 10 && genero == 'feminino') {
        img.innerHTML = '<img class="img" src="imagens/crianca-fem.jpg" alt="imagem">'
    }else {
        if (idade <= 20 && genero == 'feminino') {
            img.innerHTML = '<img class="img" src="imagens/jovem-fem.jpg" alt="imagem">'
        }else {
            if (idade <= 50 && genero == 'feminino') {
                img.innerHTML = '<img class="img" src="imagens/40-anos-fem.jpg" alt="imagem">'
            }else {
                if (idade <= 100 && genero == 'feminino') {
                    img.innerHTML = '<img class="img" src="imagens/idosa-fem.jpg" alt="imagem">'
                }
            }
        }
    }
}
