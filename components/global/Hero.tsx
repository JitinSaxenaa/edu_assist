import React from 'react'

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
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
                alt="Educational Technology"
                className="rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="wave-shape"></div>
      </section>

  )
}

export default Hero