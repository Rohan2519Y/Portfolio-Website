import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'HR & Recruitment Management Suite',
    description:
      'Enterprise-grade platform unifying employee management, attendance tracking, and AI‑powered recruitment. Features role‑based panels (Admin/Employee), check‑in/out with working hours calculation, leave management with history, payslip generation, job assignment tracking, and a complete resume management system with AI‑based parsing, advanced search filters, interactive dashboards, and candidate status tracking.',
    tech: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
      'ChatGPT APIs', 'Material UI', 'Recharts'
    ],
    highlights: [
      'Role‑based access control (Admin/Employee)',
      'Attendance: check‑in/out, late tracking, working hours, Excel export',
      'Leave management: apply, history, balance tracking',
      'Payroll: payslip records and summaries',
      'Job assignments: track assigned roles and responsibilities',
      'AI‑powered resume extraction & auto‑fill',
      'Resume search: keyword, experience, location filters',
      'Analytics dashboards: status overview (selected/pending/not selected) with pie charts',
      'Export Excel & candidate remark tracking'
    ],
  },
  {
    title: 'Job Spiders – Job Platform',
    description:
      'Full‑featured job portal connecting candidates and employers. Includes job search with filters, detailed job pages, candidate dashboard with profile and resume management, application tracking, and employer tools for posting jobs and managing applicants.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'],
    highlights: [
      '50 lakh+ job listings across industries',
      'Advanced search with filters (keyword, location, category)',
      'Candidate dashboard: profile, resume upload, job alerts',
      'Application tracking with status (approved, pending, rejected)',
      'Employer side: post jobs, access verified talent pool',
      'Hiring guarantee (qualified candidates within 72 hours)',
      'Responsive UI with user ratings & testimonials'
    ],
    github: 'https://github.com/Rohan2519Y/Portfolio-Website',
    live: 'https://jobspiders.com',
  },
  {
    title: 'Attendance Web/Mobile App',
    description:
      'Employee attendance tracking application with check-in/check-out functionality, working hours calculation, late tracking, and monthly summaries. Available as both web and mobile app.',
    tech: ['React.js', 'React Native', 'Node.js', 'MySQL', 'Bootstrap'],
    highlights: ['Check-in/Check-out system', 'Hours calculation', 'Late tracking', 'Monthly reports'],
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
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
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

                <div className="pt-3 flex flex-wrap gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Website
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
