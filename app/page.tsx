"use client"

import { useState, useEffect } from "react"
import { Github, Mail, Phone, MapPin, ChevronDown } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "education", "skills", "organization", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
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
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "HTML", level: 90, icon: "🌐" },
    { name: "CSS", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "React", level: 75, icon: "⚛️" },
    { name: "Laravel", level: 70, icon: "🔧" },
    { name: "Flutter", level: 60, icon: "📱" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Radito<span className="text-purple-400">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Education", "Skills", "Organization", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">FR</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">Fransiscus Radito</h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 animate-fade-in-delay">Putra Arindika</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            IT Student & Web Developer specializing in modern web technologies
          </p>
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in-delay-3">
            <a
              href="mailto:radito.putra26@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
            <a
              href="https://github.com/RaditoPutra"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Objective</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Sebagai mahasiswa Informatika di Universitas Atma Jaya Yogyakarta, saya mendalami pengembangan web (PHP
                & React) dan basis data. Memiliki kemampuan problem-solving dan semangat belajar tinggi, saya siap
                berkontribusi dalam proyek teknologi inovatif.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={20} className="text-purple-400" />
                  <span>Sidokarto, Godean, Sleman, DIY</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={20} className="text-purple-400" />
                  <span>0821-3743-7227</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={20} className="text-purple-400" />
                  <span>radito.putra26@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Communication</h4>
                <p className="text-gray-300 text-sm">
                  Mampu berkomunikasi secara efektif dalam beragam konteks akademik dan tim. Berpengalaman dalam
                  menjelaskan konsep teknis yang kompleks kepada mahasiswa.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Leadership</h4>
                <p className="text-gray-300 text-sm">
                  Memiliki inisiatif dan jiwa kepemimpinan dalam lingkungan akademik dan organisasi. Berpengalaman
                  membimbing mahasiswa dan memimpin event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Project Developer</h3>
                  <p className="text-purple-400">Universitas Atma Jaya Yogyakarta</p>
                </div>
                <span className="text-gray-400 text-sm">Feb 2025 – Jun 2025</span>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Asisten Dosen</h3>
                  <p className="text-purple-400">Universitas Atma Jaya Yogyakarta</p>
                </div>
                <span className="text-gray-400 text-sm">Sep 2024 – Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Information Technology</h3>
                  <p className="text-purple-400">Universitas Atma Jaya Yogyakarta</p>
                </div>
                <span className="text-gray-400 text-sm">Current</span>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">High School Diploma</h3>
                  <p className="text-purple-400">SMAN 1 Sedayu</p>
                </div>
                <span className="text-gray-400 text-sm">2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section id="organization" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Organization</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Koordinator Divisi Pengabdian Masyarakat</h3>
                  <p className="text-purple-400">Atma Jaya Movement</p>
                </div>
                <span className="text-gray-400 text-sm">Sep 2024 – Juni 2025</span>
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Ketua Pelaksana Online Campaign</h3>
                  <p className="text-purple-400">Atma Jaya Movement</p>
                </div>
                <span className="text-gray-400 text-sm">Nov 2023 – Januari 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect and create something amazing together!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:radito.putra26@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors duration-200 flex items-center space-x-3"
            >
              <Mail size={24} />
              <span>Send Email</span>
            </a>
            <a
              href="https://github.com/RaditoPutra"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full transition-colors duration-200 flex items-center space-x-3"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Fransiscus Radito Putra Arindika. Built with HTML, CSS & JavaScript.</p>
        </div>
      </footer>
    </div>
  )
}
