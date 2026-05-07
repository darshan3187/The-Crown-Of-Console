import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Trophy, 
  Users, 
  Monitor, 
  Cpu, 
  Zap,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

// --- Main Application ---
export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-amber-500 selection:text-black overflow-x-hidden font-sans relative">
      {/* Premium Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <SectionDivider />
        <StatsBar />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

const SectionDivider = () => (
  <div className="w-full flex justify-center py-4 bg-black">
    <div className="w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Armory', href: '#services' },
    { name: 'Access', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'backdrop-blur-xl bg-black/80 py-3 md:py-4 border-b border-white/5' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-amber-400 to-amber-600 p-1.5 md:p-2 rounded-lg shadow-lg shadow-amber-500/20">
            <Trophy className="text-black w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="text-xl md:text-2xl font-serif italic font-black tracking-tighter text-white uppercase">
            Crown <span className="text-amber-500">Console</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-amber-500 transition-all duration-300 font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }} 
            href="#contact" 
            className="bg-amber-500 text-black px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
          >
            Book Slot
          </motion.a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-serif italic font-bold text-white hover:text-amber-500 uppercase tracking-widest">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-amber-500 text-black p-4 rounded-full font-black uppercase tracking-widest shadow-xl shadow-amber-500/20">
                Book Slot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-0">
      {/* Background with Cinematic Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
          alt="Gaming Cafe"
          className="w-full h-full object-cover opacity-20 md:opacity-30 scale-110 animate-pulse-slow"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-10 shadow-2xl"
        >
          <Zap className="text-amber-500 w-3 h-3 md:w-4 md:h-4" />
          <span className="text-amber-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em]">Ahmedabad's Elite Realm</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif italic text-white mb-8 leading-[1.05] md:leading-[0.95] tracking-tighter"
        >
          Where Legends <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700 animate-gradient-x">
            Are Crowned
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8, duration: 1 }} 
          className="text-gray-500 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 px-2 font-medium italic"
        >
          Indulge in a sanctuary of high-performance gaming. Elite setups, artisanal comfort, and a community of true legends.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.8 }} 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.03, y: -4 }} 
            whileTap={{ scale: 0.97 }} 
            className="group w-full sm:w-auto bg-amber-500 text-black px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-4"
          >
            Join The Realm 
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronRight size={20} />
            </motion.div>
          </motion.a>
          <motion.a 
            href="#services" 
            whileHover={{ scale: 1.03, y: -4 }} 
            whileTap={{ scale: 0.97 }} 
            className="w-full sm:w-auto border border-white/10 bg-white/5 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            The Armory
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={32} className="text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
};

// --- Stats Component ---
const StatsBar = () => {
  const stats = [
    { label: 'PS5 Setups', value: '15+', icon: Monitor },
    { label: 'Pro Members', value: '400+', icon: Users },
    { label: 'Avg Rating', value: '4.9', icon: Star },
    { label: 'Game Titles', value: '100+', icon: Gamepad2 },
  ];

  return (
    <div className="bg-black py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
              <stat.icon className="mx-auto text-amber-500 w-6 h-6 md:w-8 md:h-8 mb-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-3xl md:text-5xl font-serif italic text-white mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-amber-500/40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-amber-500 transition-colors duration-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Services Component ---
const Services = () => {
  const services = [
    {
      title: "PlayStation 5 Elite",
      desc: "4K HDR gaming on 55\" OLED displays with DualSense haptic immersion.",
      icon: Gamepad2,
      tag: "Popular"
    },
    {
      title: "High-FPS PC Zone",
      desc: "RTX 40-Series powered rigs with 240Hz monitors for competitive play.",
      icon: Cpu,
      tag: "Competitive"
    },
    {
      title: "Private VIP Lounge",
      desc: "Exclusive cabin experience with leather recliners and artisanal service.",
      icon: Zap,
      tag: "Premium"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] mb-4 text-xs md:text-sm">The Armory</h2>
          <h3 className="text-4xl md:text-7xl font-serif italic text-white leading-tight">Master Your <span className="text-amber-500">Domain</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -12 }} className="bg-zinc-900/30 p-10 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="mb-10 p-5 bg-white/5 rounded-3xl w-fit group-hover:bg-amber-500/10 transition-colors duration-500">
                <service.icon className="text-amber-500 w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-amber-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-5 block opacity-60 group-hover:opacity-100 transition-opacity">{service.tag}</span>
              <h4 className="text-2xl md:text-3xl font-serif italic text-white mb-5">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-10 text-sm md:text-base font-medium italic">{service.desc}</p>
              <button className="flex items-center gap-3 text-white font-bold group-hover:text-amber-500 transition-all uppercase tracking-[0.2em] text-[10px]">
                Explore Experience <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pricing Component ---
const Pricing = () => {
  const tiers = [
    { name: "Rookie", price: "₹150", duration: "1 Hour", features: ["Any PS5 Game", "Pro Controller", "Shared Lounge"], popular: false },
    { name: "Legend", price: "₹400", duration: "3 Hours", features: ["Priority Booking", "Private Screen", "Soft Drink Included"], popular: true },
    { name: "Titan", price: "₹1000", duration: "Full Day", features: ["Unlimited Access", "VIP Recliner", "Tournament Entry"], popular: false }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] mb-4 text-xs md:text-sm">Access Levels</h2>
        <h3 className="text-4xl md:text-7xl font-serif italic text-white mb-20 leading-tight">Securing Your <span className="text-amber-500">Legacy</span></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-center">
          {tiers.map((tier) => (
            <motion.div key={tier.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className={`p-10 md:p-12 rounded-[3rem] border transition-all duration-700 ${tier.popular ? 'bg-zinc-900 border-amber-500 lg:scale-105 shadow-[0_0_50px_rgba(245,158,11,0.1)]' : 'bg-transparent border-white/10'}`}>
              {tier.popular && <div className="bg-amber-500 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block">Highly Recommended</div>}
              <h4 className="text-gray-500 font-bold uppercase tracking-[0.4em] mb-8 text-xs">{tier.name}</h4>
              <div className="text-5xl md:text-7xl font-serif italic text-white mb-2 tracking-tighter">{tier.price}</div>
              <div className="text-gray-600 mb-10 font-bold text-xs uppercase tracking-widest italic">{tier.duration}</div>
              <ul className="space-y-5 mb-12 text-left">
                {tier.features.map(f => <li key={f} className="flex gap-4 text-gray-500 text-sm md:text-base italic font-medium"><CheckCircle2 size={18} className="text-amber-500 shrink-0" /> {f}</li>)}
              </ul>
              <button className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs md:text-sm transition-all duration-500 ${tier.popular ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:bg-amber-400' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5 hover:border-white/20'}`}>Reserve Pass</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="md:w-1/2">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] mb-4 text-xs md:text-sm">Connect</h2>
            <h3 className="text-4xl md:text-7xl font-serif italic text-white mb-12 leading-tight">The Crown <span className="text-amber-500">Estate</span></h3>
            <div className="space-y-12">
              <div className="flex gap-6 md:gap-8 items-start group">
                <div className="bg-white/5 p-4 md:p-5 rounded-2xl text-amber-500 shrink-0 group-hover:bg-amber-500/10 transition-colors duration-500 border border-white/5"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-white font-bold uppercase text-[10px] md:text-xs mb-2 tracking-[0.3em] opacity-60">Address</h4>
                  <p className="text-gray-500 italic text-base md:text-lg font-medium">FF-1, Shakti Arcade, Science City Rd,<br />Sola, Ahmedabad, Gujarat 380060</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8 items-start group">
                <div className="bg-white/5 p-4 md:p-5 rounded-2xl text-amber-500 shrink-0 group-hover:bg-amber-500/10 transition-colors duration-500 border border-white/5"><Phone size={24} /></div>
                <div>
                  <h4 className="text-white font-bold uppercase text-[10px] md:text-xs mb-2 tracking-[0.3em] opacity-60">Hotline</h4>
                  <a href="tel:+918799508567" className="text-gray-500 hover:text-amber-500 transition-all italic font-bold tracking-widest text-base md:text-lg">+91 8799508567</a>
                </div>
              </div>
              <div className="w-full h-80 rounded-[3rem] overflow-hidden opacity-100 transition-all duration-1000 shadow-2xl border border-white/10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57200.84760038539!2d72.43802677218879!3d23.073560000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dc2548f4ecb%3A0xa6da0fb6d129fe6c!2sThe%20Crown%20Of%20Console!5e1!3m2!1sen!2sin!4v1778142819243!5m2!1sen!2sin" className="w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-zinc-900/20 p-10 md:p-16 rounded-[4rem] border border-white/5 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
              <Trophy size={200} />
            </div>
            <h4 className="text-2xl md:text-3xl font-serif italic text-white mb-10">Request <span className="text-amber-500">Audience</span></h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] ml-2">Gamer Identity</label>
                <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:border-amber-500/50 outline-none italic font-medium text-sm transition-all duration-500" placeholder="e.g. ShadowPrince" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] ml-2">Digital Signal</label>
                <input className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:border-amber-500/50 outline-none italic font-medium text-sm transition-all duration-500" placeholder="Mobile Number" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] ml-2">Realm Class</label>
                <select className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:border-amber-500/50 outline-none italic font-medium text-sm appearance-none cursor-pointer transition-all duration-500">
                  <option className="bg-black">PS5 Session</option>
                  <option className="bg-black">PC Gaming</option>
                  <option className="bg-black">VIP Lounge</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.4em] ml-2">Battle Cry</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white focus:border-amber-500/50 outline-none italic font-medium text-sm transition-all duration-500" placeholder="Preferred date, time, or custom requests..."></textarea>
              </div>
              <button className="w-full bg-amber-500 text-black py-6 rounded-full font-black uppercase tracking-[0.3em] shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/40 hover:bg-amber-400 transition-all duration-700 text-sm md:text-base">Initialize Booking</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5 text-center px-6 relative overflow-hidden">
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-3 mb-10">
        <Trophy className="text-amber-500 w-8 h-8 md:w-10 md:h-10 opacity-60" />
        <span className="text-2xl md:text-3xl font-serif italic text-white uppercase tracking-tighter">Crown <span className="text-amber-500">Console</span></span>
      </div>
      <div className="flex justify-center gap-8 mb-16">
        {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
          <a key={i} href="#" className="bg-white/5 p-5 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-500 border border-white/5 hover:border-amber-500/50 group">
            <Icon size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-700 text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] leading-loose italic">
          © 2024 The Crown Of Console. Designed for those who seek the extraordinary. <br />
          Where every session is a legend in the making.
        </p>
      </div>
    </div>
  </footer>
);
