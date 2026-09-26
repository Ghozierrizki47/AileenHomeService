"use client";

import { useState, useEffect } from "react";

/* ─── Icon Components ─── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20 4 17.5 4 13V6a2 2 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/* ─── Data: same content as PC version ─── */
const services = [
  { title: "Meningkatkan daya tahan tubuh", desc: "Manfaat 1." },
  { title: "Membantu memulihkan stamina dan energi", desc: "Manfaat 2." },
  { title: "Menjaga kesehatan saraf dan metabolisme", desc: "Manfaat 3." },
  { title: "vitamin B kompleks Antioksidan untuk melindungi sel tubuh", desc: "Manfaat 4." },
  { title: "Cocok untuk tubuh yang lelah & mudah sakit", desc: "Manfaat 5." },
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
    desc: "Antioksidan kuat yang membantu meningkatkan daya tahan tubuh & penyerapan zat besi.",
  },
];

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function MobileHome() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* ═══════ MOBILE NAVBAR ═══════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-4"
        }`}
      >
        <div className="px-4 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2 min-w-0">
            <img
              src="/images/logo.jpg"
              alt="Aileen HomeService"
              className="w-9 h-9 object-contain shrink-0"
            />
            <span className="text-base font-bold tracking-tight truncate">
              <span className="gradient-text">Aileen</span>
              <span className="text-foreground">HomeService</span>
            </span>
          </a>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:082297276864"
              className="hidden sm:inline-flex items-center gap-2 btn-primary !py-2 !px-3 !text-xs"
            >
              <PhoneIcon />
              Telepon
            </a>
            <button
              className="p-2 rounded-xl text-foreground bg-surface-glass/60"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="mx-3 mt-2 glass rounded-2xl p-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-3 rounded-xl text-text-muted hover:text-primary-light hover:bg-surface-glass transition-all"
                onClick={() => setMobileMenu(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6282297276864"
              className="mt-2 flex items-center justify-center gap-2 btn-primary w-full"
              onClick={() => setMobileMenu(false)}
            >
              💬 Chat WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section id="beranda" className="relative gradient-bg-hero overflow-hidden pt-28 pb-12">
        <div className="orb w-64 h-64 bg-primary/20 -top-24 -left-24 animate-float" />
        <div className="orb w-52 h-52 bg-accent/15 top-48 -right-24 animate-float" style={{ animationDelay: "2s" }} />

        <div className="px-5 relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light px-3.5 py-2 rounded-full text-xs font-semibold mb-5">
            <span className="animate-ring-pulse">📞</span>
            Hotline 24/7 Tersedia
          </div>

          <h1 className="text-[2.35rem] leading-[1.08] font-extrabold mb-5">
            Perawatan <span className="gradient-text">Infuse</span> IMMUNE{" "}
            <span className="gradient-text">Booster</span>
          </h1>

          <p className="text-base text-text-muted leading-relaxed mb-7">
            Layanan home care profesional yang menghadirkan perawat langsung ke rumah Anda. Perawatan Terbaik untuk Keluarga Anda dirumah
            <span className="block mt-2">#CaringwithHeart</span>
          </p>

          <div className="grid grid-cols-1 gap-3 mb-7">
            <a href="tel:082297276864" className="btn-primary w-full justify-center">
              <PhoneIcon />
              0822-9727-6864
            </a>
            <a href="https://wa.me/6282297276864" className="btn-outline w-full justify-center">
              💬 Chat WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-text-muted mb-2">
            <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
              <ShieldIcon />
              <span>Tersertifikasi</span>
            </div>
            <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
              <ClockIcon />
              <span>Respons &lt; 2 Jam</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MOBILE PROMO CARD ═══════ */}
      <section className="relative z-10 px-5 -mt-2 pb-8">
        <div className="glass-card rounded-3xl p-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 text-white">
            <HeartIcon />
          </div>

          <h2 className="text-xl font-bold mb-4">Caring with Heart</h2>

          <img
            src="/images/homecare.jpg"
            alt="Aileen Home Service"
            className="w-full h-auto rounded-2xl"
          />

          <a
            href="https://wa.me/6282297276864"
            className="btn-primary w-full justify-center mt-5"
          >
            💬 Chat WhatsApp
          </a>
        </div>
      </section>

      {/* ═══════ HOTLINE BANNER ═══════ */}
      <section className="px-5 pb-10">
        <div className="animate-pulse-glow rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-primary-light p-1">
          <div className="rounded-3xl bg-gradient-to-r from-primary-dark/90 via-primary/90 to-primary-light/90 p-6">
            <p className="text-sm font-medium text-white/80">Butuh bantuan segera?</p>
            <p className="text-2xl font-extrabold text-white tracking-wide mt-1">0822-9727-6864</p>
            <p className="text-white/80 text-sm mt-2">Gratis • 24 Jam • Tanpa Antri</p>
            <a
              href="tel:0822-9727-6864"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-white text-primary-dark font-bold px-5 py-3 rounded-full hover:bg-white/90 transition-all"
            >
              <PhoneIcon />
              Telepon Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="px-5 py-8">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
              <p className="text-lg font-extrabold gradient-text mb-1 leading-tight break-words">{s.number}</p>
              <p className="text-xs text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="manfaat" className="py-12 relative overflow-hidden">
        <div className="orb w-64 h-64 bg-accent/10 top-0 -right-32" />
        <div className="px-5 relative z-10">
          <p className="text-primary-light font-semibold uppercase tracking-widest text-xs mb-2">
            Manfaat Layanan Kami
          </p>
          <h2 className="text-3xl font-extrabold mb-8">
            Infuse<span className="gradient-text"> IMMUNE</span> Booster
          </h2>

          <div className="space-y-4">
            {services.map((svc) => (
              <article key={svc.title} className="glass-card rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary-light mb-4">
                  <StarIcon />
                </div>
                <h3 className="text-base font-bold mb-2">{svc.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{svc.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section id="keunggulan" className="py-12 relative">
        <div className="px-5 relative z-10">
          <div className="glass-card rounded-3xl p-6 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />
            <p className="text-primary-light font-semibold uppercase tracking-widest text-xs mb-2">
              Mengapa AileenHomeService?
            </p>
            <h2 className="text-3xl font-extrabold mb-4">
              Kepercayaan dari <span className="gradient-text">Ribuan Keluarga</span>
            </h2>
            <p className="text-text-muted leading-relaxed">
              Layanan home care profesional terpercaya untuk seluruh keluarga Dan melayani dengan Hati
            </p>
          </div>

          <div className="space-y-4">
            {advantages.map((adv) => (
              <article key={adv.title} className="glass-card rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary-light">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1">{adv.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{adv.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-5 mt-4 flex items-center justify-between">
            <span className="font-semibold text-sm">Rating</span>
            <div className="flex text-yellow-400">
              {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section id="testimoni" className="py-12 relative overflow-hidden">
        <div className="px-5 relative z-10">
          <p className="text-primary-light font-semibold uppercase tracking-widest text-xs mb-2">Testimoni</p>
          <h2 className="text-3xl font-extrabold mb-8">
            Kata Mereka tentang <span className="gradient-text">AilenCareHome</span>
          </h2>

        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-12 relative">
        <div className="px-5">
          <div className="rounded-3xl overflow-hidden relative animate-gradient-shift bg-gradient-to-br from-primary-dark via-primary to-accent p-px">
            <div className="rounded-3xl bg-gradient-to-br from-primary-dark/95 via-primary/90 to-accent/85 px-6 py-10 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 mb-6 animate-ring-pulse text-white">
                  <PhoneIcon />
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-3">Siap Melayani Keluarga Anda</h2>
                <p className="text-white/80 mb-6">Hubungi hotline kami sekarang dan dapatkan konsultasi gratis.</p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:082297276864"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-bold px-6 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg"
                  >
                    <PhoneIcon />
                    0822-9727-6864
                  </a>
                  <a
                    href="https://wa.me/6282297276864"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-full hover:bg-white/10 transition-all"
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
      <footer id="kontak" className="pt-12 pb-8 border-t border-border-glass relative">
        <div className="px-5">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Aileen HomeService"
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-bold">
                <span className="gradient-text">Aileen</span>HomeService
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Layanan home care profesional terpercaya untuk seluruh keluarga Dan melayani dengan Hati
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-primary-light">Menu</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-text-muted hover:text-primary-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-widest text-primary-light">Kontak</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-text-muted">
                  <PhoneIcon />
                  <span>0822-9727-6864</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-muted">
                  <MailIcon />
                  <span className="break-all">ailenhomeservice@gmail.com</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-muted">
                  <MapPinIcon />
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border-glass text-center">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} AileenHomeService. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ═══════ BACK TO TOP ═══════ */}
      {scrolled && (
        <a
          href="#beranda"
          className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          ↑
        </a>
      )}
    </main>
  );
}
