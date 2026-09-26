"use client";

import { useState, useEffect } from "react";

/* ─── Icon Components ─── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
);

const BabyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" /><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" /></svg>
);

const StethoscopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" /></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

/* ─── Data ─── */
const services = [
  {
    icon: <StarIcon />,
    title: "Meningkatkan daya tahan tubuh",
    desc: "Manfaat 1.",
  },
  {
    icon: <StarIcon />,
    title: "Membantu memulihkan stamina dan energi",
    desc: "Manfaat 2.",
  },
  {
    icon: <StarIcon />,
    title: "Menjaga kesehatan saraf dan metabolisme",
    desc: "Manfaat 3.",
  },
  {
    icon: <StarIcon />,
    title: "vitamin B kompleks Antioksidan untuk melindungi sel tubuh",
    desc: "Manfaat 4.",
  },
  {
    icon: <StarIcon />,
    title: "Cocok untuk tubuh yang lelah & mudah sakit",
    desc: "Manfaat 5.",
  },
];

const stats = [
  { number: "24/7", label: "Hotline Aktif" },
  { number: "Jabodetabek", label: "Kota" },
];

const advantages = [
  {
    icon: <ShieldIcon />,
    title: "IMMUNE BOOSTER",
    desc: "Membantu meningkatkan sistem kekebalan tubuh & melawan radikal bebas.",
  },
  {
    icon: <HeartIcon />,
    title: "NEUROBION",
    desc: "Mengandung vitamin B1, B6, B12 untuk menjaga kesehatan saraf & metabolisme.",
  },
  {
    icon: <HeartIcon />,
    title: "VITAMIN C",
    desc: "Antioksidan kuat yang membantu meningkatkan daya tahan tubuh & penyerapan zat besi. ",
  },
];

const testimonials = [
  {
    name: "",
    role: "",
    text: "",
    rating: 0,
  },
  {
    name: "",
    role: "",
    text: "",
    rating: 0,
  },
  {
    name: "",
    role: "",
    text: ".",
    rating: 0,
  },
];

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

/* ─── Main Page ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ═══════ NAVBAR ═══════ */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group">
  <img
    src="/images/logo.jpg"
    alt="Aileen HomeService"
    className="w-10 h-10 object-contain"
  />

  <span className="text-xl font-bold tracking-tight">
    <span className="gradient-text">Aileen</span>
    <span className="text-foreground">HomeService</span>
  </span>
