export interface Room {
  id: string;
  name: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  style: string;
  colors: string[];
}

export interface UploadedFile {
  file: File;
  preview: string;
  id: string;
}

export interface AnalysisResult {
  roomType: string;
  lighting: string;
  existingFurniture: string[];
  suggestions: {
    furniture: string[];
    colors: string[];
    style: string;
  };
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  style: string;
}