import React, { useState, useCallback } from 'react';
import { Upload as UploadIcon, Camera, Image, Sparkles, Palette, Eye, RotateCcw } from 'lucide-react';
import { UploadedFile, AnalysisResult } from '../types';
import { COLOR_PALETTES, ROOM_STYLES } from '../utils/constants';

const Upload: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('Modern Minimalist');
  const [is3DMode, setIs3DMode] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleFileUpload = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedFile: UploadedFile = {
          file,
          preview: e.target?.result as string,
          id: Date.now().toString()
        };
        setUploadedFile(uploadedFile);
        startAnalysis();
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files[0]) {
      handleFileUpload(files[0]);
    }
  }, [handleFileUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    // Simulate AI analysis
    setTimeout(() => {
      const result: AnalysisResult = {
        roomType: 'Living Room',
        lighting: 'Natural light with warm undertones',
        existingFurniture: ['Sofa', 'Coffee table', 'TV stand', 'Floor lamp'],
        suggestions: {
          furniture: ['Modern accent chair', 'Area rug', 'Wall art', 'Plants'],
          colors: COLOR_PALETTES[0].colors,
          style: selectedStyle
        }
      };
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 3000);
  };

  const rotate3D = () => {
    setRotationAngle(prev => prev + 90);
  };

  return (
    <section id="upload-section" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Upload Your Room
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Drop your room photo below and let our AI work its magic to create your perfect space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Area */}
          <div className="space-y-6">
            <div
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              className={`relative border-3 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
                isDragOver 
                  ? 'border-emerald-500 bg-emerald-50' 
                  : 'border-slate-300 hover:border-emerald-400 bg-white'
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                  <UploadIcon className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Drop your room photo here
                  </h3>
                  <p className="text-slate-600 mb-4">
                    or click to browse your files
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                    <span className="flex items-center">
                      <Camera className="w-4 h-4 mr-1" />
                      JPG, PNG
                    </span>
                    <span className="flex items-center">
                      <Image className="w-4 h-4 mr-1" />
                      Max 10MB
                    </span>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Choose File
                </button>
              </div>
            </div>

            {/* Style Selection */}
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Preferred Style</h4>
              <div className="grid grid-cols-2 gap-3">
                {ROOM_STYLES.slice(0, 6).map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedStyle === style
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview & Analysis Area */}
          <div className="space-y-6">
            {uploadedFile && (
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-slate-800">Your Room</h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIs3DMode(!is3DMode)}
                      className={`p-2 rounded-xl transition-all duration-200 ${
                        is3DMode
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {is3DMode && (
                      <button
                        onClick={rotate3D}
                        className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-200"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={uploadedFile.preview}
                    alt="Uploaded room"
                    className={`w-full h-64 object-cover transition-transform duration-500 ${
                      is3DMode ? 'transform-gpu' : ''
                    }`}
                    style={{
                      transform: is3DMode ? `perspective(1000px) rotateY(${rotationAngle}deg)` : 'none'
                    }}
                  />
                  {is3DMode && (
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      3D Mode
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-emerald-500 mr-3 animate-spin" />
                  <h4 className="text-xl font-bold text-slate-800">AI Analysis in Progress</h4>
                </div>
                <div className="space-y-3">
                  {['Analyzing room layout...', 'Detecting furniture...', 'Generating suggestions...'].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                      <span className="text-slate-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analysis Results */}
            {analysisResult && (
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 text-emerald-500 mr-2" />
                    AI Analysis Complete
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-slate-700 mb-1">Room Type</h5>
                      <p className="text-slate-600">{analysisResult.roomType}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-700 mb-1">Lighting Analysis</h5>
                      <p className="text-slate-600">{analysisResult.lighting}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-700 mb-2">Suggested Style</h5>
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {analysisResult.suggestions.style}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <Palette className="w-6 h-6 text-purple-500 mr-2" />
                    Recommended Colors
                  </h4>
                  <div className="flex space-x-3">
                    {analysisResult.suggestions.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-xl shadow-lg border-2 border-white"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Generate Full Design
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;