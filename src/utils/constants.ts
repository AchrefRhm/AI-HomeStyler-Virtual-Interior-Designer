import { Room, ColorPalette } from '../types';

export const SAMPLE_ROOMS: Room[] = [
  {
    id: '1',
    name: 'Modern Living Room',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    beforeImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    style: 'Modern Minimalist',
    colors: ['#F8F9FA', '#2C3E50', '#E67E22', '#3498DB']
  },
  {
    id: '2',
    name: 'Cozy Bedroom',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    beforeImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    style: 'Scandinavian',
    colors: ['#FFFFFF', '#F5F5DC', '#8B4513', '#228B22']
  },
  {
    id: '3',
    name: 'Kitchen Design',
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
    beforeImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
    style: 'Contemporary',
    colors: ['#FFFFFF', '#2C3E50', '#C0392B', '#F39C12']
  }
];

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: '1',
    name: 'Ocean Breeze',
    colors: ['#E3F2FD', '#81C784', '#4FC3F7', '#26A69A'],
    style: 'Coastal'
  },
  {
    id: '2',
    name: 'Warm Earth',
    colors: ['#F5E6D3', '#8D6E63', '#FF8A65', '#FFCC02'],
    style: 'Rustic'
  },
  {
    id: '3',
    name: 'Urban Chic',
    colors: ['#F5F5F5', '#37474F', '#FF5722', '#FFC107'],
    style: 'Industrial'
  },
  {
    id: '4',
    name: 'Botanical',
    colors: ['#F1F8E9', '#66BB6A', '#8BC34A', '#4CAF50'],
    style: 'Natural'
  }
];

export const ROOM_STYLES = [
  'Modern Minimalist',
  'Scandinavian',
  'Industrial',
  'Bohemian',
  'Mid-Century Modern',
  'Contemporary',
  'Traditional',
  'Rustic',
  'Art Deco',
  'Mediterranean'
];