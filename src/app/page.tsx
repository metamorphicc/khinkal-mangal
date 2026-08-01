import { BookingForm } from "@/components/BookingForm";
import { Contacts } from "@/components/Contacts";
import { FadeIn } from "@/components/FadeIn";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Atmosphere } from "@/components/Atmosphere";
import { Proof } from "@/components/Proof";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeIn>
          <MenuSection />
        </FadeIn>
        <FadeIn>
          <Proof />
        </FadeIn>
        <FadeIn>
          <Features />
        </FadeIn>
        <FadeIn>
          <Atmosphere />
        </FadeIn>
        <FadeIn>
          <Gallery />
        </FadeIn>
        <FadeIn>
          <Reviews />
        </FadeIn>
        <section id="booking" className="min-h-screen bg-cream px-4 py-28 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-4xl items-center">
            <div className="w-full">
              <FadeIn>
                <BookingForm />
              </FadeIn>
            </div>
          </div>
        </section>
        <FadeIn>
          <Contacts />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
