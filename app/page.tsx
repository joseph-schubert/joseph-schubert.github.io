import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* About Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot-DNLvMYbp4qPy2LvHga3arbD2uAE3CO.jpg"
                alt="Dr Joseph Schubert"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-2 text-center md:text-left">
                Dr Joseph Schubert
              </h1>
              <p className="text-neutral-500 tracking-widest text-sm uppercase text-center md:text-left">
                Arachnologist & Systematic Biologist
              </p>
            </div>
          </div>

          <div className="max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-6">
              I am an early-career systematist dedicated to resolving the species boundaries and evolutionary histories of Australia&apos;s arachnid fauna. My research integrates molecular and morphological data to provide robust taxonomic frameworks that support conservation and scientific communication.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Currently, I oversee the maintenance and curation of the research collections at the Queensland Museum as the Collection Manager of Arachnology. I recently completed my PhD at the University of Sydney, where I conducted research on the integrative systematics of Australian peacock spiders and their allies.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Beyond my work in the laboratory and in the field, I am a passionate advocate for science outreach. I have had the privilege of sharing the fascinating world of spiders with global audiences through outlets such as National Geographic, the BBC, and the ABC. Whether through formal taxonomy or public engagement, my goal is to highlight the incredible complexity and beauty of our often-overlooked invertebrate neighbours.
            </p>
          </div>

          <div className="mt-16">
            <figure>
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maratus%20nemo-foxo0v1VFyPmMgNYw6AGV8YA0z1ssT.jpg"
                  alt="Maratus nemo Schubert, 2021"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
              <figcaption className="text-center text-sm text-neutral-500 mt-4">
                <em>Maratus nemo</em> Schubert, 2021
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
