import Hero from "./components/hero"
import InfoCards from "./components/info-cards"

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto my-6 p-4">
        <Hero />
        <InfoCards />
      </main>
    </>
  )
}