import Features from '@/components/global/features';
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
     <Features/>
    
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


