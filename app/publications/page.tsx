import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
            Publications
          </h1>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            For a full list of peer-reviewed publications and citations, please visit my Google Scholar profile.
          </p>
          <a
            href="https://scholar.google.com/citations?user=yJm2sz8AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-800 transition-colors"
          >
            View Google Scholar
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
