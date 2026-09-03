import { useState, useEffect, useRef } from 'react'
import { Bot, Palette, Zap, Handshake, MapPin, ZoomIn } from 'lucide-react'
import diazImg from './assets/diaz.png'
import oracleCertImg from './assets/sertifikat_oracle.jpg'
import webDevCertImg from './assets/sertifikat_web_dev.jpg'
import mindsetCertImg from './assets/sertifikat_mindset_digital.jpg'
import bekalOpatImg from './assets/bekal_opat.png'
import bellsAfterDarkImg from './assets/bells_after_dark.png'
import { MessageSquare, Mail, MessageCircle, Send } from 'lucide-react';
import { Play, PlayCircle, Star, Rocket } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import './index.css'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navAvatarVisible, setNavAvatarVisible] = useState(false)
  const [xpWidth, setXpWidth] = useState(0)
  const [selectedCert, setSelectedCert] = useState(null)
  const heroRef = useRef(null)

  useEffect(() => {
    // XP Bar entry animation
    const timer = setTimeout(() => {
      setXpWidth(98)
    }, 200)

    // Scroll listener for nav avatar
    const handleScroll = () => {
      if (heroRef.current) {
        const threshold =
          heroRef.current.offsetTop + heroRef.current.offsetHeight - 100
        if (window.scrollY > threshold) {
          setNavAvatarVisible(true)
        } else {
          setNavAvatarVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const certificates = [
    {
      id: 1,
      title: 'Fundamental of Assistant Web Developer',
      issuer: 'BLSDM Komdigi Bandung · Digital Talent Academy (DTA)',
      year: '2026',
      badge: 'KOMDIGI · 11.5 JP',
      badgeColor: 'bg-blue text-white',
      image: webDevCertImg,
      pdf: '/certificates/sertifikat_web_dev.pdf',
      description:
        'Pelatihan intensif pengembangan antarmuka web (UI), struktur fungsi pemrograman, dan pengorganisasian kode secara rapi.',
    },
    {
      id: 2,
      title: 'Pengantar Mindset Digital 1: Pola Pikir Digital',
      issuer: 'Pusat Pengembangan Literasi Digital · KOMDIGI',
      year: '2026',
      badge: 'KOMDIGI · MICRO SKILL',
      badgeColor: 'bg-purple text-white',
      image: mindsetCertImg,
      pdf: '/certificates/sertifikat_mindset_digital.pdf',
      description:
        'Pengembangan pola pikir digital untuk adaptasi teknologi modern, inovasi, dan efisiensi kerja di era digital.',
    },
    {
      id: 3,
      title: 'Database Programming with SQL',
      issuer: 'Oracle Academy',
      year: '2026',
      badge: 'ORACLE ACADEMY',
      badgeColor: 'bg-yellow text-ink',
      image: oracleCertImg,
      pdf: null,
      description:
        'Pemrograman basis data relasional tingkat lanjut menggunakan SQL, DDL, DML, dan optimasi query database.',
    },
  ]

  return (
    <div className="font-body text-ink antialiased min-h-screen">
      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-50 bg-ink text-bg border-b-4 border-ink">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="relative flex items-center justify-center w-8 h-8 bg-red border-2 border-bg rounded-sm shrink-0">
              <span className="w-2.5 h-2.5 bg-bg rounded-full blinking"></span>
            </span>

            {/* Appears only after scrolling past the hero */}
            <img
              src={diazImg}
              alt="Diaz Arqila"
              className={`w-8 h-8 rounded-full object-cover border-2 border-yellow shrink-0 ${navAvatarVisible ? 'nav-avatar-visible' : 'nav-avatar-hidden'
                }`}
            />

            <span className="font-pixel text-[11px] leading-tight">
              DIAZ ARQILA
              <br />
              <span className="text-[9px] text-yellow">PORTOFOLIO</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-display font-medium">
            <a href="#about" className="hover:text-yellow transition-colors">
              Profil
            </a>
            <a href="#perks" className="hover:text-yellow transition-colors">
              Fitur
            </a>
            <a href="#education" className="hover:text-yellow transition-colors">
              Riwayat
            </a>
            <a href="#skills" className="hover:text-yellow transition-colors">
              Keahlian
            </a>
            <a href="#certificates" className="hover:text-yellow transition-colors">
              Sertifikat
            </a>
            <a href="#projects" className="hover:text-yellow transition-colors">
              Proyek
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 bg-yellow text-ink border-2 border-bg rounded font-bold btn-press"
            >
              Kontak
            </a>
          </nav>

          {/* Mobile toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden font-pixel text-[10px] px-3 py-2 bg-yellow text-ink border-2 border-bg rounded btn-press"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-4 border-bg bg-ink">
            <nav className="max-w-5xl mx-auto px-5 py-3 flex flex-col gap-1 text-sm font-display font-semibold">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="py-2 border-b border-bg/20 hover:text-yellow"
              >
                ▸ Profil
              </a>
              <a
                href="#perks"
                onClick={closeMobileMenu}
                className="py-2 border-b border-bg/20 hover:text-yellow"
              >
                ▸ Fitur
              </a>
              <a
                href="#education"
                onClick={closeMobileMenu}
                className="py-2 border-b border-bg/20 hover:text-yellow"
              >
                ▸ Riwayat Pendidikan
              </a>
              <a
                href="#skills"
                onClick={closeMobileMenu}
                className="py-2 border-b border-bg/20 hover:text-yellow"
              >
                ▸ Keahlian
              </a>
              <a
                href="#certificates"
                onClick={closeMobileMenu}
                className="py-2 border-b border-bg/20 hover:text-yellow"
              >
                ▸ Sertifikat
              </a>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className="py-2 border-b border-bg/20 hover:text-yellow"
              >
                ▸ Proyek
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="py-2 hover:text-yellow"
              >
                ▸ Kontak
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="max-w-5xl mx-auto px-5 py-14 space-y-24">
        {/* ============ HERO / PLAYER CARD ============ */}
        <section
          id="about"
          ref={heroRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Player portrait with orbiting skill icons */}
          <div className="md:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-[280px] h-[280px] flex items-center justify-center mx-auto">
              {/* orbit ring: rotates continuously, icons counter-rotate to stay upright */}
              <div className="orbit-ring absolute inset-0 w-full h-full pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 w-11 h-11 -ml-[22px] -mt-[22px] pointer-events-auto"
                  style={{ transform: 'rotate(0deg) translateX(126px)' }}
                >
                  <div className="orbit-icon w-11 h-11 flex items-center justify-center bg-red border-2 border-ink rounded-lg shadow-pixel-sm p-2">
                    <img
                      src="https://cdn.simpleicons.org/php/ffffff"
                      alt="PHP"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 w-11 h-11 -ml-[22px] -mt-[22px] pointer-events-auto"
                  style={{ transform: 'rotate(72deg) translateX(126px)' }}
                >
                  <div className="orbit-icon w-11 h-11 flex items-center justify-center bg-yellow border-2 border-ink rounded-lg shadow-pixel-sm p-2">
                    <img
                      src="https://cdn.simpleicons.org/laravel/16213E"
                      alt="Laravel"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 w-11 h-11 -ml-[22px] -mt-[22px] pointer-events-auto"
                  style={{ transform: 'rotate(144deg) translateX(126px)' }}
                >
                  <div className="orbit-icon w-11 h-11 flex items-center justify-center bg-blue border-2 border-ink rounded-lg shadow-pixel-sm p-2">
                    <img
                      src="https://cdn.simpleicons.org/mysql/ffffff"
                      alt="MySQL"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 w-11 h-11 -ml-[22px] -mt-[22px] pointer-events-auto"
                  style={{ transform: 'rotate(216deg) translateX(126px)' }}
                >
                  <div className="orbit-icon w-11 h-11 flex items-center justify-center bg-purple border-2 border-ink rounded-lg shadow-pixel-sm p-2">
                    <img
                      src="https://cdn.simpleicons.org/figma/ffffff"
                      alt="Figma"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 w-11 h-11 -ml-[22px] -mt-[22px] pointer-events-auto"
                  style={{ transform: 'rotate(288deg) translateX(126px)' }}
                >
                  <div className="orbit-icon w-11 h-11 flex items-center justify-center bg-green border-2 border-ink rounded-lg shadow-pixel-sm p-2">
                    <img
                      src="https://cdn.simpleicons.org/git/ffffff"
                      alt="Git"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* center avatar with fixed circular aspect ratio */}
              <div className="relative w-[190px] h-[190px] aspect-square rounded-full overflow-hidden border-4 border-ink shadow-pixel-lg bg-panel scanlines shrink-0 z-0">
                <img
                  src={diazImg}
                  alt="Foto Diaz Arqila"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 font-pixel text-[9px] text-muted whitespace-nowrap">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" strokeWidth={2.5} /> BANDUNG</span>
            </div>
          </div>

          {/* Player stats */}
          <div className="md:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green text-white border-2 border-ink rounded font-pixel text-[9px] shadow-pixel-sm">
              <span className="w-2 h-2 rounded-full bg-white blinking"></span>
              SMK NEGERI 4 BANDUNG — RPL
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              Hi, saya Diaz Arqila
            </h1>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple text-white border-2 border-ink rounded-lg font-display font-bold text-sm shadow-pixel-sm">
                <Bot className="w-4 h-4" strokeWidth={2.2} /> AI Enthusiast
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue text-white border-2 border-ink rounded-lg font-display font-bold text-sm shadow-pixel-sm">
                <Palette className="w-4 h-4" strokeWidth={2.2} /> UI/UX Designer
              </span>
            </div>

            <p className="text-muted text-base leading-relaxed font-medium max-w-xl">
              Saya adalah siswa dari SMK Negeri 4 Bandung yang memiliki
              ketertarikan terhadap dunia IT, dan saya juga memiliki ketertarikan
              terhadap kecerdasan buatan (AI),dan proses desain UI/UX untuk aplikasi yang nyaman digunakan.
            </p>

            {/* XP bar gimmick */}
            <div className="max-w-md pt-1">
              <div className="flex justify-between font-pixel text-[9px] text-muted mb-1">
                <span>LEVEL PROGRESS</span>
                <span id="xpLabel">98%</span>
              </div>
              <div className="h-4 bg-panel border-2 border-ink rounded-full overflow-hidden">
                <div
                  id="xpBar"
                  className="xp-fill h-full bg-gradient-to-r from-yellow via-red to-purple"
                  style={{ width: `${xpWidth}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-press px-5 py-2.5 bg-red text-white border-2 border-ink rounded-lg font-display font-bold shadow-pixel-sm"
              >
              <span className="flex items-center gap-1">  <Play className="w-5 h-5 text-blue-500" /> START — Lihat Proyek </span>
              </a>
              <a
                href="#contact"
                className="btn-press px-5 py-2.5 bg-panel text-ink border-2 border-ink rounded-lg font-display font-bold shadow-pixel-sm"
              >
                 <span className="flex items-center gap-1"><MessageSquare className="w-5 h-5 text-gray-600" /> SELECT — Hubungi Saya </span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ FITUR / PERKS ============ */}
        <section id="perks" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] px-2 py-1 bg-ink text-bg rounded">
              PERKS
            </span>
            <h2 className="font-display text-2xl font-bold">
              Apa yang Saya Bawa ke Tim
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-2"
              style={{ borderWidth: '3px' }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-purple text-white border-2 border-ink rounded-lg">
                <Bot className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-bold">AI-Powered Workflow</h3>
              <p className="text-sm text-muted leading-relaxed">
                Mengoptimalkan AI &amp; prompt engineering untuk akselerasi riset, penyusunan prototipe cepat, serta otomasi alur kerja agar lebih produktif.
              </p>
            </div>
            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-2"
              style={{ borderWidth: '3px' }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue text-white border-2 border-ink rounded-lg">
                <Palette className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-bold">
                Desain Berpusat Pengguna
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Merancang antarmuka UI/UX yang tidak hanya estetis, tetapi juga memprioritaskan alur intuitif, kemudahan navigasi, dan kenyamanan pengguna.
              </p>
            </div>
            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-2"
              style={{ borderWidth: '3px' }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-green text-white border-2 border-ink rounded-lg">
                <Zap className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-bold">Iterasi Cepat</h3>
              <p className="text-sm text-muted leading-relaxed">
                Menerapkan pendekatan agile dengan membangun prototipe fungsional secara cepat, validasi langsung, dan menyempurnakannya secara bertahap.
              </p>
            </div>
            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-2"
              style={{ borderWidth: '3px' }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-red text-white border-2 border-ink rounded-lg">
                <Handshake className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-bold">Kolaboratif</h3>
              <p className="text-sm text-muted leading-relaxed">
                Komunikatif dan andal dalam kerja tim, aktif mengelola kode via Git, serta selalu terbuka terhadap evaluasi dan ide inovatif demi hasil terbaik.
              </p>
            </div>
          </div>
        </section>

        {/* ============ EDUCATION / QUEST LOG ============ */}
        <section id="education" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] px-2 py-1 bg-ink text-bg rounded">
              QUEST LOG
            </span>
            <h2 className="font-display text-2xl font-bold">
              Riwayat Pendidikan
            </h2>
          </div>

          <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-1 before:bg-ink before:rounded-full">
            {/* SD */}
            <div className="relative">
              <span className="absolute -left-8 top-1 w-6 h-6 bg-yellow border-2 border-ink rounded-full flex items-center justify-center text-xs font-pixel">
                1
              </span>
              <div
                className="bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm"
                style={{ borderWidth: '3px' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg">
                    SDS Kartika X-1 Bandung
                  </h3>
                  <span className="font-pixel text-[8px] px-2 py-1 bg-green text-white border border-ink rounded pixel-notch">
                    TAMAT ✓
                  </span>
                </div>
                <p className="text-sm text-muted">Sekolah Dasar</p>
              </div>
            </div>

            {/* SMP */}
            <div className="relative">
              <span className="absolute -left-8 top-1 w-6 h-6 bg-yellow border-2 border-ink rounded-full flex items-center justify-center text-xs font-pixel">
                2
              </span>
              <div
                className="bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm"
                style={{ borderWidth: '3px' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg">
                    SMP Negeri 20 Bandung
                  </h3>
                  <span className="font-pixel text-[8px] px-2 py-1 bg-green text-white border border-ink rounded pixel-notch">
                    TAMAT ✓
                  </span>
                </div>
                <p className="text-sm text-muted">Sekolah Menengah Pertama</p>
              </div>
            </div>

            {/* SMK */}
            <div className="relative">
              <span className="absolute -left-8 top-1 w-6 h-6 bg-red border-2 border-ink rounded-full flex items-center justify-center text-xs font-pixel text-white">
                3
              </span>
              <div
                className="bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm"
                style={{ borderWidth: '3px' }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-bold text-lg">
                    SMK Negeri 4 Bandung
                  </h3>
                  <span className="font-pixel text-[8px] px-2 py-1 bg-blue text-white border border-ink rounded pixel-notch blinking">
                    ON PROGRESS
                  </span>
                </div>
                <p className="text-sm text-muted mb-1">
                  Rekayasa Perangkat Lunak (RPL) · 2024 — 2027
                </p>
                <p className="text-xs text-muted/90 leading-relaxed">
                  Belajar pemrograman web, OOP, basis data relasional, dan
                  pengembangan perangkat lunak terstruktur.
                </p>
                <p className="text-xs text-ink font-mono mt-2 pt-2 border-t border-ink/10 flex items-start gap-1">
                  <MapPin className="w-3 h-3 mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span>Jl. Kliningan No. 6, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SKILLS / INVENTORY ============ */}
        <section id="skills" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] px-2 py-1 bg-ink text-bg rounded">
              INVENTORY
            </span>
            <h2 className="font-display text-2xl font-bold">
              Keahlian &amp; Tools
            </h2>
          </div>
          <p className="text-muted text-sm max-w-xl -mt-2">
            Teknologi utama yang saya gunakan dalam pengembangan aplikasi &amp;
            desain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-3"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center bg-red border-2 border-ink rounded-lg p-2">
                  <img
                    src="https://cdn.simpleicons.org/php/ffffff"
                    alt="PHP"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-pixel text-[7px] px-2 py-1 bg-yellow text-ink border border-ink rounded-full">
                  BACKEND
                </span>
              </div>
              <h3 className="font-display font-bold">PHP</h3>
              <p className="text-xs text-muted leading-relaxed">
                Bahasa utama untuk membangun logika backend, mengolah data, dan
                menghubungkan aplikasi ke database.
              </p>
            </div>

            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-3"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center bg-yellow border-2 border-ink rounded-lg p-2">
                  <img
                    src="https://cdn.simpleicons.org/laravel/16213E"
                    alt="Laravel"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-pixel text-[7px] px-2 py-1 bg-yellow text-ink border border-ink rounded-full">
                  FRAMEWORK
                </span>
              </div>
              <h3 className="font-display font-bold">Laravel</h3>
              <p className="text-xs text-muted leading-relaxed">
                Membangun aplikasi web terstruktur dengan routing, autentikasi,
                dan integrasi database secara rapi.
              </p>
            </div>

            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-3"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center bg-blue border-2 border-ink rounded-lg p-2">
                  <img
                    src="https://cdn.simpleicons.org/mysql/ffffff"
                    alt="MySQL"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-pixel text-[7px] px-2 py-1 bg-yellow text-ink border border-ink rounded-full">
                  DATABASE
                </span>
              </div>
              <h3 className="font-display font-bold">MySQL</h3>
              <p className="text-xs text-muted leading-relaxed">
                Perancangan struktur tabel, relasi antar data, dan query untuk
                kebutuhan aplikasi.
              </p>
            </div>

            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-3"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center bg-purple border-2 border-ink rounded-lg p-2">
                  <img
                    src="https://cdn.simpleicons.org/figma/ffffff"
                    alt="Figma"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-pixel text-[7px] px-2 py-1 bg-yellow text-ink border border-ink rounded-full">
                  DESIGN
                </span>
              </div>
              <h3 className="font-display font-bold">Figma</h3>
              <p className="text-xs text-muted leading-relaxed">
                Merancang wireframe, prototipe, dan tampilan antarmuka yang siap
                diimplementasikan.
              </p>
            </div>

            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-3"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center bg-green border-2 border-ink rounded-lg p-2">
                  <img
                    src="https://cdn.simpleicons.org/git/ffffff"
                    alt="Git"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-pixel text-[7px] px-2 py-1 bg-yellow text-ink border border-ink rounded-full">
                  TOOLS
                </span>
              </div>
              <h3 className="font-display font-bold">Git &amp; GitHub</h3>
              <p className="text-xs text-muted leading-relaxed">
                Version control untuk kerja tim, tracking perubahan kode, dan
                kolaborasi proyek.
              </p>
            </div>

            <div
              className="card-lift bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm space-y-3"
              style={{ borderWidth: '3px' }}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 flex items-center justify-center bg-ink text-white border-2 border-ink rounded-lg p-2">
                  <Bot className="w-full h-full" strokeWidth={2.2} />
                </div>
                <span className="font-pixel text-[7px] px-2 py-1 bg-yellow text-ink border border-ink rounded-full">
                  AI
                </span>
              </div>
              <h3 className="font-display font-bold">Prompt Engineering</h3>
              <p className="text-xs text-muted leading-relaxed">
                Memanfaatkan LLM untuk riset, prototyping cepat, dan otomasi
                tugas pengembangan.
              </p>
            </div>
          </div>

          {/* Compact list of the rest of the stack */}
          <div
            className="bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm"
            style={{ borderWidth: '3px' }}
          >
            <h3 className="font-display font-bold text-sm mb-3 text-muted">
              Skill &amp; tools lainnya
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                Java
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                HTML/CSS
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                Oracle Apex
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                Unity
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                Blender
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                Postman
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                UI/UX Design
              </span>
              <span className="px-2.5 py-1 bg-bg border border-ink rounded font-mono text-xs">
                Wireframing
              </span>
            </div>
          </div>
        </section>

        {/* ============ SERTIFIKAT / TROPHY CASE ============ */}
        <section id="certificates" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] px-2 py-1 bg-ink text-bg rounded">
              TROPHY CASE
            </span>
            <h2 className="font-display text-2xl font-bold">
              Sertifikat &amp; Pelatihan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="card-lift bg-panel border-4 border-ink rounded-2xl overflow-hidden shadow-pixel-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className="relative group cursor-pointer overflow-hidden border-b-4 border-ink bg-bg"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={`Sertifikat ${cert.title}`}
                      className="h-44 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 font-pixel text-[9px] px-3 py-1.5 bg-yellow text-ink border-2 border-ink rounded-lg shadow-pixel-sm">
                        <ZoomIn className="w-3.5 h-3.5" strokeWidth={2.5} /> ZOOM
                      </span>
                    </div>
                    <span
                      className={`absolute top-2.5 right-2.5 font-pixel text-[8px] px-2 py-1 border-2 border-ink rounded pixel-notch ${cert.badgeColor}`}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-muted font-bold">
                        {cert.year}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted/90 pt-1 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="btn-press flex-1 text-center py-2 bg-panel text-ink border-2 border-ink rounded-lg font-display font-bold text-xs shadow-pixel-sm"
                  >
                    Preview
                  </button>
                  {cert.pdf && (
                    <a
  href={cert.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-press flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-yellow text-ink border-2 border-ink rounded-lg font-display font-bold text-xs shadow-pixel-sm"
>
  <span>Buka PDF</span>
  <ExternalLink className="w-4 h-4 p-0.5 bg-blue text-white rounded shrink-0" />
</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ PROJECTS / CARTRIDGES ============ */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] px-2 py-1 bg-ink text-bg rounded">
              CARTRIDGES
            </span>
            <h2 className="font-display text-2xl font-bold">Project</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Bekal Opat */}
            <div className="card-lift bg-panel border-4 border-ink rounded-2xl overflow-hidden shadow-pixel-sm flex flex-col justify-between">
              <div>
                <div className="relative bg-[#201d1e] flex items-center justify-center p-4 border-b-4 border-ink h-48 sm:h-52">
                  <img
                    src={bekalOpatImg}
                    alt="Logo & Tampilan proyek Web Bekal Opat"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-3 right-3 font-pixel text-[8px] px-2 py-1 bg-blue text-white border-2 border-ink rounded pixel-notch blinking">
                    SEDANG DIKERJAKAN
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-xs font-mono text-muted">
                    Web Application
                  </div>
                  <h3 className="font-display font-bold text-lg leading-snug">
                    Bekal Opat : Platform Portal Informatif &amp; Digitalisasi Sekolah
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Web aplikasi portal resmi yang dirancang untuk mendukung ekosistem digital SMKN 4 Bandung. Platform ini menyajikan pusat informasi terpadu, pengumuman sekolah, serta kemudahan akses layanan digital bagi para siswa, guru, dan masyarakat umum dengan antarmuka yang modern dan responsif.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    Web App
                  </span>
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    SMKN 4 Bandung
                  </span>
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2: Bell's After Dark */}
            <div className="card-lift bg-panel border-4 border-ink rounded-2xl overflow-hidden shadow-pixel-sm flex flex-col justify-between">
              <div>
                <div className="relative bg-black flex items-center justify-center border-b-4 border-ink h-48 sm:h-52 overflow-hidden p-4">
                  <img
                    src={bellsAfterDarkImg}
                    alt="Logo proyek Game Bell's After Dark"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-3 right-3 font-pixel text-[8px] px-2 py-1 bg-purple text-white border-2 border-ink rounded pixel-notch">
                    GAME PROJECT
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-xs font-mono text-muted">
                    Game Designer 
                  </div>
                  <h3 className="font-display font-bold text-lg leading-snug">
                    Bell's After Dark
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Bells After Dark adalah game PC single-player bergenre 3D atmospheric horror &amp; narrative puzzle dengan sudut pandang orang pertama (First-Person). Game ini mengutamakan ketegangan suasana audio-visual dan eksplorasi lingkungan tanpa mengandalkan jumpscare murah. Pemain mengontrol Alya, seorang siswi yang terjebak di area Forest School setelah terbangun di tengah malam. Untuk melarikan diri, pemain harus mengoleksi item, memecahkan teka-teki interaktif yang terikat dengan alur cerita, serta bersembunyi dari kejaran sosok gaib demi menguak misteri kelam hilangnya sejarah sekolah pada tahun 1998.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    Unity
                  </span>
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    3D Game
                  </span>
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    Blender
                  </span>
                  <span className="px-2 py-0.5 rounded bg-bg border border-ink font-mono text-[11px]">
                    C#
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] px-2 py-1 bg-ink text-bg rounded">
              CONTINUE?
            </span>
            <h2 className="font-display text-2xl font-bold">Kontak</h2>
          </div>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Klik salah satu ikon di bawah untuk langsung terhubung dengan saya.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diazarqila172@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Kirim Email via Gmail"
              className="btn-press flex items-center gap-3 bg-panel border-3 border-ink rounded-xl p-4 shadow-pixel-sm"
              style={{ borderWidth: '3px' }}
            >
              <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-red text-white border-2 border-ink rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3 7 9 6 9-6"
                  />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-pixel text-[8px] text-muted">
                  EMAIL
                </span>
              </span>
            </a>

            <a
              href="https://github.com/diazarq"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="btn-press flex items-center gap-3 bg-panel border-3 border-ink rounded-xl p-4 shadow-pixel-sm"
              style={{ borderWidth: '3px' }}
            >
              <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-ink text-white border-2 border-ink rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.77 10.78.57.1.78-.25.78-.55v-2c-3.16.69-3.83-1.36-3.83-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.36.77 1.07.77 2.15v3.19c0 .3.21.66.79.55 4.5-1.51 7.76-5.76 7.76-10.78C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-pixel text-[8px] text-muted">
                  GITHUB
                </span>
              </span>
            </a>

            <a
              href="https://instagram.com/diazarqila_10"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="btn-press flex items-center gap-3 bg-panel border-3 border-ink rounded-xl p-4 shadow-pixel-sm"
              style={{ borderWidth: '3px' }}
            >
              <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-purple text-white border-2 border-ink rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.2" cy="6.8" r="1" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-pixel text-[8px] text-muted">
                  INSTAGRAM
                </span>
              </span>
            </a>

            <a
              href="https://wa.me/6289669868172"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="btn-press flex items-center gap-3 bg-panel border-3 border-ink rounded-xl p-4 shadow-pixel-sm"
              style={{ borderWidth: '3px' }}
            >
              <span className="w-11 h-11 shrink-0 flex items-center justify-center bg-green text-white border-2 border-ink rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.29-1.38a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.12h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.55 3.71-8.26 8.27-8.26a8.2 8.2 0 0 1 5.85 2.43 8.19 8.19 0 0 1 2.42 5.83c0 4.56-3.71 8.27-8.28 8.27Zm4.53-6.2c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.15-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.06 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-pixel text-[8px] text-muted">
                  WHATSAPP
                </span>
              </span>
            </a>
          </div>

          {/* Location + map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div
              className="bg-panel border-3 border-ink rounded-xl p-5 shadow-pixel-sm font-mono text-xs space-y-2"
              style={{ borderWidth: '3px' }}
            >
              <span className="text-muted block border-b border-ink/10 pb-2 font-bold font-display text-sm">
               <span className="flex items-center gap-1"> <MapPin className="w-3 h-3" strokeWidth={2.5} />Lokasi &amp; Institusi</span> 
              </span>
              <p className="text-ink font-bold text-sm pt-1">
                SMK Negeri 4 Bandung
              </p>
              <p className="text-muted">
                Jl. Kliningan No. 6, Turangga, Kec. Lengkong, Kota Bandung, Jawa
                Barat 40264
              </p>
              <p className="text-muted pt-2">Domisili: Bandung, Indonesia</p>
            </div>

            <div
              className="border-3 border-ink rounded-xl overflow-hidden shadow-pixel-sm"
              style={{ borderWidth: '3px' }}
            >
              <iframe
                title="Peta lokasi SMK Negeri 4 Bandung"
                src="https://www.google.com/maps?q=SMK+Negeri+4+Bandung,+Jl.+Kliningan+No.6,+Turangga,+Lengkong,+Bandung&output=embed"
                className="w-full h-full min-h-[220px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t-4 border-ink bg-ink text-bg py-8 text-center">
        <p className="font-pixel text-[9px] leading-relaxed">
          © 2026 DIAZ ARQILA <span className="text-yellow">·</span> SAVE FILE
          UPDATED
          <br className="sm:hidden" />
          <span className="text-muted"> · </span> TO BE CONTINUED...
        </p>
      </footer>

      {/* ============ CERTIFICATE PREVIEW MODAL ============ */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-panel border-4 border-ink rounded-2xl max-w-2xl w-full p-5 shadow-pixel-lg space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b-2 border-ink/10 pb-3">
              <div>
                <span
                  className={`inline-block font-pixel text-[8px] px-2 py-1 border border-ink rounded pixel-notch mb-1 ${selectedCert.badgeColor}`}
                >
                  {selectedCert.badge}
                </span>
                <h3 className="font-display font-bold text-lg leading-snug">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-muted">{selectedCert.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="font-pixel text-xs px-2.5 py-1.5 bg-red text-white border-2 border-ink rounded btn-press"
              >
                ✕
              </button>
            </div>

            <div className="border-2 border-ink rounded-xl overflow-hidden bg-bg">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="font-mono text-xs text-muted font-bold">
                Tahun: {selectedCert.year}
              </span>
              <div className="flex gap-2">
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press px-4 py-2 bg-yellow text-ink border-2 border-ink rounded-lg font-display font-bold text-xs shadow-pixel-sm"
                  >
                    Buka Dokumen PDF ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="btn-press px-4 py-2 bg-ink text-white border-2 border-ink rounded-lg font-display font-bold text-xs"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
