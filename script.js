/**
 * SustentaGro — script.js
 * Funcionalidades: quiz interativo, menu mobile, ano no rodapé
 */

/* =========================================
   1. ANO AUTOMÁTICO NO RODAPÉ
   ========================================= */
(function atualizarAno() {
  const span = document.getElementById('anoAtual');
  if (span) {
    span.textContent = new Date().getFullYear();
  }
})();

/* =========================================
   2. MENU MOBILE TOGGLE
   ========================================= */
(function menuMobile() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    navLinks.classList.toggle('aberto');
    const expandido = navLinks.classList.contains('aberto');
    toggle.setAttribute('aria-expanded', expandido);
  });

  // Fecha o menu ao clicar em um link
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('aberto');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* =========================================
   3. QUIZ INTERATIVO
   ========================================= */
(function quiz() {

  /* ---- 3.1  Banco de questões ---- */
  const perguntas = [
    {
      enunciado: 'Qual prática agrícola contribui para a conservação do solo ao evitar seu revolvimento excessivo?',
      alternativas: [
        'Aração profunda com grade pesada',
        'Plantio direto sobre a palhada',
        'Queima dos resíduos da safra anterior',
        'Monocultura extensiva sem rotação'
      ],
      correta: 1
    },
    {
      enunciado: 'Qual técnica de irrigação é considerada a mais eficiente no uso da água na agricultura?',
      alternativas: [
        'Irrigação por inundação',
        'Aspersão convencional',
        'Irrigação por gotejamento',
        'Pivô central de alta pressão'
      ],
      correta: 2
    },
    {
      enunciado: 'O que é a agricultura de precisão?',
      alternativas: [
        'Uso de agrotóxicos em doses exatas por calendário fixo',
        'Cultivo somente de espécies nativas da região',
        'Aplicação de insumos no momento e local exatos, guiada por tecnologia e dados',
        'Colheita manual realizada com ferramentas de alta precisão artesanal'
      ],
      correta: 2
    },
    {
      enunciado: 'Qual é a principal função das matas ciliares na agricultura?',
      alternativas: [
        'Aumentar a área disponível para plantio',
        'Proteger os cursos d\'água e evitar erosão nas margens',
        'Servir como reserva de madeira para uso na propriedade',
        'Bloquear o vento e reduzir a evaporação das lavouras'
      ],
      correta: 1
    },
    {
      enunciado: 'O que é compostagem no contexto da agricultura sustentável?',
      alternativas: [
        'Processo de queima controlada de resíduos orgânicos para fertilizar',
        'Adição de compostos químicos para correção do pH do solo',
        'Transformação de resíduos orgânicos em adubo natural por decomposição biológica',
        'Técnica de irrigação que usa compostos minerais dissolvidos na água'
      ],
      correta: 2
    },
    {
      enunciado: 'Qual das opções abaixo é um exemplo de energia renovável utilizada no campo?',
      alternativas: [
        'Gerador a diesel portátil',
        'Painel fotovoltaico solar para irrigação',
        'Termoelétrica a carvão mineral',
        'Usina nuclear de pequeno porte rural'
      ],
      correta: 1
    },
    {
      enunciado: 'Rotação de culturas é uma prática que consiste em:',
      alternativas: [
        'Plantar a mesma cultura em locais diferentes a cada safra, no mesmo período',
        'Alternar diferentes espécies de plantas na mesma área ao longo das safras',
        'Rotar o sentido do plantio para aproveitar melhor a luz solar',
        'Substituir cultivos alimentares por cultivos para biocombustíveis anualmente'
      ],
      correta: 1
    },
    {
      enunciado: 'O que é biodiversidade agrícola e por que ela é importante?',
      alternativas: [
        'É a diversidade de máquinas e equipamentos usados no campo, aumentando a eficiência',
        'É a variedade de espécies cultivadas e silvestres, fundamental para o equilíbrio dos ecossistemas e segurança alimentar',
        'É o conjunto de certificações orgânicas que um produtor pode obter para diferentes culturas',
        'É a variedade de climas em que uma mesma espécie agrícola pode ser cultivada'
      ],
      correta: 1
    },
    {
      enunciado: 'Qual das afirmações sobre agricultura orgânica é correta?',
      alternativas: [
        'Utiliza agrotóxicos sintéticos em baixas doses para controlar pragas',
        'Produz, necessariamente, menos alimentos que a agricultura convencional em qualquer condição',
        'Proíbe o uso de organismos geneticamente modificados e agroquímicos sintéticos',
        'Só pode ser praticada em pequenas propriedades familiares com menos de 10 hectares'
      ],
      correta: 2
    },
    {
      enunciado: 'O que significa "pegada hídrica" de um produto alimentar?',
      alternativas: [
        'A quantidade de água que escoa superficialmente durante a irrigação do campo',
        'O total de água consumida em todas as etapas de produção, processamento e distribuição do produto',
        'A área de terra molhada necessária para produzir 1 kg do alimento',
        'O percentual de umidade residual no alimento após o processamento industrial'
      ],
      correta: 1
    }
  ];

  /* ---- 3.2  Estado do quiz ---- */
  let indicePerguntaAtual = 0;
  let pontuacao = 0;
  let respondida = false;
  let indiceRespostaSelecionada = null;

  /* ---- 3.3  Referências DOM ---- */
  const quizStart      = document.getElementById('quizStart');
  const quizPergunta   = document.getElementById('quizPergunta');
  const quizResultado  = document.getElementById('quizResultado');
  const btnIniciar     = document.getElementById('btnIniciar');
  const btnProximo     = document.getElementById('btnProximo');
  const btnReiniciar   = document.getElementById('btnReiniciar');
  const quizContador   = document.getElementById('quizContador');
  const quizProgresso  = document.getElementById('quizProgresso');
  const quizEnunciado  = document.getElementById('quizEnunciado');
  const quizAlternativas = document.getElementById('quizAlternativas');
  const resultadoPontuacao = document.getElementById('resultadoPontuacao');
  const resultadoMensagem  = document.getElementById('resultadoMensagem');
  const resultadoEmoji     = document.getElementById('resultadoEmoji');

  if (!btnIniciar) return; // Sai se o quiz não estiver na página

  /* ---- 3.4  Iniciar quiz ---- */
  btnIniciar.addEventListener('click', function () {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    respondida = false;

    quizStart.style.display = 'none';
    quizResultado.style.display = 'none';
    quizPergunta.style.display = 'block';

    exibirPergunta();
  });

  /* ---- 3.5  Exibir pergunta atual ---- */
  function exibirPergunta() {
    respondida = false;
    indiceRespostaSelecionada = null;
    btnProximo.disabled = true;

    const pergunta = perguntas[indicePerguntaAtual];
    const total    = perguntas.length;
    const numero   = indicePerguntaAtual + 1;

    // Contador e barra de progresso
    quizContador.textContent = 'Questão ' + numero + ' de ' + total;
    quizProgresso.style.width = (numero / total * 100) + '%';

    // Enunciado
    quizEnunciado.textContent = pergunta.enunciado;

    // Alternativas
    quizAlternativas.innerHTML = '';
    pergunta.alternativas.forEach(function (texto, idx) {
      const li = document.createElement('li');
      li.textContent = String.fromCharCode(65 + idx) + ') ' + texto; // A, B, C, D
      li.addEventListener('click', function () {
        if (respondida) return;
        selecionarAlternativa(li, idx);
      });
      quizAlternativas.appendChild(li);
    });
  }

  /* ---- 3.6  Selecionar alternativa ---- */
  function selecionarAlternativa(li, idx) {
    // Remove seleção anterior se existir
    const todos = quizAlternativas.querySelectorAll('li');
    todos.forEach(function (item) {
      item.classList.remove('selecionada');
    });

    li.classList.add('selecionada');
    indiceRespostaSelecionada = idx;
    btnProximo.disabled = false;
  }

  /* ---- 3.7  Botão próxima pergunta ---- */
  btnProximo.addEventListener('click', function () {
    if (respondida || indiceRespostaSelecionada === null) return;

    respondida = true;
    btnProximo.disabled = true;

    const pergunta = perguntas[indicePerguntaAtual];
    const todos    = quizAlternativas.querySelectorAll('li');

    // Destaca correta e errada
    todos.forEach(function (item, idx) {
      if (idx === pergunta.correta) {
        item.classList.add('correta');
      } else if (idx === indiceRespostaSelecionada) {
        item.classList.add('errada');
        item.classList.remove('selecionada');
      }
    });

    // Contabiliza acerto
    if (indiceRespostaSelecionada === pergunta.correta) {
      pontuacao++;
    }

    // Delay para o usuário ver o resultado antes de avançar
    setTimeout(function () {
      indicePerguntaAtual++;

      if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta();
        btnProximo.disabled = true;
      } else {
        mostrarResultado();
      }
    }, 1200);
  });

  /* ---- 3.8  Mostrar resultado final ---- */
  function mostrarResultado() {
    quizPergunta.style.display = 'none';
    quizResultado.style.display = 'block';

    resultadoPontuacao.textContent = 'Você acertou ' + pontuacao + ' de ' + perguntas.length + ' questões!';

    var emoji, mensagem;

    if (pontuacao <= 4) {
      emoji    = '🌱';
      mensagem = 'Continue aprendendo sobre sustentabilidade. Cada passo conta na jornada para um planeta mais verde!';
    } else if (pontuacao <= 7) {
      emoji    = '🌿';
      mensagem = 'Bom conhecimento sobre o tema! Você está no caminho certo para se tornar um agente da sustentabilidade.';
    } else {
      emoji    = '🏆';
      mensagem = 'Excelente! Você domina os conceitos de sustentabilidade agrícola. Continue espalhando esse conhecimento!';
    }

    resultadoEmoji.textContent   = emoji;
    resultadoMensagem.textContent = mensagem;

    // Atualiza barra de progresso para 100%
    quizProgresso.style.width = '100%';
  }

  /* ---- 3.9  Reiniciar quiz ---- */
  btnReiniciar.addEventListener('click', function () {
    quizResultado.style.display = 'none';
    quizStart.style.display     = 'block';
    quizProgresso.style.width   = '10%';
  });

})();

/* =========================================
   4. ANIMAÇÃO DE ENTRADA DOS CARDS
   (Intersection Observer — sem bibliotecas)
   ========================================= */
(function animarCards() {
  if (!('IntersectionObserver' in window)) return;

  var cards = document.querySelectorAll('.info-card, .beneficio-card, .dicas-lista li');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(function (card) {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(32px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
})();
