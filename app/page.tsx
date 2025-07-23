"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Github, Mail, Phone, MapPin, ChevronDown, Briefcase, Users, ExternalLink } from "lucide-react"
import React from 'react';

// --- Interface & Komponen Pembantu ---

interface InViewAnimatedProps {
  children: React.ReactNode;
  animationClass: string;
  delay?: number;
  threshold?: number;
}

interface SectionHeadingProps {
  children: React.ReactNode;
}

const InViewAnimated: React.FC<InViewAnimatedProps> = ({ children, animationClass, delay = 0, threshold = 0.3 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: threshold }
    )

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animationClass : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => (
  <h2 className="text-4xl font-bold text-white text-center mb-12 relative z-10 animate-fade-in-up">
    {children}
    <span className="block w-24 h-1 bg-[#DA9100] mx-auto mt-4 rounded-full animate-grow-x"></span>
  </h2>
)


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // --- Refs untuk setiap bagian ---
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null), // MODIFIKASI: Ref untuk projek
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }
  
  // --- Item Navigasi ---
  const navItems = ["Home", "About", "Pengalaman", "Pendidikan", "Skills", "Projek", "Kontak"]; 

  // --- Data untuk Skills & Projects ---
  const skills = [
    { name: "HTML", level: 90, icon: "🌐" },
    { name: "CSS", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "React", level: 75, icon: "⚛️" },
    { name: "Laravel", level: 70, icon: "🔧" },
    { name: "Flutter", level: 60, icon: "📱" },
  ]
  
  const projects = [
    {
      title: "ReuseMart - Marketplace Web & Mobile",
      description: "Mengembangkan aplikasi web yang terintegrasi dengan mobile dalam bidang marketplace sebagai proyek kelompok (3 orang) selama perkuliahan 1 semester. Fokus pada integrasi sistem dan fungsionalitas jual beli barang bekas. Fungsionalitas meliputi pengelolaan dari sisi pegawai hingga owner untuk laporan penjualan bulanan.",
      imageUrl: "/images/reusemart.png", 
      techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS", "Flutter"],
      liveUrl: "#", 
      repoUrl: "https://github.com/gbrl-mar/reusemart", 
    },
    {
      title: "Layar Atma - Website Tiket Bioskop",
      description: "Berkolaborasi dalam tim 4 orang untuk membangun 'Layar Atma', sebuah aplikasi web pemesanan tiket bioskop. Berkontribusi pada pengembangan full-stack, mulai dari backend API hingga antarmuka pengguna (frontend) yang interaktif menggunakan React. Proyek ini mencakup manajemen film oleh admin, daftar film, dan sistem profil pengguna.",
      imageUrl: "/images/bioskop.png",
      techStack: ["React", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      liveUrl: "#", 
      repoUrl: undefined, 
    },
    {
      title: "Peta Interaktif Potensi Desa Geluntung",
      description: "Berkolaborasi dengan mahasiswa Arsitektur dalam program KKN untuk membuat website peta interaktif. Bertanggung jawab penuh pada pengembangan web, menerjemahkan data pemetaan menjadi visualisasi digital menggunakan Leaflet.js untuk menampilkan potensi wilayah desa secara online.",
      imageUrl: "/images/peta.png", 
      techStack: ["JavaScript", "Leaflet.js", "HTML", "CSS"],
      liveUrl: "https://raditoputra.github.io/peta-geluntung.github.io/", 
      repoUrl: "https://github.com/RaditoPutra/peta-geluntung.github.io",
    },
  ];

  // --- Logika untuk Scroll & Navigasi ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const current = navItems.map(item => {
          if(item === 'Home') return 'home';
          if(item === 'About') return 'about';
          if(item === 'Pengalaman') return 'experience';
          if(item === 'Projek') return 'projects'; // MODIFIKASI: Tambah mapping untuk projek
          if(item === 'Pendidikan') return 'education';
          if(item === 'Skills') return 'skills';
          if(item === 'Kontak') return 'contact';
          return item.toLowerCase();
        }).find((sectionId) => {
        const key = sectionId as keyof typeof sectionRefs;
        const element = sectionRefs[key]?.current;
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionRefs, navItems])

  const scrollToSection = useCallback((sectionId: string) => {
    const key = sectionId as keyof typeof sectionRefs;
    const element = sectionRefs[key]?.current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Beri offset agar tidak tertutup nav
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }, [sectionRefs])

  // MODIFIKASI: Perbarui mapping untuk konsistensi
  const navItemMapping: { [key: string]: string } = {
    'Home': 'home',
    'About': 'about',
    'Pengalaman': 'experience',
    'Projek': 'projects', 
    'Pendidikan': 'education',
    'Skills': 'skills',
    'Kontak': 'contact'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E272E] via-[#2D3A44] to-[#1E272E] text-gray-200 font-sans relative overflow-hidden">
      {/* Latar Belakang Gradien */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-80 h-80 rounded-full bg-[#DA9100] blur-3xl -top-20 -left-20 animate-blob mix-blend-multiply filter"></div>
        <div className="absolute w-80 h-80 rounded-full bg-[#F7C59F] blur-3xl -bottom-20 -right-20 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#DA9100] blur-3xl top-1/4 left-1/4 animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
      </div>

      {/* Navigasi */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-xl" : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-white animate-fade-in-left">
            Radito<span className="text-[#DA9100]">.dev</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const sectionId = navItemMapping[item as keyof typeof navItemMapping] || item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${activeSection === sectionId ? "text-[#DA9100]" : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item}
                  {activeSection === sectionId && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#DA9100] rounded-full animate-fade-in-underline" />
                  )}
                </button>
              )
            })}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden bg-slate-900/90 backdrop-blur-md px-4 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const sectionId = navItemMapping[item as keyof typeof navItemMapping] || item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-left ${activeSection === sectionId ? "bg-[#DA9100] text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white"
                    }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      <main>
        {/* Bagian Hero */}
        <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* ... Konten Hero Section Anda tidak berubah ... */}
            <div className="absolute inset-0 bg-dots opacity-10"></div>
            <div className="text-center z-10 px-4">
                <div className="mb-8 animate-scale-in">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#DA9100] to-[#F7C59F] p-1.5 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-[#1E272E] flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/foto.jpg"
                                alt="Foto Profil"
                                className="w-full h-full object-cover rounded-full animate-fade-in-delay-half"
                            />
                        </div>
                    </div>
                </div>
                <h1
                    className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight animate-fade-in-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    Fransiscus <span className="text-[#DA9100]">Radito</span>
                </h1>
                <h2
                    className="text-2xl md:text-3xl text-[#F7C59F] mb-6 font-semibold animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                >
                    Putra Arindika
                </h2>
                <p
                    className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    Mahasiswa Informatika yang berfokus pada Software Developer dengan spesialisasi teknologi web modern dan semangat untuk menciptakan pengalaman digital yang berdampak.
                </p>
                <div
                    className="flex justify-center space-x-4 mb-12 animate-fade-in-up"
                    style={{ animationDelay: '0.8s' }}
                >
                    <a
                        href="mailto:radito.putra26@gmail.com"
                        className="bg-[#DA9100] hover:bg-[#A96D00] text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-[#DA9100]/50"
                    >
                        <Mail size={24} />
                        <span>Hubungi Saya</span>
                    </a>
                    <a
                        href="https://github.com/RaditoPutra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#F7C59F] text-[#F7C59F] hover:bg-[#F7C59F] hover:text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-[#DA9100]/50"
                    >
                        <Github size={24} />
                        <span>GitHub</span>
                    </a>
                </div>
                <button
                    onClick={() => scrollToSection("about")}
                    className="animate-bounce text-[#DA9100] hover:text-[#A96D00] transition-colors duration-200"
                    style={{ animationDelay: '1s' }}
                >
                    <ChevronDown size={36} />
                </button>
            </div>
        </section>

        {/* Bagian Tentang Saya */}
        <section id="about" ref={sectionRefs.about} className="py-20 px-4 relative z-10">
            {/* ... Konten About Section Anda tidak berubah ... */}
            <div className="max-w-6xl mx-auto">
                <SectionHeading>Tentang Saya</SectionHeading>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <InViewAnimated animationClass="animate-fade-in-right" delay={0.1}>
                        <h3 className="text-2xl font-semibold text-[#DA9100] mb-4">Tujuan</h3>
                        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                            Sebagai mahasiswa Informatika di Universitas Atma Jaya Yogyakarta, saya mendalami pengembangan web (PHP
                            & React) dan basis data. Memiliki kemampuan pemecahan masalah dan semangat belajar tinggi, saya siap
                            berkontribusi dalam proyek teknologi inovatif.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin size={22} className="text-[#DA9100]" />
                                <span>Sidokarto, Godean, Sleman, DIY</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone size={22} className="text-[#DA9100]" />
                                <span>0821-3743-7227</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail size={22} className="text-[#DA9100]" />
                                <span>radito.putra26@gmail.com</span>
                            </div>
                        </div>
                    </InViewAnimated>
                    <div className="space-y-6">
                        <InViewAnimated animationClass="animate-fade-in-up" delay={0.3}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-300 transform hover:scale-[1.02] shadow-xl">
                                <h4 className="text-xl font-semibold text-[#DA9100] mb-3">Komunikasi</h4>
                                <p className="text-gray-300 text-sm">
                                    Mampu berkomunikasi secara efektif dalam beragam konteks akademik dan tim. Berpengalaman dalam
                                    menjelaskan konsep teknis yang kompleks kepada mahasiswa.
                                </p>
                            </div>
                        </InViewAnimated>
                        <InViewAnimated animationClass="animate-fade-in-up" delay={0.5}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-300 transform hover:scale-[1.02] shadow-xl">
                                <h4 className="text-xl font-semibold text-[#DA9100] mb-3">Kepemimpinan</h4>
                                <p className="text-gray-300 text-sm">
                                    Memiliki inisiatif dan jiwa kepemimpinan dalam lingkungan akademik dan organisasi. Berpengalaman
                                    membimbing mahasiswa dan memimpin acara.
                                </p>
                            </div>
                        </InViewAnimated>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Bagian Pengalaman & Organisasi */}
        <section id="experience" ref={sectionRefs.experience} className="py-20 px-4 bg-[#1E272E]/30 relative z-10">
            {/* ... Konten Experience Section Anda tidak berubah ... */}
            <div className="max-w-6xl mx-auto">
                <SectionHeading>Pengalaman & Organisasi</SectionHeading>
                <div className="mb-16">
                    <h3 className="flex items-center text-3xl font-bold text-[#F7C59F] mb-8 pl-4">
                        <Briefcase className="mr-4" />
                        Pengalaman Kerja
                    </h3>
                    <div className="space-y-8">
                        <InViewAnimated animationClass="animate-fade-in-up" delay={0.1}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-200">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Pengembang Proyek</h4>
                                        <p className="text-[#DA9100]">Universitas Atma Jaya Yogyakarta</p>
                                    </div>
                                    <span className="text-gray-400 text-sm mt-2 md:mt-0">Feb 2025 – Jun 2025</span>
                                </div>
                            </div>
                        </InViewAnimated>
                        <InViewAnimated animationClass="animate-fade-in-up" delay={0.3}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-200">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Asisten Dosen</h4>
                                        <p className="text-[#DA9100]">Universitas Atma Jaya Yogyakarta</p>
                                    </div>
                                    <span className="text-gray-400 text-sm mt-2 md:mt-0">Sep 2024 – Des 2024</span>
                                </div>
                            </div>
                        </InViewAnimated>
                    </div>
                </div>

                <div>
                    <h3 className="flex items-center text-3xl font-bold text-[#F7C59F] mb-8 pl-4">
                        <Users className="mr-4" />
                        Pengalaman Organisasi
                    </h3>
                    <div className="space-y-8">
                        <InViewAnimated animationClass="animate-fade-in-up" delay={0.1}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-200">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Koordinator Divisi Pengabdian Masyarakat</h4>
                                        <p className="text-[#DA9100]">Atma Jaya Movement</p>
                                    </div>
                                    <span className="text-gray-400 text-sm mt-2 md:mt-0">Sep 2024 – Juni 2025</span>
                                </div>
                            </div>
                        </InViewAnimated>
                        <InViewAnimated animationClass="animate-fade-in-up" delay={0.3}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-200">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">Ketua Pelaksana Kampanye Online</h4>
                                        <p className="text-[#DA9100]">Atma Jaya Movement</p>
                                    </div>
                                    <span className="text-gray-400 text-sm mt-2 md:mt-0">Nov 2023 – Jan 2024</span>
                                </div>
                            </div>
                        </InViewAnimated>
                    </div>
                </div>
            </div>
        </section>

        {/* Bagian Pendidikan */}
        <section id="education" ref={sectionRefs.education} className="py-20 px-4 bg-[#1E272E]/30 relative z-10">
            {/* ... Konten Education Section Anda tidak berubah ... */}
            <div className="max-w-6xl mx-auto">
                <SectionHeading>Pendidikan</SectionHeading>
                <div className="space-y-8">
                    <InViewAnimated animationClass="animate-fade-in-up" delay={0.1}>
                        <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-200">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Sarjana Teknik Informatika</h3>
                                    <p className="text-[#DA9100]">Universitas Atma Jaya Yogyakarta</p>
                                </div>
                                <span className="text-gray-400 text-sm mt-2 md:mt-0">Saat ini</span>
                            </div>
                        </div>
                    </InViewAnimated>
                    <InViewAnimated animationClass="animate-fade-in-up" delay={0.3}>
                        <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-colors duration-200">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">SMA (Matematika dan Ilmu Pengetahuan Alam)</h3>
                                    <p className="text-[#DA9100]">SMAN 1 Sedayu</p>
                                </div>
                                <span className="text-gray-400 text-sm mt-2 md:mt-0">2022</span>
                            </div>
                        </div>
                    </InViewAnimated>
                </div>
            </div>
        </section>

        {/* Bagian Keahlian */}
        <section id="skills" ref={sectionRefs.skills} className="py-20 px-4 relative z-10">
            {/* ... Konten Skills Section Anda tidak berubah ... */}
            <div className="max-w-6xl mx-auto">
                <SectionHeading>Keahlian</SectionHeading>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <InViewAnimated key={skill.name} animationClass="animate-fade-in-up" delay={index * 0.1}>
                            <div className="bg-[#2D3A44]/50 p-6 rounded-xl border border-[#DA9100]/20">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-3xl">{skill.icon}</span>
                                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                                    </div>
                                    <span className="text-[#DA9100] font-semibold text-lg">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-[#DA9100] to-[#F7C59F] h-2.5 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </InViewAnimated>
                    ))}
                </div>
            </div>
        </section>

        {/*Bagian Projek */}
        <section id="projects" ref={sectionRefs.projects} className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Projek Saya</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <InViewAnimated
                  key={index}
                  animationClass="animate-fade-in-up"
                  delay={index * 0.15}
                >
                  <div className="bg-[#2D3A44]/50 rounded-xl overflow-hidden group border border-[#DA9100]/20 hover:border-[#F7C59F]/40 transition-all duration-300 transform hover:-translate-y-2 shadow-lg flex flex-col h-full">
                    <div className="overflow-hidden">
                        <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-slate-700 text-[#DA9100] text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-slate-700/50">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-[#F7C59F] hover:text-[#DA9100] transition-colors"
                          >
                            <ExternalLink size={18} className="mr-2" />
                            Demo
                          </a>
                        )}
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-[#F7C59F] hover:text-[#DA9100] transition-colors"
                        >
                          <Github size={18} className="mr-2" />
                          Kode
                        </a>
                      </div>
                    </div>
                  </div>
                </InViewAnimated>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Kontak */}
        <section id="contact" ref={sectionRefs.contact} className="py-20 px-4 bg-[#1E272E]/30 relative z-10">
            {/* ... Konten Contact Section Anda tidak berubah ... */}
            <div className="max-w-6xl mx-auto text-center">
                <SectionHeading>Hubungi Saya</SectionHeading>
                <InViewAnimated animationClass="animate-fade-in-up" delay={0.1}>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Tertarik untuk berkolaborasi atau memiliki proyek? Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!
                    </p>
                </InViewAnimated>
                <InViewAnimated animationClass="animate-fade-in-up" delay={0.3}>
                    <div className="flex justify-center flex-wrap gap-6">
                        <a
                            href="mailto:radito.putra26@gmail.com"
                            className="bg-[#DA9100] hover:bg-[#A96D00] text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-[#DA9100]/50"
                        >
                            <Mail size={24} />
                            <span>Kirim Email</span>
                        </a>
                        <a
                            href="https://github.com/RaditoPutra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#F7C59F] text-[#F7C59F] hover:bg-[#F7C59F] hover:text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3"
                        >
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </InViewAnimated>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Fransiscus Radito Putra Arindika. Dibuat dengan <span className="text-[#DA9100]">Next.js</span> & <span className="text-[#F7C59F]">Tailwind CSS</span>.</p>
        </div>
      </footer>
    </div>
  )
}