import Hero from "../components/hero"
export default function AboutUs() {
 return (<> <main className="max-w-5xl mx-auto my-6 p-4"> 
{/*Background box everything sits on*/}
 <div className= "relative 
bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 
py-24 md:py-30">
<div class="flex">
 {/*Decorative elements*/}
	<div className="absolute w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
	<div className="absolute w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
	<div className="absolute w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
</div>
</div>
</main>
</>)
}
