import React from 'react';
import Image from 'next/image';
import smart from "@/images/smart_scheduling.webp"
import AI from "@/images/AI_analytics.webp"
import attendance from "@/images/attendance_tracking.webp"

const Features = () => {
  return (
    <>
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16 animate-fade-up">
            Elevate Your Educational Experience<br />with EduAssist
          </h2>
          <div className="feature-grid">
            <div className="animate-fade-up">
              <FeatureCard
                image={
                  <Image 
                    src={smart} 
                    alt="Smart Scheduling" 
                    width={400} 
                    height={300} 
                    className="rounded-lg" 
                  />
                }
                title="Smart Scheduling"
                description="Smart Scheduling in EduAssist leverages AI to automate lesson planning and timetable creation, saving educators over 5 hours weekly. It dynamically optimizes schedules based on teacher availability, student needs.          "
              />
            </div>
            <div className="animate-fade-up animate-delay-100">
              <FeatureCard
               image={
                <Image 
                  src={AI} 
                  alt="Smart Scheduling" 
                  width={400} 
                  height={300} 
                  className="rounded-lg" 
                />
              }
                title="Efficient Attendance Tracking"
                description="Manage attendance effortlessly with our innovative QR/NFC technology, paired with manual entry options. This streamlined approach ensures that you can maintain accurate records with minimal hassle."
              />
            </div>
            <div className="animate-fade-up animate-delay-200">
              <FeatureCard
                image={
                    <Image 
                      src={attendance} 
                      alt="Smart Scheduling" 
                      width={400} 
                      height={300} 
                      className="rounded-lg" 
                    />
                  }
                title="Insightful AI Analytics"
                description="Harness the power of AI with our comprehensive reporting system. Gain actionable insights into student performance, helping you to identify areas for improvement and optimize educational strategies."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-up">
              <h2 className="section-title mb-12">
                Transform Your Educational Landscape with EduAssist
              </h2>
              <div className="space-y-8">
                <FeatureItem
                  title="Robust Authentication"
                  description="Safeguard your data with secure login and signup options, granting seamless access to your personalized user experience."
                />
                <FeatureItem
                  title="Custom User Dashboards"
                  description="Each role—teachers, administrators, and parents—benefits from tailored dashboards presenting crucial tools and information for enhanced engagement."
                />
                <FeatureItem
                  title="Streamlined Attendance Management"
                  description="Effortlessly track student attendance through innovative QR/NFC technology alongside manual options, ensuring accurate and efficient record-keeping."
                />
                <FeatureItem
                  title="Insightful AI Analytics"
                  description="Utilize our AI-driven reporting system to gain deep insights into student performance, allowing for targeted improvements and enhanced teaching strategies."
                />
              </div>
            </div>
            <div className="relative animate-fade-up animate-delay-100">
              <Image 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                alt="Educational Dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function FeatureCard({ image, title, description }: { image: React.ReactNode; title: string; description: string }) {
  return (
    <div className="feature-card group">
      <div className="feature-icon group-hover:scale-110 transition-transform duration-300">{image}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0">
        {/* <CheckCircle2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" /> */}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Features;