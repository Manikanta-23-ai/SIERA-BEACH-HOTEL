export interface RoomType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  bedType: string;
  occupancy: string;
  view: string;
  verifiedFeatures: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'coastal';
  image: string;
  description: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  verified: boolean;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description: string;
  tag: string;
}
