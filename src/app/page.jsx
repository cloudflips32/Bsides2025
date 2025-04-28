import Footer from "./components/Footer"
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
      </main>
      <Footer />
    </>
  )
}