</a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-primary-light transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:081280644650"
              className="hidden sm:inline-flex items-center gap-2 btn-primary !py-2.5 !px-5 !text-sm"
            >
              <PhoneIcon /> Hubungi Kami
            </a>
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-5 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-text-muted hover:text-primary-light hover:bg-surface-glass rounded-lg transition-all"
                onClick={() => setMobileMenu(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:081280644650"
              className="mt-3 flex items-center justify-center gap-2 btn-primary !text-sm w-full"
            >
              <PhoneIcon /> Hubungi Kami
            </a>
          </div>
        )}
      </nav>

      {/* ═══════ HERO SECTION ═══════ */}
      <section
        id="beranda"
        className="relative min-h-screen flex items-center gradient-bg-hero overflow-hidden"
      >
        {/* Decorative Orbs */}
        <div className="orb w-96 h-96 bg-primary/20 top-[-100px] left-[-100px] animate-float" />
        <div className="orb w-72 h-72 bg-accent/15 bottom-20 right-[-50px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="orb w-48 h-48 bg-primary-light/10 top-1/2 left-1/2 animate-float" style={{ animationDelay: "4s" }} />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="animate-fade-in-up fade-delay-1 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="animate-ring-pulse">📞</span> Hotline 24/7 Tersedia
              </div>

              <h1 className="animate-fade-in-up fade-delay-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Perawatan <span className="gradient-text">Infuse</span> IMMUNE
                {" "}
                <span className="gradient-text">Booster</span>
              </h1>

              <p className="animate-fade-in-up fade-delay-3 text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
                Layanan home care profesional yang menghadirkan perawat langsung ke rumah Anda. Perawatan Terbaik untuk Keluarga Anda dirumah
                #CaringwithHeart
              </p>

              <div className="animate-fade-in-up fade-delay-4 flex flex-wrap gap-4 mb-10">
                <a href="tel:082297276864" className="btn-primary">
                  <PhoneIcon />
                  0822-9727-6864
                </a>
                <a href="#layanan" className="btn-outline">
                  Lihat Layanan
                </a>
              </div>

              {/* Trust badges */}
              <div className="animate-fade-in-up fade-delay-5 flex items-center gap-6 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <ShieldIcon />
                  <span>Tersertifikasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon />
                  <span>Respons &lt; 2 Jam</span>
                </div>
              </div>
            </div>

            {/* Right — Decorative Card Stack */}
            <div className="flex justify-center relative mt-10 lg:mt-0">
               <div className="relative w-full max-w-sm h-[480px]">
                {/* Main card */}
                <div className="glass-card rounded-3xl p-6 sm:p-8 absolute inset-0 flex flex-col justify-between animate-fade-in-up fade-delay-3">
              <div>
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 text-white">
             <HeartIcon />
               </div>
                 <h3 className="text-2xl font-bold mb-3">
                      Caring with Heart
                    </h3>

                    <img
                       src="/images/homecare.jpg"
                       alt="Layanan Home Care"
                        className="w-full h-52 object-cover rounded-2xl mb-4"
                      />
                        <p className="text-text-muted leading-relaxed">
                        </p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-glass">
                  <div>
                    <p className="text-sm font-semibold"></p>
                  <p className="text-xs text-text-muted"></p>
                    </div>
                    </div>
                </div>

                {/* Floating mini card */}
                <div className="glass-card rounded-2xl px-5 py-4 absolute -bottom-6 -left-12 animate-float animate-fade-in-up fade-delay-5 flex items-center gap-3 shadow-xl">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white animate-ring-pulse">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Hotline Aktif</p>
                    <p className="text-sm font-bold gradient-text">
                      24 Jam / 7 Hari
                    </p>
                  </div>
                </div>

                {/* Floating rating card */}
                <div className="glass-card rounded-2xl px-5 py-4 absolute -top-4 -right-8 animate-float animate-fade-in-up fade-delay-6 flex items-center gap-3 shadow-xl" style={{ animationDelay: "1s" }}>
                  <div className="flex text-yellow-400">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-sm font-semibold">4.9/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOTLINE BANNER ═══════ */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-pulse-glow rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-primary-light p-1">
            <div className="rounded-3xl bg-gradient-to-r from-primary-dark/90 via-primary/90 to-primary-light/90 px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center animate-ring-pulse">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">
                    Butuh bantuan segera?
                  </p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                    0822-9727-6864
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white/80 text-sm">
                  Gratis • 24 Jam • Tanpa Antri
                </p>
                <a
                  href="tel:0822-9727-6864"
                  className="mt-2 inline-flex items-center gap-2 bg-white text-primary-dark font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all hover:scale-105"
                >
                  <PhoneIcon /> Telepon Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                  {s.number}
                </p>
                <p className="text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="manfaat" className="py-20 relative overflow-hidden">
        <div className="orb w-80 h-80 bg-accent/10 top-0 right-[-120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary-light font-semibold uppercase tracking-widest text-sm mb-3">
              Manfaat Layanan Kami
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Infuse<span className="gradient-text"> IMMUNE</span> Booster
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary-light mb-5 group-hover:scale-110 transition-transform duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-light transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section id="keunggulan" className="py-20 relative">
        <div className="orb w-64 h-64 bg-primary/12 bottom-0 left-[-80px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — big feature card */}
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />
              <p className="text-primary-light font-semibold uppercase tracking-widest text-sm mb-3">
                Mengapa AileenHomeService?
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Kepercayaan dari{" "}
                <span className="gradient-text">Ribuan Keluarga</span>
              </h2>
              <p className="text-text-muted leading-relaxed mb-8">
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                    key={i}
                    >
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">Rating</p>
                  <div className="flex text-yellow-400 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — advantages */}
            <div className="space-y-6">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 flex gap-5 items-start animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary-light">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{adv.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section id="testimoni" className="py-20 relative overflow-hidden">
        <div className="orb w-72 h-72 bg-accent/10 top-10 left-[-60px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary-light font-semibold uppercase tracking-widest text-sm mb-3">
              Testimoni
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Kata Mereka tentang{" "}
              <span className="gradient-text">AilenCareHome</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border-glass">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${["#0d9488,#14b8a6", "#34d399,#6ee7b7", "#0f766e,#0d9488"][i]
                        })`,
                    }}
                  >
                    {t.name[0]}
                    {t.name.split(" ")[1]?.[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden relative animate-gradient-shift bg-gradient-to-br from-primary-dark via-primary to-accent p-px">
            <div className="rounded-3xl bg-gradient-to-br from-primary-dark/95 via-primary/90 to-accent/85 px-8 sm:px-14 py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/15 mb-8 animate-ring-pulse">
                  <PhoneIcon />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  Siap Melayani Keluarga Anda
                </h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8">
                  Hubungi hotline kami sekarang dan dapatkan konsultasi gratis.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:6281280644650"
                    className="inline-flex items-center gap-2 bg-white text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <PhoneIcon /> 0822-9727-6864
                  </a>
                  <a
                    href="https://wa.me/6282297276864"
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                  >
                    💬 Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer id="kontak" className="pt-16 pb-8 border-t border-border-glass relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-light">
                  <HeartIcon />
                </span>
                <span className="text-xl font-bold">
                  <span className="gradient-text">Aileen</span>HomeService
                </span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Layanan home care profesional terpercaya untuk seluruh keluarga Dan melayani dengan Hati
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-primary-light">
                Menu
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-primary-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-primary-light">
                Manfaat
              </h4>
              <ul className="space-y-2.5">
                {services.slice(0, 4).map((svc, i) => (
                  <li key={i}>
                    <span className="text-sm text-text-muted">{svc.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-primary-light">
                Kontak
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-text-muted">
                  <PhoneIcon /> 0822-9727-6864
                </li>
                <li className="flex items-start gap-2.5 text-sm text-text-muted">
                  <MailIcon /> ailenhomeservice@gmail.com
                </li>
                <li className="flex items-start gap-2.5 text-sm text-text-muted">
                  <MapPinIcon /> Jakarta, Indonesia
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border-glass flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} AileenHomeService. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-text-muted hover:text-primary-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-text-muted hover:text-primary-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════ BACK TO TOP ═══════ */}
      {scrolled && (
        <a
          href="#beranda"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform animate-fade-in-up"
          aria-label="Back to top"
        >
          <ChevronUpIcon />
        </a>
      )}
    </>
  );
}