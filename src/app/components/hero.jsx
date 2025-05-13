// ... existing code ...

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-purple-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-yellow-300 rounded-full opacity-20"></div>

        {/* Sparkles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-70"></div>

        {/* Removed Map Image from background */}
        {/* <img src="/map.png" alt="Map of the event location" className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
      </div>

      <div className="container flex flex-col md:flex-row items-center mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">BSides SWFL 2025</h1>
          <p className="text-xl md:text-2xl text-white">November 7-8, 2025</p>
          <p className="text-md md:text-lg mt-20 text-white share-tech-regular">A major cybersecurity event is coming to Southwest Florida on November 7th and 8th at Florida SouthWestern State College. The first-ever BSides SWFL conference will focus on real-world cybersecurity failures and solutions. Industry experts and students will connect to explore the evolving threats and innovations shaping today’s cyber landscape.</p>

          {/* Area to display the map */}
          <div className="mt-12 flex justify-center">
            <img src="/map.png" alt="Map of the event location" className="w-full h-auto shadow-lg hover:scale-125 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
