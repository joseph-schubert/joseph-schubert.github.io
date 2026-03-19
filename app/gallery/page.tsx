import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-12 text-center">
            Gallery
          </h1>
          <Gallery />
        </div>
      </section>

      <Footer />
    </main>
  )
}
