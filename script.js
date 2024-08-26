const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas seguintes afirmações descreve corretamente uma característica das energias renováveis?"
        alternativas: [
            {
                texto:"Aproveitam recursos naturais como o sol e vento, que se renovam naturalmente."
                afirmacao: "A energia solar e eólica são renováveis porque aproveitam recursos naturais que se regeneram continuamente."
            },
            {
                texto: " Utilizam fontes como o calor da Terra e movimentos da marés, que são constantemente regenerados.",
                afirmacao: "Energias geotérmica e das marés são renováveis, pois utilizam fontes naturais que se regeneram constantemente."
            }
        ]
    },
    {
        enunciado: " Sobre as características das energias não renováveis, qual das seguintes afirmações é correta?",
        alternativas: [
            {
                texto: " Recursos como petróleo e carvão são limitados e sua extração reduz a quantidade disponível, pois esses recursos não se regeneram rapidamente.",
                afirmacao: "Petróleo e carvão são recursos não renováveis porque sua extração diminui a quantidade disponível, e eles não se regeneram em um período de tempo curto."
            },
            {
                texto: "Fontes de energia como gás natural e urânio também são finitas e formam-se ao longo de milhões de anos, tornando-se esgotáveis com o uso contínuo.",
                afirmacao: "Gás natural e urânio também são finitos, formando-se ao longo de milhões de anos, o que os torna esgotáveis com o uso contínuo."
           }
        ]
    },
    {
        enunciado: "Quais dos seguintes benefícios são associados ao uso de energias renováveis?",
        alternativas: [
            {
                texto: " Redução das emissões de gases de efeito estufa e diminuição da poluição do ar.",
                afirmacao: "O uso de energias renováveis reduz as emissões de gases de efeito estufa e ajuda a diminuir a poluição do ar, contribuindo para a mitigação das mudanças climáticas."
            },
            {
                texto: "Aumento da segurança energética e criação de novas oportunidades de emprego em tecnologias sustentáveis.",
                afirmacao: "Energias renováveis aumentam a segurança energética ao diversificar as fontes de energia e promovem a criação de empregos em tecnologias sustentáveis, impulsionando a economia verde."
            }
        ]
    },
    {
        enunciado: "Por que precisamos de energia?        ",
        alternativas: [
            {
                texto: "Para acender a luz, preparar nossas refeições e nos transportar de carro até a escola",
                afirmacao: "A energia é fundamental para atividades cotidianas como iluminação, preparo de alimentos e transporte, sendo essencial para o funcionamento da sociedade moderna.                "
            },
            {
                texto: "A energia é necessária para a manutenção da vida. Todos os organismos vivos que existem no planeta precisam buscar energia de alguma forma para sobreviverem.",
                afirmacao: "A energia é vital para a sobrevivência de todos os seres vivos, pois é necessária para processos biológicos essenciais e manutenção da vida no planeta."
            }
        ]
    },
    {
        enunciado: "Qual a diferença entre Matriz elétrica e Matriz energética?",
        alternativas: [
            {
                texto: " A matriz energética representa o conjunto de fontes de energia utilizadas para movimentar os carros, preparar a comida no fogão e gerar eletricidade. a matriz elétrica é formada pelo conjunto de fontes utilizadas apenas para a geração de energia elétrica.",
                afirmacao: "A matriz energética é muito importante em nosso cotidiano,pois está envolvida em muitas coisas do nosso dia a dia."
            },
            {
                texto: "A matriz energética representa o conjunto de fontes de energia. A matriz elétrica é formada pelo conjunto de fontes para a geração de energia elétrica.",
                afirmacao: "Ambas são de extrema importância. Uma para nosso dia a dia, e a outra para a geração de energia elétrica."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {Energias geotérmica e das marés são renováveis, pois utilizam fontes naturais que se regeneram constantemente.

        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
