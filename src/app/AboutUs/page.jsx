import Hero from "../components/hero"
export default function AboutUs() {
 return (<> <main className="max-w-5xl mx-auto my-6 p-4"> 
{/*Background box everything sits on*/}
 <div className= "relative  md:py-30">
<h1 className="text-4xl text-center">About Us</h1>
<ul>
	<li className="flex flex-row justify-between space-x-8 border-solid border-1 rounded-xl shadow-sm border-gray-950">
		<p className="text-4xl">About BSides SWFL</p>
		<p className="flex-1"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a community-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a>Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p>
	</li>
	<li className="flex flex-row justify-between space-x-8 mt-6 border-solid border-2 rounded-xl border-gray-950">
		<p className="text-4xl">Our Mission</p>
		<p className="flex-1">Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barriers to entry, uplifting new voices, and creating opportunities to grow and give back to the community.</p>
	</li>	
	<li className="flex flex-row justify-between space-x-8 mt-6 border-solid border-2 rounded-xl border-gray-950">
		<p className="text-4xl">What to Expect</p>
		<p className="flex-1">Bsides SWFL is a conference built by the community, for the community. We offer: 
		<ul className="text-left indent-3 list-disc">
			<li><strong>Engaging Talks</strong> on timely and relevant cybersecurity topics.</li>
			<li><strong>Interactive Villages</strong> and hands-on activities.</li>
			<li><strong>Workshops</strong> that let attendees apply what they learn.</li>
			<li><strong>Opportunities to Connect</strong> with peers, mentors, and industry experts.</li>
		</ul>
		Whether you're just beginning your journey or you've been in the industry for years, BSides SWFL is a place where you can share, learn, and be part of something meaningful.
		</p>
	</li>				
	<li className="flex flex-row justify-between space-x-8 mt-6 border-solid border-2 rounded-xl border-gray-950">
		<p className="text-4xl">Why It Matters</p>
		<p className="flex-1">Traditional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be heard, and more people can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida.</p>
	</li>
</ul>
</div>
</main>
</>)
}
