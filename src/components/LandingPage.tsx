import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, MessageCircle, X } from "lucide-react";

const WHATSAPP = "https://wa.me/5511959856802?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Form%20e%20quero%20entender%20como%20podemos%20trabalhar%20a%20comunica%C3%A7%C3%A3o%20da%20minha%20empresa.";
const INSTAGRAM = "https://www.instagram.com/formfilmes";

const WHATSAPP_INTENTS = {
  recorrente: "https://wa.me/5511959856802?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Form%20e%20quero%20conversar%20sobre%20conte%C3%BAdo%20recorrente%20para%20a%20minha%20empresa.",
  filme: "https://wa.me/5511959856802?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Form%20e%20quero%20conversar%20sobre%20um%20filme%20institucional%20ou%20de%20marca.",
  projeto: "https://wa.me/5511959856802?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Form%20e%20tenho%20um%20projeto%20audiovisual%20espec%C3%ADfico%20para%20conversarmos."
};

const navItems = [
  ["Filmes", "#filmes"],
  ["Método", "#metodo"],
  ["Soluções", "#solucoes"],
  ["Contato", "#contato"],
] as const;

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Form — início">
        <img src="/assets/form-logo.jpg" alt="Form" />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <Nav />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-layout wrap">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <p className="eyebrow"><span /> Audiovisual estratégico — São Paulo</p>
          <h1>Transformamos excelência em <em>percepção de valor.</em></h1>
          <p className="lead">Sua empresa já entrega excelência da porta para dentro. A Form cria a estratégia, a narrativa e os filmes para que ela também seja percebida da porta para fora.</p>
          <div className="hero-actions">
            <a className="btn btn--light" href="#filmes">Conheça nossos filmes <ArrowDown size={15}/></a>
            <a className="btn btn--text" href={WHATSAPP} target="_blank" rel="noreferrer">Fale com a Form <ArrowUpRight size={16}/></a>
          </div>
        </motion.div>

        <motion.div className="hero-film" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.25, delay: .12, ease: [0.16, 1, 0.3, 1] }}>
          <video autoPlay muted loop playsInline preload="metadata" poster="/assets/form-hero-poster.jpg" aria-label="Filme de apresentação da Form">
            <source src="/assets/form-hero.mp4" type="video/mp4" />
          </video>
          <div className="film-overlay" />
          <div className="film-caption"><span>FORM / 001</span><span>BEAUTY FILM</span></div>
        </motion.div>
      </div>
      <div className="hero-index"><span>Estratégia</span><span>Narrativa</span><span>Direção</span><span>Cinema</span></div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="manifesto wrap section-space">
      <div className="section-number">01 / PERCEPÇÃO</div>
      <motion.h2 initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .85 }}>
        O mercado vê sua empresa <span>antes de conhecer sua empresa.</span>
      </motion.h2>
      <div className="manifesto-grid">
        <p className="manifesto-intro">Em poucos segundos, a comunicação da sua marca já está dizendo quanto ela vale.</p>
        <div className="manifesto-body">
          <p>Quando a imagem não acompanha a qualidade da entrega, o mercado enxerga menos valor do que realmente existe.</p>
          <p>É nessa distância que a Form atua: estratégia primeiro, narrativa depois e estética para tornar a mensagem impossível de ignorar.</p>
        </div>
      </div>
    </section>
  );
}

const FILMS = [
  { id: "1210279701", title: "O Padrão Form", type: "Bastidores & Captação", index: "01", lens: "Processo / Direção / Padrão" },
  { id: "1210279702", title: "L'AKURA Beauty", type: "Beleza & Experiência", index: "02", lens: "Cuidado / Autoestima / Experiência" },
  { id: "1210290417", title: "A Essência da Marca", type: "Narrativa de Marca", index: "03", lens: "Identidade / História / Posicionamento" },
  { id: "1210292858", title: "Além do Produto", type: "Produto & Percepção", index: "04", lens: "Desejo / Valor / Detalhe" },
];

