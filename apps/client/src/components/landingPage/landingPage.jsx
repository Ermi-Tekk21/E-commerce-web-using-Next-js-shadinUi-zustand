import React from 'react'
import PostsList from "../../components/products/products-list";
function LandingPage() {
  return (
    
    <div>
        <div>
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10 p-10">
        <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
          Build Landing Pages with Typeform Integration
        </h1>
        <p className="text-base">
          Embark on a gastronomic journey with our curated dishes, delivered
          promptly to your doorstep. Elevate your dining experience today. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-10">
          <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
            Get started today
          </button>
        </div>
      </div>
        </div>
        <div id='#post-list'>
           <PostsList/>
        </div>
        
    </div>
  )
}

export default LandingPage