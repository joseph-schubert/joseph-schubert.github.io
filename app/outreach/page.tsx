import { Navigation } from "@/components/navigation"
import { ArrowUpRight } from "lucide-react"

const pressLinks = [
  {
    outlet: "National Geographic",
    title: "How scientists found 'Nemo,' Australia's newest dancing spider",
    url: "https://www.nationalgeographic.com/animals/article/nemo-new-peacock-spider-discovered-australia",
  },
  {
    outlet: "BBC News",
    title: "Maratus: Seven new species of peacock spiders identified",
    url: "https://www.bbc.com/news/world-australia-52085149",
  },
  {
    outlet: "ABC News",
    title: "New jumping spider found in NSW backyard",
    url: "https://www.abc.net.au/news/science/",
  },
  {
    outlet: "Sydney Morning Herald",
    title: "Finding Nemo: Citizen science discovers new spider",
    url: "https://www.smh.com.au/",
  },
  {
    outlet: "The Age",
    title: "Eight-eyed puppy: Three newly discovered spiders to look out for",
    url: "https://www.theage.com.au/",
  },
]

export default function Outreach() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <Navigation />

      {/* Outreach & Media Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 tracking-tight">
            Outreach & Media
          </h1>
          <p className="text-stone-500 mb-16 max-w-2xl">
            Featured press coverage highlighting research and discoveries
          </p>
          <div className="grid gap-6">
            {pressLinks.map((press, index) => (
              <a
                key={index}
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between py-5 border-b border-stone-200 hover:border-stone-400 transition-colors duration-300"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-400 mb-2 block">
                    {press.outlet}
                  </span>
                  <h2 className="text-charcoal group-hover:text-stone-600 transition-colors duration-300">
                    {press.title}
                  </h2>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-charcoal transition-colors duration-300 flex-shrink-0 ml-4 mt-4" />
              </a>
            ))}
          </div>

          {/* Publications CTA */}
          <div className="mt-24 pt-16 border-t border-stone-200 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 tracking-tight">
              Publications
            </h2>
            <p className="text-stone-600 mb-10 leading-relaxed max-w-xl mx-auto">
              For a full list of peer-reviewed publications and citations, please visit my Google Scholar profile.
            </p>
            <a
              href="https://scholar.google.com/citations?user=yJm2sz8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-white text-sm tracking-wide hover:bg-stone-700 transition-colors duration-300"
            >
              View Google Scholar
              <ArrowUpRight className="w-4 h-4" />
            </a>
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
