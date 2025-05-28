import Hero from "../components/hero"
export default function AboutUs() {
 return (<> <main className="max-w-5xl mx-auto my-6 p-4"> 
{/*Background box everything sits on*/}
 <div className= "relative 
bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 
py-24 md:py-30">
<ul>
	<li className="flex flex-row justify-between space-x-8 bg-gradient-to-r from-orange-300  via-orange-400 to-orange-500">
		<p className="text-6xl">About BSides SWFL</p>
		<p className="flex-1"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a communtiy-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a>Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p>
	</li>
	<li className="flex flex-row justify-between space-x-8 bg-gradient-to-r from-orange-300  via-orange-400 to-orange-500">
		<p className="text-6xl">Our Mission</p>
		<p className="flex-1">Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barries to entry, uplifting new voices, and creating opportunities to grow and give back to the community.</p>
	</li>	
	<li className="flex flex-row justify-between space-x-8 bg-gradient-to-r from-orange-300  via-orange-400 to-orange-500">
		<p className="text-6xl">What to Expect</p>
		<p className="flex-1">Bsides SWFL is a conference built by the community, for the community. We offer: 
		<ul className="text-left indent-3 list-disc">
			<li><strong>Enagaging Talks</strong> on timely and relevant cybersecurity topics.</li>
			<li><strong>Interactive Villages</strong> and hands-on activities.</li>
			<li><strong>Workshops</strong> that let attendees apply what they learn.</li>
			<li><strong>Opportunites to Connect</strong> with peers, mentors, and industry experts.</li>
		</ul>
		Whether you're just beginning your journey or you've been in the industry for years, BSides SWFL is a place where you can share, learn, and be part of something meaningful.
		</p>
	</li>				
	<li className="flex flex-row justify-between space-x-8 bg-gradient-to-r from-orange-300  via-orange-400 to-orange-500">
		<p className="text-6xl">Why It Matters</p>
		<p className="flex-1">Tridiional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be hear, and more can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida.</p>
	</li>
</ul>
</div>
</main>
</>)
}
