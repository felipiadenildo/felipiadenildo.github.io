// Fonte única de conteúdo para "Minha História" e "Blog".
// Ver 08_Site_Pessoal/PLANO-consolidacao-2026-08-31.md, seções 3 e 12.
//
// Schema de cada post:
// {
//   id: "kebab-case-descritivo",           // nunca reaproveitado
//   type: "chapter" | "event" | "photo" | "note",
//   date: "1996-12-05" | "2020" | "2019/2023" | null,  // null = sem data (bloco de contexto)
//   dateLabel: { pt: "1996", en: "1996" },  // string exibida (pode diferir de `date`)
//   title: { pt: "...", en: "..." },
//   body:  { pt: "<p>...</p>", en: "<p>...</p>" },      // HTML simples, um ou mais <p>
//   quote: { pt: "...", en: "..." },        // opcional, só em "chapter"
//   tags: ["..."],                           // opcional, livre
//   flags: { timeline: true, blog: false, featured: false, draft: true },
//   media: [ { kind: "photo-placeholder", note: { pt: "...", en: "..." } } ]  // opcional
// }
//
// Posts com flags.draft === true não aparecem em nenhuma página — servem
// só pra revisão direta neste arquivo antes de aprovação.

window.SITE_POSTS = [
  {
    id: "sp-nascimento-1996",
    type: "chapter",
    date: "1996-12-05",
    dateLabel: { pt: "1996", en: "1996" },
    title: { pt: "São Paulo", en: "São Paulo" },
    body: {
      pt: "<p>Nasci em São Paulo, no dia 5 de dezembro de 1996. Meus pais chegaram à cidade vindos de lugares diferentes do Nordeste: minha mãe, Francisca, do interior do Piauí; meu pai, do interior do Ceará. Como tantas famílias nordestinas da época, vieram atrás de trabalho e de uma vida diferente da que tinham deixado para trás. Foi em São Paulo que essas duas histórias se encontraram.</p>",
      en: "<p>I was born in São Paulo on December 5, 1996. My parents had come to the city from different parts of Brazil's Northeast: my mother, Francisca, from inland Piauí; my father, from inland Ceará. Like so many Northeastern families of that generation, they'd come looking for work and for a life different from the one they'd left behind. São Paulo is where those two stories met.</p>"
    },
    tags: ["familia", "sao-paulo", "nascimento"],
    flags: { timeline: true, blog: false, featured: false, draft: false },
    media: [
      { kind: "photo-placeholder", note: { pt: "Uma foto de família desse período ainda vai entrar aqui.", en: "A family photo from this time will go here." } }
    ]
  },
  {
    id: "infancia-tres-cidades",
    type: "chapter",
    date: "1997",
    dateLabel: { pt: "Infância", en: "Childhood" },
    title: { pt: "Entre três cidades", en: "Between three cities" },
    body: {
      pt: "<p>Antes de Teresina, minha família viveu boa parte da minha primeira infância em São Paulo: entre Heliópolis, São Bernardo do Campo e Guarulhos, sem uma casa fixa por muito tempo. As férias eram diferentes. Viajávamos para Altos, no Piauí, terra da minha mãe, onde meus avós Francisco e Maria moravam numa zona rural simples. Foi nessas visitas, ainda criança, que comecei a gostar de bicho e de mato, sem saber que aquilo ia voltar mais tarde, de um jeito bem diferente.</p>",
      en: "<p>Before Teresina, my family spent much of my early childhood in São Paulo, moving between Heliópolis, São Bernardo do Campo, and Guarulhos, without a fixed home for very long. Vacations were different. We'd travel to Altos, in Piauí, my mother's hometown, where my grandparents Francisco and Maria lived on a simple rural property. It was on those visits, as a kid, that I first grew fond of animals and the outdoors, without knowing it would come back later, in a very different form.</p>"
    },
    tags: ["infancia", "sao-paulo", "altos-pi", "avos"],
    flags: { timeline: true, blog: false, featured: false, draft: false },
    media: [
      { kind: "note", note: { pt: "Falta contar: quando cada mudança aconteceu, e como era o dia a dia entre essas casas. Vou escrever esse capítulo com mais calma.", en: "Still to tell: exactly when each move happened, and what daily life looked like between those houses. I'll write this chapter more carefully later." } }
    ]
  },
  {
    id: "teresina-pizzaria-2008",
    type: "event",
    date: "2008",
    dateLabel: { pt: "2008", en: "2008" },
    title: { pt: "Teresina", en: "Teresina" },
    body: {
      pt: "<p>Em 2008, viemos para Teresina. Minha mãe tentou abrir uma pizzaria com parentes; o negócio não vingou, e a família teve que se reorganizar de novo.</p>",
      en: "<p>In 2008, we moved to Teresina. My mother tried opening a pizzeria with relatives; the business didn't work out, and the family had to regroup once again.</p>"
    },
    tags: ["teresina", "familia"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "altos-pi-2010-2014",
    type: "chapter",
    date: "2010",
    dateLabel: { pt: "2010–2014", en: "2010–2014" },
    title: { pt: "Altos, Piauí", en: "Altos, Piauí" },
    body: {
      pt: "<p>Em 2010, nos mudamos para Altos, onde vivi até 2014. Foi o período mais longo que passei perto dos meus avós: Francisco, vaqueiro, e Maria, do lar, numa vida simples de roça, longe do centro da cidade. Não tínhamos muito, mas guardo poucas e boas lembranças de lá: o mato, os bichos, o ritmo mais devagar do dia. Anos depois entendi que aquilo tinha ficado em mim.</p>",
      en: "<p>In 2010, we moved to Altos, where I lived until 2014. It was the longest stretch of time I spent close to my grandparents: Francisco, a cattle hand, and Maria, who kept the house, living a simple rural life away from the city center. We didn't have much, but I hold onto a few good memories from there: the fields, the animals, the slower pace of each day. Years later, I understood that it had stayed with me.</p>"
    },
    tags: ["altos-pi", "avos", "biologia", "animais"],
    flags: { timeline: true, blog: false, featured: false, draft: false },
    media: [
      { kind: "photo-placeholder", note: { pt: "Uma foto da roça dos meus avós ainda vai entrar aqui.", en: "A photo of my grandparents' land will go here." } }
    ]
  },
  {
    id: "mext-belem-2014",
    type: "chapter",
    date: "2014",
    dateLabel: { pt: "2014", en: "2014" },
    title: { pt: "Um exame em Belém", en: "An exam in Belém" },
    body: {
      pt: "<p>Foi nesse ano que concorri à bolsa MEXT, do governo japonês, com a prova em Belém e o professor Nakayama sensei ao meu lado. Não passei. Decidi então continuar tentando dentro do Brasil, que parecia um caminho mais viável.</p>",
      en: "<p>That was the year I applied for the MEXT scholarship from the Japanese government, with the exam in Belém and my teacher, Nakayama sensei, by my side. I didn't pass. I decided to keep trying within Brazil instead, which seemed like the more realistic path.</p>"
    },
    tags: ["mext", "belem", "japao"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "obf-mencao-2015",
    type: "event",
    date: "2015",
    dateLabel: { pt: "2015", en: "2015" },
    title: { pt: "Menção Honrosa na OBF", en: "Honorable Mention at OBF" },
    body: {
      pt: "<p>No último ano do ensino médio, ganhei Menção Honrosa na Olimpíada Brasileira de Física (OBF). Não mudou meus planos, mas foi um sinal de que exatas sempre tinham sido meu forte.</p>",
      en: "<p>In my last year of high school, I earned an Honorable Mention in the Brazilian Physics Olympiad (OBF). It didn't change my plans, but it was a sign that STEM had always been where I was strongest.</p>"
    },
    tags: ["obf", "olimpiadas", "ensino-medio"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "ufpi-2015",
    type: "chapter",
    date: "2015-07",
    dateLabel: { pt: "2015", en: "2015" },
    title: { pt: "Primeiro da família numa universidade pública", en: "First in the family at a public university" },
    body: {
      pt: "<p>Terminei o ensino médio e entrei na Engenharia Mecânica da Universidade Federal do Piauí. Foi um marco silencioso: o primeiro da minha família a entrar numa universidade pública. Não demorou, porém, para eu decidir tentar vestibulares em outras regiões do país.</p>",
      en: "<p>I finished high school and started Mechanical Engineering at the Federal University of Piauí. It was a quiet milestone: the first in my family to enter a public university. It didn't take long, though, before I decided to try entrance exams in other parts of the country.</p>"
    },
    tags: ["ufpi", "primeira-geracao"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "fortaleza-2016",
    type: "chapter",
    date: "2016",
    dateLabel: { pt: "2016", en: "2016" },
    title: { pt: "Fortaleza", en: "Fortaleza" },
    body: {
      pt: "<p>Passei na UTFPR, mas não cheguei a finalizar a matrícula. No mesmo período, ganhei bolsa e fui convidado tanto pelo Farias Brito quanto pelo Ari de Sá, dois dos cursinhos mais concorridos de Fortaleza. Tive que escolher: fui para o Ari de Sá, e passei um ano morando na cidade.</p>",
      en: "<p>I passed the entrance exam for UTFPR but never completed enrollment. Around the same time, I won a scholarship and was invited by both Farias Brito and Ari de Sá, two of the most competitive prep schools in Fortaleza. I had to choose. I went with Ari de Sá and spent a year living in the city.</p>"
    },
    tags: ["fortaleza", "cursinho"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "teresina-volta-2017",
    type: "chapter",
    date: "2017",
    dateLabel: { pt: "2017", en: "2017" },
    title: { pt: "De volta a Teresina", en: "Back to Teresina" },
    body: {
      pt: "<p>Ainda sem ter encontrado o curso certo, resolvi estudar por conta própria enquanto dava aulas. Comecei como monitor no Objetivo Teresina, passando por diferentes unidades; depois, no cursinho de um amigo do colégio, além de aulas particulares. Era, sobretudo, uma forma de me sustentar e continuar tentando.</p>",
      en: "<p>Still without a program that felt right, I decided to study on my own while teaching. I started as a tutor at Objetivo Teresina, across different units; then at a friend's prep school, plus private lessons. It was, above all, a way to support myself and keep trying.</p>"
    },
    tags: ["teresina", "monitoria", "ensino"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "efomm-2018",
    type: "event",
    date: "2018",
    dateLabel: { pt: "2018", en: "2018" },
    title: { pt: "Belém, outra vez", en: "Belém, again" },
    body: {
      pt: "<p>Fui aprovado na Escola de Formação de Oficiais da Marinha Mercante, em Belém. Saí ainda no primeiro semestre: não me identifiquei com aquele caminho.</p>",
      en: "<p>I was accepted into the Merchant Marine Officers' Training School, in Belém. I left in the first semester. It wasn't the path for me.</p>"
    },
    tags: ["efomm", "belem"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "usp-chegada-2019",
    type: "chapter",
    date: "2019-02",
    dateLabel: { pt: "2019", en: "2019" },
    title: { pt: "USP São Carlos", en: "USP São Carlos" },
    body: {
      pt: "<p>Já tinha sido aprovado também em Unicamp, UnB e outras universidades. Escolhi a Engenharia da Computação na USP São Carlos, no CAASO. Foi ali que a história ganhou outro ritmo.</p>",
      en: "<p>I had already been accepted at Unicamp, UnB, and other universities too. I chose Computer Engineering at USP São Carlos, at CAASO. That's where the story picked up a different rhythm.</p>"
    },
    tags: ["usp", "sao-carlos", "caaso"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "btg-summer-intern-2020",
    type: "event",
    date: "2020-07",
    dateLabel: { pt: "2020", en: "2020" },
    title: { pt: "Um estágio de verão", en: "A summer internship" },
    body: {
      pt: "<p>No meio da graduação, meu primeiro contato com o mercado veio num estágio de verão no BTG Pactual, na área de Seguros. Trabalhei com VBA, SQL Server e Python, ajudando a tirar processos críticos de planilhas soltas e colocá-los em algo mais confiável.</p>",
      en: "<p>Midway through my degree, my first real contact with the job market came through a summer internship at BTG Pactual, in the Insurance division. I worked with VBA, SQL Server, and Python, helping move critical processes off loose spreadsheets and into something more reliable.</p>"
    },
    tags: ["btg", "estagio", "seguros"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "projeto-semente-2020",
    type: "event",
    date: "2020-04",
    dateLabel: { pt: "2020", en: "2020" },
    title: { pt: "Projeto Semente", en: "Projeto Semente" },
    body: {
      pt: "<p>No mesmo ano, entrei para a equipe de comunicação do Projeto Semente, uma iniciativa da USP para levar tecnologia a crianças e adolescentes em situação de vulnerabilidade social. Era um trabalho pequeno dentro da minha rotina, mas que me manteve conectado a algo fora da própria carreira.</p>",
      en: "<p>That same year, I joined the communications team of Projeto Semente, a USP initiative bringing technology education to children and teenagers in socially vulnerable situations. It was a small part of my routine, but it kept me connected to something outside my own career.</p>"
    },
    tags: ["extensao", "voluntariado"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "imc-2020",
    type: "event",
    date: "2020-08",
    dateLabel: { pt: "2020", en: "2020" },
    title: { pt: "IMC 2020", en: "IMC 2020" },
    body: {
      pt: "<p>Também em 2020, representei a USP na International Mathematics Competition for University Students (IMC), minha primeira competição internacional de matemática desde a graduação.</p>",
      en: "<p>Also in 2020, I represented USP at the International Mathematics Competition for University Students (IMC), my first international math competition since starting my degree.</p>"
    },
    tags: ["imc", "matematica", "olimpiadas"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "colegiados-representacao-2019-2023",
    type: "chapter",
    date: "2019-08",
    dateLabel: { pt: "2019–2023", en: "2019–2023" },
    title: { pt: "Colegiados e representação estudantil", en: "Committees and student representation" },
    body: {
      pt: "<p>Entre 2019 e 2023, fui eleito representante discente 14 vezes, entre titular e suplente, em seis colegiados e comissões diferentes da EESC e do ICMC: da Congregação, o órgão deliberativo máximo dos institutos, até a Comissão de Biblioteca. Também passei pelo SAEComp, a secretaria acadêmica da Engenharia de Computação, como membro em 2020 e de novo em 2022, e como Diretor de Eventos entre 2021 e 2022. Em paralelo, coordenei a participação estudantil no Comitê do Cinquentenário do ICMC, ajudando a estruturar as comemorações de meio século do instituto.</p><p>Não foi um plano deliberado virar alguém envolvido em tanta coisa ao mesmo tempo. Foi mais um hábito que foi crescendo, reunião após reunião, até virar parte de quem eu era na universidade.</p>",
      en: "<p>Between 2019 and 2023, I was elected student representative 14 times, as both titular and alternate member, across six different committees and boards at EESC and ICMC: from the Congregação, the highest deliberative body of both institutes, down to the Library Committee. I also went through SAEComp, the Computer Engineering academic office, as a member in 2020 and again in 2022, and as Events Director between 2021 and 2022. Alongside that, I coordinated student participation in the ICMC 50th Anniversary Committee, helping structure the institute's half-century celebrations.</p><p>Becoming someone involved in that much at once was never a deliberate plan. It was more of a habit that kept growing, meeting after meeting, until it became part of who I was at university.</p>"
    },
    tags: ["colegiados", "saecomp", "representacao-estudantil"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "pub-iniciacao-cientifica-2020-2021",
    type: "event",
    date: "2020-09",
    dateLabel: { pt: "2020–2021", en: "2020–2021" },
    title: { pt: "Iniciação científica", en: "Undergraduate research" },
    body: {
      pt: "<p>Entre setembro de 2020 e setembro de 2021, fui aluno de iniciação científica no Projeto Memória Virtual, sob orientação da Profa. Elisa Yumi Nakagawa. Trabalhei na engenharia de um sistema web gratuito para centralizar dados sobre bens patrimoniais de acervos históricos brasileiros: minha primeira experiência real de pesquisa.</p>",
      en: "<p>Between September 2020 and September 2021, I was an undergraduate research assistant on the Virtual Memory Project, advised by Prof. Elisa Yumi Nakagawa. I worked on the engineering of a free web system to centralize data on heritage assets from Brazilian historical collections: my first real taste of research.</p>"
    },
    tags: ["pub", "iniciacao-cientifica", "pesquisa"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "imc-2021",
    type: "event",
    date: "2021-08",
    dateLabel: { pt: "2021", en: "2021" },
    title: { pt: "IMC 2021", en: "IMC 2021" },
    body: {
      pt: "<p>Voltei a representar a USP na IMC em 2021, dessa vez com a equipe terminando em 67º lugar entre times do mundo todo.</p>",
      en: "<p>I represented USP at the IMC again in 2021, this time with the team finishing 67th globally among teams from around the world.</p>"
    },
    tags: ["imc", "matematica", "olimpiadas"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "btg-estagiario-assistente-2021-2023",
    type: "chapter",
    date: "2021-01",
    dateLabel: { pt: "2021–2023", en: "2021–2023" },
    title: { pt: "Do estágio à promoção, no BTG", en: "From intern to promotion, at BTG" },
    body: {
      pt: "<p>De janeiro de 2021 a novembro de 2022, voltei ao BTG, agora como estagiário na área de desenvolvimento. Liderei a construção, do zero, de um sistema de rastreamento de assinaturas de documentos em tempo real, integrado à API da Clicksign, com um dashboard que tirou os analistas da tarefa manual de checar status um por um. Também coordenei projetos de automação que atravessavam diferentes áreas do banco, incluindo a migração de sistemas legados para uma stack mais atual, e comecei a acompanhar de perto o trabalho de novos estagiários.</p><p>Em novembro de 2022, fui promovido a Assistente Bancário, cargo que mantive até novembro de 2023. As responsabilidades cresceram: mantive pipelines de automação em Python, JavaScript e AWS, integrei APIs de assinatura digital para automatizar documentos de clientes, e dei suporte técnico direto a um cliente interno em Luxemburgo durante um processo de aquisição bancária. Foi nesse período que aprendi, na prática, que construir um sistema bom é menos sobre o código em si e mais sobre entender o que as pessoas do outro lado da tela realmente precisam.</p>",
      en: "<p>From January 2021 to November 2022, I went back to BTG, now as a development intern. I led the construction, from scratch, of a real-time document-signature tracking system, integrated with the Clicksign API, with a dashboard that took analysts out of the manual task of checking statuses one by one. I also coordinated automation projects that crossed different areas of the bank, including migrating legacy systems to a more current stack, and started closely mentoring new interns.</p><p>In November 2022, I was promoted to Banking Assistant, a role I held until November 2023. The responsibilities grew: I maintained automation pipelines in Python, JavaScript, and AWS, integrated digital-signature APIs to automate client documents, and gave direct technical support to an internal client in Luxembourg during a banking acquisition process. It was during this stretch that I learned, in practice, that building good systems is less about the code itself and more about understanding what the people on the other side of the screen actually need.</p>"
    },
    tags: ["btg", "automacao", "aws", "carreira"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "gatos-do-c2-fundacao-2022",
    type: "chapter",
    date: "2022-07",
    dateLabel: { pt: "2022", en: "2022" },
    title: { pt: "Gatos do C2", en: "Gatos do C2" },
    body: {
      pt: "<p>Em meados de 2022, fui um dos alunos que oficializou o Gatos do C2 como projeto de extensão da USP São Carlos, dedicado ao cuidado e ao controle populacional ético da colônia de gatos comunitários do campus. Ajudei a estruturar as operações logísticas, o rastreamento de dados populacionais e o encaminhamento veterinário para o método CED, em parceria com a ONG Amigos Salvando Amigos e protetores independentes da cidade. Também demos palestras de educação ambiental para crianças, através do Projeto Pequeno Cidadão.</p><p>Não foi um projeto que escolhi por acaso. Vem de longe: da roça dos meus avós, de uma curiosidade por bicho que nunca tinha ido embora. O Gatos do C2 foi onde esse interesse antigo finalmente encontrou um lugar para virar trabalho de verdade.</p>",
      en: "<p>In mid-2022, I was one of the students who formalized Gatos do C2 as a USP São Carlos extension project, dedicated to the welfare and ethical population control of the campus's community cat colony. I helped structure the logistics, population-tracking data, and veterinary referrals for the TNR method, in partnership with the NGO Amigos Salvando Amigos and independent local caregivers. We also gave environmental-education talks to children through Projeto Pequeno Cidadão.</p><p>This wasn't a project I picked at random. It goes back a long way, to my grandparents' land, to a curiosity about animals that had never really left. Gatos do C2 was where that old interest finally found a place to become real work.</p>"
    },
    tags: ["gatos-do-c2", "voluntariado", "animais", "biologia"],
    flags: { timeline: true, blog: false, featured: true, draft: false }
  },
  {
    id: "hvar-2024",
    type: "event",
    date: "2024-01",
    dateLabel: { pt: "2024", en: "2024" },
    title: { pt: "HVAR Consulting", en: "HVAR Consulting" },
    body: {
      pt: "<p>Entre janeiro e junho de 2024, fiz outro estágio, agora na HVAR Consulting, desenvolvendo módulos de backend e modelagem de banco de dados em Python para um produto de inteligência artificial voltado à gestão de call centers.</p>",
      en: "<p>Between January and June 2024, I did another internship, this time at HVAR Consulting, developing backend modules and database models in Python for an AI product used in call center management.</p>"
    },
    tags: ["hvar", "estagio", "ia"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "tcc-escrita-2025-2026",
    type: "chapter",
    date: "2025-06",
    dateLabel: { pt: "2025–2026", en: "2025–2026" },
    title: { pt: "Escrevendo o TCC", en: "Writing the thesis" },
    body: {
      pt: "<p>Na reta final do curso, voltei para o mesmo problema que tinha me acompanhado desde a infância na roça dos meus avós: como cuidar melhor de bichos que ninguém mais está cuidando. Sob orientação do Prof. Matheus Machado dos Santos, projetei um pipeline de visão computacional em 4 fases (ingestão, detecção de fauna, classificação de espécie e reidentificação individual), integrando os modelos MegaDetector, SpeciesNet, MegaDescriptor e PetFace, com mascaramento de pessoas em conformidade com a LGPD.</p><p>Validei a solução em bases de dados públicas e consegui identificar gatos individuais só a partir de fotos, algo que antes só dava pra fazer olhando de perto, um por um. O código está disponível no repositório felinet, com os números completos de acurácia pra quem quiser entrar no detalhe técnico. Foi o trabalho mais difícil que já fiz, e também o único que parecia genuinamente meu.</p>",
      en: "<p>In the final stretch of my degree, I came back to the same problem that had followed me since childhood on my grandparents' land: how to better care for animals nobody else is looking after. Advised by Prof. Matheus Machado dos Santos, I designed a 4-stage computer vision pipeline (ingestion, wildlife detection, species classification, and individual re-identification), integrating the MegaDetector, SpeciesNet, MegaDescriptor, and PetFace models, with person-masking for LGPD compliance.</p><p>I validated the solution on public datasets and managed to identify individual cats from photos alone, something that used to only be possible by looking closely, one by one. The code is available in the felinet repository, with the full accuracy numbers for anyone who wants the technical detail. It was the hardest work I've ever done, and also the only one that felt genuinely mine.</p>"
    },
    tags: ["tcc", "felinet", "visao-computacional", "biologia"],
    flags: { timeline: true, blog: false, featured: false, draft: false }
  },
  {
    id: "formatura-2026",
    type: "chapter",
    date: "2026-07",
    dateLabel: { pt: "2026", en: "2026" },
    title: { pt: "Formatura", en: "Graduation" },
    body: {
      pt: "<p>Me formei em 2026, na mesma semana em que recebi a notícia do falecimento do meu avô. Fui o primeiro da minha família a concluir uma universidade pública.</p><p>Meus avós maternos, Francisco e Maria, viviam na roça; foi com eles, na simplicidade daquela vida, que nasceu o interesse por natureza e por animais que hoje orienta meu trabalho de conclusão de curso. Minha mãe, Francisca, só terminou o ensino médio quando já era adulta, e sempre lutou para que os filhos estudassem. Durante a graduação, a República Saideira foi minha casa em São Carlos.</p><p>Esta formação não é uma conquista individual: é o resultado do trabalho de duas gerações que não tiveram as mesmas oportunidades que eu tive.</p>",
      en: "<p>I graduated in 2026, the same week I learned my grandfather had passed away. I was the first in my family to graduate from a public university.</p><p>My maternal grandparents, Francisco and Maria, lived off the land; it was with them, in that simple rural life, that my interest in nature and animals was born, the same interest that guides my undergraduate thesis today. My mother, Francisca, only finished high school as an adult, and always fought for her children to study. Throughout my degree, República Saideira was my home in São Carlos.</p><p>This degree isn't an individual achievement: it's the result of two generations of work by people who didn't have the same opportunities I did.</p>"
    },
    tags: ["formatura", "familia", "avos"],
    flags: { timeline: true, blog: false, featured: true, draft: false },
    media: [
      { kind: "photo-placeholder", note: { pt: "Uma foto da formatura ainda vai entrar aqui.", en: "A photo from graduation will go here." } }
    ]
  }
];
