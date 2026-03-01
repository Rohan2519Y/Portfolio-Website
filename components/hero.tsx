import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Subtle background elements */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl opacity-40 animate-subtle-glow" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl opacity-40 animate-subtle-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10 max-w-5xl">
        <div className="space-y-10 text-center">
          <div className="space-y-8 animate-in-subtle">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-lg bg-primary/8 dark:bg-primary/12 text-primary text-xs font-bold uppercase tracking-wide">
                Junior Software Developer
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2">
                Rohan Kumar
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-primary">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Specialized in building scalable, high-performance web and mobile applications. Expertise in React.js, Node.js, Express.js, and React Native with a focus on clean code and user-centric design.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 justify-center items-center pt-4 animate-in-subtle" style={{ animationDelay: '0.2s' }}>
            <Link
              href="mailto:rohankumar17645@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-md transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download="Rohan_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-3 justify-center pt-4 animate-in-subtle" style={{ animationDelay: '0.4s' }}>
            <Link
              href="https://github.com/Rohan2519Y"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/rohan2519y"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:rohankumar17645@gmail.com"
              className="p-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pt-12 animate-bounce">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
