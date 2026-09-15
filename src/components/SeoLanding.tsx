import { useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const SITE = "https://formfilmes.com.br";
const INSTAGRAM = "https://www.instagram.com/formfilmes";

export type SeoPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  intro: string;
  pains: string[];
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
  serviceName: string;
  whatsappText: string;
};

const RELATED = [
  ["Produtora audiovisual em São Paulo", "/produtora-audiovisual-sao-paulo"],
  ["Clínicas de estética", "/clinicas-de-estetica"],
  ["Salões de beleza", "/saloes-de-beleza"],
  ["Conteúdo para redes sociais", "/conteudo-para-redes-sociais"],
  ["Vídeo institucional", "/video-institucional"],
  ["Embu das Artes", "/produtora-audiovisual-embu-das-artes"],
  ["Itapecerica da Serra", "/produtora-audiovisual-itapecerica-da-serra"],
] as const;

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

function setJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

export function SeoLanding({ data }: { data: SeoPageData }) {
  const whatsapp = `https://wa.me/5511959856802?text=${encodeURIComponent(data.whatsappText)}`;
  const canonical = `${SITE}${data.slug}`;

  useEffect(() => {
    document.title = data.seoTitle;
    setMeta("description", "name", "description", data.seoDescription);
    setMeta("robots", "name", "robots", "index, follow, max-image-preview:large");
    setMeta("og:title", "property", "og:title", data.seoTitle);
    setMeta("og:description", "property", "og:description", data.seoDescription);
    setMeta("og:url", "property", "og:url", canonical);
    setMeta("og:type", "property", "og:type", "website");
    setMeta("og:image", "property", "og:image", `${SITE}/assets/form-hero-poster.jpg`);
    setMeta("twitter:title", "name", "twitter:title", data.seoTitle);
    setMeta("twitter:description", "name", "twitter:description", data.seoDescription);
    setCanonical(canonical);

    setJsonLd("seo-service-schema", {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.serviceName,
      description: data.seoDescription,
      url: canonical,
      areaServed: ["São Paulo", "Grande São Paulo", "Embu das Artes", "Itapecerica da Serra"],
      provider: {
        "@type": "ProfessionalService",
        name: "Form Filmes",
        url: SITE,
        sameAs: [INSTAGRAM]
      }
    });

    window.scrollTo(0, 0);
  }, [canonical, data]);

  const related = RELATED.filter(([, href]) => href !== data.slug).slice(0, 4);

  return (
    <main className="seo-page">
      <header className="seo-nav">
        <a href="/" className="brand" aria-label="Form — início"><img src="/assets/form-logo.jpg" alt="Form" /></a>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="seo-nav-cta">Fale com a Form <ArrowUpRight size={14}/></a>
      </header>

      <section className="seo-hero wrap">
        <div>
          <nav className="breadcrumbs" aria-label="Navegação estrutural"><a href="/">Form</a><span>/</span><span>{data.eyebrow.split("—")[0].trim()}</span></nav>
          <p className="eyebrow"><span />{data.eyebrow}</p>
          <h1>{data.title} <em>{data.accent}</em></h1>
          <p className="lead">{data.description}</p>
          <a className="btn btn--light" href={whatsapp} target="_blank" rel="noreferrer">Quero conversar <ArrowUpRight size={15}/></a>
        </div>
        <div className="seo-hero-film">
          <video autoPlay muted loop playsInline preload="metadata" poster="/assets/form-hero-poster.jpg" aria-label="Produção audiovisual da Form">
            <source src="/assets/form-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="seo-statement wrap section-space">
        <div className="section-number">01 / O PONTO</div>
        <h2>{data.intro}</h2>
      </section>

      <section className="seo-two-col wrap section-space seo-rule">
        <div>
          <div className="section-number">02 / O QUE COSTUMA ACONTECER</div>
          <h2>Quando a entrega é melhor do que <span>a comunicação.</span></h2>
        </div>
        <div className="seo-list">
          {data.pains.map((item, i) => <div className="seo-list-item" key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="seo-two-col wrap section-space seo-rule">
        <div>
          <div className="section-number">03 / O QUE CONSTRUÍMOS</div>
          <h2>Conteúdo com direção, intenção <span>e percepção.</span></h2>
        </div>
        <div className="seo-list">
          {data.outcomes.map((item, i) => <div className="seo-list-item" key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="seo-method section-space">
        <div className="wrap">
          <div className="section-number">04 / MÉTODO FORM</div>
          <div className="seo-method-grid">
            <h2>Estratégia primeiro.<br/><span>Câmera depois.</span></h2>
            <p>Entendemos o negócio, definimos a intenção, construímos a narrativa e só então produzimos. A estética existe para servir à mensagem — e a mensagem precisa servir ao objetivo da empresa.</p>
          </div>
        </div>
      </section>

      <section className="related-links section-space">
        <div className="wrap">
          <div className="section-number">05 / EXPLORE</div>
          <div className="related-heading"><h2>Outras formas de construir <span>percepção.</span></h2><p>Conheça soluções e páginas específicas da Form.</p></div>
          <div className="related-grid">
            {related.map(([label, href], i) => <a href={href} key={href}><span>0{i + 1}</span><strong>{label}</strong><ArrowUpRight size={18}/></a>)}
          </div>
        </div>
      </section>

      <section className="cta section-space">
        <div className="wrap">
          <div className="section-number">06 / PRÓXIMO PASSO</div>
          <h2>Existe excelência da porta para dentro.<br/><span>Vamos mostrar isso da porta para fora.</span></h2>
          <a className="cta-link" href={whatsapp} target="_blank" rel="noreferrer"><span>Conte para nós o momento da sua empresa</span><span className="cta-arrow"><ArrowRight size={28}/></span></a>
          <p className="cta-note">Sem orçamento genérico: primeiro entendemos o que precisa ser comunicado e qual formato faz sentido.</p>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div className="footer-brand"><img src="/assets/form-logo.jpg" alt="Form"/><p>Audiovisual estratégico.<br/>São Paulo — Brasil.</p></div>
          <div className="footer-links"><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14}/></a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Form Filmes</span><a href="/">Página inicial ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
