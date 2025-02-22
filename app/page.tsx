import { Button } from '@/components/ui/button';
import { GraduationCap, Users, ChartBar, MessageSquare, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative py-16 md:py-24 animated-bg">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Welcome to EduAssist
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Transform your educational institution with AI-powered management, real-time communication, and smart attendance tracking.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Smart Learning"
              description="AI-powered lesson planning and student performance tracking"
              color="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Attendance Management"
              description="QR and NFC-based attendance tracking system"
              color="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<ChartBar className="h-8 w-8" />}
              title="Advanced Analytics"
              description="Comprehensive reports and insights for better decision making"
              color="from-orange-500 to-red-500"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Communication Hub"
              description="Real-time chat between teachers, parents, and administrators"
              color="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="feature-card p-6 rounded-xl border group">
      <div className={`mb-4 bg-gradient-to-r ${color} p-3 rounded-lg inline-block text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}