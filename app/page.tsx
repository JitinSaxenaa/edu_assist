import Hero from '@/components/global/Hero';
import Navigation from '@/components/global/Navigation';
import { Button } from '@/components/ui/button';
import { GraduationCap, BarChart3, Calendar, MessageSquare, UserCog, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
     <Navigation/>

      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16 animate-fade-up">
            Elevate Your Educational Experience<br />with EduAssist
          </h2>
          <div className="feature-grid">
            <div className="animate-fade-up">
              <FeatureCard
                icon={<Calendar className="h-6 w-6" />}
                title="Smart Scheduling"
                description="Smart Scheduling in EduAssist leverages AI to automate lesson planning and timetable creation, saving educators over 5 hours weekly. It dynamically optimizes schedules based on teacher availability, student needs, and resource constraints, ensuring efficient learning and minimal conflicts."
              />
            </div>
            <div className="animate-fade-up animate-delay-100">
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Efficient Attendance Tracking"
                description="Manage attendance effortlessly with our innovative QR/NFC technology, paired with manual entry options. This streamlined approach ensures that you can maintain accurate records with minimal hassle."
              />
            </div>
            <div className="animate-fade-up animate-delay-200">
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6" />}
                title="Insightful AI Analytics"
                description="Harness the power of AI with our comprehensive reporting system. Gain actionable insights into student performance, helping you to identify areas for improvement and optimize educational strategies."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
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
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                alt="Educational Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h2 className="section-title mb-8">Get Started with EduAssist Today</h2>
          <p className="section-description mb-12 max-w-2xl mx-auto">
            Join thousands of educational institutions already using EduAssist to streamline their operations and enhance learning outcomes.
          </p>
          <button className="btn-primary text-lg px-8 py-3">Get in Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-primary text-xl font-bold">EduAssist</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="feature-card group">
      <div className="feature-icon group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0">
        <CheckCircle2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}