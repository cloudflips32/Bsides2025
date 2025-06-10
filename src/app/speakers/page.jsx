import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"

export default function SpeakersPage() {
  // Sample speakers data

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Conference Speakers</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <script type="text/javascript" src="https://sessionize.com/api/v2/8yksjn7s/view/SpeakerWall"></script>
        </div>
      </div>
    </>
  )
}