import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"

export default function SchedulePage() {
  // Sample schedule data
  const scheduleData = [
    {
      day: "Day 1 - November 7th",
      events: [
        { time: "8:00 AM - 9:00 AM", title: "Training Session - Coming Soon", location: "Main Hall" },
        { time: "9:00 AM - 10:00 AM", title: "Training Session - Coming Soon", location: "Auditorium" },
        { time: "10:15 AM - 11:15 AM", title: "Training Session - Coming Soon", location: "Room A" },
        { time: "10:15 AM - 11:15 AM", title: "Training Session - Coming Soon", location: "Room B" },
        { time: "11:30 AM - 12:30 PM", title: "Training Session - Coming Soon", location: "Room A" },
        { time: "11:30 AM - 12:30 PM", title: "Training Session - Coming Soon", location: "Room B" },
        { time: "12:30 PM - 1:30 PM", title: "Training Session - Coming Soon", location: "Dining Area" },
        { time: "1:30 PM - 2:30 PM", title: "Training Session - Coming Soon", location: "Auditorium" },
        { time: "2:45 PM - 3:45 PM", title: "Training Session - Coming Soon", location: "Room A" },
        { time: "2:45 PM - 3:45 PM", title: "Training Session - Coming Soon", location: "Room B" },
      ],
    },
    {
      day: "Day 2 - November 8th",
      events: [
        { time: "8:30 AM - 9:00 AM", title: "Conference Session - Coming Soon", location: "Main Hall" },
        { time: "9:00 AM - 10:00 AM", title: "Conference Session - Coming Soon", location: "Auditorium" },
        { time: "10:15 AM - 11:15 AM", title: "Conference Session - Coming Soon", location: "Room A" },
        { time: "10:15 AM - 11:15 AM", title: "Conference Session - Coming Soon", location: "Room B" },
        { time: "11:30 AM - 12:30 PM", title: "Conference Session - Coming Soon", location: "Room A" },
        { time: "11:30 AM - 12:30 PM", title: "Conference Session - Coming Soon", location: "Room B" },
        { time: "12:30 PM - 1:30 PM", title: "Conference Session - Coming Soon", location: "Dining Area" },
        { time: "1:30 PM - 2:30 PM", title: "Conference Session - Coming Soon", location: "Auditorium" },
        { time: "4:00 PM - 5:00 PM", title: "Conference Session - Coming Soon", location: "Auditorium" },
        { time: "4:00 PM - 5:00 PM", title: "Conference Session - Coming Soon", location: "Main Hall" },
      ],
    },
  ]

  return (
    <>
      <div className="container bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 mx-auto px-4 py-12 justify-center items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">Conference Schedule</h1>

        <div className="space-y-12 mx-auto w-[90%] mb-20">
          {scheduleData.map((day, index) => (
            <div key={index}>
              <h2 className="text-2xl text-center font-semibold mb-6">{day.day}</h2>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-8 gap-4">
                {day.events.map((event, eventIndex) => (
                  <Card key={eventIndex}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.time}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">Location: {event.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}