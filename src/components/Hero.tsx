import React from 'react';
import { Camera, Sparkles, Eye, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-pulse"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-2xl mr-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              AI-HomeStyler
            </h1>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Space
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
              with AI Magic
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload a photo of your room and watch as our AI creates stunning interior designs, 
            complete with 3D previews and personalized recommendations.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Camera, text: 'Photo Analysis' },
              { icon: Palette, text: 'Color Matching' },
              { icon: Eye, text: '3D Previews' },
              { icon: Sparkles, text: 'AI Styling' }
            ].map(({ icon: Icon, text }, index) => (
              <div 
                key={text}
                className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToUpload}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              Start Designing Free
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40">
              View Gallery
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '50K+', label: 'Rooms Designed' },
              { number: '98%', label: 'Satisfaction' },
              { number: '24/7', label: 'AI Available' },
              { number: '3D', label: 'Visualization' }
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{number}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;