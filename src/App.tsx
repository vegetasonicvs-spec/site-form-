import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { SeoLanding, SeoPageData } from './components/SeoLanding';

const pages: Record<string, SeoPageData> = {
  "/clinicas-de-estetica": {
    slug: "/clinicas-de-estetica",
    eyebrow: "Audiovisual para clínicas de estética — São Paulo",
    title: "Sua clínica entrega transformação.",
    accent: "A comunicação precisa transmitir isso.",
    description: "A Form cria estratégia, narrativa, vídeos e imagens para clínicas que querem elevar percepção de valor, confiança e presença digital.",
    intro: "Antes de escolher um procedimento, o paciente escolhe em quem confiar. E essa decisão começa muito antes da consulta.",
    pains: ["Conteúdo frequente, mas com aparência amadora ou sem direção.", "Procedimentos de alto valor comunicados como se fossem comuns.", "Perfil ativo, porém sem uma narrativa que construa confiança.", "A qualidade da clínica não é percebida na mesma intensidade no digital."],
    outcomes: ["Conteúdo pensado a partir do objetivo comercial e da percepção desejada.", "Vídeos com linguagem premium, humana e cinematográfica.", "Narrativas que tornam procedimentos mais claros e desejáveis.", "Consistência visual para fortalecer autoridade e posicionamento."],
    seoTitle: "Produtora de Vídeo para Clínicas de Estética em São Paulo | Form",
    seoDescription: "Produção audiovisual estratégica para clínicas de estética em São Paulo. Vídeos, reels, fotografia e narrativa para elevar percepção de valor e confiança.",
    serviceName: "Produção audiovisual para clínicas de estética",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre produção de conteúdo para uma clínica de estética."
  },
  "/saloes-de-beleza": {
    slug: "/saloes-de-beleza",
    eyebrow: "Conteúdo para salões de beleza — São Paulo",
    title: "Seu trabalho já transforma a imagem das pessoas.",
    accent: "Seu conteúdo deve fazer o mesmo com a marca.",
    description: "Conteúdo estratégico, fotografia e filmes para salões que querem comunicar melhor sua experiência, qualidade e posicionamento.",
    intro: "Um bom salão não vende apenas cabelo. Vende experiência, cuidado, confiança e a forma como a cliente se sente ao sair dali.",
    pains: ["Resultados bonitos registrados de forma inconsistente.", "Feed que mostra serviço, mas não comunica experiência ou valor.", "Conteúdo sem unidade visual ou objetivo claro.", "Dependência de promoções para gerar atenção."],
    outcomes: ["Conteúdo recorrente com direção e identidade.", "Filmes que mostram resultado, ambiente e experiência.", "Fotografia que valoriza trabalho, equipe e espaço.", "Uma presença digital coerente com o preço e a qualidade da entrega."],
    seoTitle: "Produção de Conteúdo para Salões de Beleza em São Paulo | Form",
    seoDescription: "Vídeos, reels e fotografia profissional para salões de beleza em São Paulo. Conteúdo estratégico para fortalecer marca, desejo e percepção de valor.",
    serviceName: "Produção de conteúdo para salões de beleza",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre produção de conteúdo para um salão de beleza."
  },
  "/conteudo-para-redes-sociais": {
    slug: "/conteudo-para-redes-sociais",
    eyebrow: "Conteúdo estratégico para empresas — São Paulo",
    title: "Postar mais não resolve.",
    accent: "Comunicar melhor resolve.",
    description: "Produção recorrente de vídeos e fotos com estratégia, narrativa e consistência para empresas que querem transformar presença digital em percepção de valor.",
    intro: "Conteúdo não deve existir para preencher calendário. Cada peça precisa cumprir um papel na construção da marca e na decisão do cliente.",
    pains: ["Muito conteúdo e pouca diferenciação.", "Publicações sem conexão entre si ou com o posicionamento.", "Produção interna limitada pela rotina da equipe.", "Imagem digital abaixo do nível real da empresa."],
    outcomes: ["Planejamento com intenção antes da captação.", "Banco recorrente de vídeos e fotografias profissionais.", "Narrativa consistente ao longo do mês.", "Uma comunicação que gera mais clareza, confiança e valor percebido."],
    seoTitle: "Produção de Reels e Conteúdo para Empresas em São Paulo | Form",
    seoDescription: "Produção recorrente de reels, vídeos e fotos para empresas em São Paulo. Estratégia audiovisual para construir autoridade, confiança e percepção de valor.",
    serviceName: "Produção de conteúdo para redes sociais",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre conteúdo recorrente para redes sociais."
  },
  "/video-institucional": {
    slug: "/video-institucional",
    eyebrow: "Vídeo institucional — São Paulo",
    title: "Sua empresa é maior do que uma lista de serviços.",
    accent: "Conte a história certa.",
    description: "Filmes institucionais com estratégia, roteiro, direção e estética cinematográfica para traduzir essência, cultura e valor de marca.",
    intro: "Um institucional forte não explica apenas o que a empresa faz. Ele deixa claro por que ela existe, como pensa e por que merece ser escolhida.",
    pains: ["Vídeos genéricos que poderiam pertencer a qualquer empresa.", "Excesso de informação e pouca narrativa.", "Imagem que não acompanha o posicionamento da marca.", "Produções bonitas, mas sem uma mensagem memorável."],
    outcomes: ["Roteiro construído a partir do posicionamento e objetivo.", "Direção visual coerente com a personalidade da marca.", "Narrativa capaz de conectar negócio, pessoas e propósito.", "Um filme útil em vendas, apresentação, site e campanhas."],
    seoTitle: "Vídeo Institucional para Empresas em São Paulo | Form",
    seoDescription: "Produção de vídeo institucional em São Paulo com estratégia, roteiro, storytelling e estética cinematográfica. Conheça o método da Form.",
    serviceName: "Produção de vídeo institucional",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre um vídeo institucional ou filme de marca."
  },
  "/produtora-audiovisual-sao-paulo": {
    slug: "/produtora-audiovisual-sao-paulo",
    eyebrow: "Produtora audiovisual — São Paulo",
    title: "Audiovisual que começa no negócio.",
    accent: "E termina em percepção.",
    description: "A Form une estratégia, storytelling, direção e estética cinematográfica para empresas que querem comunicar melhor o valor que já entregam.",
    intro: "A câmera registra. A estratégia decide o que precisa ser percebido antes mesmo de a produção começar.",
    pains: ["Vídeos bonitos que não deixam clara a proposta de valor.", "Conteúdo desconectado do posicionamento da empresa.", "Produções pontuais sem consistência de linguagem.", "Uma presença digital que não representa o nível real do negócio."],
    outcomes: ["Direção estratégica antes da criação.", "Roteiros e narrativas alinhados à marca e ao objetivo.", "Produção audiovisual com acabamento premium e cinematográfico.", "Conteúdo pensado para site, redes sociais, campanhas e vendas."],
    seoTitle: "Produtora Audiovisual em São Paulo | Estratégia e Cinema | Form",
    seoDescription: "Produtora audiovisual em São Paulo para empresas. Filmes de marca, vídeo institucional, reels, fotografia e conteúdo com estratégia e estética cinematográfica.",
    serviceName: "Produção audiovisual em São Paulo",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre um projeto audiovisual em São Paulo."
  },
  "/produtora-audiovisual-embu-das-artes": {
    slug: "/produtora-audiovisual-embu-das-artes",
    eyebrow: "Produtora audiovisual em Embu das Artes e Grande São Paulo",
    title: "Produção próxima.",
    accent: "Comunicação em outro nível.",
    description: "A Form atende empresas de Embu das Artes, Itapecerica da Serra e Grande São Paulo com estratégia audiovisual, vídeos, fotografia e conteúdo recorrente.",
    intro: "Estar perto facilita a produção. Pensar estrategicamente é o que faz essa produção realmente representar o valor do negócio.",
    pains: ["Dificuldade de encontrar produção profissional próxima e recorrente.", "Conteúdo feito internamente sem padrão visual consistente.", "Empresas fortes regionalmente com presença digital abaixo da entrega.", "Ações isoladas sem continuidade de comunicação."],
    outcomes: ["Atendimento próximo e produção planejada.", "Vídeos e fotografias com acabamento profissional.", "Conteúdo recorrente alinhado ao posicionamento.", "Estratégia para transformar qualidade real em percepção digital."],
    seoTitle: "Produtora Audiovisual em Embu das Artes | Form",
    seoDescription: "Produtora audiovisual em Embu das Artes e Grande São Paulo. Vídeos, fotografia, reels e estratégia de conteúdo para empresas.",
    serviceName: "Produção audiovisual em Embu das Artes",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre produção audiovisual em Embu das Artes."
  },
  "/produtora-audiovisual-itapecerica-da-serra": {
    slug: "/produtora-audiovisual-itapecerica-da-serra",
    eyebrow: "Produtora audiovisual em Itapecerica da Serra",
    title: "Sua empresa pode estar perto.",
    accent: "Sua comunicação não precisa parecer pequena.",
    description: "Produção audiovisual estratégica para empresas de Itapecerica da Serra que querem elevar imagem, autoridade e percepção de valor.",
    intro: "Negócios regionais podem ter padrão de comunicação nacional. O ponto de partida é entender o que a marca precisa fazer o mercado perceber.",
    pains: ["Boa operação com comunicação visual abaixo do nível da entrega.", "Conteúdo produzido sem estratégia ou consistência.", "Dificuldade de manter uma rotina profissional de vídeo e fotografia.", "Marca conhecida localmente, mas pouco valorizada no digital."],
    outcomes: ["Produção próxima e planejada para a rotina da empresa.", "Conteúdo profissional com narrativa e direção de marca.", "Vídeos e fotos que reforçam autoridade e confiança.", "Comunicação compatível com o posicionamento que a empresa quer ocupar."],
    seoTitle: "Produtora Audiovisual em Itapecerica da Serra | Form",
    seoDescription: "Produtora audiovisual em Itapecerica da Serra. Vídeos, fotografia, reels e estratégia de conteúdo para empresas da região e Grande São Paulo.",
    serviceName: "Produção audiovisual em Itapecerica da Serra",
    whatsappText: "Olá, vim pelo site da Form e quero conversar sobre produção audiovisual em Itapecerica da Serra."
  }
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {Object.entries(pages).map(([path, data]) => <Route key={path} path={path} element={<SeoLanding data={data} />} />)}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
