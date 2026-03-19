import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <Navigation />

      {/* Hero / About Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4 tracking-tight">
            Dr Joseph Schubert
          </h1>
          <p className="font-serif text-xl md:text-2xl text-stone-500 mb-12 tracking-wide">
            Arachnologist & Systematist
          </p>
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              I am an early-career systematist dedicated to resolving the species boundaries and evolutionary histories of Australia's arachnid fauna. My research integrates molecular and morphological data to provide robust taxonomic frameworks that support conservation and scientific communication.
            </p>
            <p>
              Currently, I oversee the maintenance and curation of the research collections at the Queensland Museum as the Collection Manager of Arachnology. I recently completed my PhD at the University of Sydney, where I conducted research on the integrative systematics of Australian peacock spiders and their allies.
            </p>
            <p>
              Beyond my work in the laboratory and in the field, I am a passionate advocate for science outreach. I have had the privilege of sharing the fascinating world of spiders with global audiences through outlets such as National Geographic, the BBC, and the ABC. Whether through formal taxonomy or public engagement, my goal is to highlight the incredible complexity and beauty of our often-overlooked invertebrate neighbours.
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
