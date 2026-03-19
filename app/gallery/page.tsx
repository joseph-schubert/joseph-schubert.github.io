import { Navigation } from "@/components/navigation"
import { Gallery } from "@/components/gallery"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EjjsYKFUYAATJt7-f33gY6TMriNA2yvBizq9wP33dDKEER.jpg",
    alt: "Jumping spider with iridescent blue-green eyes and red markings on legs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eh8sRT8UYAAaJdU-JR7iM15joFIxjprNKkq5UlXIASX9Lr.jpg",
    alt: "Jumping spider with teal eyes and raised black pedipalps on bark",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fdq9m8VVIAAjliZ-BhWCftxkbRVxBkSsSpdl81Ns1FftVL.jpg",
    alt: "Peacock spider displaying colorful turquoise, blue and red abdominal flap",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FfMvulIVQAEmsRg-xA9AuwOqcbhdyOZj8Eji0SzyxmTRGF.jpg",
    alt: "Peacock spider with turquoise and red patterned abdominal display",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fcrv0gZaEAInXAF-ZwYokxmlEeqe2MNR3yZNy1Ji7ipb8n.jpg",
    alt: "Peacock spider with cobalt blue face and black and white striped legs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FYvxzMwUUAAIVpb-ylFz05VI5fNUrIeODgW6R9l7GkUkeL.jpg",
    alt: "Peacock spider showing orange, red, blue and green rainbow abdominal display",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <Navigation />

      {/* Gallery Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 tracking-tight">
            Gallery
          </h1>
          <p className="text-stone-500 mb-16 max-w-2xl">
            Macro photography of Australian peacock spiders and their relatives
          </p>
          <Gallery images={galleryImages} />
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
