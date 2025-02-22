"use client";
import CTA from '@/components/global/CTA';
import Features from '@/components/global/features';
import Hero from '@/components/global/Hero';
import Navigation from '@/components/global/Navigation';
import Footer from '@/components/global/Footer';

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
     <CTA/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}


