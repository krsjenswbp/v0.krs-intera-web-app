"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Palette, Settings, Zap, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import IntroMotion from "@/components/intro-motion"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [introCompleted, setIntroCompleted] = useState(false)
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasSeenIntro = sessionStorage.getItem("intro-seen")
    const shouldShowIntro = !hasSeenIntro || performance.navigation.type === 1 // 1 = reload/back

    if (shouldShowIntro) {
      setShowIntro(true)
    } else {
      setIntroCompleted(true)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    setIntroCompleted(true)
    sessionStorage.setItem("intro-seen", "true")
  }

  if (!mounted) {
    return null
  }

  if (showIntro && !introCompleted) {
    return <IntroMotion onComplete={handleIntroComplete} />
  }

  const toolbarItems = [
    {
      icon: Code,
      label: "Code",
      action: () => console.log("Code"),
    },
    { icon: Palette, label: "Design", action: () => console.log("Design") },
    { icon: Globe, label: "Home", action: () => console.log("Home") }, // Main clause in center
    { icon: Zap, label: "Tools", action: () => console.log("Tools") },
    { icon: Settings, label: "Settings", action: () => console.log("Settings") },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-background via-background to-muted/20 ${introCompleted ? "animate-fade-in" : ""}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-background/10 border-b border-white/10 shadow-2xl mx-4 mt-4 rounded-3xl liquid-glass">
        <div className="flex items-center justify-between p-4">
          <div className="font-bold text-2xl text-primary liquid-text">KrsjenSWb</div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-primary transition-all duration-500 text-base liquid-hover">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-all duration-500 text-base liquid-hover">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-all duration-500 text-base liquid-hover">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-all duration-500 text-base liquid-hover">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="liquid-glass-button"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 p-4 space-y-2 backdrop-blur-2xl bg-background/5 liquid-glass-panel">
            <a
              href="#home"
              className="block py-2 hover:text-primary transition-all duration-500 text-base liquid-hover"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 hover:text-primary transition-all duration-500 text-base liquid-hover"
            >
              About
            </a>
            <a
              href="#projects"
              className="block py-2 hover:text-primary transition-all duration-500 text-base liquid-hover"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-primary transition-all duration-500 text-base liquid-hover"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <div className="fixed top-32 left-1/2 transform -translate-x-1/2 z-40">
        <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-full p-1 max-w-lg w-auto relative shadow-2xl liquid-glass-toolbar">
          <div className="flex justify-center items-center gap-1 overflow-x-auto scrollbar-hide px-2">
            {toolbarItems.map((item, index) => {
              const IconComponent = item.icon
              const isHome = item.label === "Home"
              return (
                <div key={index} className="relative flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={item.action}
                    className={`rounded-full px-2 py-1.5 liquid-glass-button transition-all duration-500 hover:scale-110 text-sm whitespace-nowrap min-w-fit liquid-morph ${
                      isHome
                        ? "bg-primary/10 hover:bg-primary/20 border border-primary/20 liquid-glow-primary"
                        : "hover:bg-white/10 liquid-hover-effect"
                    }`}
                    title={item.label}
                  >
                    <IconComponent className="h-4 w-4 mr-1" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-40 container-1190">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent liquid-text-glow animate-liquid-gradient">
                Full-Stack Developer
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed liquid-text">
                I create beautiful, functional web applications with modern technologies and clean code practices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="liquid-glass-button liquid-morph">
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="liquid-glass-button liquid-morph bg-transparent border-white/20"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="liquid-glass-button liquid-hover-effect">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="liquid-glass-button liquid-hover-effect">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="liquid-glass-button liquid-hover-effect">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <Card className="liquid-glass-card max-w-4xl p-8 liquid-morph">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center liquid-text-glow">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-base leading-relaxed mb-6 liquid-text">
                  I'm a passionate full-stack developer with 5+ years of experience building scalable web applications.
                  I specialize in React, Next.js, and Node.js, with a strong focus on user experience and clean
                  architecture.
                </p>
                <p className="text-base leading-relaxed mb-6 liquid-text">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or sharing knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 liquid-glass-tag text-primary rounded-full text-sm liquid-hover-effect"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center liquid-glass-avatar liquid-morph">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center liquid-text-glow">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-Commerce Platform",
                  description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
                  tech: ["React", "Node.js", "MongoDB", "Stripe"],
                },
                {
                  title: "Task Management App",
                  description: "Collaborative project management tool with real-time updates",
                  tech: ["Next.js", "Socket.io", "PostgreSQL"],
                },
                {
                  title: "Weather Dashboard",
                  description: "Beautiful weather app with location-based forecasts and charts",
                  tech: ["React", "Chart.js", "Weather API"],
                },
              ].map((project, index) => (
                /* Enhanced project cards with liquid glass morphing */
                <Card
                  key={index}
                  className="liquid-glass-card p-6 hover:scale-105 transition-all duration-500 liquid-morph liquid-hover-lift"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-4 flex items-center justify-center liquid-glass-project-image">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 liquid-text">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed liquid-text">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 liquid-glass-tag text-muted-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="liquid-glass-button bg-transparent border-white/20">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="ghost" className="liquid-glass-button">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full space-y-8">
            <Card className="liquid-glass-card p-8 liquid-morph">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center liquid-text-glow">Let's Work Together</h2>

              <div className="mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4 liquid-text">Swift App Development</h3>
                  <p className="text-base leading-relaxed mb-6 liquid-text">
                    Recently worked on a Swift playground project featuring interactive web components and modern iOS
                    development patterns.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  {/* Swift App Preview */}
                  <Card className="liquid-glass-card p-6 text-center liquid-morph">
                    <h4 className="text-lg font-medium mb-4 liquid-text">Swift App Preview</h4>
                    <div className="flex flex-col items-center space-y-4 py-4">
                      <Globe className="w-16 h-16 text-primary liquid-glow-primary" />
                      <h1 className="text-xl font-medium liquid-text">Hello, world!</h1>
                      <p className="text-sm text-muted-foreground liquid-text">Original ContentView from MyApp.swift</p>
                    </div>
                  </Card>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium liquid-text">Project Features</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 liquid-glow-primary"></div>
                        <div>
                          <p className="font-medium liquid-text">SwiftUI Interface</p>
                          <p className="text-sm text-muted-foreground liquid-text">
                            Modern iOS app with ContentView and LiveView components
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 liquid-glow-primary"></div>
                        <div>
                          <p className="font-medium liquid-text">Web Integration</p>
                          <p className="text-sm text-muted-foreground liquid-text">
                            WebGL graphics, particle effects, and interactive web components
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 liquid-glow-primary"></div>
                        <div>
                          <p className="font-medium liquid-text">Cross-Platform</p>
                          <p className="text-sm text-muted-foreground liquid-text">
                            Swift Playground with HTML/CSS/JS web assets
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {["Swift", "SwiftUI", "WebGL", "HTML5", "CSS3", "JavaScript"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 liquid-glass-tag text-primary rounded-full text-sm liquid-hover-effect"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-base leading-relaxed mb-6 liquid-text">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="liquid-glass-button liquid-morph">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="liquid-glass-button liquid-morph bg-transparent border-white/20"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 liquid-glass-footer">
        <div className="container-1190 text-center">
          <p className="text-muted-foreground text-sm liquid-text">
            © 2024 KrsjenSWb. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
