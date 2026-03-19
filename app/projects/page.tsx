import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-12 text-center">
            Research Projects
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h2 className="font-serif text-xl text-neutral-900 mb-4">
                Integrative Systematics of the <em>Saitis</em> Group
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Resolving evolutionary relationships and species boundaries within the <em>Saitis</em> group, combining morphology with molecular phylogenetics to document jumping spider biodiversity.
              </p>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h2 className="font-serif text-xl text-neutral-900 mb-4">
                Systematics and Evolution of Australian Sparassidae
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Molecular phylogenetics and systematic revision of Australian Huntsman spiders, aiming to resolve complex taxonomic groups and explore their evolutionary history.
              </p>
            </div>
          </div>

          <div className="text-center border-t border-neutral-200 pt-12">
            <p className="text-neutral-700 mb-2">
              I am open to collaborations and student supervision.
            </p>
            <p className="text-neutral-700">
              Please{" "}
              <a
                href="mailto:joseph.schubert@qm.qld.gov.au"
                className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
              >
                get in touch
              </a>{" "}
              if you would like to collaborate!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
