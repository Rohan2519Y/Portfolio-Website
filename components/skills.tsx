'use client'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'Redux', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Database Design'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Async Storage', 'Cross-platform Development'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Database Optimization'],
  },
  {
    category: 'Tools & Integrations',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google APIs', 'Payment Gateways', 'SMS APIs', 'Gmail APIs', 'ChatGPT APIs'],
  },
]

export function Skills() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Technical Expertise</h2>
          <p className="text-muted-foreground">Comprehensive skills across the full development stack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.category} 
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground rounded-md text-xs font-medium transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
