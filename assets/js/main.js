function relogio() {

   // Função para formatar o tempo a partir de segundos
function getTimeFromSecond(segundos) {
    // Cria um novo objeto Date com base nos segundos multiplicados por 1000 (para milissegundos)
    const data = new Date(segundos * 1000);
    // Retorna a hora formatada no fuso horário GMT, sem formato de 12 horas, para o idioma pt-BR
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

// Seleciona os elementos HTML
const relogio = document.querySelector('.relogio'); // Elemento que mostrará o tempo
const iniciar = document.querySelector('.iniciar'); // Botão de iniciar
const pausar = document.querySelector('.pausar'); // Botão de pausar
const zerar = document.querySelector('.zerar'); // Botão de zerar

let segundos = 0; // Variável para armazenar os segundos do relógio
let timer; // Variável para armazenar o intervalo do relógio

// Função para iniciar o relógio
function iniciaRelogio() {
    // Cria um intervalo de tempo que executa a cada 1000ms (1 segundo)
    timer = setInterval(function() {
        segundos++; // Incrementa os segundos
        relogio.innerHTML = getTimeFromSecond(segundos); // Atualiza o tempo no elemento HTML
    }, 1000);
}

// Adiciona um ouvinte de evento de clique a todo o documento
document.addEventListener('click', function(e) {
    const el = e.target; // Obtém o elemento que foi clicado

    // Se o elemento clicado tiver a classe 'zerar'
    if (el.classList.contains('zerar')) {
        clearInterval(timer); // Limpa o intervalo do relógio
        relogio.innerHTML = '00:00:00'; // Reseta o tempo exibido para 00:00:00
        segundos = 0; // Reseta a variável de segundos
        relogio.classList.remove('pausado'); // Remove a classe 'pausado' do relógio
    }

    // Se o elemento clicado tiver a classe 'pausar'
    if (el.classList.contains('pausar')) {
        clearInterval(timer); // Limpa o intervalo do relógio
        relogio.classList.add('pausado'); // Adiciona a classe 'pausado' ao relógio
    }

    // Se o elemento clicado tiver a classe 'iniciar'
    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado'); // Remove a classe 'pausado' do relógio
        clearInterval(timer); // Limpa o intervalo do relógio para evitar múltiplas execuções
        iniciaRelogio(); // Chama a função para iniciar o relógio novamente
    }
});

    
    

    // iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer); 
//     iniciaRelogio()
// }); 

// pausar.addEventListener('click', function(event){ 
//     clearInterval(timer);
//     relogio.classList.add('pausado');
// }); 

// zerar.addEventListener('click', function(event){ 
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00'
//     segundos = 0
// }); 
    
}

relogio();