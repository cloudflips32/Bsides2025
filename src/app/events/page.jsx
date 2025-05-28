<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export default function Events() {

  const events = [
    {
      id: 1,
      title: 'Cybersecurity Fundamentals Workshop',
      date: '2025-11-07',
      description: 'An introductory workshop covering the basics of cybersecurity principles and best practices.'
    },
    {
      id: 2,
      title: 'Ethical Hacking and Penetration Testing',
      date: '2025-11-07',
      description: 'Learn ethical hacking techniques and how to perform penetration testing to identify vulnerabilities.'
    },
    {
      id: 3,
      title: 'Incident Response Simulation',
      date: '2025-11-07',
      description: 'Participate in a hands-on incident response simulation to practice handling cybersecurity breaches.'
    },
    {
      id: 4,
      title: 'Cloud Security Essentials',
      date: '2025-11-08',
      description: 'Explore security challenges and solutions in cloud computing environments.'
    },
    {
      id: 5,
      title: 'Malware Analysis and Reverse Engineering',
      date: '2025-11-08',
      description: 'Dive into malware analysis techniques and learn how to reverse engineer malicious software.'
    },
    {
      id: 6,
      title: 'Cybersecurity Career Panel',
      date: '2025-11-08',
      description: 'Hear from industry professionals about career paths and opportunities in cybersecurity.'
    }
  ]
  
  return (
    <>
      <main className="max-w-5xl mx-auto my-6 p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p>CTF Challenges and Villages Abound!</p>
          <p>Official Schedule Coming Soon!</p>
          {/* {events.map(event => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))} */}
        </section>
      </main>
    </>
  )
}
=======
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Conference Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        This page isn't finished yet
      </div>
    </div>
  );
}
>>>>>>> b8ea60c18ff8a8fbf66215e1188bc18cc5b5fe68
