import { Navigation } from "@/components/navigation"
import { Mail } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <Navigation />

      {/* Contact Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 tracking-tight">
            Contact
          </h1>
          <p className="text-stone-600 mb-12 leading-relaxed max-w-xl mx-auto">
            For enquiries regarding research collaborations, student supervision, or media requests, please reach out via email.
          </p>
          <a
            href="mailto:joseph.schubert@qm.qld.gov.au"
            className="inline-flex items-center gap-3 text-charcoal hover:text-stone-600 transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span className="text-lg">joseph.schubert@qm.qld.gov.au</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-200 mt-auto">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <p className="text-stone-400 text-sm">
            &copy; 2026 Dr Joseph Schubert
          </p>
        </div>
      </footer>
    </main>
  )
}
