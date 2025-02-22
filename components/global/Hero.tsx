import Image from 'next/image'
import React from 'react'
import Hero_image from "../../images/hero_page.webp"

const Hero = () => {
  return (
    <section className="hero-gradient relative pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left animate-fade-up">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Empower Your Educational Experience with EduAssist
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-[600px]">
                Our platform offers a comprehensive solution for teachers, administrators, and parents, ensuring seamless management of educational processes.
              </p>
              <button className="btn-primary text-lg px-8 py-3">
                Get Started with EduAssist
              </button>
            </div>
            <div className="flex-1 animate-fade-up animate-delay-200">
              <Image src={Hero_image} alt="Hero Image" width={600} height={400} />
            </div>
          </div>
        </div>
        <div className="wave-shape"></div>
      </section>

  )
}

export default Hero