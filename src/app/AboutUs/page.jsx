import Hero from "../components/hero"
export default function AboutUs() {
 return (<> <main className="max-w-5xl mx-auto my-6 p-4"> 
{/*Background box everything sits on*/}
 <div className= "relative 
bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 
py-24 md:py-30">
<ul>
	<li className="flex flex-row justify-between space-x-8 bg-gradient-to-r from-orange-300  via-orange-400 to-orange-500">
		<p className="text-6xl">About Us</p>
		<p className="flex-1"><strong>BSides Southwest Florida (Bsides SWFL) </strong> is a communtiy-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a>Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.</p>
	</li>
	
</ul>
</div>
</main>
</>)
}
