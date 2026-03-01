import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Employee & HR Management System',
    description:
      'Production-level web application with role-based Admin and Employee panels. Features include attendance tracking, leave management, payroll, and recruitment insights with interactive dashboards.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
    highlights: ['Role-based access control', 'Interactive dashboards', 'Attendance tracking', 'Leave management'],
  },
  {
    title: 'Attendance Web/Mobile App',
    description:
      'Employee attendance tracking application with check-in/check-out functionality, working hours calculation, late tracking, and monthly summaries. Available as both web and mobile app.',
    tech: ['React.js', 'React Native', 'Node.js', 'MySQL', 'Bootstrap'],
    highlights: ['Check-in/Check-out system', 'Hours calculation', 'Late tracking', 'Monthly reports'],
  },
  {
    title: 'Resume Management & AI Autofill',
    description:
      'Advanced resume management system with powerful search functionality and AI-based autofill. Automatically extracts candidate details from uploaded resumes with Excel export capabilities.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'ChatGPT APIs', 'Material UI'],
    highlights: ['AI-powered extraction', 'Advanced search filters', 'Status tracking', 'Excel export'],
  },
  {
    title: 'SalesBuddy',
    description:
      'Marketplace for second-hand mobiles and laptops with integrated payment gateways and SMS notifications. Features responsive UI with Redux state management.',
    tech: ['React.js', 'Material UI', 'Redux', 'REST APIs', 'Payment Gateways'],
    highlights: ['Payment integration', 'SMS notifications', 'Responsive design', 'State management'],
    github: 'https://github.com/Rohan2519Y/Sales-Buddy',
  },
  {
    title: 'Electronics E-commerce App',
    description:
      'Full-featured e-commerce application built with React Native, Node.js, and Express.js. Includes secure authentication, third-party integrations, and asynchronous storage.',
    tech: ['React Native', 'Node.js', 'Express.js', 'Async Storage'],
    highlights: ['Cross-platform', 'Secure auth', 'Third-party integration', 'Local storage'],
    github: 'https://github.com/Rohan2519Y/electronicsapp',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground">Production-grade applications demonstrating full-stack expertise</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-foreground rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className="pt-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
