# Game Design Document (GDD)

## Fragmentos do Tempo

---

## 1. Visão Geral

**Nome do jogo:** Fragmentos do Tempo

**Gênero:** Plataforma 2D Casual

**Plataforma:** PC / Navegador

**Público-alvo:** Jogadores casuais que buscam sessões de jogo curtas e relaxantes

**Resumo do jogo:**
Um jogo de plataforma 2D onde o jogador controla Rip Hunter, um dos viajantes do tempo, em fases curtas afetadas por distorções temporais. Em um futuro distante, experimentos sucessivos de manipulação do tempo comprometeram a continuidade do mundo, fragmentando a realidade em zonas instáveis. O objetivo é coletar todos os fragmentos do tempo de cada fase para restaurar gradualmente o fluxo temporal. Cada fase dura 1–3 minutos, oferecendo uma experiência leve e progressiva, ideal para pausas rápidas.

---

## 2. Persona & Atendimento

**Como você atende a persona com o jogo:**

O jogo é projetado para jogadores casuais que:

- Possuem pouco tempo disponível (querem sessões de 1–3 minutos)
- Preferem mecânicas simples e intuitivas (aprendem em segundos)
- Gostam de desafios leves com progressão clara
- Desejam feedback rápido e visual

O design atende esses desejos através de:

- **Início imediato:** Não há menus complexos; entra direto na fase
- **Mecânicas minimalistas:** Movimento, pulo, coleta (3 ações principais)
- **Progressão visual clara:** HUD mostra fragmentos coletados e tipo de tempo
- **Baixa carga cognitiva:** Regras simples, sem sistemas complexos

---

## 3. Mecânicas de Jogo

**Objetivo do jogador:**
Coletar todos os fragmentos do tempo disponíveis na fase para avançar automaticamente para a próxima, contribuindo para a restauração da realidade fragmentada.

**Principais mecânicas:**

• **Movimento**

- Mover para esquerda/direita (← e →)
- Pular com altura fixa (↑)
- Colisão com plataformas sólidas

• **Interação**

- Coletar fragmentos do tempo (feedback visual/sonoro)
- Avanço automático de fase após coletar todos os fragmentos
- Evitar obstáculos (espinhos, plataformas móveis, áreas que desaparecem)

• **Sistema de Progressão**

- Fases sequenciais (cada uma desbloqueia a próxima)
- Dificuldade cresce levemente a cada fase
- Contador total de fragmentos coletados

**Regras básicas:**

• **Condição de vitória:** Coletar todos os fragmentos da fase

• **Condição de derrota:** Encostar em um obstáculo = morte + reinício imediato da fase

---

## 4. Narrativa e Ambientação

**História:**
Em um futuro distante, a humanidade aprendeu a manipular o tempo e ampliou seus experimentos até causar uma ruptura temporal em larga escala. A continuidade do mundo foi comprometida: cidades, memórias e eventos passaram a coexistir fora de ordem, dividindo a realidade em partes instáveis. O jogador controla Rip Hunter, um dos viajantes do tempo, que deve coletar os fragmentos temporais para restaurar gradualmente o fluxo normal do tempo e estabilizar o mundo.

**Ambientação:**
Mundo 2D minimalista afetado por distorções temporais, com zonas corrompidas onde passado e futuro coexistem simultaneamente. Diferentes tipos de tempo coexistem em cada fase:

- **Tempo Normal (Vermelho):** Zona com objetos que aparecem/desaparecem aleatoriamente
- **Tempo Lento (Azul):** Zona com velocidade global reduzida; permite movimentos precisos
- **Tempo Rápido (Verde):** Zona com obstáculos velozes; exige reação rápida

**Personagens principais:**

- **Rip Hunter (personagem do jogador):** Um dos viajantes do tempo responsável pela restauração da linha temporal. Percorre o mundo fragmentado em busca dos fragmentos temporais para reduzir a instabilidade da realidade.

---

## 5. Gameplay (Experiência do Jogador)

**Loop principal:**

1. Inicia a fase com o personagem posicionado no início
2. Explora o cenário procurando fragmentos
3. Coleta todos os fragmentos disponíveis
4. Evita ou contorna obstáculos
5. Avança automaticamente para a próxima fase
6. Repetir até completar todas as fases

**Nível de dificuldade:**
Progressivo — Fases iniciais são simples (sem mecânica de tempo) e intermediárias introduzem 1 tipo de tempo.

**Duração média:**

- Por fase: 1–2 minutos
- Total (4 fases): 5–8 minutos

---

## 6. Interface (UI/UX)

**Elementos na tela:**

- **Contador de fragmentos:** "3/5" (mostra quantos coletou vs. total da fase)
- **Indicador de tipo de tempo:** Símbolo ou cor que representa o modificador temporal ativo
- **Tela de início:** Mensagem "Pressione qualquer tecla para começar"
- **Fim de fase:** Transição rápida (1–2s) para a próxima fase
- **Feedback visual:** Brilho ao coletar fragmentos; piscada de cores ao completar
- **Feedback de morte:** Tela clara indicando reinício imediato

**Controles:**

- **Teclado:**
  - ← : Mover esquerda
  - → : Mover direita
  - ↑ / Espaço : Pular
  - R : Reiniciar fase (opcional)

---

## 7. Arte e Som

**Estilo visual:**
Minimalista, com paleta de cores reduzida e componentes visuais limpas para não sobrecarregar o jogador.

**Referências visuais:**
Jogos como Geometry Dash (feedback visual claro e dinâmico).

**Personagem:**

- Animações básicas: idle, correr, pular
- Sem detalhes complexos; foco em clareza visual

**Áudio:**

- **Música:** Loop curto e leve, com variações sutis para cada tipo de tempo (mais lenta em "Tempo Lento", mais rápida em "Tempo Rápido")
- **Efeitos sonoros:**
  - Coleta de fragmento: som breve
  - Pulo: som discreto de confirmação
  - Dano/morte: som de fracasso
  - Conclusão de fase: som de sucesso
  - Ambiente: variações sonoras por tipo de tempo
