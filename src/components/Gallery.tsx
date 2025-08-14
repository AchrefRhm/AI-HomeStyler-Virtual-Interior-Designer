import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, Palette, Maximize } from 'lucide-react';
import { SAMPLE_ROOMS } from '../utils/constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'before-after' | 'gallery'>('gallery');

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_ROOMS.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + SAMPLE_ROOMS.length) % SAMPLE_ROOMS.length);
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Transformation Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            See how our AI has transformed real rooms into stunning spaces. Every design is unique and tailored to the homeowner's style.
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-2xl">
              <button
                onClick={() => setViewMode('gallery')}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  viewMode === 'gallery'
                    ? 'bg-white text-slate-800 shadow-md'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Gallery View
              </button>
              <button
                onClick={() => setViewMode('before-after')}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                  viewMode === 'before-after'
                    ? 'bg-white text-slate-800 shadow-md'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Before & After
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'gallery' ? (
          /* Gallery Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_ROOMS.map((room, index) => (
              <div
                key={room.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button
                        onClick={() => openModal(room.image)}
                        className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-medium flex items-center space-x-2 hover:bg-white/30 transition-all duration-200"
                      >
                        <Maximize className="w-4 h-4" />
                        <span>View Full Size</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{room.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {room.style}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Palette className="w-4 h-4 text-slate-400" />
                      <div className="flex space-x-1">
                        {room.colors.slice(0, 3).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border border-white shadow-sm"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Before & After Slider */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </span>
                  </div>
                  <img
                    src={SAMPLE_ROOMS[currentIndex].beforeImage}
                    alt="Before"
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </span>
                  </div>
                  <img
                    src={SAMPLE_ROOMS[currentIndex].afterImage}
                    alt="After"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">
                      {SAMPLE_ROOMS[currentIndex].name}
                    </h3>
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {SAMPLE_ROOMS[currentIndex].style}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevImage}
                      className="bg-slate-100 hover:bg-slate-200 p-2 rounded-xl transition-all duration-200"
                    >
                      <ArrowLeft className="w-5 h-5 text-slate-700" />
                    </button>
                    <span className="text-slate-600 text-sm">
                      {currentIndex + 1} / {SAMPLE_ROOMS.length}
                    </span>
                    <button
                      onClick={nextImage}
                      className="bg-slate-100 hover:bg-slate-200 p-2 rounded-xl transition-all duration-200"
                    >
                      <ArrowRight className="w-5 h-5 text-slate-700" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {SAMPLE_ROOMS[currentIndex].colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-xl border-2 border-white shadow-md"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Full Size Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Full size"
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-xl hover:bg-white/30 transition-all duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;