import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Bug,
  Zap,
  Users,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Menu,
  X,
  Search,
  ClipboardCheck,
  SprayCan,
  HeadphonesIcon,
  ChevronUp,
  Leaf,
  Award,
  FileCheck,
  Rat,
  Bird
} from "lucide-react";
import React, { useState } from "react";

// ============================================================
// 🔧 SITE CONFIG — Change these values per business
// ============================================================
const CONFIG = {
  // Business identity
  name: "De Wespenkiller",
  tagline: "Uw specialist in wespen- en hoornaarverdelging.",
  logoUrl: "/logo.png",
  logoAlt: "De Wespenkiller Logo",
  logoClassName: "h-8 md:h-10",

  // Contact
  phone: "0467 00 01 74",
  phoneLink: "tel:+32467000174",
  email: "dewespenkiller@telenet.be",
  whatsapp: "https://api.whatsapp.com/send?phone=32467000174",

  // Location
  address: "Hamerstraat 13, 3191 Hever",
  region: "regio Boortmeerbeek en omstreken",
  regionShort: "Vlaams-Brabant",
  country: "België",

  // Stats
  reviewScore: "4.4",
  reviewCount: "5",
  yearsExperience: "5+",
  clientCount: "500+",

  // About text
  aboutText: "De Wespenkiller, gerund door Eddy Mertens, is uw lokale specialist voor het verdelgen van wespennesten en Aziatische hoornaars in de regio Boortmeerbeek, Keerbergen, Bonheiden, Haacht en Zemst. Wij komen vaak dezelfde dag nog en hanteren een vast tarief.",

  // Certifications
  certifications: [
    { "label": "Gecertificeerd Verdelger", "icon": "award" },
    { "label": "Aziatische Hoornaar Expert", "icon": "filecheck" },
    { "label": "Lokale Specialist", "icon": "leaf" },
  ],

  // Services with pricing
  services: [
    { "title": "Wespenverdelging", "desc": "Professionele verdelging van wespennesten op elke locatie. Snel en veilig.", "price": "Vanaf €50" },
    { "title": "Aziatische Hoornaar", "desc": "Gecertificeerde bestrijding van Aziatische hoornaars sinds 2023. Veilige verwijdering.", "price": "Vanaf €75" },
    { "title": "Europese Hoornaar", "desc": "Veilige verwijdering van hoornaarnesten met professionele uitrusting.", "price": "Vanaf €65" },
    { "title": "Bijenadvies", "desc": "Wij beschermen bijen! Bij bijenkolonies verwijzen wij u door naar een lokale imker.", "price": "Gratis advies" },
    { "title": "Preventief Advies", "desc": "Tips en advies om te voorkomen dat wespen een nest bouwen bij uw woning.", "price": "Gratis" },
    { "title": "Noodinterventie", "desc": "Spoedeisende wespenverdelging wanneer er direct gevaar dreigt.", "price": "Vanaf €75" },
  ],

  // Testimonials
  testimonials: [
    { "name": "Jan B.", "location": "Boortmeerbeek", "text": "Eddy was er dezelfde dag! Wespennest vakkundig verwijderd. Heel vriendelijk en professioneel." },
    { "name": "Lies D.", "location": "Keerbergen", "text": "Snel, efficiënt en een eerlijke prijs. De Wespenkiller is een absolute aanrader!" },
    { "name": "Tom V.", "location": "Haacht", "text": "Al twee keer gebeld en beide keren binnen het uur ter plaatse. Top service!" },
  ],

  // Service regions
  regions: [
    { "region": "Vlaams-Brabant", "cities": ['Boortmeerbeek', 'Keerbergen', 'Bonheiden', 'Haacht', 'Zemst', 'Mechelen', 'Leuven', 'Heist-op-den-Berg', 'Tremelo', 'Rotselaar'] },
  ],

  // Social links
  social: {
    facebook: "https://www.facebook.com/dewespenkiller.eddy",
    instagram: "#",
    linkedin: "#",
  },
};

