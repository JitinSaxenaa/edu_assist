import React from 'react'

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <span className="text-primary text-2xl font-bold">EduAssist</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#dashboard" className="nav-link">Dashboard</a>
          <a href="#support" className="nav-link">Help & Support</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navigation