import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

const pressLinks = [
  {
    outlet: "National Geographic",
    title: "How scientists found 'Nemo,' Australia's newest dancing spider",
    url: "https://www.nationalgeographic.com/animals/article/new-peacock-spider-found-nemo-australia",
  },
  {
    outlet: "BBC News",
    title: "Maratus: Seven new species of peacock spiders identified",
    url: "https://www.bbc.com/news/world-australia-52277447",
  },
  {
    outlet: "ABC News",
    title: "New jumping spider found in NSW backyard",
    url: "https://www.abc.net.au/news/2020-04-15/new-species-of-peacock-spider-discovered/12150104",
  },
  {
    outlet: "Sydney Morning Herald",
    title: "Finding Nemo: Citizen science discovers new spider",
    url: "https://www.smh.com.au/environment/conservation/finding-nemo-citizen-science-discovers-new-spider-20210325-p57dxs.html",
  },
  {
    outlet: "The Age",
    title: "Eight-eyed puppy: Three newly discovered spiders to look out for",
    url: "https://www.theage.com.au/national/victoria/eight-eyed-puppy-three-newly-discovered-spiders-to-look-out-for-20200415-p54k5l.html",
  },
]

export default function OutreachPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 text-center">
            Outreach & Media
          </h1>
          <p className="text-neutral-500 text-center mb-12">Featured Press</p>

          <div className="grid gap-4">
            {pressLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between p-6 border border-neutral-200 hover:border-neutral-400 transition-colors"
              >
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">
                    {item.outlet}
                  </p>
                  <p className="text-neutral-800 group-hover:text-neutral-600 transition-colors">
                    {item.title}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-400 group-hover:text-neutral-600 transition-colors flex-shrink-0 mt-1 ml-4"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
