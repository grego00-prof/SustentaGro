# 🌱 SustentaGro — Agricultura com Consciência

> Site educativo e interativo sobre sustentabilidade na agricultura, preservação ambiental e uso consciente dos recursos naturais.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Seções do Site](#-seções-do-site)
- [Quiz Interativo](#-quiz-interativo)
- [Design e Estilo](#-design-e-estilo)
- [Responsividade](#-responsividade)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🌿 Sobre o Projeto

O **SustentaGro** é uma página educativa desenvolvida com o objetivo de conscientizar produtores rurais e consumidores sobre a importância da **agricultura sustentável**, da **preservação ambiental** e do **uso responsável dos recursos naturais**.

O projeto aborda temas como:

- Conservação do solo e dos recursos hídricos
- Energia renovável no campo
- Biodiversidade e equilíbrio ecológico
- Agricultura de precisão e tecnologias sustentáveis
- Reciclagem e economia circular no agronegócio
- Boas práticas para produtores e consumidores

Desenvolvido inteiramente com **HTML, CSS e JavaScript puro**, sem dependência de frameworks ou bibliotecas externas.

---

## 🖥️ Demonstração

Para visualizar o projeto localmente, basta abrir o arquivo `index.html` em qualquer navegador moderno. Não é necessário servidor ou instalação de dependências.

---

## ✨ Funcionalidades

- ✅ Design moderno, limpo e responsivo
- ✅ Navegação suave entre seções (scroll suave)
- ✅ Menu mobile com toggle animado
- ✅ Banner hero com imagem de fundo e overlay gradiente
- ✅ Cards informativos com animações de hover
- ✅ Animação de entrada por scroll (Intersection Observer)
- ✅ Quiz interativo com 10 questões de múltipla escolha
- ✅ Feedback visual imediato no quiz (acerto/erro)
- ✅ Barra de progresso dinâmica no quiz
- ✅ Tela de resultado com mensagem personalizada por desempenho
- ✅ Ano atualizado automaticamente no rodapé via JavaScript

---

## 🛠️ Tecnologias

Este projeto utiliza **exclusivamente** tecnologias nativas da web, sem frameworks ou bibliotecas externas:

| Tecnologia | Uso |
|---|---|
| `HTML5` | Estrutura semântica do conteúdo |
| `CSS3` | Estilização, layout, animações e responsividade |
| `JavaScript ES5+` | Quiz interativo, DOM, animações por scroll |

**Recursos CSS utilizados:**
- Flexbox e CSS Grid para layout
- Variáveis CSS (`custom properties`) para o sistema de design
- Animações com `@keyframes`
- Transições suaves com `transition`
- Media queries para responsividade
- `backdrop-filter` para efeito de vidro fosco no header

**Recursos JavaScript utilizados:**
- Manipulação de DOM
- `IntersectionObserver` para animações no scroll
- Eventos de clique e interação
- Lógica de estado do quiz

---

## 📁 Estrutura do Projeto

```
SustentaGro/
│
├── index.html      # Estrutura semântica e conteúdo do site
├── style.css       # Estilos, layout, animações e responsividade
├── script.js       # Quiz interativo, menu mobile e animações JS
└── README.md       # Documentação do projeto
```

---

## 🚀 Como Executar

### Opção 1 — Abrir diretamente no navegador

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sustentagro.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd sustentagro
   ```
3. Abra o arquivo `index.html` no seu navegador preferido.

### Opção 2 — Usar o VS Code com Live Server

1. Instale a extensão **Live Server** no VS Code.
2. Abra a pasta do projeto no VS Code.
3. Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.
4. O site abrirá automaticamente em `http://127.0.0.1:5500`.

### Opção 3 — Servidor HTTP simples com Python

```bash
# Python 3
python -m http.server 8080

# Acesse em: http://localhost:8080
```

---

## 📄 Seções do Site

### 1. 🏠 Início (Hero)
Banner principal com imagem de lavoura ao fundo, título de destaque em tipografia serifada e chamada para ação.

### 2. 🌿 Sobre a Sustentabilidade
Explicação sobre práticas sustentáveis na agricultura com cards de benefícios divididos em três dimensões:
- **Ambiental** — conservação, biodiversidade, recursos hídricos
- **Social** — segurança alimentar, emprego, agricultura familiar
- **Econômico** — redução de custos, mercados orgânicos, resiliência climática

### 3. 🌾 Agricultura & Meio Ambiente
Seis cards informativos sobre os principais pilares da produção responsável:

| Card | Tema |
|---|---|
| 🪨 | Conservação do Solo |
| 💧 | Economia de Água |
| ☀️ | Energia Renovável |
| 🦋 | Biodiversidade |
| 🛰️ | Agricultura de Precisão |
| ♻️ | Reciclagem e Reaproveitamento |

### 4. 💡 Dicas Sustentáveis
Lista de boas práticas organizadas em dois grupos:
- **Para Produtores Rurais** — 6 dicas técnicas e práticas
- **Para Consumidores** — 6 dicas de consumo consciente

### 5. 🧠 Quiz Interativo
Quiz educativo com 10 questões (detalhado na seção abaixo).

### 6. 📌 Rodapé
Mensagem educativa com citação inspiradora e ano atualizado automaticamente.

---

## 🧠 Quiz Interativo

O quiz foi desenvolvido inteiramente em JavaScript puro e inclui:

- **10 questões** de múltipla escolha sobre sustentabilidade e agricultura
- **4 alternativas** por questão com apenas uma correta
- Exibição de **uma pergunta por vez**
- **Barra de progresso** animada
- **Contador** de questões (ex: "Questão 3 de 10")
- **Feedback visual imediato**: alternativa correta destacada em verde, errada em vermelho
- **Tela de resultado** com pontuação final e emoji
- **Mensagem personalizada** de acordo com o desempenho:

| Acertos | Mensagem |
|---|---|
| 0 – 4 | "Continue aprendendo sobre sustentabilidade." |
| 5 – 7 | "Bom conhecimento sobre o tema." |
| 8 – 10 | "Excelente! Você domina os conceitos de sustentabilidade agrícola." |

- Botão **"Tentar Novamente"** para reiniciar o quiz

**Temas abordados nas questões:**
- Plantio direto e conservação do solo
- Técnicas de irrigação e economia de água
- Agricultura de precisão e tecnologia
- Matas ciliares e proteção hídrica
- Compostagem e resíduos orgânicos
- Energia renovável no campo
- Rotação de culturas
- Biodiversidade agrícola
- Agricultura orgânica
- Pegada hídrica dos alimentos

---

## 🎨 Design e Estilo

### Paleta de Cores

| Variável CSS | Cor | Uso |
|---|---|---|
| `--verde-escuro` | `#1a3c2a` | Header, fundo do quiz, textos principais |
| `--verde-medio` | `#2d6a4f` | Destaques e ênfases |
| `--verde-claro` | `#52b788` | Botões, tags, acentos |
| `--verde-menta` | `#95d5b2` | Logo, elementos do quiz |
| `--verde-palido` | `#d8f3dc` | Fundos de cards e seções |
| `--terra` | `#6b4226` | Acentos de contraste |
| `--terra-claro` | `#c08b5c` | Card de benefícios sociais |
| `--azul` | `#1b7a8a` | Gradientes e botões |
| `--azul-claro` | `#48cae4` | Acentos e destaques |
| `--creme` | `#fafaf5` | Fundo geral da página |

### Tipografia

| Tipo | Fonte | Uso |
|---|---|---|
| Display | `Georgia`, serif | Títulos e headings |
| Corpo | `Segoe UI`, sans-serif | Textos e parágrafos |

### Animações

- **Logo:** rotação suave em loop (`sway`)
- **Hero content:** entrada com fadeUp ao carregar
- **Scroll hint:** bounce vertical contínuo
- **Cards:** fade + slide ao entrar no viewport (Intersection Observer)
- **Hover nos cards:** elevação (`translateY`) e escala no ícone
- **Hover nas dicas:** deslize horizontal (`translateX`)
- **Barra do quiz:** preenchimento suave com `transition`

---

## 📱 Responsividade

O layout é totalmente adaptável e foi testado nas seguintes resoluções:

| Dispositivo | Breakpoint | Comportamento |
|---|---|---|
| Desktop | > 768px | Layout de múltiplas colunas (Grid/Flexbox) |
| Tablet | ≤ 768px | Menu colapsa em toggle, colunas reduzidas |
| Mobile | ≤ 480px | Layout em coluna única, quiz compacto |

**Técnicas utilizadas:**
- `CSS Grid` com `repeat(auto-fit, minmax(...))` para grids flexíveis
- `Flexbox` para alinhamento e distribuição
- `clamp()` para tipografia fluida
- `Media queries` para breakpoints específicos
- `Menu toggle` com JavaScript para navegação mobile

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se quiser melhorar o projeto:

1. Faça um **fork** do repositório
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/minha-melhoria
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin feature/minha-melhoria
   ```
5. Abra um **Pull Request**

### Sugestões de melhorias

- [ ] Adicionar mais questões ao banco do quiz com embaralhamento aleatório
- [ ] Implementar modo escuro (*dark mode*)
- [ ] Adicionar seção de glossário de termos sustentáveis
- [ ] Criar versão multilíngue (EN/ES)
- [ ] Adicionar gráficos de dados sobre sustentabilidade agrícola

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---

<div align="center">

**🌍 Cuide do planeta. Cada escolha conta.**

*"A Terra não é uma herança dos nossos pais — é um empréstimo dos nossos filhos."*

</div>
