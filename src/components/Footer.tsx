import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-2 rounded-xl mr-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                AI-HomeStyler
              </h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transform your space with AI-powered interior design. 
              Professional results in seconds, not weeks.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Gallery', 'API', 'Mobile App'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-slate-400">hello@aihomestyler.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-slate-400">San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-md font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-r-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 AI-HomeStyler by Achref Rhouma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;