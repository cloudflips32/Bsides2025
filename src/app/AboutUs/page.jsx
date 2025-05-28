import Hero from "../components/hero"
export default function AboutUs() {
 return (<> <main className="max-w-5xl mx-auto my-6 p-4"> 
{/*Background box everything sits on*/}
 <div className= "relative 
bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 
py-24 md:py-30">
<ul>
	<li className="flex flex-row justify-between space-x-8 bg-gradient-to-r from-orange-300  via-orange-400 to-orange-500">
		<p className="text-6xl">Header</p>
		<p className="flex-1">This should be text that we can see as a main point of the header. The rest of the text is just filler text to see how word wrapping works on this element, so enjoy the long text</p>
	</li>
</ul>
</div>
</main>
</>)
}