// ============================================================
// Components (template — reads from CONFIG)
// ============================================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Slim top bar with slogan + social icons */}
      <div className="bg-brand-600 text-white py-1.5 px-4 md:px-24">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-display text-xs md:text-sm font-medium tracking-wide opacity-90">
            {CONFIG.tagline}
          </span>
          <div className="hidden md:flex items-center gap-3">
            <a href={CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
              <Facebook size={14} />
            </a>
            <a href={CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
              <Instagram size={14} />
            </a>
            <a href={CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 px-4 md:px-24 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={CONFIG.logoUrl}
              alt={CONFIG.logoAlt}
              className={CONFIG.logoClassName}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-zinc-900 font-display font-medium">
            <a href="#" className="text-brand-500">Home</a>
            <a href="#over-ons" className="hover:text-brand-500 transition-colors">Over Ons</a>
            <a href="#diensten" className="hover:text-brand-500 transition-colors">Diensten</a>
            <a href="#faq" className="hover:text-brand-500 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
          </div>

          {/* Right side: contact info + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href={CONFIG.phoneLink} className="flex items-center gap-2 text-zinc-700 hover:text-brand-500 transition-colors">
              <Phone size={16} />
              <span className="font-display font-semibold text-sm">{CONFIG.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 text-zinc-400 text-sm">
              <Clock size={14} />
              <span className="font-display font-medium">24/7</span>
            </span>
            <a href="#servicegebied" className="flex items-center gap-1.5 text-zinc-400 hover:text-brand-500 transition-colors text-sm">
              <MapPin size={14} />
              <span className="font-display font-medium">Servicegebied</span>
            </a>
            <a
              href="#contact"
              className="bg-brand-500 text-white px-6 py-2 rounded-full font-display font-semibold hover:bg-brand-600 transition-all cursor-pointer"
            >
              Gratis Offerte
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'} className="cursor-pointer p-1">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-black/5 p-4 flex flex-col gap-4 font-display font-medium">
          <a href="#" className="text-brand-500">Home</a>
          <a href="#over-ons">Over Ons</a>
          <a href="#diensten">Diensten</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href={CONFIG.phoneLink} className="flex items-center gap-2 text-brand-500 font-bold">
            <Phone size={18} /> {CONFIG.phone}
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Professionele ongediertebestrijder aan het werk in beschermende kleding"
          className="w-full h-full object-cover"
        />
        {/* Brand gradient overlay — 70-85% opacity for consistent readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/90 via-brand-600/80 to-brand-500/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <Clock size={16} />
            <span className="font-display font-semibold text-sm">Interventie binnen 24 uur — 7 dagen per week</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            {CONFIG.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-lg md:text-xl mb-10 leading-relaxed"
          >
            Heeft u last van ongewenste dieren en insecten? Bij {CONFIG.name} zijn we gespecialiseerd in wering en bestrijding van ongedierte over {CONFIG.region}. Snel, discreet en met garantie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="bg-brand-500 text-white px-8 py-4 rounded-full font-display font-bold text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 cursor-pointer">
              Gratis Offerte Aanvragen
            </a>
            <a href={CONFIG.phoneLink} className="bg-white/10 backdrop-blur-md border border-white text-white px-8 py-4 rounded-full font-display font-bold text-lg hover:bg-white hover:text-brand-600 transition-all flex items-center gap-2 cursor-pointer">
              <Phone size={20} /> {CONFIG.phone}
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-sm mt-4 font-display"
          >
            ✓ Gratis en vrijblijvend &nbsp; ✓ Reactie binnen 2 uur &nbsp; ✓ Geen voorrijkosten
          </motion.p>
        </div>
      </div>
    </header>
  );
};

const Features = () => {
  const features = [
    { icon: <Clock className="text-brand-500" size={48} />, title: "Binnen 24 uur ter plaatse", desc: "Bel vandaag, wij komen morgen. Spoed? Dan komen wij dezelfde dag nog." },
    { icon: <ShieldCheck className="text-brand-500" size={48} />, title: "100% Garantie op resultaat", desc: "Niet tevreden? Wij komen gratis terug tot het probleem volledig is opgelost." },
    { icon: <Leaf className="text-brand-500" size={48} />, title: "Veilig voor mens & dier", desc: "Gecertificeerde producten, veilig voor kinderen, huisdieren en het milieu." },
  ];

  return (
    <section className="py-12 bg-white px-4 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white rounded-2xl shadow-xl border border-black/5 -mt-20 relative z-20"
        >
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <div className="mb-6">{f.icon}</div>
              <h3 className="font-display text-xl font-bold text-zinc-900 mb-2">{f.title}</h3>
              <p className="text-zinc-500 font-sans leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { icon: <Phone size={32} />, title: "1. Bel of vul het formulier in", desc: `Neem contact op met ${CONFIG.name}. Wij zijn 24/7 bereikbaar voor een gratis adviesgesprek.` },
    { icon: <Search size={32} />, title: "2. Gratis inspectie ter plaatse", desc: "Onze technicus komt langs, identificeert het ongedierte en maakt een plan op maat." },
    { icon: <SprayCan size={32} />, title: "3. Vakkundige behandeling", desc: "Met gecertificeerde, milieuvriendelijke methoden elimineren wij het probleem." },
    { icon: <HeadphonesIcon size={32} />, title: "4. Opvolging & garantie", desc: "Na de behandeling volgen wij op. Komt het terug? Wij komen gratis opnieuw." },
  ];

  return (
    <section className="py-24 bg-zinc-50 px-4 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-brand-500 font-display font-bold text-sm uppercase tracking-widest">Zo werken wij</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mt-4 mb-16">In 4 stappen ongediertevrij</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm text-center relative">
              <div className="bg-brand-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">{s.icon}</div>
              <h3 className="font-display text-lg font-bold text-zinc-900 mb-3">{s.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const certIcons: Record<string, React.ReactNode> = {
    award: <Award className="text-brand-500 shrink-0" size={24} />,
    filecheck: <FileCheck className="text-brand-500 shrink-0" size={24} />,
    leaf: <Leaf className="text-brand-500 shrink-0" size={24} />,
  };

  return (
    <section id="over-ons" className="py-20 bg-white px-4 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center lg:justify-start">
          <motion.div initial={{ opacity: 0, rotateY: 60 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-2/3 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img src="/images/about-1.png" alt="Ongediertebestrijder inspecteert een magazijn op ongedierte" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, rotateY: -60 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-2/3 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl absolute -bottom-10 -right-4 lg:-right-10 z-0 border-8 border-white">
            <img src="/images/about-2.png" alt="Technicus plaatst professioneel lokstation langs een muur" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
            <span className="text-brand-500 font-display font-bold text-sm uppercase tracking-widest">Over {CONFIG.name}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              Al {CONFIG.yearsExperience} jaar uw partner in duurzame ongediertebestrijding
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">{CONFIG.aboutText}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CONFIG.certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-3 bg-brand-50 p-4 rounded-xl">
                {certIcons[c.icon]}
                <span className="font-display font-bold text-sm text-zinc-900">{c.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-brand-50 p-6 rounded-2xl flex items-center gap-4 flex-1 min-w-[200px]">
              <Users size={40} className="text-brand-500" />
              <div>
                <h4 className="font-display text-3xl font-black text-zinc-900">{CONFIG.clientCount}</h4>
                <p className="text-zinc-600 font-medium">Tevreden klanten</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-brand-50 p-6 rounded-2xl flex items-center gap-4 flex-1 min-w-[200px]">
              <Zap size={40} className="text-brand-500" />
              <div>
                <h4 className="font-display text-3xl font-black text-zinc-900">{CONFIG.yearsExperience}</h4>
                <p className="text-zinc-600 font-medium">Jaar Ervaring</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceIcons: React.ReactNode[] = [
    <Bug size={28} />,
    <Rat size={28} />,
    <Rat size={28} />,
    <Bug size={28} />,
    <Bird size={28} />,
    <Bug size={28} />,
  ];

  return (
    <section id="diensten" className="py-24 relative overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 opacity-20">
        <img src="/images/specialist.png" alt="" role="presentation" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-24 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-white/70 font-display font-bold text-sm uppercase tracking-widest">Onze diensten</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">Professionele oplossingen voor elk ongedierteprobleem</h2>
          <p className="text-zinc-400 mb-16 max-w-2xl mx-auto">Alle prijzen zijn inclusief inspectie, behandeling en opvolging. Gratis offerte, geen verrassingen.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CONFIG.services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-left hover:bg-white/20 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                  {serviceIcons[i % serviceIcons.length]}
                </div>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full font-display font-bold text-sm">{s.price}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors">{s.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed text-sm">{s.desc}</p>
              <a href="#contact" className="flex items-center gap-2 text-white font-display font-bold cursor-pointer hover:gap-3 transition-all">
                Offerte aanvragen <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        <a href={CONFIG.phoneLink} className="inline-flex items-center gap-3 bg-brand-500 text-white px-10 py-4 rounded-full font-display font-bold text-lg hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 cursor-pointer">
          <Phone size={22} /> Bel nu: {CONFIG.phone}
        </a>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const [active, setActive] = useState(0);
  const items = [
    { title: "Interventie binnen 24 uur, 7/7", desc: `Wij begrijpen dat ongedierte niet kan wachten. Het team van ${CONFIG.name} is 7 dagen per week beschikbaar en binnen 24 uur ter plaatse — ook in het weekend.` },
    { title: "Milieuvriendelijke producten", desc: "Al onze producten zijn gecertificeerd en veilig voor kinderen, huisdieren en het milieu. Wij gebruiken geen agressieve chemicaliën tenzij strikt noodzakelijk." },
    { title: "Transparante prijzen, geen verrassingen", desc: "U krijgt vooraf een duidelijke offerte. Geen verborgen kosten, geen verrassingen achteraf. De inspectie is altijd gratis." },
    { title: "Garantie op resultaat", desc: "Komt het ongedierte terug na onze behandeling? Dan komen wij kosteloos opnieuw. Uw tevredenheid is onze prioriteit." },
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-brand-500 font-display font-bold text-sm uppercase tracking-widest">Waarom {CONFIG.name}?</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              De keuze van {CONFIG.clientCount} tevreden klanten in {CONFIG.country}
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <div key={i} onClick={() => setActive(i)} className={`p-6 rounded-2xl transition-all cursor-pointer border ${active === i ? 'bg-brand-500 border-brand-500 text-white shadow-lg shadow-brand-500/20' : 'bg-zinc-50 border-zinc-100 text-zinc-900 hover:bg-zinc-100'}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-display text-xl font-bold">{item.title}</h4>
                  <ChevronDown className={`transition-transform ${active === i ? 'rotate-180' : ''}`} />
                </div>
                {active === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-white/80 leading-relaxed mt-4">{item.desc}</motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <motion.div initial={{ opacity: 0, rotateY: -60 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }} className="w-4/5 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/specialist.png" alt="Gecertificeerde specialist past ongediertebestrijding toe in een kantoor" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="absolute -bottom-10 -left-4 md:-left-10 bg-white p-8 rounded-3xl shadow-2xl border border-black/5 max-w-[280px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-brand-500 p-3 rounded-full text-white"><ShieldCheck size={32} /></div>
              <h4 className="font-display font-bold text-zinc-900">HACCP Gecertificeerd</h4>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Al onze methoden en producten voldoen aan de strengste Europese veiligheidsnormen.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Logos = () => (
  <section className="py-16 bg-zinc-50 px-4 md:px-24 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-zinc-400 font-display font-medium mb-12 uppercase tracking-widest text-sm">Vertrouwd door bedrijven en gemeentes in {CONFIG.region}</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
        <Bug size={48} /><ShieldCheck size={48} /><Zap size={48} /><Users size={48} /><Clock size={48} />
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white px-4 md:px-24 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-brand-500 font-display font-bold text-sm uppercase tracking-widest">Klantbeoordelingen</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mt-4 mb-6">Wat onze klanten zeggen</h2>
      </motion.div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
        </div>
        <p className="text-zinc-500 font-display font-semibold">{CONFIG.reviewScore}/5 op Google — {CONFIG.reviewCount}+ beoordelingen</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {CONFIG.testimonials.map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 flex flex-col gap-6">
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={16} />)}
          </div>
          <p className="text-zinc-600 text-lg leading-relaxed">"{t.text}"</p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white font-display font-bold text-lg">{t.name[0]}</div>
            <div>
              <h4 className="font-display font-bold text-zinc-900">{t.name}</h4>
              <p className="text-zinc-400 text-sm">{t.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Hoe snel kunnen jullie ter plaatse zijn?", a: `In de meeste gevallen zijn wij binnen 24 uur bij u. Bij spoedgevallen komen wij vaak dezelfde dag nog. ${CONFIG.name} is 7 dagen per week bereikbaar.` },
    { q: "Hoeveel kost een ongediertebestrijding?", a: "Onze prijzen beginnen vanaf €69 afhankelijk van het type ongedierte. Na een gratis inspectie ontvangt u een duidelijke offerte zonder verborgen kosten." },
    { q: "Zijn de gebruikte producten veilig voor kinderen en huisdieren?", a: "Absoluut. Al onze producten zijn gecertificeerd en veilig voor mens en dier. Wij gebruiken bij voorkeur milieuvriendelijke methoden." },
    { q: "Moet ik het huis verlaten tijdens de behandeling?", a: "In de meeste gevallen niet. Bij specifieke behandelingen vragen wij u om enkele uren de woning te verlaten. Dit bespreken wij altijd vooraf." },
    { q: "Geven jullie garantie op de behandeling?", a: "Ja, wij geven garantie op al onze behandelingen. Komt het ongedierte terug binnen de garantieperiode? Dan komen wij kosteloos opnieuw langs." },
    { q: `In welke regio's is ${CONFIG.name} actief?`, a: `Wij zijn actief in ${CONFIG.region}. Van Vilvoorde tot Gent, van Brussel tot Antwerpen — wij komen bij u langs.` },
    { q: "Werken jullie ook voor bedrijven en horeca?", a: "Ja, wij bieden speciale contracten aan voor bedrijven, restaurants, hotels en gemeentes. Inclusief periodieke inspecties en HACCP-documentatie." },
    { q: "Hoe kan ik een afspraak maken?", a: `Bel ons op ${CONFIG.phone} of vul het contactformulier in op deze pagina. Wij nemen binnen 2 uur contact met u op.` },
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-50 px-4 md:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-brand-500 font-display font-bold text-sm uppercase tracking-widest">Veelgestelde vragen</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mt-4">Antwoord op uw vragen</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
              <button type="button" onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left cursor-pointer">
                <h3 className="font-display font-bold text-zinc-900 pr-4">{faq.q}</h3>
                {openIndex === i ? <ChevronUp size={20} className="text-brand-500 shrink-0" /> : <ChevronDown size={20} className="text-zinc-400 shrink-0" />}
              </button>
              {openIndex === i && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 pb-6">
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => (
  <section id="servicegebied" className="py-24 bg-white px-4 md:px-24">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-brand-500 font-display font-bold text-sm uppercase tracking-widest">Ons werkgebied</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mt-4 mb-4">Actief in {CONFIG.region}</h2>
        <p className="text-zinc-500 mb-16 max-w-2xl mx-auto">Wij komen bij u langs, waar u ook woont in ons dekkingsgebied. Geen extra voorrijkosten.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {CONFIG.regions.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-brand-500" size={24} />
              <h3 className="font-display text-2xl font-bold text-zinc-900">{r.region}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {r.cities.map((c, j) => (
                <span key={j} className="bg-white px-3 py-1.5 rounded-full text-sm font-medium text-zinc-600 border border-zinc-200">{c}</span>
              ))}
              <span className="bg-brand-50 text-brand-500 px-3 py-1.5 rounded-full text-sm font-bold border border-brand-100">+ meer</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-zinc-50 px-4 md:px-24">
    <div className="max-w-7xl mx-auto bg-brand-600 rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 md:p-16 flex flex-col gap-12 text-white">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Vraag uw gratis offerte aan</h2>
          <p className="text-brand-50 text-lg opacity-80">Vul het formulier in en ontvang binnen 2 uur een vrijblijvende offerte. Of bel ons direct — wij zijn 24/7 bereikbaar.</p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/team.png" alt="Professioneel team bespreekt een ongediertebestrijdingsplan" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-900 font-display font-bold text-lg">Direct iemand spreken?</p>
            <a href={CONFIG.phoneLink} className="bg-brand-500 text-white px-6 py-3 rounded-full font-display font-bold hover:bg-brand-600 transition-all cursor-pointer inline-block">{CONFIG.phone}</a>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-16">
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label htmlFor="contact-name" className="sr-only">Uw naam</label><input id="contact-name" type="text" placeholder="Uw naam*" required className="w-full bg-zinc-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-500 outline-none font-display" /></div>
            <div><label htmlFor="contact-email" className="sr-only">Uw e-mail</label><input id="contact-email" type="email" placeholder="Uw e-mail*" required className="w-full bg-zinc-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-500 outline-none font-display" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label htmlFor="contact-phone" className="sr-only">Telefoon</label><input id="contact-phone" type="tel" placeholder="Telefoon*" required className="w-full bg-zinc-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-500 outline-none font-display" /></div>
            <div><label htmlFor="contact-pest" className="sr-only">Kies ongedierte</label>
              <select id="contact-pest" className="w-full bg-zinc-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-500 outline-none font-display text-zinc-500 cursor-pointer">
                <option>Kies ongedierte*</option>
                <option>Ratten</option><option>Muizen</option><option>Wespen / Hoornaars</option><option>Bedwantsen</option><option>Kakkerlakken</option><option>Muggen</option><option>Mieren</option><option>Anders</option>
              </select>
            </div>
          </div>
          <div><label htmlFor="contact-message" className="sr-only">Bericht</label><textarea id="contact-message" placeholder="Beschrijf kort uw situatie (optioneel)" rows={4} className="w-full bg-zinc-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-brand-500 outline-none font-display"></textarea></div>
          <button type="submit" className="bg-brand-500 text-white py-4 rounded-full font-display font-bold text-lg hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 cursor-pointer">Gratis Offerte Aanvragen</button>
          <p className="text-zinc-400 text-sm text-center">Gratis en vrijblijvend — reactie binnen 2 uur</p>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-900 pt-20 pb-10 px-4 md:px-24 text-white">
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <h3 className="font-display text-3xl font-bold text-brand-500">{CONFIG.name}</h3>
          <p className="text-zinc-400 leading-relaxed">Professionele ongediertebestrijding in {CONFIG.region}. Gecertificeerd, milieuvriendelijk en altijd bereikbaar.</p>
          <a href={CONFIG.phoneLink} className="flex items-center gap-2 text-brand-500 font-display font-bold text-xl hover:text-brand-400 transition-colors"><Phone size={22} /> {CONFIG.phone}</a>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <p className="font-display font-bold text-lg">Abonneer op onze nieuwsbrief</p>
          <div className="flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">E-mailadres</label>
            <input id="newsletter-email" type="email" placeholder="Uw e-mailadres" className="bg-white/10 border border-white/10 rounded-full px-6 py-3 flex-1 outline-none focus:ring-2 focus:ring-brand-500" />
            <button type="submit" aria-label="Inschrijven" className="bg-brand-500 p-3 rounded-full hover:bg-brand-600 transition-all cursor-pointer"><ArrowRight size={24} /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-white/5">
        <div className="flex flex-col gap-4">
          <h6 className="font-display font-bold text-lg">Menu</h6>
          <div className="flex flex-col gap-2 text-zinc-400">
            <a href="#" className="hover:text-brand-500 transition-colors">Home</a>
            <a href="#over-ons" className="hover:text-brand-500 transition-colors">Over ons</a>
            <a href="#diensten" className="hover:text-brand-500 transition-colors">Diensten</a>
            <a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-display font-bold text-lg">Onze diensten</h6>
          <div className="flex flex-col gap-2 text-zinc-400">
            {CONFIG.services.slice(0, 4).map((s, i) => (
              <a key={i} href="#diensten" className="hover:text-brand-500 transition-colors">{s.title}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-display font-bold text-lg">Informatie</h6>
          <div className="flex flex-col gap-2 text-zinc-400">
            <a href="#faq" className="hover:text-brand-500 transition-colors">Veelgestelde vragen</a>
            <a href="#servicegebied" className="hover:text-brand-500 transition-colors">Servicegebied</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-display font-bold text-lg">Contact</h6>
          <div className="flex flex-col gap-2 text-zinc-400">
            <a href={CONFIG.phoneLink} className="hover:text-brand-500 transition-colors">{CONFIG.phone}</a>
            <a href={`mailto:${CONFIG.email}`} className="hover:text-brand-500 transition-colors">{CONFIG.email}</a>
            <p>{CONFIG.address}</p>
            <p>{CONFIG.country}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">© 2026 {CONFIG.name}. Alle rechten voorbehouden.</p>
        <div className="flex gap-4">
          <a href={CONFIG.social.facebook} aria-label="Volg ons op Facebook" className="bg-white/5 p-2 rounded-full hover:bg-brand-500 transition-all cursor-pointer"><Facebook size={20} /></a>
          <a href={CONFIG.social.linkedin} aria-label="Volg ons op LinkedIn" className="bg-white/5 p-2 rounded-full hover:bg-brand-500 transition-all cursor-pointer"><Linkedin size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Logos />
      <Testimonials />
      <FAQ />
      <ServiceArea />
      <Contact />
      <Footer />
    </div>
  );
}
