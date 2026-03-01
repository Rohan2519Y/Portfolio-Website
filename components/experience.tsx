const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Numeric Infosystem Pvt Ltd',
    period: 'Oct 2025 – Present',
    achievements: [
      'Designed and developed production-level web applications including an Employee & HR Management System with role-based Admin and Employee panels',
      'Built an employee attendance web/mobile app with check-in/check-out, working hours calculation, late tracking, and monthly summaries',
      'Developed resume management and advanced resume search functionality with filters, status tracking, and Excel export',
      'Implemented AI-based resume autofill, automatically extracting candidate details from uploaded resumes',
      'Created interactive report dashboards for attendance, leave, payroll, and recruitment insights',
      'Integrated secure authentication and third-party APIs (Google APIs, SMS APIs, Gmail APIs)',
      'Focused on scalable architecture, performance optimization, and responsive UI/UX',
      'Collaborated cross-functionally with design and backend teams to deliver high-quality solutions',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Numeric Infosystem Pvt Ltd',
    period: 'Jan 2025 – Sep 2025',
    achievements: [
      'Assisted in developing and maintaining front-end modules using React.js and Material UI',
      'Collaborated with backend developers for Node.js API integration and testing using Postman',
      'Participated in debugging, feature implementation, and performance optimization',
      'Contributed to mobile app feature development using React Native',
    ],
  },
]

export function Experience() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Professional Experience</h2>
          <p className="text-muted-foreground">Full Stack Developer with progressive responsibility</p>
        </div>

        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIdx) => (
                  <li
                    key={achIdx}
                    className="flex gap-3 text-muted-foreground leading-relaxed text-sm"
                  >
                    <span className="text-primary flex-shrink-0 mt-1 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
