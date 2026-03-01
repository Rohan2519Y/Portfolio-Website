'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: 'idle' }), 5000)
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at rohankumar17645@gmail.com',
      })
      console.error('Error sending email:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label htmlFor="name" className="block text-sm font-semibold text-foreground">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-300"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="email" className="block text-sm font-semibold text-foreground">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-300"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-5 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
          placeholder="Project collaboration?"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="message" className="block text-sm font-semibold text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-300 resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {status.type === 'success' && (
        <div className="flex gap-3 p-4 bg-primary/15 dark:bg-primary/10 text-primary rounded-xl border border-primary/30 animate-in fade-in duration-300">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="font-medium">{status.message}</p>
        </div>
      )}

      {status.type === 'error' && (
        <div className="flex gap-3 p-4 bg-destructive/15 dark:bg-destructive/10 text-destructive rounded-xl border border-destructive/30 animate-in fade-in duration-300">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="font-medium">{status.message}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full py-2.5 text-sm font-semibold rounded-lg hover:shadow-sm transition-all duration-300"
      >
        {status.type === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
