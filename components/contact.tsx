import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from './contact-form'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project opportunity or want to discuss collaboration? Feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300">
              <div className="p-3 bg-secondary rounded-lg">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground">Email</h3>
              <a href="mailto:rohankumar17645@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                rohankumar17645@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300">
              <div className="p-3 bg-secondary rounded-lg">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground">Phone</h3>
              <a href="tel:+919340467517" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +91 9340467517
              </a>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300">
              <div className="p-3 bg-secondary rounded-lg">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">India</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">I'll respond within 24 hours</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
