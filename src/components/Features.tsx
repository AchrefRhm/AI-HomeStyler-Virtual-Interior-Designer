import React from 'react';
import { Camera, Palette, Eye, Zap, Smartphone, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'Smart Photo Analysis',
      description: 'Our AI analyzes room layout, lighting, and existing furniture to understand your space perfectly.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Color Harmony',
      description: 'Get personalized color palettes that complement your style and enhance your room\'s ambiance.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: '3D Visualization',
      description: 'Experience your redesigned space in interactive 3D with real-time rotation and zoom capabilities.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get professional-quality design suggestions in seconds, not weeks or months.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'AR Preview',
      description: 'Preview furniture and decor in your actual space using augmented reality technology.',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Style Trends',
      description: 'Stay updated with the latest interior design trends from around the world.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the future of interior design with cutting-edge technology 
            that understands your style and transforms your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-700">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Upload Photo', description: 'Take a photo of your room and upload it to our platform' },
              { step: '02', title: 'AI Analysis', description: 'Our AI analyzes your space and generates personalized suggestions' },
              { step: '03', title: 'Explore Design', description: 'View your redesigned space in 3D and make adjustments' }
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.description}</p>
                
                {/* Connecting Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-200 to-teal-200 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;