import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <Navigation />

      {/* Projects Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-16 tracking-tight">
            Research Projects
          </h1>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Project 1 */}
            <div className="bg-white p-8 md:p-10 border border-stone-200">
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Integrative Systematics of the Saitis Group
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Resolving evolutionary relationships and species boundaries within the Saitis group, combining morphology with molecular phylogenetics to document jumping spider biodiversity.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-8 md:p-10 border border-stone-200">
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Systematics and Evolution of Australian Sparassidae
              </h2>
              <p className="text-stone-600 leading-relaxed">
                Molecular phylogenetics and systematic revision of Australian Huntsman spiders, aiming to resolve complex taxonomic groups and explore their evolutionary history.
              </p>
            </div>
          </div>

          {/* Collaboration Notice */}
          <div className="max-w-2xl">
            <p className="text-stone-600 leading-relaxed">
              I am open to collaborations and student supervision. Please{" "}
              <Link 
                href="mailto:joseph.schubert@qm.qld.gov.au" 
                className="text-charcoal underline underline-offset-4 hover:text-stone-500 transition-colors duration-200"
              >
                get in touch
              </Link>{" "}
              if you would like to collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <p className="text-stone-400 text-sm">
            &copy; 2026 Dr Joseph Schubert
          </p>
        </div>
      </footer>
    </main>
  )
}