function Films() {
  return (
    <section id="filmes" className="films section-space">
      <div className="wrap">
        <div className="section-intro">
          <div className="section-number">02 / FILMES</div>
          <h2>Não criamos volume.<br/><span>Criamos percepção.</span></h2>
          <p>Cada filme parte de uma intenção clara: comunicar valor, gerar confiança e aproximar a marca das pessoas certas.</p>
        </div>
        <div className="film-grid">
          {FILMS.map((film, i) => (
            <motion.article className="work-card" key={film.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay: i % 2 * .08 }}>
              <div className="video-frame">
                <iframe loading="lazy" src={`https://player.vimeo.com/video/${film.id}?title=0&byline=0&portrait=0&dnt=1`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={film.title}/>
              </div>
              <div className="work-meta">
                <span className="work-index">{film.index}</span>
                <div><p>{film.type}</p><h3>{film.title}</h3><span className="work-lens">{film.lens}</span></div>
                <ArrowUpRight size={20}/>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCase() {
  return (
    <section className="featured-case section-space">
      <div className="wrap featured-case-grid">
        <div className="featured-case-film">
          <iframe loading="lazy" src="https://player.vimeo.com/video/1210279702?title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="L'AKURA Beauty — case Form"/>
          <div className="featured-case-label"><span>CASE / 01</span><span>L'AKURA BEAUTY</span></div>
        </div>
        <div className="featured-case-copy">
          <div className="section-number">03 / CASE</div>
          <p className="case-kicker">BELEZA & EXPERIÊNCIA</p>
          <h2>Não bastava mostrar cabelo.<br/><span>Era preciso comunicar como a cliente se sente.</span></h2>
          <p className="case-lead">A narrativa parte de uma ideia simples: beleza vai além do procedimento. Ela toca autoestima, bem-estar, autocuidado e renovação de confiança.</p>
          <div className="case-breakdown">
            <div><span>01</span><div><strong>Contexto</strong><p>Um salão não vende apenas um resultado visual. Ele entrega experiência, cuidado e a sensação que acompanha a cliente depois da visita.</p></div></div>
            <div><span>02</span><div><strong>Direção</strong><p>Transformar essa experiência em uma mensagem clara, humana e sofisticada, sem cair em uma comunicação genérica de beleza.</p></div></div>
            <div><span>03</span><div><strong>Percepção buscada</strong><p>Uma marca que cuida de pessoas — e cuja comunicação transmite a mesma atenção aos detalhes que existe dentro do salão.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ["01", "Entender", "Negócio, público, momento e objetivo antes de qualquer ideia criativa."],
  ["02", "Direcionar", "Definimos mensagem, intenção, formato e o papel que cada conteúdo precisa cumprir."],
  ["03", "Construir", "Roteiro, storytelling e linguagem visual transformam estratégia em narrativa."],
  ["04", "Produzir", "Direção, fotografia, captação e pós-produção com acabamento cinematográfico."],
];

function Method() {
  return (
    <section id="metodo" className="method section-space">
      <div className="wrap method-grid">
        <div className="method-copy">
          <div className="section-number">04 / MÉTODO FORM</div>
          <h2>A câmera é consequência.<br/><span>A estratégia vem antes.</span></h2>
          <p>Um filme bonito chama atenção. Um filme pensado para o negócio constrói percepção.</p>
        </div>
        <div className="steps">
          {STEPS.map(([n, title, text]) => (
            <div className="step" key={n}>
              <span>{n}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ["01", "Filmes de marca", "Posicionamento, campanhas, institucionais e histórias que traduzem a essência do negócio."],
  ["02", "Conteúdo recorrente", "Conteúdo estratégico para redes sociais com consistência, direção e linguagem de marca."],
  ["03", "Fotografia", "Imagem profissional de produtos, espaços, pessoas e experiências."],
  ["04", "Conteúdo mobile", "Agilidade e linguagem nativa para uma presença digital mais próxima e frequente."],
  ["05", "Storymaker", "Cobertura em tempo real para transformar acontecimentos em narrativa enquanto eles acontecem."],
];

function Services() {
  return (
    <section id="solucoes" className="services section-space">
      <div className="wrap">
        <div className="services-heading">
          <div className="section-number">05 / SOLUÇÕES</div>
          <h2>O formato muda.<br/><span>A intenção permanece.</span></h2>
          <p>Sem pacotes engessados. A solução nasce do que o seu negócio precisa comunicar agora.</p>
        </div>
        <div className="service-list">
          {SERVICES.map(([n, title, text]) => (
            <div className="service" key={n}>
              <span className="service-num">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight size={22}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const proofItems = [
    ["01", "Estratégia antes da câmera", "A conversa começa pelo negócio, pelo público e pela percepção que precisa ser construída."],
    ["02", "Narrativa com intenção", "Cada roteiro, enquadramento e escolha estética precisa cumprir um papel — não apenas preencher o feed."],
    ["03", "Produção sob medida", "O escopo é desenhado para o projeto. Sem empurrar formatos que não fazem sentido para o objetivo."],
    ["04", "Parceria de longo prazo", "Para projetos recorrentes, buscamos consistência de linguagem, entendimento do negócio e evolução contínua da comunicação."]
  ];

  return (
    <section className="proof section-space">
      <div className="wrap">
        <div className="proof-heading">
          <div className="section-number">06 / POR QUE FORM</div>
          <h2>Mais do que produzir.<br/><span>Pensar junto.</span></h2>
          <p>Uma boa produtora entrega material. Uma parceira entende o que esse material precisa provocar no mercado.</p>
        </div>
        <div className="proof-grid">
          {proofItems.map(([n,title,text]) => (
            <article className="proof-card" key={n}>
              <span>{n}</span>
              <Check size={18}/>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartHere() {
  const options = [
    ["Conteúdo recorrente", "Para marcas que precisam de consistência, direção e produção contínua para redes sociais.", WHATSAPP_INTENTS.recorrente],
    ["Filme de marca", "Para institucionais, campanhas e projetos em que uma narrativa maior precisa ser construída.", WHATSAPP_INTENTS.filme],
    ["Projeto específico", "Para uma necessidade pontual de vídeo, fotografia, cobertura ou uma ideia que ainda precisa ganhar forma.", WHATSAPP_INTENTS.projeto],
  ];

  return (
    <section className="start-here section-space">
      <div className="wrap">
        <div className="section-number">07 / COMO COMEÇAR</div>
        <div className="start-heading">
          <h2>Escolha o ponto de partida.<br/><span>O resto, construímos juntos.</span></h2>
          <p>Você não precisa chegar com briefing pronto. A primeira conversa serve para entender o cenário, o objetivo e a melhor forma de transformar isso em comunicação.</p>
        </div>
        <div className="start-grid">
          {options.map(([title,text,href],i) => (
            <a className="start-card" href={href} target="_blank" rel="noreferrer" key={title}>
              <span className="start-num">0{i+1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <ArrowUpRight size={22}/>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["A Form atende apenas empresas de beleza e estética?", "Não. Beleza e estética são um foco importante da Form, mas também desenvolvemos projetos para empresas de outros segmentos quando existe aderência entre objetivo, narrativa e linguagem."],
  ["Como funciona o orçamento?", "Cada projeto recebe um escopo próprio. Primeiro entendemos objetivo, volume, formato, complexidade e frequência; depois estruturamos a proposta adequada ao momento da empresa."],
  ["Vocês também cuidam da estratégia e do roteiro?", "Sim. A estratégia vem antes da produção. A Form participa da definição da mensagem, estrutura de roteiro, narrativa e direção visual antes da captação."],
  ["É possível contratar produção recorrente?", "Sim. Projetos recorrentes são indicados para empresas que precisam construir consistência de comunicação ao longo do tempo, com planejamento, captação e entregas frequentes."],
  ["Onde a Form atende?", "Atendemos Embu das Artes, Itapecerica da Serra, São Paulo e outras regiões da Grande São Paulo, além de avaliar projetos em outras localidades conforme a produção."],
];

function FAQ() {
  return (
    <section className="faq section-space">
      <div className="wrap faq-layout">
        <div className="faq-copy">
          <div className="section-number">08 / PERGUNTAS FREQUENTES</div>
          <h2>Antes do primeiro<br/><span>“ação”.</span></h2>
          <p>Algumas respostas para tornar a primeira conversa mais simples.</p>
        </div>
        <div className="faq-list">
          {FAQS.map(([q,a],i) => (
            <details className="faq-item" key={q}>
              <summary><span>0{i+1}</span><strong>{q}</strong><span className="faq-plus">+</span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Conversar com a Form no WhatsApp"><MessageCircle size={20}/><span>Fale com a Form</span></a>;
}

function PointOfView() {
  return (
    <section className="pov">
      <div className="pov-film">
        <video autoPlay muted loop playsInline preload="metadata" poster="/assets/form-hero-poster.jpg">
          <source src="/assets/form-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="pov-copy">
        <div className="section-number">09 / NOSSO PONTO DE VISTA</div>
        <h2>Vídeo bonito é o começo.<br/><span>Não o objetivo.</span></h2>
        <p>A estética precisa servir à mensagem. A mensagem precisa servir ao negócio. É assim que conteúdo deixa de ser apenas presença e passa a construir valor.</p>
        <blockquote>“O filme é a entrega.<br/>A percepção é o resultado.”</blockquote>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="cta section-space">
      <div className="wrap">
        <div className="section-number">10 / PRÓXIMO PASSO</div>
        <h2>Sua empresa já tem valor.<br/><span>Vamos fazer o mercado perceber.</span></h2>
        <a className="cta-link" href={WHATSAPP} target="_blank" rel="noreferrer">
          <span>Conte para nós o que você quer construir</span><span className="cta-arrow"><ArrowRight size={28}/></span>
        </a>
        <p className="cta-note">Uma conversa para entender seu momento, seu objetivo e qual produção realmente faz sentido.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand"><img src="/assets/form-logo.jpg" alt="Form"/><p>Audiovisual estratégico.<br/>São Paulo — Brasil.</p></div>
        <div className="footer-links"><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14}/></a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href="mailto:contato@formfilmes.com.br">E-mail <ArrowUpRight size={14}/></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Form Filmes</span><a href="#top">Voltar ao topo ↑</a></div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return <main><Hero/><Manifesto/><Films/><FeaturedCase/><Method/><Services/><Proof/><StartHere/><FAQ/><PointOfView/><CTA/><Footer/><FloatingWhatsApp/></main>;
}
