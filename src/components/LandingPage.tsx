import { motion, animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Cinematic sequence timing
    const timer1 = setTimeout(() => setStep(1), 4000);
    const timer2 = setTimeout(() => setStep(2), 8000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop" 
          alt="Cinematic background" 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[50vh]">
        
        {/* Sequence 1 */}
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ 
            opacity: step === 0 ? 1 : 0, 
            filter: step === 0 ? "blur(0px)" : "blur(10px)",
            y: step === 0 ? 0 : -20 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`absolute text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] max-w-4xl mx-auto ${step > 0 ? 'pointer-events-none' : ''}`}
        >
          Sua empresa pode ser excelente.<br className="hidden md:block"/> Mas, se ela não transmite isso, o mercado nunca vai perceber.
        </motion.h1>

        {/* Sequence 2 */}
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ 
            opacity: step === 1 ? 1 : 0, 
            filter: step === 1 ? "blur(0px)" : "blur(10px)",
            y: step === 1 ? 0 : (step > 1 ? -20 : 20) 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`absolute text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] max-w-4xl mx-auto ${step !== 1 ? 'pointer-events-none' : ''}`}
        >
          A percepção da sua marca começa muito antes da primeira conversa.
        </motion.h2>

        {/* Sequence 3 */}
        <motion.div 
           initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
           animate={{ 
             opacity: step >= 2 ? 1 : 0, 
             filter: step >= 2 ? "blur(0px)" : "blur(10px)",
             y: step >= 2 ? 0 : 20 
           }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className={`absolute flex flex-col items-center gap-16 w-full px-6 ${step < 2 ? 'pointer-events-none' : ''}`}
        >
           <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] max-w-4xl mx-auto">
             A Formfilmes cria filmes que fazem empresas parecerem tão grandes quanto realmente são.
           </h3>
           
           <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => {
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-white text-black text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors duration-500"
              >
                Conheça nossos filmes
              </button>
              <button 
                onClick={() => window.open("https://wa.me/5511959856802", "_blank")}
                className="px-10 py-5 bg-transparent border border-white/30 text-white text-sm uppercase tracking-[0.2em] hover:border-white transition-colors duration-500"
              >
                Solicitar orçamento
              </button>
           </div>
        </motion.div>

      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-32 md:py-48 px-6 bg-black text-center relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-16"
        >
          As pessoas compram aquilo em que confiam.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto space-y-8"
        >
          <p>Em poucos segundos, um cliente decide se sua empresa parece profissional.</p>
          <p>Se transmite confiança.</p>
          <p>Se vale o investimento.</p>
          <p>Esse julgamento acontece antes mesmo de qualquer reunião.</p>
          <p className="text-white text-2xl md:text-3xl pt-8">Por isso o audiovisual não é apenas marketing.<br/>Ele constrói percepção.</p>
        </motion.div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: "1210279701",
    name: "O Padrão Formfilmes",
    category: "Bastidores & Captação",
    description: "Nossa paixão por cinema aplicada ao universo corporativo. Um olhar imersivo sobre o planejamento, os equipamentos e a direção.",
    fallbackImage: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop"
  },
  {
    id: "1210279702",
    name: "L'AKURA Beauty",
    category: "Institucional Premium",
    description: "Uma experiência visual que transmite o cuidado, a sofisticação e a transformação em cada detalhe dos bastidores de um salão de alto padrão.",
    fallbackImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
  }
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(project.fallbackImage);

  useEffect(() => {
    fetch(`https://vimeo.com/api/v2/video/${project.id}.json`)
      .then(res => res.json())
      .then(data => {
        if (data && data[0] && data[0].thumbnail_large) {
          // Replace to get a higher resolution thumbnail if possible
          setThumbnail(data[0].thumbnail_large.replace('d_640', 'd_1280'));
        }
      })
      .catch(console.error);
  }, [project.id]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-6"
    >
      <div 
        className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl shadow-black/50 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:scale-[1.02] cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img 
              src={thumbnail} 
              alt={project.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />
            {/* 20% dark overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <Play fill="white" className="w-8 h-8 text-white ml-2 opacity-90" />
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${project.id}?autoplay=1&title=0&byline=0&portrait=0`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="flex flex-col gap-2 px-2">
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500">{project.category}</p>
        <h3 className="text-2xl md:text-3xl font-light text-white">{project.name}</h3>
        <p className="text-gray-400 font-light text-sm md:text-base line-clamp-2 mt-1">{project.description}</p>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-32 md:py-48 px-6 bg-[#030303] relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-20 md:mb-32 text-center md:text-left max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            Conheça os nossos filmes
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Cada filme produzido pela Formfilmes nasce com um propósito: contar histórias, fortalecer marcas e criar conexões que geram resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-24">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-32 md:py-48 px-6 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-16"
        >
          Não acreditamos em vídeos bonitos.<br />
          Acreditamos em marcas memoráveis.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto space-y-8"
        >
          <p>Cada projeto começa muito antes da câmera ligar.</p>
          <p>Estudamos sua empresa.<br/>Seu mercado.<br/>Seu público.<br/>Sua identidade.</p>
          <p>Só então começamos a produzir.</p>
          <p className="text-white text-2xl md:text-3xl pt-8">Porque um vídeo precisa representar aquilo que sua empresa realmente vale.</p>
        </motion.div>
      </div>
    </section>
  );
}

const PHILOSOPHY_ITEMS = [
  { title: "Estratégia", desc: "Toda produção começa com planejamento impecável." },
  { title: "Cinema", desc: "Aplicamos linguagem cinematográfica ao universo empresarial." },
  { title: "Detalhes", desc: "Pequenos detalhes criam as maiores percepções." },
  { title: "Resultado", desc: "Nosso objetivo não termina quando o vídeo fica bonito. Ele termina quando sua marca é lembrada." }
];

function Philosophy() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {PHILOSOPHY_ITEMS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
              className="border-t border-white/10 pt-12"
            >
              <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">{item.title}.</h3>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differential() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop" 
            alt="Bastidores Formfilmes" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        <div className="flex items-center p-12 md:p-24 lg:p-32">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-12">
              O mercado vê sua empresa antes de conhecer sua empresa.
            </h2>
            <div className="text-lg md:text-xl text-gray-400 font-light leading-relaxed space-y-8">
              <p>Iluminação, direção, fotografia, roteiro, áudio e edição não são apenas questões técnicas.</p>
              <p className="text-white text-2xl">São ferramentas fundamentais para transmitir confiança, autoridade e posicionamento.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PROCESS_STEPS = [
  { num: "01", title: "Descoberta", desc: "Conhecemos profundamente sua empresa e seus objetivos." },
  { num: "02", title: "Estratégia", desc: "Planejamos a comunicação e a narrativa visual." },
  { num: "03", title: "Produção", desc: "Captação cinematográfica com equipamentos de ponta." },
  { num: "04", title: "Pós-produção", desc: "Transformamos imagens soltas em uma narrativa poderosa." },
  { num: "05", title: "Resultado", desc: "Sua empresa passa a transmitir o valor que realmente possui." },
];

function Process() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#020202]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          className="space-y-24 md:space-y-32 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Subtle vertical line for desktop */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-8 md:gap-24 relative z-10"
            >
              <div className="text-sm font-light text-gray-500 tracking-[0.3em] w-20 pt-2 bg-[#020202]">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-6">{step.title}</h3>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ from, to, duration = 2.5 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // very smooth custom ease
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

function Stats() {
  return (
    <section className="py-32 md:py-48 px-6 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 text-center">
        {[
          { label: "Projetos Realizados", val: 124 },
          { label: "Clientes Atendidos", val: 86 },
          { label: "Horas de Produção", val: 4500 },
          { label: "Anos de Experiência", val: 8 }
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="text-6xl md:text-8xl font-light mb-6 text-white tracking-tighter">
              <Counter from={0} to={stat.val} />
              <span className="text-4xl md:text-6xl text-gray-500 font-extralight ml-1">
                {stat.label.includes("Horas") && "+"}
              </span>
            </div>
            <div className="text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Roberto Silva", company: "TechCorp", text: "Eles não entregaram apenas um vídeo, entregaram o posicionamento premium que buscávamos há anos." },
  { name: "Ana Beatriz", company: "Studio Arquitetura", text: "A sensibilidade estética e o profissionalismo absurdo mudaram a forma como o mercado nos vê." },
  { name: "Carlos Eduardo", company: "Vanguard Invest", text: "O impacto nas nossas conversões foi imediato. A autoridade que o material transmite é indescritível." }
];

function Testimonials() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[#030303] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex gap-8 md:gap-12 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
        >
          {TESTIMONIALS.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
              className="min-w-[85vw] md:min-w-[50vw] lg:min-w-[40vw] flex-shrink-0 snap-center bg-white/[0.02] p-12 md:p-20 border border-white/5"
            >
              <p className="text-2xl md:text-4xl font-light leading-[1.4] mb-16 text-gray-200">"{test.text}"</p>
              <div>
                <p className="text-xl font-medium tracking-wide mb-2">{test.name}</p>
                <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">{test.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6 py-32 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-12"
        >
          Se a sua marca merece ser lembrada, ela merece ser vista da maneira certa.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-gray-400 font-light mb-20 leading-relaxed"
        >
          Vamos criar um projeto que represente o<br className="hidden md:block"/> verdadeiro valor da sua empresa.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => window.open("https://wa.me/5511959856802", "_blank")}
            className="w-full sm:w-auto px-12 py-6 bg-white text-black text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors duration-500"
          >
            Quero transformar minha marca
          </button>
          <button 
            onClick={() => window.open("https://wa.me/5511959856802", "_blank")}
            className="w-full sm:w-auto px-12 py-6 bg-transparent border border-white/30 text-white text-sm uppercase tracking-[0.2em] hover:border-white transition-colors duration-500"
          >
            Conversar pelo WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-24 px-6 bg-black border-t border-white/5 text-sm font-light">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="space-y-6">
          <div className="text-3xl tracking-[0.3em] uppercase font-medium">Form<span className="font-light text-gray-500">Filmes</span></div>
          <p className="text-gray-500 text-base max-w-sm">Construindo percepção e autoridade através da linguagem cinematográfica.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 text-gray-400 tracking-[0.2em] uppercase text-xs md:text-sm">
          <a href="https://www.instagram.com/formfilmes?igsh=N2p1emtlMmhlcGoz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 pb-2 border-b border-transparent hover:border-white/30">Instagram</a>
          <a href="https://wa.me/5511959856802" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 pb-2 border-b border-transparent hover:border-white/30">WhatsApp</a>
          <a href="mailto:contato@formfilmes.com.br" className="hover:text-white transition-colors duration-300 pb-2 border-b border-transparent hover:border-white/30">E-mail</a>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-white/5 text-gray-600 text-xs tracking-widest uppercase flex flex-col md:flex-row justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Formfilmes. Todos os direitos reservados.</p>
        <p>Design Premium & Exclusivo</p>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main className="bg-black text-white selection:bg-white/30 selection:text-white min-h-screen font-sans">
      <Hero />
      <Problem />
      <Portfolio />
      <About />
      <Philosophy />
      <Differential />
      <Process />
      <Stats />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}
