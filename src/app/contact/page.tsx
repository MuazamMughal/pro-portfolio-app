'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { ArrowRight, Send } from 'lucide-react'

const contactInfo = {
  email: 'contact@muazammughal.me',
  location: 'Sahiwal, Pakistan',
  github: 'https://github.com/muazammughal',
  linkedin: 'https://linkedin.com/in/muazammughal',
  portfolio: 'https://muazammughal.me',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitStatus === 'success') {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message sent successfully</h1>
          <p className="text-muted-foreground mb-8">
            Thanks for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
          >
            Return to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Hero Section */}
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 animate-slide-up">
            Let&apos;s Build Something Great
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Have a project, opportunity, or idea in mind? I&apos;d love to hear about it.
          </p>
          
          {/* Terminal-inspired element */}
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-green-600 dark:text-green-400 font-mono text-sm">$</span>
            <span className="text-muted-foreground font-mono text-sm">
              available for new opportunities
            </span>
            <span className="w-2 h-5 bg-green-400 animate-pulse" />
          </div>
        </header>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left - Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-green-500 rounded-full" />
              Get in Touch
            </h2>
            
            <div className="space-y-8">
              {/* Email */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-4 p-4 rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <FaEnvelope className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground/70 mb-1">Email</p>
                  <p className="text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{contactInfo.email}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground/70 mb-1">Location</p>
                  <p className="text-foreground">{contactInfo.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground/70 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a 
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-foreground/5 rounded-lg flex items-center justify-center hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-foreground/5 rounded-lg flex items-center justify-center hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-green-600 dark:text-green-400 font-medium">Currently open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-green-500 rounded-full" />
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-foreground/10 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-foreground/10 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-foreground/10 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm text-muted-foreground mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-lg text-foreground focus:outline-none focus:border-green-500/50 focus:bg-foreground/10 transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="consulting">Consulting</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-foreground/5 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-green-500/50 focus:bg-foreground/10 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-foreground font-medium">Muazam Mughal</p>
              <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/resume" className="text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Resume
              </Link>
              <Link href="/work" className="text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Work
              </Link>
            </div>
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} Muazam Mughal. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </main>
  )
}