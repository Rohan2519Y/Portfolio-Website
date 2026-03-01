import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-14 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Rohan Kumar</h3>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">Connect</h4>
            <div className="flex gap-3">
              <Link
                href="https://github.com/Rohan2519Y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/rohan2519y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:rohankumar17645@gmail.com"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rohan Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
