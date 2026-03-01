export function About() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                Dedicated Full Stack Developer with 1+ years of professional experience developing and maintaining web and mobile applications. I specialize in building accessible, performant solutions that solve real-world problems and deliver measurable business impact.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                Currently working at Numeric Infosystem as a Full Stack Developer, specializing in production-level applications with React.js, Node.js, Express.js, and React Native. Strong focus on scalable architecture, performance optimization, and creating responsive user experiences.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Experience</h3>
              <p className="text-2xl font-bold text-primary mb-2">1+</p>
              <p className="text-sm text-muted-foreground">Years of professional development experience</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Education</h3>
              <p className="text-2xl font-bold text-primary mb-2">BCA 1st</p>
              <p className="text-sm text-muted-foreground">Bachelor of Computer Applications, ITM University</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Recognition</h3>
              <p className="text-2xl font-bold text-primary mb-2">SIH</p>
              <p className="text-sm text-muted-foreground">Smart India Hackathon participant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
